# Database Architecture & Domain Schema: BRC STAR

---

## 1. Overview

The enterprise database is powered by **PostgreSQL 16** and managed through **Prisma ORM**. The schema is partitioned into 12 logically isolated domains to allow independent schema migrations and future microservice extraction.

---

## 2. Entity Relationship Overview

```
[User] ────┬──< [Session]
           ├──< [AuditLog]
           ├─── [InvestorProfile] ──< [DataRoomAccess]
           ├─── [Dealership]
           ├──< [Lead] (as Assignee)
           ├──< [PreBooking]
           └──< [ServiceTicket]

[VehicleModel] ──┬──< [VehicleTrim]
                 ├──< [VehicleSpec]
                 └──< [VehicleInstance] ──< [TelemetryLog]

[Component] ───────< [BOMItem]

[SOPDocument] ─────< [SOPRevision] ──< [SOPApproval]
```

---

## 3. Database Migration & Maintenance Commands

```bash
# Generate Prisma Client types
npx prisma generate

# Create and apply migration
npx prisma migrate dev --name init_enterprise_schema

# Open visual Prisma Studio database browser
npx prisma studio
```

---

## 4. High-Performance Indexing Strategy

* `User`: Composite index on `[email, role]`
* `Lead`: Composite index on `[email, status, interestType]`
* `PreBooking`: Unique index on `[bookingReference]` and composite on `[paymentStatus]`
* `TelemetryLog`: Time-series composite index on `[vehicleId, loggedAt]`
* `PatentRecord`: Index on `[patentRefNumber, status, isPublic]`
