import { NextRequest, NextResponse } from "next/server"

const normalizePath = (pathname: string) =>
  pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname

const shouldBypass = (pathname: string) => {
  if (pathname.startsWith("/_next")) return true
  if (pathname.startsWith("/api")) return true
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) return true
  return false
}

const redirectTo = (request: NextRequest, pathname: string) => {
  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = pathname
  return NextResponse.redirect(redirectUrl)
}

const redirectToRoot = (request: NextRequest) => {
  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = "/"
  redirectUrl.search = ""
  return NextResponse.redirect(redirectUrl)
}

export function middleware(request: NextRequest) {
  const pathname = normalizePath(request.nextUrl.pathname)

  if (shouldBypass(pathname)) {
    return NextResponse.next()
  }

  if (pathname === "/competitions") {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/events"
    redirectUrl.searchParams.set("status", "All")
    return NextResponse.redirect(redirectUrl)
  }

  if (pathname.startsWith("/competitions/")) {
    return redirectTo(request, pathname.replace(/^\/competitions/, "/events"))
  }

  if (pathname === "/search") {
    return redirectTo(request, "/athletes")
  }

  if (pathname === "/rankings") {
    return redirectTo(request, "/athletes")
  }

  if (
    [
      "/about",
      "/changelog",
      "/data-portal",
      "/demo",
      "/disciplines",
      "/how-it-works",
      "/membership",
      "/news",
      "/profile",
      "/recognition",
      "/safe-sport",
      "/signup",
      "/sponsors",
    ].some((legacyPath) => pathname === legacyPath || pathname.startsWith(`${legacyPath}/`)) ||
    pathname === "/dashboard" ||
    pathname.startsWith("/dashboard/") ||
    pathname === "/participants" ||
    pathname.startsWith("/participants/")
  ) {
    return redirectToRoot(request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"],
}
