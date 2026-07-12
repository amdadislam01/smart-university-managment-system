import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the user is trying to access any /admin route
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    const adminSession = request.cookies.get("admin_session");

    // If no session cookie is found, redirect to login
    if (!adminSession) {
      const loginUrl = new URL("/login/employee", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Check if the user is trying to access any /student route
  if (pathname === "/student" || pathname.startsWith("/student/")) {
    const studentSession = request.cookies.get("student_session");

    // If no session cookie is found, redirect to login
    if (!studentSession) {
      const loginUrl = new URL("/login/student", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/:path*", "/student/:path*"],
};
