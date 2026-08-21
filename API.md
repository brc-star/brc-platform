# REST API v1 Specification: BRC STAR Digital Platform

Base URL: `https://brcstar.in/api/v1`

---

## 1. Endpoints Summary

| Method | Route | Description | Auth |
| :--- | :--- | :--- | :--- |
| `POST` | `/leads` | Submit general lead, enquiry, or test drive request | Public |
| `POST` | `/pre-booking` | Create priority vehicle pre-booking reservation | Public |
| `POST` | `/investors/nda` | Verify investor identity and execute digital NDA | Public (KYC) |
| `POST` | `/dealers/apply` | Submit dealership / territory franchise application | Public |
| `GET` | `/telemetry/demo` | Live 50Hz CAN-Bus simulated vehicle telemetry feed | Public |
| `GET` | `/health` | Enterprise health check, memory & uptime metrics | Public |

---

## 2. Sample Request & Response Payloads

### `POST /api/v1/leads`
**Request Body**:
```json
{
  "fullName": "Meera Sharma",
  "email": "meera@domain.com",
  "phone": "+91 98450 11234",
  "city": "Bengaluru",
  "state": "Karnataka",
  "interestType": "PASSENGER_EV",
  "notes": "Interested in StarCraft GT Long-Range Dual Pack."
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "message": "Lead received and routed to BRC STAR CRM pipeline.",
  "lead": {
    "id": "LEAD-L8K3J2-482",
    "status": "QUALIFIED",
    "leadScore": 75,
    "createdAt": "2026-08-17T15:30:00.000Z"
  }
}
```

---

### `POST /api/v1/investors/nda`
**Request Body**:
```json
{
  "fullName": "Siddharth Menon",
  "email": "siddharth@venturefund.com",
  "organization": "Nexus Capital Partners",
  "fundType": "Venture Capital",
  "agreeToTerms": true
}
```

**Response (200 OK)**:
```json
{
  "success": true,
  "message": "NDA Verified and Cryptographically Logged.",
  "sessionToken": "DATAROOM-M8X9-K2L4P9",
  "expiresInHours": 72,
  "investor": {
    "organization": "Nexus Capital Partners",
    "ndaStatus": "SIGNED",
    "dataRoomTier": 3
  }
}
```
