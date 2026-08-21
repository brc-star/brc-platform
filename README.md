# BRC STAR Digital EV Enterprise Platform

> **Master Production Platform for BRC STAR OPC PRIVATE LIMITED**  
> Pioneering India's Deep-Tech **BRC STAR Self Volt Electric Vehicle** Technology.

---

## 1. Executive Summary

This repository houses the production digital platform and foundation of the **Digital Operating System for BRC STAR**. It is architected as a high-performance **Modular Monolith** capable of scaling from the current flagship public web experience into a ₹50L–₹1Cr+ enterprise software ecosystem covering:

`Public Flagship → Customer Platform → Sales CRM → Manufacturing ERP → Investor Data Room → Dealer Network → SOP System → R&D Workspace → Vehicle Intelligence / IoT`

---

## 2. Core Information Architecture (5 Public Pillars)

```
BRCSTAR.IN
│
├── 01 HOME (/)
│   └── Cinematic Deep-Tech Hero, Energy-Flow HUD, Fleet Overview, Engineering Highlights, ROI Calculator
│
├── 02 TECHNOLOGY (/technology)
│   ├── Self Volt Architecture (/technology/self-volt) — Dual-pack closed loop, ACM & BDA dynamics
│   ├── Energy Recovery (/technology/energy-recovery) — PMG alternator kinetic recoup, braking dynamics
│   └── Patent & IP (/technology/patent-ip) — Patent claims registry, defensibility moat, certified filings
│
├── 03 VEHICLES (/vehicles)
│   ├── Vehicle Portfolio / Passenger EV (/vehicles/passenger) — StarCraft GT hyper-sedan & StarPulse SUV
│   ├── Commercial EV (/vehicles/commercial) — StarFleet Logistic high-uptime delivery van
│   └── Electric Bus (/vehicles/bus) — StarTransit 12M high-capacity municipal transit coach
│
├── 04 INNOVATION (/innovation)
│   ├── R&D (/innovation/rnd) — Simulation test-rigs, dynamometer data, internal R&D gate
│   ├── Sustainability (/innovation/sustainability) — Net-zero lifecycle, battery circularity, ESG
│   └── News & Media (/innovation/news) — Official press releases, executive news, media kit
│
└── 05 INVEST (/invest)
    ├── Investor Relations (/invest) — Vision, $50B+ TAM opportunity, capital allocation roadmap
    ├── Pitch Deck Request (/invest/pitch-deck) — Digital NDA signature gate & instant data room access
    └── Dealer & Strategic Partners (/invest/partners) — Dealership franchise tiers & ROI calculator
│
├── ENTERPRISE PORTAL FOUNDATIONS & OPERATIONS
│   ├── Customer Experience Platform (/app — app.brcstar.in)
│   ├── Investor Data Room (/investor-portal — investor.brcstar.in)
│   ├── Dealer Management Hub (/partner — partner.brcstar.in)
│   ├── Enterprise Operations & CRM/ERP Hub (/operations — ops.brcstar.in)
│   ├── Vehicle Pre-Booking Engine (/pre-book)
│   └── Technical Whitepapers & Docs (/docs)
```

---

## 3. Technology Stack

* **Framework**: Next.js 16.3.1 (App Router)
* **Frontend**: React 19, TypeScript (Strict Mode), Tailwind CSS, Lucide Icons, Framer Motion
* **Backend**: Next.js Route Handlers (REST API v1) with Zod DTO schema validation
* **Database**: PostgreSQL 16 with Prisma ORM (12 Domain Models)
* **Infrastructure**: Multi-stage Docker containerization, Kubernetes manifests (`k8s/`), GitHub Actions CI/CD

---

## 4. Quick Start & Local Development

### Prerequisites
* Node.js v20+ or v22+
* npm v10+
* Docker & Docker Compose (Optional for local PostgreSQL/Redis)

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Copy environment configuration
cp .env.example .env.local

# 3. Generate Prisma client
npx prisma generate

# 4. Launch development server
npm run dev
```

Visit `http://localhost:3000` to view the platform.

---

## 5. Enterprise Documentation Suite

* [`ARCHITECTURE.md`](./ARCHITECTURE.md) — Modular monolith design, domain boundaries, scaling roadmap
* [`SECURITY.md`](./SECURITY.md) — Zero-trust confidentiality, NDA watermarking, RBAC, OWASP controls
* [`DATABASE.md`](./DATABASE.md) — PostgreSQL domain schema dictionary, indexing, and migration guide
* [`API.md`](./API.md) — REST API v1 specification with request/response schemas
* [`DEPLOYMENT.md`](./DEPLOYMENT.md) — Docker, Cloudflare, AWS/GCP, and Kubernetes deployment instructions
* [`ENVIRONMENT.md`](./ENVIRONMENT.md) — Complete environment variables reference
* [`ROADMAP.md`](./ROADMAP.md) — Phase 1 to Phase 4 enterprise scaling roadmap
