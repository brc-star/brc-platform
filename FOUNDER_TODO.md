# FOUNDER COMPLIANCE & LEGAL ACTION CHECKLIST
**Entity:** BRC STAR (OPC) PRIVATE LIMITED  
**Founder & CEO:** Bishna Ram  
**Jurisdiction:** India (ROC Rajasthan, Indian Patent Office)  
**Date:** November 2026

---

## 1. Indian Patent Application No. 202511050655
- [ ] **Exact Filing Date (Blocks `Verified` Badge):** Confirm official filing date with Indian Patent Office (IPO) records (May 2025). The `Verified` badge on `/technology/patent-ip` and `/evidence` is intentionally withheld until the exact date is entered.
- [ ] **Publication Status (Form 9):**
  - **Status confirmed:** The application is **NOT yet published**.
  - **Action for Founder:** Check with your patent attorney whether Form 9 (Request for Early Publication) has been filed or if the application will publish at the statutory 18-month mark (November 2026 / late 2026).
  - **Attorney Confidentiality Review:** Confirm with your patent attorney whether publishing full legal claim language on the public website before publication risks disclosing non-public trade secrets or subject matter. *Recommendation: Keep detailed claim text inside the NDA Data Room.*
- [ ] **Exact Claim Count:**
  - The website previously referenced 22 claims ("Patent Claims (22)").
  - Founder records indicate 24 claims as filed in May 2025.
  - **Action for Founder:** Verify the exact count of independent and dependent claims as originally filed.
- [ ] **Examination Status (Form 18):** Confirm whether Form 18 (Request for Examination) has been submitted to IPO. Currently marked `"not yet examined"` pending confirmation.

---

## 2. International (PCT) Filing Status
- [ ] **PCT Priority Deadline:** The 12-month priority window under the Paris Convention / PCT from the May 2025 Indian filing closed in May 2026.
- [ ] **Confirm Status:**
  - If a PCT application was filed: Provide the PCT Application Number (`PCT/IN2026/XXXXXX`) and international filing date.
  - If no PCT application was filed: International PCT priority claims (*North America, Europe, East Asia, ASEAN*) must remain permanently removed from the website and investor pitch decks.

---

## 3. Engineering & Test Bench Evidence (TRL 3/4)
- [ ] **Alternator Control Module (ACM) Rig (98.4% Peak Yield):** Attach/link verified test logs or witnessed bench photos in `public/` or the NDA Data Room (`/` and `/evidence` currently classify the `98.4%` figure as `Simulated` until a test log or rig photo is linked).
- [ ] **Energy Gain Verification (32.8%):** Confirm simulation parameters & MATLAB/Simulink assumptions for NDA technical review.
- [ ] **Dual-Pack Bus Switcher & Voltage Topology:** Provide final 800V dual-pack (Pack A/B `400V`) and `1200V` SiC switching matrix datasheet/oscilloscope traces (<2.4 ms) for NDA diligence.

---

## 4. Pre-Booking, Live Razorpay Checkout & Legal `/terms` Placeholders
- [ ] **Live Payment Collection Review (URGENT — Razorpay Gateway):** Because `/pre-book` and `/api/v1/pre-booking` implement a ₹25,000 Razorpay checkout flow before a commercial vehicle exists, have a corporate lawyer and Chartered Accountant (CA) review the payment collection flow immediately for compliance with the **Companies Act, 2013 (deposit rules)**, **Consumer Protection Act, 2019**, **Consumer Protection (E-Commerce) Rules, 2020**, and **RBI payment aggregator guidelines**.
- [ ] **Fill Founder Placeholders on `/terms`:** Update the bracketed refund placeholders in `src/app/terms/page.tsx` (`[FOUNDER: Bank / Escrow Account Reference]`, `[FOUNDER: Statutory Refund Window Days]`, `[FOUNDER: Authorized Grievance Officer Contact]`).

---

## 5. Social Profile, Investor Citations & Data Room Documents
- [ ] **Founder LinkedIn Profile:** Provide verified LinkedIn URL to replace placeholder `linkedin.com/in/YOUR-HANDLE` (the LinkedIn button in `FounderSection.tsx` stays hidden until a real URL is supplied).
- [ ] **Market / TAM Source Citation:** Provide a verified public report title, publisher, and year (e.g., NITI Aayog / Bain India EV Report + year) if you wish to display a numeric EV TAM figure on `/invest` or homepage (currently removed to avoid uncited market sizing).
- [ ] **Investor Data Room Documents:** Confirm final Seed pitch-deck PDF page count (`InvestorDataRoomGate.tsx`) and upload supporting fleet energy savings & 18+ dealer EOI logs to the NDA Data Room.

---

## 6. Financial & Valuation Claims
- [ ] **Financial Model Auditing:**
  - Remove any claim that financial projections or unit economics are "audited" unless an independent Chartered Accountant has provided a statutory audit report.
  - Current label on site: *"Management internal projections / unaudited financial model based on stated operating assumptions."*
- [ ] **Valuation & Funding Targets:**
  - Confirm active round target (e.g., Seed / Pre-Series A) and ensure all pitch-deck links include clear disclaimer: *"Confidential information for accredited investors; not an offer or solicitation of securities under the Companies Act, 2013."*

---

## 7. Subsidies & Automotive Certification
- [ ] **FAME / EMPS / State EV Policy:** Keep all subsidy claims neutral (*"Subsidy eligibility to be determined upon commercial launch and homologation"*).
- [ ] **Homologation Schedule (AIS / ARAI / ICAT):** Roadworthiness, battery safety (AIS-048, AIS-156), and vehicle compliance (AIS-052, AIS-153, UN ECE R100) are marked as **Planned Design Targets**; formal testing commences following prototype mule fabrication.
