import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuthToken, AUTH_COOKIE_NAME } from "@/lib/auth";

// Protected portal paths that require active authentication
const PROTECTED_PORTAL_ROUTES = [
  "/dashboard",
  "/app",
  "/investor-portal",
  "/partner",
  "/operations",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PORTAL_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (isProtected) {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      const signInUrl = new URL("/signin", req.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }

    const session = await verifyAuthToken(token);
    if (!session) {
      const signInUrl = new URL("/signin", req.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      const res = NextResponse.redirect(signInUrl);
      res.cookies.delete(AUTH_COOKIE_NAME);
      return res;
    }
  }

  // If user is already authenticated and visits /signin or /signup, optionally let them access or proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/app/:path*",
    "/investor-portal/:path*",
    "/partner/:path*",
    "/operations/:path*",
  ],
};
