import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { DashboardIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import {
  PilotDataCard,
  PilotKpiCard,
  PilotSection,
  StatusPill,
} from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { getAllPilotLguDashboards, getPilotLguDashboardOrThrow } from "@/lib/data/pilot"
import { decodeIdParam } from "@/lib/data/utils"
import { getPilotContextFromSearchParams, withPilotContext } from "@/lib/pilot-context"

export default async function LguDashboardPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const { id: rawId } = await params
  const resolvedSearchParams = await searchParams
  const id = decodeIdParam(rawId)
  const requestedContext = getPilotContextFromSearchParams(resolvedSearchParams)
  const dashboard = getPilotLguDashboardOrThrow(id)

  if (!dashboard) notFound()

  const context = {
    pilot: dashboard.slug,
    persona: requestedContext.persona ?? "lgu",
  } as const

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext("/demo/lgus", context)}>
              <ArrowLeft className="size-4" />
              Back to LGU entry
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext("/demo/mobile", context)}>Open mobile walkthrough</Link>
          </Button>
        </div>

        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <DashboardIcon className="size-4" />
              LGU dashboard
            </span>
          }
          title={`${dashboard.name} pilot dashboard`}
          description={dashboard.heroNote}
          actions={
            <>
              <Button asChild size="lg">
                <Link href={withPilotContext("/membership", context)}>
                  View enrollment pathways
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </>
          }
          stats={dashboard.metrics.map((metric) => ({
            label: metric.label,
            value: metric.value,
            note: metric.note,
          }))}
          aside={
            <PilotDataCard
              title="Dashboard intent"
              description="This is the operational proof surface for LGU buyers, not a public youth directory."
            >
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p>Use this view to show funded activity, club support, and qualification readiness without exposing youth performance data publicly.</p>
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="accent">Read-only pilot</StatusPill>
                  <StatusPill tone="support">Youth-safe</StatusPill>
                  <StatusPill tone="support">Club-linked</StatusPill>
                </div>
              </div>
            </PilotDataCard>
          }
        />

        <PilotSection
          eyebrow="KPI layer"
          title="Quick scan"
          description="The dashboard stays dense, fast to scan, and intentionally legible for funding conversations."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {dashboard.metrics.map((metric) => (
              <PilotKpiCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
            ))}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="City switcher"
          title="Compare rollout contexts"
          description="The same product surface can tell a stronger multi-city rollout story without changing the operating model."
        >
          <div className="grid gap-3 md:grid-cols-3">
            {getAllPilotLguDashboards().map((lgu) => {
              const active = lgu.slug === dashboard.slug
              return (
                <Link
                  key={lgu.slug}
                  href={withPilotContext(`/dashboard/lgu/${lgu.slug}`, {
                    pilot: lgu.slug,
                    persona: context.persona,
                  })}
                  className={`rounded-lg border p-4 transition-colors ${
                    active
                      ? "border-accent/25 bg-accent/5"
                      : "border-border/90 bg-card hover:border-accent/20 hover:bg-muted/30"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-base font-semibold tracking-normal text-foreground">{lgu.name}</p>
                      {active ? <StatusPill tone="accent">Active</StatusPill> : null}
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{lgu.summary}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Participant spotlight"
          title="Youth records show continuity, not public performance"
          description="Each participant card is private-by-default and exists to prove attendance, qualification, coverage, and club handoff."
        >
          <div className="grid gap-3 lg:grid-cols-2" data-testid="lgu-participant-grid">
            {dashboard.participants.map((participant) => (
              <Link
                key={participant.id}
                href={withPilotContext(`/participants/${participant.slug}`, {
                  pilot: dashboard.slug,
                  club: participant.clubId,
                  persona: "guardian",
                })}
                className="rounded-lg border border-border/90 bg-card p-4 transition-colors hover:border-accent/25 hover:bg-muted/30"
                data-testid="lgu-participant-link"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-semibold tracking-normal text-foreground">{participant.displayName}</p>
                    <StatusPill tone={participant.paymentCoverage === "LGU-covered" ? "support" : "warning"}>
                      {participant.paymentCoverage}
                    </StatusPill>
                  </div>
                  <div className="space-y-1 text-sm leading-6 text-muted-foreground">
                    <p>{participant.schoolOrTeam}</p>
                    <p>{participant.qualificationStatus}</p>
                    <p>{participant.attendanceRate}% attendance</p>
                    <p>{participant.nextCheckpoint}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PilotSection>

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.95fr]">
          <PilotSection
            eyebrow="Funding proof"
            title="What the spend is buying"
            description="This is the strongest justification layer for pilot-funder conversations."
          >
            <div className="grid gap-3">
              {dashboard.spendProof.map((item) => (
                <PilotDataCard key={item.title} title={item.title}>
                  <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                    <p>{item.summary}</p>
                    <p className="font-medium text-foreground">{item.proof}</p>
                  </div>
                </PilotDataCard>
              ))}
            </div>
          </PilotSection>

          <div className="space-y-6">
            <PilotSection
              eyebrow="Team leaders"
              title="Operational cadence"
              description="Pilot funders can see that local leaders are actually reporting."
            >
              <div className="grid gap-3">
                {dashboard.teamLeaders.map((leader) => (
                  <PilotDataCard key={leader.name} title={leader.name} description={leader.role}>
                    <div className="space-y-1 text-sm leading-6 text-muted-foreground">
                      <p>{leader.coverage}</p>
                      <p>{leader.lastSync}</p>
                    </div>
                  </PilotDataCard>
                ))}
              </div>
            </PilotSection>

            <PilotSection
              eyebrow="Coverage"
              title="Funding state"
              description="This makes partial coverage legible without losing the participant record."
            >
              <div className="grid gap-3">
                {dashboard.paymentCoverage.map((metric) => (
                  <PilotKpiCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
                ))}
              </div>
            </PilotSection>
          </div>
        </div>

        <PilotSection
          eyebrow="Club partners"
          title="Where the youth pathway hands off next"
          description="The club surface is the bridge between youth roster proof and the adult public discovery layer."
        >
          <div className="grid gap-3 lg:grid-cols-2">
            {dashboard.clubs.map((club) => (
              <PilotDataCard key={club.id} title={club.name} description={club.focus}>
                <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                  <p>{club.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {club.recognitions?.slice(0, 3).map((item) => (
                      <StatusPill key={item} tone="support">
                        {item}
                      </StatusPill>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <Link
                        href={withPilotContext(`/dashboard/clubs/${club.slug ?? club.id}`, {
                          pilot: dashboard.slug,
                          club: club.id,
                          persona: "club-owner",
                        })}
                      >
                        Open club dashboard
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/clubs/${club.slug ?? club.id}`}>Open public club page</Link>
                    </Button>
                  </div>
                </div>
              </PilotDataCard>
            ))}
          </div>
        </PilotSection>
      </main>

      <AppFooter />
    </div>
  )
}
