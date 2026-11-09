import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

const DealerAppSchema = z.object({
  applicantName: z.string().min(2, "Full legal name required"),
  companyName: z.string().min(2, "Registered business/entity name required"),
  email: z.string().email("Valid corporate or personal email required"),
  phone: z.string().min(10, "Valid 10-digit phone number required"),
  proposedTerritory: z.string().min(2, "Target city/territory required"),
  proposedState: z.string().min(2, "Target state required"),
  tierInterested: z.enum(["TIER_1_METRO_3S", "TIER_2_REGIONAL_2S", "TIER_3_DEPOT_FLEET"]),
  liquidCapitalInr: z.string().min(1, "Capital allocation range required"),
  commercialSpaceSqFt: z.string().min(1, "Available facility area required"),
  automotiveExpYears: z.string().optional(),
  facilityOwnership: z.string().default("OWNED"),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = DealerAppSchema.parse(body);

    const randomHex = crypto.randomBytes(3).toString("hex").toUpperCase();
    const applicationId = `DLR-2026-${randomHex}`;
    const auditHash = crypto.createHash("sha256").update(`${applicationId}|${validated.email}|${validated.proposedTerritory}`).digest("hex");

    const tierDepositMap = {
      TIER_1_METRO_3S: 1500000,
      TIER_2_REGIONAL_2S: 800000,
      TIER_3_DEPOT_FLEET: 500000,
    };

    const applicationRecord = {
      id: applicationId,
      applicationReference: applicationId,
      auditHash,
      ...validated,
      refundableSecurityDepositInr: tierDepositMap[validated.tierInterested] || 800000,
      status: "UNDER_EXPANSION_COMMITTEE_REVIEW",
      reviewSlaHours: 48,
      ndaStatus: "MUTUAL_NDA_GENERATED",
      assignedDesk: "BRC STAR Network Expansion Board",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Dealership franchise territory application successfully logged and queued for expansion triage.",
      application: applicationRecord,
    });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error processing dealership application." },
      { status: 500 }
    );
  }
}
