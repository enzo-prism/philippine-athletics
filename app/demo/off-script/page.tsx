import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getDemoFlowConfig } from "@/lib/demo/flows"

const safeDecode = (value: string) => {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

export default async function OffScriptRedirectPage({
  searchParams,
}: {
  searchParams?: Promise<{ flow?: string; next?: string }>
}) {
  const params = await searchParams
  const flow = getDemoFlowConfig(params?.flow)
  const attemptedPath = params?.next ? safeDecode(params.next) : "unknown route"
  const returnPath = flow?.fallbackRoute ?? "/demo"

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Demo Guard Rail</p>
          <h1 className="text-4xl font-bold text-foreground font-accent">Route Locked</h1>
          <p className="text-sm text-muted-foreground">
            The requested path is outside the current scripted demo flow and has been safely redirected.
          </p>
        </header>

        <div className="border border-border bg-card p-5">
          <p className="text-sm text-foreground">
            Attempted route: <span className="font-semibold">{attemptedPath}</span>
          </p>
          <p className="text-sm text-muted-foreground">Active flow: {flow?.label ?? "None"}</p>
          <div className="mt-4 flex gap-2">
            <Link href={returnPath} className="border border-border bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
              Return to Script
            </Link>
            <Link href="/demo" className="border border-border bg-background px-3 py-2 text-sm font-semibold text-foreground">
              Exit Demo Mode
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

