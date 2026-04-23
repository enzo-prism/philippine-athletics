import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ClubIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import {
  PilotDataCard,
  PilotKpiCard,
  PilotSection,
  StatusPill,
} from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { getClubDashboardOrThrow } from "@/lib/data/pilot"
import { decodeIdParam } from "@/lib/data/utils"
import { getPilotContextFromSearchParams, withPilotContext } from "@/lib/pilot-context"

export default async function ClubOwnerDashboardPage({
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
  const dashboard = getClubDashboardOrThrow(id)

  if (!dashboard) notFound()

  const context = {
    pilot: requestedContext.pilot ?? dashboard.youthParticipants[0]?.lguId,
    club: dashboard.club.id,
    persona: requestedContext.persona ?? "club-owner",
  } as const

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext(`/dashboard/lgu/${context.pilot ?? "quezon-city"}`, context)}>
              <ArrowLeft className="size-4" />
              Back to LGU dashboard
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext("/demo/mobile", context)}>Open mobile walkthrough</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`/clubs/${dashboard.club.slug ?? dashboard.club.id}`}>Open public club page</Link>
          </Button>
        </div>

        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <ClubIcon className="size-4" />
              Club operator dashboard
            </span>
          }
          title={`${dashboard.club.name} operator view`}
          description={dashboard.heroNote}
          stats={dashboard.metrics.map((metric) => ({
            label: metric.label,
            value: metric.value,
            note: metric.note,
          }))}
          aside={
            <PilotDataCard
              title="Why this matters"
              description="The operator dashboard is where the pilot becomes credible beyond presentation polish."
            >
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p>It shows that clubs can actually carry youth handoff, adult discovery, and compliance in one controlled workspace.</p>
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="support">SafeSport linked</StatusPill>
                  <StatusPill tone="support">Roster-aware</StatusPill>
                  <StatusPill tone="accent">Pilot-only</StatusPill>
                </div>
              </div>
            </PilotDataCard>
          }
        />

        <PilotSection
          eyebrow="Roster health"
          title="Quick scan"
          description="This surface is denser and more operational than the public club page on purpose."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {dashboard.metrics.map((metric) => (
              <PilotKpiCard key={metric.label} label={metric.label} value={metric.value} note={metric.note} />
            ))}
          </div>
        </PilotSection>

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <PilotSection
            eyebrow="Compliance"
            title="SafeSport and recognition status"
            description="This is the operational trust layer hidden behind the public recognition view."
          >
            <div className="grid gap-3" data-testid="club-dashboard-compliance">
              {dashboard.complianceRows.map((row) => (
                <PilotDataCard key={row.label} title={row.label}>
                  <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                    <StatusPill tone={row.status === "On track" ? "support" : "warning"}>{row.status}</StatusPill>
                    <p>{row.detail}</p>
                  </div>
                </PilotDataCard>
              ))}
            </div>
          </PilotSection>

          <div className="space-y-6">
            <PilotSection
              eyebrow="Renewals"
              title="Upcoming reviews"
              description="Renewal timing is part of the club-operator story, not an afterthought."
            >
              <div className="grid gap-3">
                {dashboard.renewalRows.map((row) => (
                  <PilotDataCard key={row.label} title={row.label}>
                    <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                      <StatusPill tone={row.status === "Current" ? "support" : "warning"}>{row.status}</StatusPill>
                      <p>Due {row.due}</p>
                    </div>
                  </PilotDataCard>
                ))}
              </div>
            </PilotSection>

            <PilotSection
              eyebrow="Coverage"
              title="Funding mix"
              description="The operator can see where LGU coverage ends and fallback handling begins."
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
          eyebrow="Coach affiliations"
          title="Staff connected to this pilot"
          description="These are the same coaches already visible in the public club profile, now framed as an operator resource."
        >
          <div className="grid gap-3 md:grid-cols-2">
            {dashboard.coaches.map((coach) => (
              <PilotDataCard key={coach.id} title={coach.name} description={coach.specialty}>
                <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                  <p>{coach.experience}</p>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/coaches/${coach.slug ?? coach.id}`}>Open coach profile</Link>
                  </Button>
                </div>
              </PilotDataCard>
            ))}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Youth participants"
          title="Pilot-linked youth roster"
          description="These records stay private and operational. They do not enter public search or rankings."
        >
          <div className="grid gap-3 lg:grid-cols-2">
            {dashboard.youthParticipants.map((participant) => (
              <Link
                key={participant.id}
                href={withPilotContext(`/participants/${participant.slug}`, {
                  pilot: context.pilot,
                  club: dashboard.club.id,
                  persona: "guardian",
                })}
                className="rounded-lg border border-border/90 bg-card p-4 transition-colors hover:border-accent/25 hover:bg-muted/30"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Adult layer"
          title="Adult public athletes still live in the discovery system"
          description="This is how the pilot connects into the public performance layer without mixing youth profiles into rankings."
        >
          <div className="grid gap-3 lg:grid-cols-3">
            {dashboard.adultAthletes.map((athlete) => (
              <PilotDataCard key={athlete.id} title={athlete.name} description={athlete.specialty}>
                <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                  <div className="flex flex-wrap gap-2">
                    {athlete.pathwayStage ? <StatusPill tone="accent">{athlete.pathwayStage}</StatusPill> : null}
                    {athlete.teamAffiliation ? <StatusPill tone="support">{athlete.teamAffiliation}</StatusPill> : null}
                  </div>
                  {athlete.pb ? <p>Best result shown publicly: {athlete.pb}</p> : null}
                  <Button asChild size="sm" variant="outline">
                    <Link href={athlete.href}>Open athlete profile</Link>
                  </Button>
                </div>
              </PilotDataCard>
            ))}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Pending actions"
          title="What the operator still needs to close"
          description="This keeps the dashboard grounded in action, not just status display."
        >
          <div className="grid gap-3">
            {dashboard.pendingActions.map((item) => (
              <PilotDataCard key={item} title={item}>
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </PilotDataCard>
            ))}
          </div>
        </PilotSection>
      </main>

      <AppFooter />
    </div>
  )
}
