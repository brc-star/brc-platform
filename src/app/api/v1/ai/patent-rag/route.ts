import { NextRequest, NextResponse } from "next/server";
import {
  PATENT_METADATA,
  PATENT_CLAIMS_DATABASE,
  AIS_STANDARDS,
  queryPatentKnowledge,
} from "@/lib/patent-knowledge";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    success: true,
    service: "BRC STAR Patent & Technical Due-Diligence RAG Engine",
    version: "v1.0.4-LTS",
    metadata: PATENT_METADATA,
    indexedClaimsCount: PATENT_CLAIMS_DATABASE.length,
    claimsIndex: PATENT_CLAIMS_DATABASE.map((c) => ({
      claimNumber: c.claimNumber,
      type: c.type,
      title: c.title,
      metric: c.technicalMetric,
    })),
    regulatoryCompliance: AIS_STANDARDS,
    auditVerificationHash: crypto
      .createHash("sha256")
      .update(JSON.stringify(PATENT_METADATA) + PATENT_CLAIMS_DATABASE.length)
      .digest("hex"),
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const query = typeof body.query === "string" ? body.query.trim() : "";
    const mode = (body.mode === "investor" || body.mode === "patent_examiner")
      ? body.mode
      : "general";

    if (!query) {
      return NextResponse.json(
        {
          success: false,
          error: "EMPTY_QUERY",
          message: "Please provide a query regarding BRC STAR patent claims, technical architecture, or due diligence.",
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
        message: "Failed to process patent knowledge query.",
      },
      { status: 500 }
    );
  }
}
