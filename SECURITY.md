# Enterprise Security & Confidentiality Policy: BRC STAR

---

## 1. Zero-Trust Information Boundary

BRC STAR enforces a strict cryptographic boundary separating public educational/marketing assets from confidential engineering and financial IP:

| Asset Type | Public Classification | Confidential Classification |
| :--- | :--- | :--- |
| **Powertrain Specs** | High-level range, top speed, acceleration | Silicon-Carbide MOSFET schematics, firmware algorithms |
| **Patent Information** | Filed patent numbers, title, public abstract | Full claim dossiers, prior art clearance, raw simulation logs |
| **Financials** | Indicative starting pricing, market TAM ($50B) | Audited financial models, Cap Table allocations, unit BOM |
| **Vehicle Telemetry** | Simulated demonstration stream | Live production CAN-Bus telemetry, customer GPS coordinates |

---

## 2. Access Control & Non-Disclosure (NDA) Protocol

1. **Digital Bilateral NDA**: Any user requesting access to the Investor Data Room or Deep-Tech R&D blueprints must execute a digitally signed NDA.
2. **Cryptographic Token Issuance**: Session tokens are generated using SHA-256 HMAC and expire after 72 hours.
3. **Dynamic Watermarking**: All delivered confidential PDFs are injected with dynamic watermarks containing the investor's legal entity, email, IP address, and timestamp.
4. **Immutable Audit Trails**: Every document access event is logged into the `AuditLog` and `DataRoomAccess` relational tables.

---

## 3. Web & Application Security Controls

* **HTTP Security Headers**: Strict-Transport-Security (HSTS, 2 years), X-Frame-Options: SAMEORIGIN, X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin.
* **Input Validation**: All REST API endpoints enforce Zod DTO schema validation, preventing SQL injection and payload poisoning.
* **Rate Limiting**: API routes are rate-limited to mitigate credential stuffing and DoS attacks.
* **Non-Root Containers**: Production Docker containers execute under dedicated non-root `nextjs:nodejs` (UID 1001) users.
