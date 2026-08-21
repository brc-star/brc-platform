import { NextResponse } from "next/server";
import { z } from "zod";
import { createAuthToken, AUTH_COOKIE_NAME, AuthUser } from "@/lib/auth";

const SignUpSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Valid corporate or personal email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().optional(),
  role: z.enum(["CUSTOMER", "INVESTOR", "DEALER", "ENTERPRISE_STAFF", "ADMIN"]).default("CUSTOMER"),
  organization: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = SignUpSchema.parse(body);

    const user: AuthUser = {
      id: `USR-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      name: validated.name,
      email: validated.email.toLowerCase(),
      role: validated.role,
      organization: validated.organization,
      phone: validated.phone,
    };

    const token = await createAuthToken(user, 7);

    const response = NextResponse.json({
      success: true,
      message: "Account created successfully.",
      user,
      redirectTo: "/dashboard",
    });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal authentication error" },
      { status: 500 }
    );
  }
}
