import fs from "fs";
import path from "path";
import sharp from "sharp";

const sourcePath = "C:/Users/BishnaChauhan/.gemini/antigravity/brain/a3ea3317-cf9a-4d5c-90a2-c5a9ee4a6895/brc_star_icon.png";
const projectRoot = "d:/AI App/BRC-Web/brc-platform-main";
const publicDir = path.join(projectRoot, "public");
const appDir = path.join(projectRoot, "src/app");

async function generate() {
  console.log("Generating BRC STAR Favicons and App Icons...");

  const img = sharp(sourcePath);

  // 1. icon.png (32x32)
  const icon32 = await img.clone().resize(32, 32, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "icon.png"), icon32);
  fs.writeFileSync(path.join(appDir, "icon.png"), icon32);
  console.log("Generated icon.png (32x32)");

  // 2. favicon.ico (32x32 PNG wrapped or standard ICO format)
  // Modern browsers and Next.js accept 32x32 PNG with .ico extension, or standard ICO
  // To create a valid ICO container with PNG payload:
  // An ICO header (6 bytes) + 1 directory entry (16 bytes) + PNG data
  const icoHeader = Buffer.from([
    0, 0,             // Reserved
    1, 0,             // Type: 1 = ICO
    1, 0,             // Number of images: 1
    32,               // Width: 32px
    32,               // Height: 32px
    0,                // Color palette: 0
    0,                // Reserved
    1, 0,             // Color planes: 1
    32, 0,            // Bits per pixel: 32
    ...int32ToBytes(icon32.length), // Size of image data
    ...int32ToBytes(22)             // Offset of image data (6 + 16 = 22)
  ]);
  const icoBuffer = Buffer.concat([icoHeader, icon32]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  console.log("Generated favicon.ico");

  // 3. apple-icon.png (180x180)
  const apple180 = await img.clone().resize(180, 180, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "apple-icon.png"), apple180);
  fs.writeFileSync(path.join(appDir, "apple-icon.png"), apple180);
  console.log("Generated apple-icon.png (180x180)");

  // 4. icon-192.png (192x192)
  const icon192 = await img.clone().resize(192, 192, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "icon-192.png"), icon192);
  console.log("Generated icon-192.png (192x192)");

  // 5. icon-512.png (512x512)
  const icon512 = await img.clone().resize(512, 512, { kernel: "lanczos3" }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "icon-512.png"), icon512);
  console.log("Generated icon-512.png (512x512)");

  console.log("All icons successfully generated!");
}

function int32ToBytes(num) {
  return [num & 0xff, (num >> 8) & 0xff, (num >> 16) & 0xff, (num >> 24) & 0xff];
}

generate().catch((err) => {
  console.error("Error generating icons:", err);
  process.exit(1);
});
