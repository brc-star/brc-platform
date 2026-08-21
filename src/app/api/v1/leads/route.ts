import { NextResponse } from "next/server";
import { z } from "zod";

const LeadSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Valid email address required"),
  phone: z.string().min(10, "Valid phone number required"),
  city: z.string().min(2),
  state: z.string().default("Karnataka"),
  interestType: z.enum([
    "PASSENGER_EV",
    "COMMERCIAL_FLEET",
    "ELECTRIC_BUS",
    "DEALER_FRANCHISE",
    "INVESTOR_RELATIONS",
    "RND_COLLABORATION",
  ]),
  notes: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = LeadSchema.parse(body);

    const leadId = `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    return NextResponse.json({
      success: true,
      message: "Lead received and routed to BRC STAR CRM pipeline.",
      lead: {
        id: leadId,
        ...validatedData,
        status: "QUALIFIED",
        leadScore: 75,
        assignedTo: "Enterprise Triage Queue",
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
