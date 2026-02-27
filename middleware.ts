import { NextRequest, NextResponse } from "next/server"
import { DEMO_FLOW_COOKIE, getDemoFlowConfig, isRouteAllowedForFlow, type DemoAudienceId } from "@/lib/demo/flows"

const entryRouteToFlow: Record<string, DemoAudienceId> = {
  "/demo/governance": "governance",
  "/demo/institutions": "institutions",
  "/demo/lgus": "lgus",
}

const normalizePath = (pathname: string) =>
  pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname

const shouldBypass = (pathname: string) => {
  if (pathname.startsWith("/_next")) return true
  if (pathname.startsWith("/api")) return true
  if (pathname.match(/\.[a-zA-Z0-9]+$/)) return true
  return false
}

export function middleware(request: NextRequest) {
  const pathname = normalizePath(request.nextUrl.pathname)

  if (shouldBypass(pathname)) {
    return NextResponse.next()
  }

  if (pathname === "/demo") {
    const response = NextResponse.next()
    response.cookies.delete(DEMO_FLOW_COOKIE)
    return response
  }

  const entryFlow = entryRouteToFlow[pathname]
  if (entryFlow) {
    const response = NextResponse.next()
    response.cookies.set(DEMO_FLOW_COOKIE, entryFlow, {
      path: "/",
      sameSite: "lax",
    })
    return response
  }

  const flow = getDemoFlowConfig(request.cookies.get(DEMO_FLOW_COOKIE)?.value)
  if (!flow) {
    return NextResponse.next()
  }

  if (isRouteAllowedForFlow(flow, pathname)) {
    return NextResponse.next()
  }

  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = "/demo/off-script"
  redirectUrl.searchParams.set("flow", flow.audienceId)
  redirectUrl.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`)
  return NextResponse.redirect(redirectUrl)
}

export const config = {
  matcher: ["/:path*"],
}

