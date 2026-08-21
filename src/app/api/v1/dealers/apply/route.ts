import { NextResponse } from "next/server";
import { z } from "zod";

const DealerAppSchema = z.object({
  applicantName: z.string().min(2),
  companyName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  proposedTerritory: z.string().min(2),
  proposedState: z.string(),
  tierInterested: z.string(),
  liquidCapitalInr: z.string().optional(),
  commercialSpaceSqFt: z.string().optional(),
  automotiveExpYears: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = DealerAppSchema.parse(body);

    const applicationId = `DLR-APP-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    return NextResponse.json({
      success: true,
      message: "Dealer territory franchise application received.",
      application: {
        id: applicationId,
        ...validated,
        status: "UNDER_REVIEW",
        createdAt: new Date().toISOString(),
      },
    });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
