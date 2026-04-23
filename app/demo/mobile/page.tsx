import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MobileIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { PhoneFrame, StatusPill } from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { getPilotContextFromSearchParams, withPilotContext } from "@/lib/pilot-context"
import { getPilotLguDashboardOrThrow, getYouthParticipantsForLgu } from "@/lib/data/pilot"

export default async function MobileDemoPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const requestedContext = getPilotContextFromSearchParams(resolvedSearchParams)
  const dashboard = getPilotLguDashboardOrThrow(requestedContext.pilot ?? "quezon-city")

  if (!dashboard) return null

  const context = {
    pilot: dashboard.slug,
    persona: requestedContext.persona ?? "guardian",
  } as const

  const participants = getYouthParticipantsForLgu(dashboard.slug)
  const primaryParticipant = participants[0]
  const fallbackParticipant = participants.find((participant) => participant.paymentCoverage === "Needs individual fallback") ?? participants[0]

  if (!primaryParticipant || !fallbackParticipant) return null

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8" data-testid="mobile-demo">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext(`/dashboard/lgu/${dashboard.slug}`, context)}>
              <ArrowLeft className="size-4" />
              Back to LGU dashboard
            </Link>
          </Button>
        </div>

        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <MobileIcon className="size-4" />
              Mobile pilot walkthrough
            </span>
          }
          title={`${dashboard.name} mobile demo`}
          description="This phone-framed view is presentation-safe and keeps the three highest-value pilot screens together: youth check-in, LGU pulse, and payment fallback."
          stats={[
            { label: "Pilot city", value: dashboard.name, note: dashboard.region },
            { label: "Primary user", value: "Youth + LGU operator", note: "Built for phone-based walkthroughs" },
            { label: "Payment mode", value: "UI only", note: "No live checkout in this phase" },
          ]}
        />

        <section className="grid gap-6 lg:grid-cols-3">
          <PhoneFrame title="Youth check-in" subtitle={primaryParticipant.programName}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-sm font-semibold">{primaryParticipant.displayName}</p>
              <p className="mt-1 text-xs leading-5 text-white/70">{primaryParticipant.schoolOrTeam}</p>
            </div>
            <div className="grid gap-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-normal text-white/50">Attendance</p>
                <p className="mt-1 text-lg font-semibold">{primaryParticipant.attendanceRate}%</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-normal text-white/50">Next checkpoint</p>
                <p className="mt-1 text-sm leading-6 text-white/80">{primaryParticipant.nextCheckpoint}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusPill tone="support">Guardian confirmed</StatusPill>
              <StatusPill tone="accent">Team leader active</StatusPill>
            </div>
          </PhoneFrame>

          <PhoneFrame title="LGU pulse" subtitle="What the city buyer can see on a phone">
            {dashboard.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-normal text-white/50">{metric.label}</p>
                <p className="mt-1 text-lg font-semibold">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-white/70">{metric.note}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-normal text-white/50">Why it matters</p>
              <p className="mt-1 text-sm leading-6 text-white/80">
                The mobile story still shows participation, club linkage, and funding proof without forcing the presenter into a complex backend flow.
              </p>
            </div>
          </PhoneFrame>

          <PhoneFrame title="Fallback coverage" subtitle="When LGU coverage is partial">
            <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-3">
              <p className="text-sm font-semibold">{fallbackParticipant.displayName}</p>
              <p className="mt-1 text-xs leading-5 text-white/70">{fallbackParticipant.paymentNote}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-[11px] uppercase tracking-normal text-white/50">Current state</p>
              <p className="mt-1 text-lg font-semibold">{fallbackParticipant.paymentCoverage}</p>
              <p className="mt-1 text-xs leading-5 text-white/70">{fallbackParticipant.guardianContactState}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusPill tone="warning">Pay individually</StatusPill>
              <StatusPill tone="accent">Roster still active</StatusPill>
            </div>
          </PhoneFrame>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
