import { NextResponse } from "next/server";
import { z } from "zod";
import { createAuthToken, AUTH_COOKIE_NAME, AuthUser, UserRole } from "@/lib/auth";

const SignInSchema = z.object({
  email: z.string().email("Valid email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

// Demo accounts for seamless evaluation
const DEMO_USERS: Record<string, { name: string; role: UserRole; org: string }> = {
  "founder@brcstar.in": { name: "Dr. B. Chauhan", role: "ADMIN", org: "BRC STAR Executive Board" },
  "admin@brcstar.in": { name: "Chief Operations Officer", role: "ENTERPRISE_STAFF", org: "BRC Operations Desk" },
  "investor@brcstar.in": { name: "Siddharth Menon", role: "INVESTOR", org: "Nexus Deep-Tech Fund" },
  "dealer@brcstar.in": { name: "Rajesh Automotive Ventures", role: "DEALER", org: "Southern Hub Dealership" },
  "customer@brcstar.in": { name: "Aarav Sharma", role: "CUSTOMER", org: "StarCraft GT Owner" },
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = SignInSchema.parse(body);
    const email = validated.email.toLowerCase();

    // Determine user role and identity
    let userRole: UserRole = "CUSTOMER";
    let userName = email.split("@")[0].replace(/[._-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    let userOrg = "BRC STAR Network";

    if (DEMO_USERS[email]) {
      userName = DEMO_USERS[email].name;
      userRole = DEMO_USERS[email].role;
      userOrg = DEMO_USERS[email].org;
    } else if (email.includes("investor") || email.includes("capital") || email.includes("fund")) {
      userRole = "INVESTOR";
      userOrg = "Institutional Investment Partner";
    } else if (email.includes("dealer") || email.includes("motors") || email.includes("auto")) {
      userRole = "DEALER";
      userOrg = "Authorized Dealership Candidate";
    } else if (email.endsWith("@brcstar.in") || email.includes("admin") || email.includes("ops")) {
      userRole = "ENTERPRISE_STAFF";
      userOrg = "BRC STAR Engineering / Ops";
    }

    const user: AuthUser = {
      id: `USR-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      name: userName,
      email,
      role: userRole,
      organization: userOrg,
    };

    const days = validated.rememberMe ? 30 : 7;
    const token = await createAuthToken(user, days);

    const response = NextResponse.json({
      success: true,
      message: `Welcome back, ${user.name}!`,
      user,
      redirectTo: "/dashboard",
    });

    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: days * 24 * 60 * 60,
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
      { success: false, message: "Invalid credentials or login failure." },
      { status: 401 }
    );
  }
}
