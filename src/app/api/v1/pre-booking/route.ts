import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";

const PreBookingSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Valid email address required"),
  phone: z.string().min(10, "Valid 10-digit phone number required"),
  city: z.string().min(2, "City name required"),
  state: z.string().min(2, "State selection required"),
  vehicleModelSlug: z.string().min(1, "Vehicle model required"),
  trimLevel: z.string().min(1, "Trim level required"),
  exteriorColor: z.string().default("Electric Cyan Pearl"),
  tokenAmountInr: z.number().default(25000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = PreBookingSchema.parse(body);

    // Generate cryptographic order ID and booking reference
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomHex = crypto.randomBytes(3).toString("hex").toUpperCase();
    const bookingRef = `BRC-2026-${randomHex}`;
    const orderId = `order_BRC_${timestamp}_${randomHex}`;

    // Razorpay Key from environment or fallback public key
    const razorpayKeyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "rzp_test_brcstar2026";

    const orderPayload = {
      orderId,
      bookingReference: bookingRef,
      amountPaise: validatedData.tokenAmountInr * 100,
      currency: "INR",
      razorpayKeyId,
      customer: {
        name: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
      },
      vehicle: {
        modelSlug: validatedData.vehicleModelSlug,
        trim: validatedData.trimLevel,
        color: validatedData.exteriorColor,
      },
      tokenAmountInr: validatedData.tokenAmountInr,
      isRefundable: true,
      targetDeliveryYear: 2027,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: "Priority reservation order created. Proceed to payment escrow.",
      order: orderPayload,
    });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal server error creating reservation order." },
      { status: 500 }
    );
  }
}
