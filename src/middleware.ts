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
  const host = req.headers.get("host") || "";
  const isStaging = host.includes("tech.brcstar.in");

  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED_PORTAL_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  let response: NextResponse | undefined;

  if (isProtected) {
    const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;

    if (!token) {
      const signInUrl = new URL("/signin", req.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      response = NextResponse.redirect(signInUrl);
    } else {
      const session = await verifyAuthToken(token);
      if (!session) {
        const signInUrl = new URL("/signin", req.url);
        signInUrl.searchParams.set("callbackUrl", pathname);
        response = NextResponse.redirect(signInUrl);
        response.cookies.delete(AUTH_COOKIE_NAME);
      }
    }
  }

  if (!response) {
    response = NextResponse.next();
  }

  // Staging / preview isolation: tag tech.brcstar.in with noindex
  if (isStaging) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
