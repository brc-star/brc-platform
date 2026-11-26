import { NextRequest, NextResponse } from "next/server";
import {
  PATENT_METADATA,
  TECHNICAL_DESIGN_GOALS,
  TARGET_REGULATORY_FRAMEWORKS,
  queryPatentKnowledge,
} from "@/lib/patent-knowledge";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    success: true,
    service: "BRC STAR Technical Architecture & Diligence Knowledge Engine",
    version: "v1.1.0-compliant",
    metadata: PATENT_METADATA,
    indexedGoalsCount: TECHNICAL_DESIGN_GOALS.length,
    technicalDesignGoals: TECHNICAL_DESIGN_GOALS.map((g) => ({
      id: g.id,
      title: g.title,
      evidenceStatus: g.evidenceStatus,
      metric: g.designGoalMetric,
    })),
    plannedRegulatoryTargets: TARGET_REGULATORY_FRAMEWORKS,
    auditVerificationHash: crypto
      .createHash("sha256")
      .update(JSON.stringify(PATENT_METADATA) + TECHNICAL_DESIGN_GOALS.length)
      .digest("hex"),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = typeof body.query === "string" ? body.query.trim() : "";
    const mode =
      body.mode === "investor" || body.mode === "patent_examiner"
        ? body.mode
        : "general";

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          error: "EMPTY_QUERY",
          message:
            "Please provide a query regarding BRC STAR architecture, application status, or validation stage.",
        },
        { status: 400 }
      );
    }

    const ragResult = queryPatentKnowledge(query, mode);
    const auditHash = crypto
      .createHash("sha256")
      .update(query + ragResult.answer + Date.now().toString())
      .digest("hex")
      .substring(0, 16);

    return NextResponse.json({
      success: true,
      query,
      mode,
      auditHash: `BRC-IP-${auditHash.toUpperCase()}`,
      answer: ragResult.answer,
      patentClaimsCited: ragResult.citedClaims,
      confidenceScore: ragResult.confidence,
      technicalMetrics: ragResult.technicalMetrics,
      relatedLinks: ragResult.links,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "RAG_PROCESSING_ERROR",
        message: "Failed to process technical knowledge query.",
      },
      { status: 500 }
    );
  }
}
