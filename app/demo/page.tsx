import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { allDemoFlows } from "@/lib/demo/flows"

export default function DemoLauncherPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Scripted Demo Launcher</p>
          <h1 className="text-4xl font-bold text-foreground font-accent">Audience Flows</h1>
          <p className="text-sm text-muted-foreground">
            Choose an audience to enter strict demo mode. Off-script navigation is redirected back to the guided journey.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {allDemoFlows.map((flow) => (
            <Card key={flow.audienceId} className="py-0">
              <CardContent className="space-y-3 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{flow.label}</p>
                <p className="text-sm text-muted-foreground">{flow.description}</p>
                <Link href={flow.entryRoute} className="inline-flex border border-border bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                  Start Flow
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}

