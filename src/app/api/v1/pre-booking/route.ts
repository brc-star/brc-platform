import { NextResponse } from "next/server";
import { z } from "zod";

const PreBookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  city: z.string().min(2),
  state: z.string(),
  vehicleModelSlug: z.string(),
  trimLevel: z.string(),
  exteriorColor: z.string(),
  tokenAmountInr: z.number().default(25000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = PreBookingSchema.parse(body);

    const bookingRef = `BRC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

    return NextResponse.json({
      success: true,
      message: "Pre-booking priority reservation created successfully.",
      booking: {
        bookingReference: bookingRef,
        ...validatedData,
        isRefundable: true,
        paymentStatus: "PAID_TOKEN_RESERVED",
        targetDeliveryYear: 2027,
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
