# Enterprise Architecture Blueprint: BRC STAR Digital Platform

> **Target Standard**: ₹50L–₹1Cr+ Enterprise Software Ecosystem Evolution  
> **Architectural Paradigm**: Modular Monolith with Domain-Driven Boundaries

---

## 1. Architectural Philosophy

> *"Build only what is required today, but architect everything required tomorrow."*

Rather than deploying complex, brittle microservices prematurely in Phase 1, BRC STAR uses a **Modular Monolith** architecture. Each future enterprise subsystem (`Customer App`, `CRM`, `ERP`, `R&D`, `Investor Data Room`, `Telematics`) is built with strictly decoupled domain boundaries, independent DTO schemas, and isolated database entities.

When transaction volumes, security isolation, or team structures demand it, any module can be extracted into an independent microservice without code rewrites.

---

## 2. Platform Architecture Diagram

```
                                      [ USER / CLIENT DEVICES ]
                                                 │
                                                 ▼
                                     [ CLOUDFLARE EDGE WAF ]
                                (DDoS Protection, SSL, CDN Caching)
                                                 │
                                                 ▼
                                   [ NEXT.JS 16 ENTERPRISE CORE ]
                     ┌───────────────────────────┼───────────────────────────┐
                     │                           │                           │
          [ Server Components Layer ]   [ Client Components (UI) ]    [ REST API v1 Suite ]
          (SEO, Fast Initial Paint)     (Configurator, Simulators)    (Zod DTOs, Auth Guard)
                     │                           │                           │
                     └───────────────────────────┼───────────────────────────┘
                                                 │
                                                 ▼
                                      [ PRISMA ORM DATA ACCESS ]
                                                 │
                                                 ▼
                                     [ POSTGRESQL 16 DATABASE ]
                                      (12 Independent Domains)
```

---

## 3. The 12 Enterprise Domains

1. **Identity & Access Management (IAM)**: RBAC roles (`SuperAdmin`, `Founder`, `CTO`, `Investor`, `Engineer`, `Dealer`, `Customer`), JWT sessions, audit trails.
2. **Sales & CRM**: Leads, enquiries, test drive dispatch, quotations, and pipeline scoring.
3. **Vehicle Catalog**: Models, trims, battery specs, colorways, and dynamic pricing rules.
4. **Investor Relations & Data Room**: Gated access, digital bilateral NDA signature verification, watermarked document delivery.
5. **Dealer Network**: Multi-tier franchise onboarding, territory rights, demo inventory allocation, commission tracker.
6. **Vehicle Telemetry & IoT Gateway**: 50Hz CAN-bus streaming ingest, battery state-of-charge, ACM kinetic harvest logs, motor RPM.
7. **R&D & Patent Registry**: IPO/PCT patent claims, dynamometer simulation logs, CFD meshes.
8. **ERP & Manufacturing**: Bill of Materials (BOM), part inventory, component reorder thresholds, supplier database.
9. **SOP Operating System**: Standard operating procedures, revision approval workflows, technician training records.
10. **After-Sales & Service**: High-voltage diagnostic tickets, warranty claim processing, maintenance schedules.
11. **Finance & Invoicing**: Token deposits, milestone invoices, commercial fleet lease schedules.
12. **Content & Media**: Press releases, whitepapers, downloadable media kits.

---

## 4. Scaling Path: From Phase 1 to ₹1Cr+ Enterprise Platform

* **Phase 1 (Now)**: Next.js 16 Modular Monolith + PostgreSQL + Redis + Public Deep-Tech Platform.
* **Phase 2 (Business Growth)**: Dedicated subdomains (`app.brcstar.in`, `investor.brcstar.in`, `partner.brcstar.in`), live CRM pipeline, automated KYC/NDA processing.
* **Phase 3 (Manufacturing Scale)**: Full ERP rollout, supplier portal, assembly line barcode/RFID scanning, ISO audit compliance.
* **Phase 4 (Vehicle Intelligence)**: IoT telematics ingestion gateway (MQTT / Kafka), real-time battery predictive maintenance, fleet analytics engine.
