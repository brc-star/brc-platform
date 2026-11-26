#!/usr/bin/env node
/**
 * CI / Build Guardrail: Compliance Claims, Rendered Output, Sitemap & Footer Route Check
 *
 * Fails build if source files or rendered Next.js HTML output contain prohibited claims:
 *   TODO_, filed/published, moat, patented, self-generating, Dr. B. Chauhan,
 *   YOUR-HANDLE, FAME III, or "eliminat..." followed by "risk".
 *
 * Also verifies:
 *   - All sitemap URLs resolve to real Next.js App Router pages & built HTML files (and HTTP 200 when --http=URL is supplied).
 *   - All footer links (including vehicle links) resolve to real routes.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "src", "app");
const NEXT_APP_BUILD_DIR = path.join(ROOT, ".next", "server", "app");

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "dist", "build", "android", "ios"]);
const SKIP_SOURCE_FILES = new Set([
  "package-lock.json",
  "AUDIT_REPORT.md",
  "AUDIT_2.md",
  "FOUNDER_TODO.md",
  "check-claims.js",
]);

const BANNED_RULES = [
  { name: "TODO_", re: /TODO_/g },
  { name: "filed/published", re: /filed\s*\/\s*published/gi },
  { name: "moat", re: /\bmoat\b/gi },
  { name: "patented", re: /\bpatented\b/gi },
  { name: "self-generating", re: /self-generating/gi },
  { name: "Dr. B. Chauhan", re: /Dr\.?\s*B\.?\s*Chauhan/gi },
  { name: "YOUR-HANDLE", re: /YOUR-HANDLE/g },
  { name: "FAME III", re: /\bFAME\s*III\b/gi },
  { name: "eliminat*risk", re: /eliminat[^.\n<>]{0,160}?\brisk\w*/gi },
];

function walkFiles(dir, exts, results = []) {
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, exts, results);
    } else if (exts.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function scanTextForViolations(fileLabel, content) {
  const findings = [];
  for (const rule of BANNED_RULES) {
    rule.re.lastIndex = 0;
    let m;
    while ((m = rule.re.exec(content)) !== null) {
      const upToMatch = content.slice(0, m.index);
      const lineNum = upToMatch.split(/\r?\n/).length;
      const lineText = content.split(/\r?\n/)[lineNum - 1] || "";
      findings.push({
        file: fileLabel,
        line: lineNum,
        rule: rule.name,
        match: m[0].slice(0, 60),
        snippet: lineText.trim().slice(0, 140),
      });
    }
  }
  return findings;
}

function discoverAppRoutes(dir, segments = [], discovered = []) {
  if (!fs.existsSync(dir)) return discovered;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "api") continue;
      const nextSegs =
        entry.name.startsWith("(") && entry.name.endsWith(")")
          ? segments
          : [...segments, entry.name];
      discoverAppRoutes(full, nextSegs, discovered);
    } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      discovered.push("/" + segments.join("/"));
    }
  }
  return discovered;
}

function routeMatchesDiscovered(targetPath, routes) {
  const clean = targetPath.split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";
  if (routes.includes(clean)) return true;
  const targetSegs = clean.split("/").filter(Boolean);
  for (const r of routes) {
    const rSegs = r.split("/").filter(Boolean);
    if (rSegs.length !== targetSegs.length) continue;
    let ok = true;
    for (let i = 0; i < rSegs.length; i++) {
      if (rSegs[i].startsWith("[") && rSegs[i].endsWith("]")) continue;
      if (rSegs[i] !== targetSegs[i]) {
        ok = false;
        break;
      }
    }
    if (ok) return true;
  }
  return false;
}

function extractSitemapRoutes() {
  const sitemapFile = path.join(APP_DIR, "sitemap.ts");
  if (!fs.existsSync(sitemapFile)) return [];
  const src = fs.readFileSync(sitemapFile, "utf8");
  const arrayMatch = src.match(/const\s+routes\s*=\s*\[([\s\S]*?)\];/);
  if (!arrayMatch) return [];
  const routes = [];
  const itemRe = /["'`]([^"'`]*?)["'`]/g;
  let m;
  while ((m = itemRe.exec(arrayMatch[1])) !== null) {
    routes.push(m[1] === "" ? "/" : m[1]);
  }
  return routes;
}

function extractFooterVehicleLinks() {
  const footerFile = path.join(ROOT, "src", "components", "Footer.tsx");
  if (!fs.existsSync(footerFile)) return { allLinks: [], vehicleLinks: [] };
  const src = fs.readFileSync(footerFile, "utf8");
  const hrefRe = /href=["'](\/[^"']*?)["']/g;
  const allLinks = [];
  let m;
  while ((m = hrefRe.exec(src)) !== null) {
    allLinks.push(m[1]);
  }
  const vehicleLinks = allLinks.filter((href) => href.startsWith("/vehicles") || href === "/pre-book");
  return {
    allLinks: Array.from(new Set(allLinks)),
    vehicleLinks: Array.from(new Set(vehicleLinks)),
  };
}

function builtHtmlExists(routePath) {
  if (!fs.existsSync(NEXT_APP_BUILD_DIR)) return true; // skipped if running before build
  const clean = routePath.replace(/\/+$/, "") || "/";
  if (clean === "/") {
    return fs.existsSync(path.join(NEXT_APP_BUILD_DIR, "index.html"));
  }
  const rel = clean.slice(1);
  return (
    fs.existsSync(path.join(NEXT_APP_BUILD_DIR, `${rel}.html`)) ||
    fs.existsSync(path.join(NEXT_APP_BUILD_DIR, rel, "index.html"))
  );
}

async function main() {
  let errors = 0;

  // 1. Scan source & public files
  const sourceTargets = [
    ...walkFiles(path.join(ROOT, "src"), /\.(ts|tsx|js|jsx|css)$/i),
    ...walkFiles(path.join(ROOT, "public"), /\.(txt|md|json)$/i),
    ...walkFiles(ROOT, /\.(md|json)$/i).filter((f) => path.dirname(f) === ROOT),
  ];

  const uniqueSourceTargets = Array.from(new Set(sourceTargets)).filter(
    (f) => !SKIP_SOURCE_FILES.has(path.basename(f))
  );

  const sourceViolations = [];
  for (const file of uniqueSourceTargets) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    const content = fs.readFileSync(file, "utf8");
    sourceViolations.push(...scanTextForViolations(rel, content));
  }

  // 2. Scan rendered HTML files under .next/server/app if build output exists
  const htmlTargets = walkFiles(NEXT_APP_BUILD_DIR, /\.html$/i);
  const renderedViolations = [];
  for (const file of htmlTargets) {
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    const rawHtml = fs.readFileSync(file, "utf8");
    // Strip HTML tags lightly while preserving text nodes & meta attribute content
    renderedViolations.push(...scanTextForViolations(rel, rawHtml));
  }

  console.log(
    `[check-claims] Scanned ${uniqueSourceTargets.length} source files and ${htmlTargets.length} rendered HTML files.`
  );

  const allViolations = [...sourceViolations, ...renderedViolations];
  if (allViolations.length > 0) {
    errors += allViolations.length;
    console.error(`[check-claims] FAIL: Found ${allViolations.length} prohibited claim violation(s):`);
    for (const v of allViolations) {
      console.error(`  - [${v.rule}] ${v.file}:${v.line} -> "${v.match}" | ${v.snippet}`);
    }
  } else {
    console.log("[check-claims] OK: 0 banned claim violations across source and rendered HTML.");
  }

  // 3. Verify sitemap & footer routes against Next.js App Router & built HTML
  const discoveredRoutes = discoverAppRoutes(APP_DIR);
  const sitemapRoutes = extractSitemapRoutes();
  const { allLinks: footerLinks, vehicleLinks: footerVehicleLinks } = extractFooterVehicleLinks();

  for (const r of sitemapRoutes) {
    if (!routeMatchesDiscovered(r, discoveredRoutes)) {
      errors++;
      console.error(`[check-claims] FAIL: Sitemap route "${r}" does not match any App Router page.`);
    } else if (htmlTargets.length > 0 && !builtHtmlExists(r)) {
      errors++;
      console.error(`[check-claims] FAIL: Sitemap route "${r}" did not produce a prerendered HTML output.`);
    }
  }

  for (const link of footerLinks) {
    if (!routeMatchesDiscovered(link, discoveredRoutes)) {
      errors++;
      console.error(`[check-claims] FAIL: Footer link "${link}" does not match any App Router page.`);
    }
  }

  console.log(
    `[check-claims] Verified ${sitemapRoutes.length} sitemap routes and ${footerLinks.length} footer links (${footerVehicleLinks.length} vehicle/pre-book links).`
  );

  // 4. Optional live HTTP 200 verification when --http=<baseUrl> is passed
  const httpArg = process.argv.find((a) => a.startsWith("--http="));
  if (httpArg) {
    const baseUrl = httpArg.slice("--http=".length).replace(/\/+$/, "");
    const urlsToCheck = Array.from(new Set([...sitemapRoutes, ...footerLinks]));
    console.log(`[check-claims] Checking HTTP 200 across ${urlsToCheck.length} live routes at ${baseUrl}...`);
    for (const r of urlsToCheck) {
      const targetUrl = `${baseUrl}${r === "/" ? "" : r}`;
      const res = await fetch(targetUrl);
      if (res.status !== 200) {
        errors++;
        console.error(`[check-claims] FAIL HTTP ${res.status}: ${targetUrl}`);
      } else {
        const body = await res.text();
        const bodyViolations = scanTextForViolations(`HTTP:${r}`, body);
        if (bodyViolations.length > 0) {
          errors += bodyViolations.length;
          for (const v of bodyViolations) {
            console.error(`[check-claims] FAIL [${v.rule}] in live HTTP response for ${r}: "${v.match}"`);
          }
        }
      }
    }
    if (errors === 0) {
      console.log(`[check-claims] OK: All ${urlsToCheck.length} sitemap & footer routes returned HTTP 200 with 0 violations.`);
    }
  }

  if (errors > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("[check-claims] Error:", err);
  process.exit(1);
});
