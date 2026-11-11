import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { FranchiseTier, InvestmentTier } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  DealerApplicationSchema,
  INVESTMENT_TIERS,
  InvestmentTierId,
} from "@/lib/validations/dealer";

function mapInvestmentTier(tier: InvestmentTierId): InvestmentTier {
  switch (tier) {
    case "TIER_1_2_5_CR":
      return InvestmentTier.TIER_1_2_5_CR;
    case "TIER_2_1_25_CR":
      return InvestmentTier.TIER_2_1_25_CR;
    case "TIER_3_50_LAKH":
    default:
      return InvestmentTier.TIER_3_50_LAKH;
  }
}

function mapFranchiseTier(
  tier: (typeof INVESTMENT_TIERS)[number]["franchiseTier"]
): FranchiseTier {
  switch (tier) {
    case "FLAGSHIP_EXPERIENCE_CENTER":
      return FranchiseTier.FLAGSHIP_EXPERIENCE_CENTER;
    case "AUTHORIZED_SERVICE_NODE":
      return FranchiseTier.AUTHORIZED_SERVICE_NODE;
    case "REGIONAL_SALES_AND_SERVICE":
    default:
      return FranchiseTier.REGIONAL_SALES_AND_SERVICE;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = DealerApplicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const tierConfig =
      INVESTMENT_TIERS.find((t) => t.id === data.investmentTier) ||
      INVESTMENT_TIERS[0];

    const applicationRef = `DLR-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const submittedAt = new Date().toISOString();

    const auditHash = crypto
      .createHash("sha256")
      .update(
        `${applicationRef}:${data.email}:${data.operatingCity}:${data.investmentTier}:${submittedAt}`
      )
      .digest("hex");

    let persistedToDb = false;
    let dbRecordId: string | null = null;

    if (process.env.DATABASE_URL) {
      try {
        const created = await prisma.dealerApplication.create({
          data: {
            applicationRef,
            applicantName: data.applicantName,
            companyName: data.companyName,
            email: data.email,
            phone: data.phone,
            proposedTerritory: data.operatingCity,
            proposedState: data.operatingState,
            businessSector: data.businessSector,
            commercialSpaceSqFt: data.commercialLandSqFt,
            investmentTier: mapInvestmentTier(data.investmentTier),
            tierInterested: mapFranchiseTier(tierConfig.franchiseTier),
            liquidCapitalInr: tierConfig.capitalInr,
            status: "UNDER_REVIEW",
            auditHash,
          },
          select: { id: true, applicationRef: true },
        });
        persistedToDb = true;
        dbRecordId = created.id;
      } catch (dbErr) {
        console.warn(
          "[/api/dealers/apply] Prisma persistence skipped/failed:",
          dbErr
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        applicationId: applicationRef,
        dbRecordId,
        persistedToDb,
        status: "UNDER_REVIEW",
        auditHash,
        applicant: {
          applicantName: data.applicantName,
          companyName: data.companyName,
          operatingCity: data.operatingCity,
          operatingState: data.operatingState,
          businessSector: data.businessSector,
          commercialLandSqFt: data.commercialLandSqFt,
          investmentTier: data.investmentTier,
          investmentTierLabel: tierConfig.title,
          investmentAmountDisplay: tierConfig.amountLabel,
        },
        message: `Franchise application ${applicationRef} registered for ${data.operatingCity}, ${data.operatingState}.`,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("[/api/dealers/apply] Error:", err);
    return NextResponse.json(
      { error: "Unable to process dealership application" },
      { status: 500 }
    );
  }
}
