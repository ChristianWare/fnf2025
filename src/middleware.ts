// middleware.ts
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const protectedRoots = ["/account", "/admin", "/agent"]; // adjust as needed
const authRoots = ["/login", "/register"]; // public auth pages

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoots.some((p) => pathname.startsWith(p));
  const isAuthPage = authRoots.some((p) => pathname.startsWith(p));

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET, // make sure this env var is edge‑exposed
  });

  // 1. Block anonymous visitors from protected areas
  if (isProtected && !token) {
    const login = new URL("/login", request.url);
    login.searchParams.set("callbackUrl", encodeURI(request.url));
    return NextResponse.redirect(login);
  }

  // 2. Role‑based gating for /admin
  if (pathname.startsWith("/admin") && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 3. Optional: role check for /agent
  if (pathname.startsWith("/agent") && token?.role !== "SALES_AGENT") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 4. Keep logged‑in users out of /login and /register
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // don’t run on static assets or API routes
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
