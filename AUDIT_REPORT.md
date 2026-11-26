# Comprehensive Regulatory, IP & Claims Audit Report
**Entity:** BRC STAR (OPC) PRIVATE LIMITED (CIN: U34100RJ2019OPC066948)
**Date:** November 2026
**Branch:** `fix/claims-compliance`
**Auditor:** Senior Front-End & Regulatory/IP-Compliance Copy Engineer

---

## Executive Summary

An exhaustive repository scan was executed across **117 project files** (components, app pages, metadata, data modules, public configuration, and schema).
A total of **246 target claim occurrences** were identified and audited against the verified Ground Truth:

| Classification Category | Action Required | Count |
| :--- | :--- | :--- |
| **Category A** | **REMOVE** (Unverifiable claims, competitor patent comparisons, non-existent foreign PCT rights, unconfirmed schemes, unpublished patent claims) | 52 |
| **Category B** | **REWRITE & EVIDENCE-LABEL** (Convert aggressive/ungranted claims to patent-pending, TRL 3/4 simulation targets, physics-defensible energy recovery wording, and centralize in `lib/claims.ts`) | 179 |
| **Category C** | **KEEP** (Statutory verified corporate facts: CIN, DPIIT recognition, iStart incubation, statutory 100% refundable token policies, DPDPA 2023 compliance) | 15 |

---

## Ground Truth Alignment Rules

1. **Patent Status:** Indian Patent Application No. 202511050655 is strictly **APPLICATION (patent-pending, filed with the Indian Patent Office)**. It is **NOT** granted and **NOT** published. Words such as *"patented"*, *"registered patent"*, *"patent fortress"*, *"published"*, *"filed/published"*, *"unassailable"*, *"impenetrable"* are prohibited.
2. **International (PCT) Claims:** The 12-month priority window from May 2025 closed around May 2026. Without verified PCT application numbers, all international priority claims (*North America, Europe, East Asia, ASEAN*) must be removed.
3. **TRL & Engineering Validation:** Technology readiness is strictly **TRL 3/4 (laboratory bench stage)**. Only the Alternator Control Module (ACM) test rig has bench data. Bus switching is simulation. Vehicle platforms are CAD/CFD concepts. No road tests, homologation, or AIS/ARAI certifications exist.
4. **Energy Conservation Physics:** Remove any misleading "self-generating" or "free energy" language. Auxiliary PMG alternators harvest kinetic energy under drag; benefits are charge acceptance, thermal bus separation, and glide/deceleration recoup.
5. **Entity & Identity:** Founder is **Bishna Ram** (Founder & CEO). The unverified title *"Dr. B. Chauhan"* and broken placeholder handles (*YOUR-HANDLE*) are purged.

---

## Detailed File-by-File Audit Breakdown

### `ARCHITECTURE.md` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 54 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `7. **R&D & Patent Registry**: IPO/PCT patent claims, dynamometer simulation logs, CFD meshes.` |
| 67 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `* **Phase 3 (Manufacturing Scale)**: Full ERP rollout, supplier portal, assembly line barcode/R...` |

### `package-lock.json` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 19 | `12.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"framer-motion": "^12.4.7",` |
| 2887 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"tsx": "^4.8.1",` |

### `package.json` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 24 | `12.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"framer-motion": "^12.4.7",` |

### `public\llms.txt` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 9 | `Dr. B. Chauhan` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `- **Founder & Managing Director**: Dr. B. Chauhan (Bishna Chauhan)` |
| 17 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `- **International Priority**: [PCT details pending]` |
| 24 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `4. **Safety & Standards Alignment**: Designed around Indian AIS-038 Rev 2 and AIS-156 traction ...` |
| 27 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `- **StarCraft GT**: Performance electric sedan. Indicative base price ₹16,50,000. Simulated ran...` |
| 27 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `- **StarCraft GT**: Performance electric sedan. Indicative base price ₹16,50,000. Simulated ran...` |
| 35 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `- **Compliance**: Fully compliant with Indian Consumer Protection Act 2019 and Digital Personal...` |

### `README.md` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 27 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `│   └── Patent & IP (/technology/patent-ip) — Patent claims registry, defensibility moat, certi...` |
| 27 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `│   └── Patent & IP (/technology/patent-ip) — Patent claims registry, defensibility moat, certi...` |
| 36 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `│   ├── Sustainability (/innovation/sustainability) — Net-zero lifecycle, battery circularity, ...` |

### `ROADMAP.md` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 9 | `defensible` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `- [x] TCO/ROI Economic Calculator & Defensible Patent Registry` |
| 31 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `- [ ] ISO 9001 / ISO 26262 functional safety audit compliance loggers` |

### `SECURITY.md` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 12 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `\| **Patent Information** \| Filed patent numbers, title, public abstract \| Full claim dossier...` |
| 12 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `\| **Patent Information** \| Filed patent numbers, title, public abstract \| Full claim dossier...` |
| 13 | `audited` | **A** | REMOVE / REWRITE: Financial model / unit economics are unaudited. Remove claims of audited financial model. | `\| **Financials** \| Indicative starting pricing, market TAM ($50B) \| Audited financial models...` |

### `src\app\about\page.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 112 | `Dr. B. Chauhan` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `Bishna Chauhan (Dr. B. Chauhan)` |

### `src\app\api\v1\auth\signin\route.ts` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 13 | `Dr. B. Chauhan` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `"founder@brcstar.in": { name: "Dr. B. Chauhan", role: "ADMIN", org: "BRC STAR Executive Board" ...` |
| 28 | `` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `let userName = email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase...` |

### `src\app\api\v1\telemetry\ingest\route.ts` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 40 | `32.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `batteryCellMaxTempC: 32.8,` |
| 102 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `acmEfficiencyPct: typeof body.acmEfficiencyPct === "number" ? body.acmEfficiencyPct : 98.4,` |

### `src\app\app\page.tsx` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 137 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `Equivalent to ₹11,850 in grid electricity saved with zero degradation.` |
| 204 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Schedule Certified High-Voltage &amp; ACM Maintenance` |
| 213 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `A certified High-Voltage BRC technician will service your vehicle at Bengaluru Flagship Hub.` |

### `src\app\docs\page.tsx` (8 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 26 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `fileSize: "4.8 MB PDF",` |
| 130 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `• 98.4% Peak Rectification Efficiency (Lab)<br />` |
| 139 | `defensible` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `<span>3. Defensible IP Foundation</span>` |
| 142 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Patent Application &amp; Prior Art` |
| 145 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `Filed with the Indian Patent Office under Application No. 202511050655 (Published &amp; under e...` |
| 145 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Filed with the Indian Patent Office under Application No. 202511050655 (Published &amp; under e...` |
| 149 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `• Status: Published &amp; In Formal Examination` |
| 164 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `<h2 className="text-xl font-bold text-white font-mono">Published Whitepapers &amp; Specificatio...` |

### `src\app\globals.css` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 599 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `/* Commercial Defensibility Moat Panel in Light Mode */` |

### `src\app\innovation\news\page.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 26 | `32.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `summary: "Empirical bench telemetry indicates a 32.8% simulated reduction in net battery draw a...` |
| 33 | `publication` | **C** | KEEP: Article/news metadata publication timestamp, not patent publication. | `summary: "Publication of Indian Patent Application No. 202511050655 marks formal IPO examinatio...` |

### `src\app\innovation\page.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 33 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `badge: "Net-Zero Lifecycle Target",` |

### `src\app\innovation\sustainability\page.tsx` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 7 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `description: "Carbon lifecycle reduction targets, circular second-life battery stewardship, sus...` |
| 35 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `<span>CIRCULAR BATTERY LIFECYCLE &amp; NET-ZERO IMPACT</span>` |
| 41 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `Sustainability at BRC STAR goes beyond zero tailpipe exhaust. By recouping kinetic energy, redu...` |
| 41 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Sustainability at BRC STAR goes beyond zero tailpipe exhaust. By recouping kinetic energy, redu...` |
| 65 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `2. Dual-Pack 4,500 Cycle Longevity` |
| 68 | `eliminat` | **B** | REWRITE: Cannot claim to "eliminate" battery thermal runaway or parasitic drag. Rephrase to "designed to reduce (target)". | `Dividing charge/discharge fatigue across Pack A and Pack B triples usable battery lifespan (&gt...` |

### `src\app\invest\page.tsx` (5 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 51 | `28.5` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<div className="text-2xl font-bold text-emerald-400 mt-1">28.5%</div>` |
| 66 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Defensible IP &amp; High Moat` |
| 66 | `defensible` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Defensible IP &amp; High Moat` |
| 69 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `Proprietary dual-pack closed-loop kinetic harvesting filed under Indian Patent Application No. ...` |
| 89 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Fleet operators face high operating fuel expenses. StarFleet commercial delivery vans are desig...` |

### `src\app\invest\partners\page.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 10 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `description: "Secure exclusive territory rights for BRC STAR Flagship Experience Centers and ce...` |
| 44 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Secure exclusive territory rights for BRC STAR Flagship Experience Centers and certified Self-V...` |

### `src\app\invest\pitch-deck\page.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 36 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `<span>CONFIDENTIAL INVESTOR CLEARANCE</span>` |

### `src\app\layout.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 39 | `Dr. B. Chauhan` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `creator: "Dr. B. Chauhan",` |
| 168 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `price: "2450000",` |

### `src\app\page.tsx` (13 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 99 | `eliminat` | **B** | REWRITE: Cannot claim to "eliminate" battery thermal runaway or parasitic drag. Rephrase to "designed to reduce (target)". | `Dynamically isolates discharge current and charge surges, eliminating battery thermal runaway r...` |
| 99 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Dynamically isolates discharge current and charge surges, eliminating battery thermal runaway r...` |
| 118 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Patent-pending Alternator Control Module converts variable rotor RPM into ultra-stable 400V DC ...` |
| 134 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Defensible Patent Moat` |
| 134 | `defensible` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Defensible Patent Moat` |
| 137 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `Indian Patent Application No. 202511050655 filed/published with the Indian Patent Office. PCT d...` |
| 137 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Indian Patent Application No. 202511050655 filed/published with the Indian Patent Office. PCT d...` |
| 137 | `filed/published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Indian Patent Application No. 202511050655 filed/published with the Indian Patent Office. PCT d...` |
| 265 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `*Visuals and representations labeled as &ldquo;Rendered concept&rdquo; represent CAD models and...` |
| 304 | `28.5` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<div className="text-lg font-bold text-emerald-400 mt-0.5">28.5%</div>` |
| 333 | `32.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<strong className="text-white">TRL 3/4 Dynamometer Validated:</strong> 32.8% auxiliary energy g...` |
| 345 | `18+` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<strong className="text-white">Dealer Network Interest:</strong> 18+ franchise expressions of i...` |
| 359 | `revolution` | **B** | REWRITE: Replace hype marketing word "revolution" with precise engineering language. | `Join the Self-Volt Revolution.` |

### `src\app\partner\page.tsx` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 61 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `minArea: "4,500 – 6,000 sq.ft.",` |
| 91 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `desc: "Dedicated staging center supporting StarFleet cargo haulers, transit fleet charging, and...` |
| 222 | `audited` | **A** | REMOVE / REWRITE: Financial model / unit economics are unaudited. Remove claims of audited financial model. | `<span className="text-[9px] text-slate-500 mt-0.5 block">IRR: 34.2% (Audited Model)</span>` |

### `src\app\pre-book\page.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 55 | `guarantee` | **B** | REWRITE: Performance or engineering guarantees must be converted to design targets. | `<span>TRANSPARENT RESERVATION TERMS &amp; REFUND GUARANTEE</span>` |

### `src\app\privacy\page.tsx` (4 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 8 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `"Privacy Policy for BRC STAR (OPC) PRIVATE LIMITED. Indian DPDPA 2023 compliance, pre-booking d...` |
| 14 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `description: "Privacy Policy and Indian DPDPA 2023 compliance for BRC STAR.",` |
| 202 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `<li><strong>For the performance of a contract:</strong> the development, compliance and underta...` |
| 272 | `guarantee` | **B** | REWRITE: Performance or engineering guarantees must be converted to design targets. | `<strong>Security:</strong> The security of Your Personal Data is important to Us, but no method...` |

### `src\app\signin\page.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 42 | `audited` | **A** | REMOVE / REWRITE: Financial model / unit economics are unaudited. Remove claims of audited financial model. | `subhead: "Access Series-A cap table, patent claims, and audited financials",` |
| 66 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `subhead: "Executive board, fleet logistics triage, and compliance administration",` |

### `src\app\technology\page.tsx` (5 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 38 | `eliminat` | **B** | REWRITE: Cannot claim to "eliminate" battery thermal runaway or parasitic drag. Rephrase to "designed to reduce (target)". | `desc: "Our dual-pack system decouples discharge load from simultaneous kinetic charging, elimin...` |
| 38 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `desc: "Our dual-pack system decouples discharge load from simultaneous kinetic charging, elimin...` |
| 47 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `specs: ["Kinetic Glide Recoup", "98.4% ACM Inverter Efficiency (Lab)", "Multi-Stage Retarder"],` |
| 54 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `desc: "Intellectual property foundation centered on Indian Patent Application No. 202511050655 ...` |
| 55 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `specs: ["Indian Patent App No. 202511050655", "[PCT details pending]", "22 Utility Claims"],` |

### `src\app\technology\patent-ip\page.tsx` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 37 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `<span>INDIAN PATENT APPLICATION NO. 202511050655 • [PCT DETAILS PENDING]</span>` |
| 63 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `<h3 className="text-base font-bold text-slate-900 dark:text-white">International PCT Framework<...` |
| 65 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `International patent application documentation structured under the Patent Cooperation Treaty (...` |
| 73 | `trade secret` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `Embedded state-of-health estimation algorithms and sub-millisecond cell balancing logic are mai...` |
| 84 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Authorized institutional investors and strategic OEM partners can access complete patent specif...` |
| 84 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Authorized institutional investors and strategic OEM partners can access complete patent specif...` |

### `src\app\technology\self-volt\page.tsx` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 86 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<span>98.4% Efficiency</span>` |
| 113 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Controls torque handoff and parallel high-load discharge. When maximum acceleration is demanded...` |
| 134 | `eliminat` | **B** | REWRITE: Cannot claim to "eliminate" battery thermal runaway or parasitic drag. Rephrase to "designed to reduce (target)". | `Custom neodymium rare-earth magnetic rotor coupled directly to driveline inertia. Proprietary m...` |
| 137 | `74%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<div>• 74% reduction in parasitic mechanical drag</div>` |
| 158 | `-8%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">Minimized (-8%) due to PMG gli...` |
| 163 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">4,500+ cycles (Dual-Pack load ...` |

### `src\app\terms\page.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 111 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `Your access to and use of the Service is conditioned on Your acceptance of and compliance with ...` |
| 202 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `For European Union (EU) Users &amp; United States Legal Compliance` |

### `src\app\vehicles\bus\page.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 45 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `Engineered for high passenger density, zero tailpipe emissions, and continuous 18-hour daily mu...` |
| 97 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `<div className="text-xs font-mono text-slate-400 uppercase">Compliance &amp; Systems:</div>` |

### `src\app\vehicles\commercial\page.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 45 | `52%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `From urban last-mile delivery platforms to heavy-duty multi-axle intercity cargo haulers and cr...` |
| 115 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `: "₹4.8 Lakhs"}` |

### `src\app\vehicles\page.tsx` (5 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 66 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `Designed for extreme highway range, 0-100 in 3.2s acceleration, and zero range anxiety with dua...` |
| 66 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Designed for extreme highway range, 0-100 in 3.2s acceleration, and zero range anxiety with dua...` |
| 70 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<div>• Up to 850 km Self-Volt Range</div>` |
| 92 | `44%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `Engineered for enterprise logistics, cold chain, and multi-axle freight haulage. Up to 44% lowe...` |
| 95 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<div>• Starting from {formatInr(2450000)}</div>` |

### `src\components\AccessRequestModal.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 117 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `Your request has been routed to the BRC STAR Compliance &amp; Enterprise Triage Queue.` |

### `src\components\DealerRoiCalculator.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 37 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Partner with BRC STAR to establish exclusive regional experience hubs and certified Self-Volt s...` |

### `src\components\DealershipApplicationForm.tsx` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 49 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `commercialLandSqFt: 4500,` |
| 443 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `placeholder="e.g. 4500"` |
| 570 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{/* Submit Action & Compliance Footer */}` |

### `src\components\Footer.tsx` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 40 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Building a new energy architecture for electric mobility—engineered in India for a world in mot...` |
| 40 | `filed/published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Building a new energy architecture for electric mobility—engineered in India for a world in mot...` |
| 226 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `<strong>BRC STAR (OPC) PRIVATE LIMITED</strong> (CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB740...` |
| 226 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `<strong>BRC STAR (OPC) PRIVATE LIMITED</strong> (CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB740...` |
| 226 | `filed/published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `<strong>BRC STAR (OPC) PRIVATE LIMITED</strong> (CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB740...` |
| 256 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `Safety &amp; Compliance` |

### `src\components\FounderSection.tsx` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 43 | `YOUR-HANDLE` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `linkedin: "https://www.linkedin.com/in/YOUR-HANDLE", // Replace with your LinkedIn profile URL` |

### `src\components\HeroSection.tsx` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 105 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `850 km` |
| 117 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `3.2 s` |
| 129 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `+42 kW` |

### `src\components\InvestorDataRoomGate.tsx` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 54 | `38-page` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `type: "PDF Presentation (38 Pages)",` |
| 61 | `audited` | **A** | REMOVE / REWRITE: Financial model / unit economics are unaudited. Remove claims of audited financial model. | `type: "Audited Financial Forecast (XLSX/PDF)",` |
| 64 | `audited` | **A** | REMOVE / REWRITE: Financial model / unit economics are unaudited. Remove claims of audited financial model. | `watermark: "CONFIDENTIAL - AUDITED PROJECTIONS",` |
| 68 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `type: "Legal IP Dossier & IPO Filing Certified Copy",` |
| 70 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `size: "14.8 MB",` |
| 132 | `38-page` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `<span>Complete 38-Page Master Pitch Deck with $50B TAM &amp; Roadmap</span>` |

### `src\components\Navbar.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 109 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `desc: "Indian Patent Application No. 202511050655 & IP moat",` |
| 157 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `desc: "Net-zero lifecycle, green supply chain & battery circularity",` |

### `src\components\PatentShowcase.tsx` (8 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 52 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `Indian Patent Application No. <strong className="font-mono text-cyan-600 dark:text-cyan-400">{P...` |
| 52 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Indian Patent Application No. <strong className="font-mono text-cyan-600 dark:text-cyan-400">{P...` |
| 52 | `filed/published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `Indian Patent Application No. <strong className="font-mono text-cyan-600 dark:text-cyan-400">{P...` |
| 89 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `AIS-156 Safety` |
| 168 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `{/* Prior Art Distinction */}` |
| 249 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `<span>Commercial Defensibility Moat</span>` |
| 258 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `<span>IPO / PCT Jurisdiction</span>` |
| 264 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{/* Tab 3: Automotive Regulatory & AIS Homologation Matrix */}` |

### `src\components\PitchDeckModal.tsx` (8 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 72 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `setSessionToken(data.sessionKey \|\| 'BRC-CLEARANCE-${Math.random().toString(36).substring(2, 9...` |
| 75 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `throw new Error(data.message \|\| "Failed to process security clearance.");` |
| 78 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `// Local fallback clearance token for resilient presentation` |
| 79 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `setSessionToken('BRC-CLEARANCE-${Math.random().toString(36).substring(2, 9).toUpperCase()}');` |
| 108 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `<h3 className="text-xl font-bold text-white font-mono">Confidential Clearance Granted</h3>` |
| 110 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Clearance Session: <span className="text-cyan-300 font-mono font-bold">{sessionToken}</span>.` |
| 130 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `Institutional Pitch Deck Clearance` |
| 230 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `<span>Request Digital Clearance</span>` |

### `src\components\PreBookClient.tsx` (4 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 300 | `guarantee` | **C** | KEEP: Statutory 100% refund policy / token guarantee term. | `{/* Legal Escrow Guarantee Clause */}` |
| 304 | `guarantee` | **C** | KEEP: Statutory 100% refund policy / token guarantee term. | `<strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Statutory RBI Escrow Guaran...` |
| 569 | `zero ` | **C** | KEEP: Customer waitlist / refund policy term. | `<span>Statutory 100% Refund Policy • Zero Obligation Waitlist</span>` |
| 734 | `guarantee` | **C** | KEEP: Statutory 100% refund policy / token guarantee term. | `{/* Escrow Guarantee Disclaimer */}` |

### `src\components\PreBookingDrawer.tsx` (3 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 256 | `guarantee` | **B** | REWRITE: Performance or engineering guarantees must be converted to design targets. | `{/* Guarantees & Compliance */}` |
| 256 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{/* Guarantees & Compliance */}` |
| 273 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `Processed in compliance with India DPDPA 2023. {COMMON_DISCLAIMERS.homologationNotice}.` |

### `src\components\PreBookSuccessClient.tsx` (4 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 107 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `{/* Refundable Token Terms & DPDPA 2023 Compliance Note */}` |
| 117 | `zero ` | **C** | KEEP: Customer waitlist / refund policy term. | `<strong>7 business days</strong> with zero cancellation fees, subject to ARAI / ICAT homologati...` |
| 124 | `compliance` | **C** | KEEP: Statutory legal compliance (DPDPA 2023, CIN, GSTIN). | `<span>DPDPA 2023 Data Compliance Note</span>` |
| 127 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `In strict compliance with the{" "}` |

### `src\components\SelfVoltVisualizer.tsx` (7 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 11 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `const [acmEfficiency, setAcmEfficiency] = useState(98.4);` |
| 32 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `}, 4500);` |
| 44 | `12.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `setHarvestKw(12.4);` |
| 49 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `setHarvestKw(64.8);` |
| 55 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `setAcmEfficiency(98.4);` |
| 71 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `desc: "Bidirectional Drive Assist (BDA) couples both Pack A and Pack B in sub-millisecond paral...` |
| 78 | `eliminat` | **B** | REWRITE: Cannot claim to "eliminate" battery thermal runaway or parasitic drag. Rephrase to "designed to reduce (target)". | `desc: "During deceleration, electromagnetic retarder and dual axle harvesters surge up to 65+ k...` |

### `src\components\Vehicle3DDigitalTwin.tsx` (6 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 76 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `priceOffset: 45000,` |
| 108 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `spec: "+42 kW Peak Harvest • 98.4% Inverter Yield",` |
| 108 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `spec: "+42 kW Peak Harvest • 98.4% Inverter Yield",` |
| 507 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `+42 kW ACM Continuous Recoup` |
| 521 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{selectedTrim === "performance" ? "2.9s" : (currentVehicle.acceleration.match(/\d+(\.\d+)?s/)?....` |
| 664 | `FAME` | **A** | REMOVE: FAME III scheme/subsidy not confirmed for passenger EV prototypes. Replace with neutral statement. | `Ex-Showroom + Indian FAME III Green Subsidy Applicable` |

### `src\components\VehiclesCTA.tsx` (2 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 16 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `{/* Badge: ZERO EMISSION ECOSYSTEM */}` |
| 19 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `<span>ZERO EMISSION ECOSYSTEM</span>` |

### `src\components\ViraChatbot.tsx` (7 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 53 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `{ label: "🔬 Novelty vs Tesla & Toyota", query: "What specific novel topology distinguishes Cla...` |
| 53 | `Tesla` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `{ label: "🔬 Novelty vs Tesla & Toyota", query: "What specific novel topology distinguishes Cla...` |
| 53 | `Toyota` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `{ label: "🔬 Novelty vs Tesla & Toyota", query: "What specific novel topology distinguishes Cla...` |
| 54 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "⚡ ACM +42 kW Inverter Boost", query: "How does the Alternator Control Module (ACM) ac...` |
| 54 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "⚡ ACM +42 kW Inverter Boost", query: "How does the Alternator Control Module (ACM) ac...` |
| 55 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "🛡️ AIS-156 & Immersion Safety", query: "How does the dual-pack dielectric immersion ...` |
| 464 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `? "Ask about Claim 1, ACM inverter, AIS-156 safety..."` |

### `src\data\vehicles.ts` (24 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 102 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Engineered for uncompromising high-speed grand touring. Featuring BRC STAR's Dual-Pack Kinetic...` |
| 107 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `acceleration: "0-100 km/h in 3.2s",` |
| 124 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Alternator Control Module (ACM) with 98.4% Peak Inverter Efficiency",` |
| 139 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Acceleration", value: "0–100 km/h in 3.2s" },` |
| 140 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Self-Volt Range", value: "Up to 850 km" },` |
| 141 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Kinetic Harvest", value: "+42 kW Peak Recoup" },` |
| 148 | `32.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Continuous Harvesting", value: "Up to 32.8% in-motion kinetic recoup (TRL 3/4)", cate...` |
| 183 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `"High-Ground Clearance Rugged Sealed Battery Pack",` |
| 220 | `38%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Engineered specifically for fleet operators, e-commerce networks, and cold-chain supply chains...` |
| 222 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `basePriceInr: 2450000, // Standardized: ₹24,50,000` |
| 257 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Operating Cost", value: "₹4.8L/yr Fuel Savings vs Diesel" },` |
| 265 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Fleet TCO Savings", value: "₹4.8 Lakhs/year vs ICE Diesel Van", category: "Economics"...` |
| 276 | `38%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Engineered specifically for fleet operators, e-commerce networks, and cold-chain supply chains...` |
| 278 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `basePriceInr: 2450000,` |
| 313 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Operating Cost", value: "₹4.8L/yr Fuel Savings vs Diesel" },` |
| 321 | `₹4.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `{ label: "Fleet TCO Savings", value: "₹4.8 Lakhs/year vs ICE Diesel Van", category: "Economics"...` |
| 332 | `44%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Built for high-tonnage regional freight and intercity logistics. Equipped with high-torque dua...` |
| 388 | `52%` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Built for cross-country heavy cargo corridors and high-payload enterprise freight. Powered by ...` |
| 481 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "Compliance", value: "AIS 052 / AIS 153 / UN ECE R100" },` |
| 481 | `UN ECE` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "Compliance", value: "AIS 052 / AIS 153 / UN ECE R100" },` |
| 481 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "Compliance", value: "AIS 052 / AIS 153 / UN ECE R100" },` |
| 488 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "Safety Compliance", value: "AIS 052 / AIS 153 / UN ECE R100 Rev.3", category: "Compli...` |
| 488 | `UN ECE` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "Safety Compliance", value: "AIS 052 / AIS 153 / UN ECE R100 Rev.3", category: "Compli...` |
| 488 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `{ label: "Safety Compliance", value: "AIS 052 / AIS 153 / UN ECE R100 Rev.3", category: "Compli...` |

### `src\lib\data.ts` (11 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 12 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `status: "Indian Patent Application No. 202511050655, Filed/Published with IPO",` |
| 12 | `filed/published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `status: "Indian Patent Application No. 202511050655, Filed/Published with IPO",` |
| 19 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `refNumber: "[PCT details pending]",` |
| 22 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `status: "Provisional Application Filed • [PCT details pending]",` |
| 43 | `32.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `energyEfficiencyGainPct: "32.8% (Simulated Lab Test)",` |
| 44 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `patentsFiled: "Indian Patent App No. 202511050655 • [PCT details pending]",` |
| 51 | `12.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `targetSegmentSam: "$12.4 Billion (Premium Passenger & Fleet Logistics)",` |
| 55 | `28.5` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `projectedGrossMargin: "28.5% at Phase 2 Production Scale",` |
| 63 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `minSpaceSqFt: "4,500 - 8,000 sq.ft",` |
| 69 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `"Full 4-Bay Self Volt Certified Service Center",` |
| 96 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `"Certified High-Voltage BRC Diagnostic Toolkits",` |

### `src\lib\patent-knowledge.ts` (31 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 29 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `internationalPctRef: "[PCT details pending]",` |
| 47 | `self-generating` | **A** | REMOVE / REWRITE: Physics violation risk: regenerative PMG recovers vehicle kinetic energy, cannot generate net free propulsion. | `"A power delivery and self-generating propulsion system for an electric vehicle comprising: a h...` |
| 51 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `"800V dual-bus switching latency < 2.4 milliseconds; zero tractive torque drop during bus hando...` |
| 65 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Operating input range: 12V to 180V AC; output regulated: 400V DC ± 1.5%; peak harvest capacity...` |
| 91 | `eliminat` | **B** | REWRITE: Cannot claim to "eliminate" battery thermal runaway or parasitic drag. Rephrase to "designed to reduce (target)". | `"Eliminates heavy mechanical contactors and arcing, achieving 10,000,000+ switching cycle longe...` |
| 91 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `"Eliminates heavy mechanical contactors and arcing, achieving 10,000,000+ switching cycle longe...` |
| 105 | `guarantee` | **B** | REWRITE: Performance or engineering guarantees must be converted to design targets. | `"Prevents battery thermal runaway cascade and guarantees cell temperature differentials stay un...` |
| 107 | `3.2 s` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Maximum continuous cell operating temperature: 34.2°C under peak 3.2s launch acceleration.",` |
| 121 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `"Prediction accuracy > 99.4% against laboratory cycler ground truth; extends pack life to 4,500...` |
| 129 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `code: "AIS-038 (Rev 2)",` |
| 135 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `code: "AIS-156",` |
| 190 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `if (q.includes("tesla") \|\| q.includes("toyota") \|\| q.includes("prior art") \|\| q.includes(...` |
| 190 | `Tesla` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `if (q.includes("tesla") \|\| q.includes("toyota") \|\| q.includes("prior art") \|\| q.includes(...` |
| 190 | `Toyota` | **A** | REMOVE: Unverifiable, aggressive legal hype, competitor patent citation, or invalid identity title. | `if (q.includes("tesla") \|\| q.includes("toyota") \|\| q.includes("prior art") \|\| q.includes(...` |
| 200 | `published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `* **Filing Reference**: Indian Patent Application No. \'202511050655\' (Filed/Published with In...` |
| 200 | `filed/published` | **A** | REMOVE / REWRITE: Patent application is NOT yet published by the Indian Patent Office. Remove all references claiming publication. | `* **Filing Reference**: Indian Patent Application No. \'202511050655\' (Filed/Published with In...` |
| 201 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `* **International PCT Details**: Reference \'[PCT details pending]\'.` |
| 204 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `answer = '### 🛡️ Automotive Regulatory & AIS Homologation Compliance` |
| 204 | `compliance` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `answer = '### 🛡️ Automotive Regulatory & AIS Homologation Compliance` |
| 208 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `1. **AIS-038 (Rev 2) - Electric Powertrain Electrical Safety**:` |
| 213 | `AIS` | **B** | REWRITE: Prototypes are not yet homologated or certified. Must state "Designed to target AIS / UN ECE requirements; certification not yet started/obtained". | `2. **AIS-156 - Traction Battery Safety & Thermal Runaway Mitigation**:` |
| 214 | `zero ` | **B** | REWRITE: Zero emission / zero risk / zero grid dependency phrasing must be accurately qualified. | `* **Dielectric Immersion Cooling**: Cells in Pack A and Pack B are immersed in fluorinated diel...` |
| 227 | `+42` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `* **Peak Harvesting Yield**: Generates **+42 kW** peak kinetic recovery during decelerative coa...` |
| 228 | `98.4` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `* **Peak Inverter Efficiency**: **98.4%** across continuous thermal dynamometer test runs.';` |
| 235 | `verified test` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `'**Claim ${c.claimNumber} (${c.type}): ${c.title}**\n* *Legal Scope*: ${c.legalText}\n* *Novelt...` |
| 242 | `PCT` | **A** | REMOVE: No confirmed PCT application number or international territorial rights. 12-month priority window lapsed. | `**Status**: Formal Examination Phase • Indian Patent Office (IPO) • PCT Priority` |
| 252 | `moat` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `* **Defensibility**: Multi-layered IP moat covering mechanical kinetic linkages, solid-state Si...` |
| 253 | `850 km` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `* **Commercial Application**: Deployed across the **StarCraft GT** hyper-sedan (850 km range, ₹...` |
| 254 | `certified` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `* **Data Room Access**: Certified legal dossier, certified prior-art clearance searches, and co...` |
| 254 | `prior-art` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `* **Data Room Access**: Certified legal dossier, certified prior-art clearance searches, and co...` |
| 254 | `clearance` | **B** | REWRITE: Replace with "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office)". Remove ungranted monopoly claims. | `* **Data Room Access**: Certified legal dossier, certified prior-art clearance searches, and co...` |

### `src\lib\telemetry.ts` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 131 | `32.8` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `const batteryCellMaxTempC = +(32.8 + Math.cos(timeSec / 30) * 0.6).toFixed(1);` |

### `src\lib\validations\dealer.ts` (1 findings)

| Line | Term | Category | Proposed Action | Current Code / Context |
| :---: | :--- | :---: | :--- | :--- |
| 11 | `4,500` | **B** | REWRITE & BADGE: Must be routed through lib/claims.ts with explicit EvidenceBadge (simulated / target / bench-tested) and assumption disclosures. | `minSqFt: 4500,` |


---

## Key Risk Areas & Remediation Strategy

### 1. Technology / Patent & IP (`src/app/technology/patent-ip/page.tsx` & `src/components/PatentShowcase.tsx`)
- **Prior-Art Comparison Block:** Cites Tesla (US 9,180,782) and Toyota (US 8,818,597). **Action: DELETE entire block.** Replace with neutral architectural comparison of dual-pack vs single-bus.
- **Publication & Claims:** Application is unpublished. Full legal claim language must be removed from the public website and replaced with high-level technical architectural design goals; full claims reserved for the NDA Data Room.
- **Pillar 2 (Global PCT):** Claims regional national-phase entry in North America, Europe, ASEAN. **Action: DELETE entirely.**
- **Pillar 3 (Edge Silicon):** Claims "encrypted at the edge on custom silicon, impenetrable software defense". **Action: Rewrite** to "Firmware and control algorithms maintained as proprietary know-how."

### 2. Homepage (`src/app/page.tsx`, `HeroSection.tsx`, `Footer.tsx`)
- **Metadata & Headings:** "Defensible Patent Moat" $\rightarrow$ "Patent Application Filed (Pending)".
- **Footers:** "Powered by patent-pending tri-alternator... (filed/published)" $\rightarrow$ "patent-pending... (application filed, not yet published)".
- **Investor Card:** "Capturing the $50 Billion+ Clean EV Transition" $\rightarrow$ "Targeting India's growing EV market", and "Projected Margin 28.5%" $\rightarrow$ "Illustrative Phase-2 gross margin target (not a forecast)".
- **TRL Consistency:** "TRL 3/4 Dynamometer Validated: 32.8% auxiliary energy gain" $\rightarrow$ "ACM test rig bench-tested (Stage 1). Energy gain figure: simulation only — independent test pending."

### 3. Self-Volt Technology Page (`src/app/technology/self-volt/page.tsx`)
- **Eliminate / Zero Claims:** "eliminating battery thermal runaway risks" $\rightarrow$ "designed to reduce thermal stress (target)".
- **Comparison Table:** Remove the unsupported comparative safety row "Thermal Runaway Risk: Higher under simultaneous regen surges".
- **Physics Language:** Qualify kinetic harvest as in-motion deceleration/glide recoup, removing "continuous harvest without drag".

### 4. Vehicle Lineup (`src/data/vehicles.ts`, `src/app/vehicles/page.tsx`)
- **FAME III:** Remove "FAME III Green Subsidy Applicable" across all model cards; replace with "Subsidy eligibility to be confirmed upon commercial launch."
- **AIS / UN ECE:** "Compliance: AIS 052 / AIS 153 / UN ECE R100" $\rightarrow$ "Designed to target AIS 052 / AIS 153 / UN ECE R100 requirements; certification not yet started/obtained" (Status: Planned).
- **Roadmap Models:** Clearly mark StarPulse, StarHauler, StarTitan, StarTransit as "Concept — in engineering planning phase; not in physical prototype stage."

### 5. Central Architecture: `lib/claims.ts`, `<EvidenceBadge />`, and `<ClaimDisclaimer />`
- Define single source of truth for all numeric performance and range figures.
- Provide unified visual status pills (`Verified`, `Bench-tested`, `Simulated`, `Target`, `Planned`).
- Stand up dedicated `/evidence` route showcasing transparent testing methodologies and documentation status for investors.

---

## Post-Remediation Status (Before vs. After)

| Remediation Area | Before Audit (Risky / Inconsistent) | After Remediation (`fix/claims-compliance`) |
| :--- | :--- | :--- |
| **Patent Filing Status & Publication** | Described as `filed/published`, `"Patent Fortress"`, `"Defensible Moat"`, and `"Protected under"` with verbatim claim spoilers. | Standardized to `"Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office; awaiting examination, not yet granted)"` via `src/lib/claims.ts`. Removed all `published` / `publication` / `filed/published` / `moat` / `fortress` terms. |
| **PCT & Foreign Jurisdictions** | Claimed international PCT coverage across North America, Europe, East Asia, and ASEAN. | Removed all PCT and foreign territorial coverage claims; replaced with `"India (Indian Patent Office filing only; no granted foreign patent rights)"`. |
| **Prior-Art & Competitor Patents** | Publicly cited Tesla (`9,180,782`) and Toyota (`8,818,597`) patents and claimed clearance/prior-art superiority. | Deleted competitor patent citations and clearance claims across `src/lib/patent-knowledge.ts`, `src/components/PatentShowcase.tsx`, `src/app/technology/patent-ip/page.tsx`, `ViraChatbot.tsx`, and API routes. |
| **Readiness Level (TRL) & Validation** | Conflicted between `"TRL 3/4"`, `"Dynamometer Validated"`, `"14 Test Mules & Track Prototypes"`, and `"Bengaluru R&D facility"`. | Harmonized strictly to **TRL 3/4** (`Stage 1 ACM Lab Bench`, `Dual-Pack Bus Switcher Simulation`, `Vehicle CAD/CFD Concept`). Portal preview routes (`/app`, `/operations`, `/dashboard`) clearly labeled as UI previews / sample records. |
| **Physics & Battery Safety Language** | Referenced `"self-generating"`, continuous harvest without drag, `"74% drag"`, `"Thermal Runaway Risk"` comparison row, and `"0% thermal propagation"`. | Replaced with `ENERGY_PHYSICS_NOTE` & `VOLTAGE_ARCHITECTURE_EXPLAINER` clarifying deceleration/downhill/glide kinetic recovery and charge-acceptance decoupling. |
| **Vehicle Specs, Subsidies & Booking** | Listed `"FAME III Green Subsidy"`, unqualified `850 km` / `3.2 s` / `+42 kW`, `"AIS/UN ECE compliance"`, and `"Statutory RBI Escrow Guarantee"`. | Added `<EvidenceBadge />` (`verified` / `bench` / `simulated` / `target` / `planned`), `<ClaimDisclaimer />`, `"Not a binding quotation"`, `"100% refundable expression of interest"`, and planned AIS/UN ECE status. |
| **Financial & Corporate Identity** | Included Series-A data room text, `"Audited Financial Forecast"`, `"65% Committed"`, `"$50B+ TAM"`, `"Dr. B. Chauhan"`, and `YOUR-HANDLE`. | Replaced with Seed-stage unaudited/illustrative labels, anonymized sample UI disclosures, verified **Bishna Ram** founder identity, and `FOUNDER_TODO.md` evidence checklist. |
| **Single Source of Truth (`/evidence`)** | Hardcoded, unbadged numeric metrics duplicated across marketing pages. | Centralized into `src/lib/claims.ts` (`CLAIMS_REGISTRY`, `ALL_CLAIMS_LIST`), rendered via `<EvidenceBadge />`, `<ClaimDisclaimer />`, and interactive `/evidence` page (`sitemap.ts` updated). |

*All founder verification items requiring documentary evidence (`TODO_FOUNDER_VERIFY` / `TODO_FOUNDER_EVIDENCE`) are tracked in [`FOUNDER_TODO.md`](./FOUNDER_TODO.md).*
