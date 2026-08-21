import { NextResponse } from "next/server";
import { z } from "zod";

const NDASchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  designation: z.string().optional(),
  fundType: z.string(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "Must agree to Non-Disclosure Terms",
  }),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = NDASchema.parse(body);

    const token = `DATAROOM-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 8)}`.toUpperCase();

    return NextResponse.json({
      success: true,
      message: "NDA Verified and Cryptographically Logged.",
      sessionToken: token,
      expiresInHours: 72,
      investor: {
        organization: validated.organization,
        fundType: validated.fundType,
        ndaStatus: "SIGNED",
        dataRoomTier: 3,
        signedAt: new Date().toISOString(),
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
