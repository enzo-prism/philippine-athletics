import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { ProfileIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, DetailHero } from "@/components/site/page-primitives"
import { PilotDataCard, PilotSection, StatusPill } from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { getClubDashboardOrThrow, getYouthParticipantProfile } from "@/lib/data/pilot"
import { decodeIdParam } from "@/lib/data/utils"
import { getPilotContextFromSearchParams, withPilotContext } from "@/lib/pilot-context"

export default async function ParticipantPage({
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
  const participant = getYouthParticipantProfile(id)

  if (!participant) notFound()

  const clubDashboard = getClubDashboardOrThrow(participant.clubId)
  const context = {
    pilot: requestedContext.pilot ?? participant.lguId,
    club: requestedContext.club ?? participant.clubId,
    persona: requestedContext.persona ?? "guardian",
  } as const

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8" data-testid="participant-profile">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext(`/dashboard/lgu/${context.pilot ?? "quezon-city"}`, context)}>
              <ArrowLeft className="size-4" />
              Back to LGU dashboard
            </Link>
          </Button>
          {clubDashboard ? (
            <Button asChild variant="outline" size="sm">
              <Link href={withPilotContext(`/dashboard/clubs/${clubDashboard.slug}`, context)}>Open club dashboard</Link>
            </Button>
          ) : null}
          <Button asChild variant="outline" size="sm">
            <Link href={withPilotContext("/demo/mobile", context)}>Open mobile walkthrough</Link>
          </Button>
        </div>

        <DetailHero
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <ProfileIcon className="size-4" />
              Youth participant
            </span>
          }
          title={participant.displayName}
          description="Youth-safe pilot view designed for attendance, qualification, and coverage tracking without exposing private performance metrics publicly."
          chips={
            <>
              <span className="inline-flex items-center rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                {participant.city}, {participant.province}
              </span>
              <span className="inline-flex items-center rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                {participant.programName}
              </span>
              <span className="inline-flex items-center rounded-full border border-accent/25 bg-accent/8 px-3 py-1 text-xs font-semibold text-accent">
                Youth-safe profile
              </span>
            </>
          }
          notice="Private-by-design: this participant page hides birth date, public ranks, and public performance cards in this pilot phase."
          stats={[
            { label: "Attendance", value: `${participant.attendanceRate}%`, note: "Current pilot block" },
            { label: "Qualification", value: participant.qualificationStatus, note: "Latest program checkpoint" },
            { label: "Coverage", value: participant.paymentCoverage, note: participant.paymentNote },
            { label: "Team leader", value: participant.teamLeader, note: participant.nextCheckpoint },
          ]}
          aside={
            <PilotDataCard
              title="Why this surface exists"
              description="It proves continuity for funders and operators without turning youth records into public athlete pages."
            >
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p>The point is not to show stats. The point is to show that the athlete is active, covered, and still moving through a real pathway.</p>
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="support">Attendance visible</StatusPill>
                  <StatusPill tone="support">Qualification visible</StatusPill>
                  <StatusPill tone="accent">Performance hidden</StatusPill>
                </div>
              </div>
            </PilotDataCard>
          }
        />

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <PilotSection
              eyebrow="Verification"
              title="Trusted checkpoints"
              description="These badges tell the operator what is confirmed without making the record feel like a public athlete profile."
            >
              <div className="grid gap-3">
                {participant.verificationBadges.map((badge) => (
                  <PilotDataCard key={badge.label} title={badge.label}>
                    <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                      <StatusPill tone={badge.tone}>{badge.label}</StatusPill>
                      <p>{badge.detail}</p>
                    </div>
                  </PilotDataCard>
                ))}
              </div>
            </PilotSection>

            <PilotSection
              eyebrow="Participation snapshot"
              title="What the operator needs to know"
              description="This is intentionally simple: team, location, attendance, qualification, and next checkpoint."
            >
              <div className="grid gap-3 md:grid-cols-2">
                <PilotDataCard title="School or team">
                  <p className="text-sm leading-6 text-muted-foreground">{participant.schoolOrTeam}</p>
                </PilotDataCard>
                <PilotDataCard title="Guardian contact state">
                  <p className="text-sm leading-6 text-muted-foreground">{participant.guardianContactState}</p>
                </PilotDataCard>
                <PilotDataCard title="Program">
                  <p className="text-sm leading-6 text-muted-foreground">{participant.programName}</p>
                </PilotDataCard>
                <PilotDataCard title="Next checkpoint">
                  <p className="text-sm leading-6 text-muted-foreground">{participant.nextCheckpoint}</p>
                </PilotDataCard>
              </div>
            </PilotSection>
          </div>

          <div className="space-y-6">
            <PilotSection
              eyebrow="Coverage"
              title="Funding and handoff"
              description="The funding story stays visible, even when the athlete needs an individual fallback."
            >
              <PilotDataCard title={participant.paymentCoverage}>
                <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                  <StatusPill tone={participant.paymentCoverage === "LGU-covered" ? "support" : "warning"}>
                    {participant.paymentCoverage}
                  </StatusPill>
                  <p>{participant.paymentNote}</p>
                </div>
              </PilotDataCard>
            </PilotSection>

            {clubDashboard ? (
              <PilotSection
                eyebrow="Club handoff"
                title="Where this participant goes next"
                description="The club dashboard is the next surface in the pilot, not a separate disconnected product."
              >
                <PilotDataCard title={clubDashboard.club.name} description={clubDashboard.club.focus}>
                  <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                    <p>{clubDashboard.heroNote}</p>
                    <Button asChild size="sm">
                      <Link href={withPilotContext(`/dashboard/clubs/${clubDashboard.slug}`, context)}>
                        Open club dashboard
                      </Link>
                    </Button>
                  </div>
                </PilotDataCard>
              </PilotSection>
            ) : null}

            <PilotSection
              eyebrow="Privacy promise"
              title="What stays private"
              description="The pilot protects youth records by default."
            >
              <PilotDataCard title="Private by design" className="border-accent/20 bg-accent/5" >
                <p className="text-sm leading-6 text-muted-foreground">
                  This page does not expose date of birth, public ranking cards, or public performance history. Youth records only surface through pilot dashboards until they graduate into adult competition flows.
                </p>
              </PilotDataCard>
            </PilotSection>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
