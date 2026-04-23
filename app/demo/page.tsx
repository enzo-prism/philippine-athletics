import Link from "next/link"
import { DashboardIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { allDemoFlows } from "@/lib/demo/flows"

export default function DemoLauncherPage() {
  const orderedFlows = [
    ...allDemoFlows.filter((flow) => flow.audienceId === "lgus"),
    ...allDemoFlows.filter((flow) => flow.audienceId !== "lgus"),
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <DashboardIcon className="size-4" />
              Scripted demo launcher
            </span>
          }
          title="Audience flows"
          description="Choose an audience to enter strict demo mode. Off-script navigation is redirected back to the guided journey."
          stats={[
            { label: "Flows", value: orderedFlows.length, note: "Governance, institutions, and LGU pathways" },
            { label: "Guardrails", value: "Strict", note: "Route locks keep the walkthrough on-script" },
          ]}
        />

        <section className="grid gap-4 md:grid-cols-3">
          {orderedFlows.map((flow) => (
            <Card
              key={flow.audienceId}
              className={`py-0 ${flow.audienceId === "lgus" ? "md:col-span-3 border-accent/25 bg-accent/5" : ""}`}
            >
              <CardContent className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-normal text-accent">{flow.label}</p>
                  {flow.audienceId === "lgus" ? (
                    <span className="rounded-full border border-accent/25 bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-normal text-accent">
                      Primary pilot-funder story
                    </span>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground">{flow.description}</p>
                <Link
                  href={flow.audienceId === "lgus" ? `${flow.entryRoute}?pilot=quezon-city&persona=lgu` : flow.entryRoute}
                  className="inline-flex border border-border bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
                >
                  {flow.audienceId === "lgus" ? "Start LGU flow" : "Start flow"}
                </Link>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
