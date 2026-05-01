import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { DashboardIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import {
  PathwayCard,
  PilotDataCard,
  PilotSection,
  StatusPill,
} from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { getPilotLguDashboard, getPilotLguDashboardOrThrow, getAllPilotLguDashboards } from "@/lib/data/pilot"
import { membershipPathways } from "@/lib/data/membership-pathways"
import { getPilotContextFromSearchParams, withPilotContext } from "@/lib/pilot-context"

export default async function LgusDemoPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const requestedContext = getPilotContextFromSearchParams(resolvedSearchParams)
  const selectedLgu = getPilotLguDashboard(requestedContext.pilot)

  if (!selectedLgu) {
    return null
  }

  const dashboard = getPilotLguDashboardOrThrow(selectedLgu.slug)
  if (!dashboard) return null

  const context = {
    pilot: dashboard.slug,
    persona: requestedContext.persona ?? "lgu",
  } as const

  const youthPathways = membershipPathways.filter((pathway) =>
    pathway.id === "lgu-sponsored-youth" || pathway.id === "individual-youth-fallback"
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <DashboardIcon className="size-4" />
              LGU pilot workspace
            </span>
          }
          title={`${dashboard.name} pilot-funder story`}
          description={dashboard.summary}
          actions={
            <>
              <Button asChild size="lg">
                <Link href={withPilotContext(`/dashboard/lgu/${dashboard.slug}`, context)}>
                  Open LGU dashboard
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={withPilotContext("/demo/mobile", context)}>Open mobile walkthrough</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/membership">View enrollment pathways</Link>
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
              title="Why this story wins"
              description="This route is designed for city buyers and pilot funders who need immediate proof of participation, coverage, and club follow-through."
            >
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>{dashboard.heroNote}</p>
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="accent">LGU-first</StatusPill>
                  <StatusPill tone="support">Youth-safe</StatusPill>
                  <StatusPill tone="support">Club-linked</StatusPill>
                </div>
              </div>
            </PilotDataCard>
          }
        />

        <PilotSection
          eyebrow="Pilot cities"
          title="Choose the pilot context you want to present"
          description="Quezon City is the strongest pilot-funder narrative, while Cebu City and Davao City broaden the rollout story."
        >
          <div className="grid gap-3 md:grid-cols-3">
            {getAllPilotLguDashboards().map((lgu) => {
              const active = lgu.slug === dashboard.slug
              return (
                <Link
                  key={lgu.slug}
                  href={withPilotContext(`/demo/lgus?pilot=${lgu.slug}`, {
                    pilot: lgu.slug,
                    persona: context.persona,
                  })}
                  className={`rounded-lg border p-4 transition-[background-color,border-color,box-shadow] ${
                    active
                      ? "border-accent/25 bg-accent/5"
                      : "hover-stroke-surface border-border/90 bg-card"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-foreground">{lgu.name}</p>
                      {active ? <StatusPill tone="accent">Active</StatusPill> : null}
                    </div>
                    <p className="text-xs uppercase tracking-normal text-muted-foreground">{lgu.region}</p>
                    <p className="text-sm leading-6 text-muted-foreground">{lgu.heroNote}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Funding proof"
          title="Show what the LGU spend is buying"
          description="This is the core investor and public-sector ask: visible activity, visible support, and visible next checkpoints."
        >
          <div className="grid gap-3 xl:grid-cols-3">
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

        <PilotSection
          eyebrow="Youth proof"
          title="Youth participants stay safe and still show progress"
          description="These are sample participant records only. The dashboard story is larger than the seed set, but every sample is tied to the same pilot logic."
        >
          <div className="grid gap-3 lg:grid-cols-2">
            {dashboard.participants.map((participant) => (
              <Link
                key={participant.id}
                href={withPilotContext(`/participants/${participant.slug}`, {
                  pilot: dashboard.slug,
                  club: participant.clubId,
                  persona: "guardian",
                })}
                className="hover-stroke-surface rounded-lg border border-border/90 bg-card p-4 transition-[background-color,border-color,box-shadow]"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-base font-semibold tracking-normal text-foreground">{participant.displayName}</p>
                    <StatusPill tone={participant.paymentCoverage === "LGU-covered" ? "support" : "warning"}>
                      {participant.paymentCoverage}
                    </StatusPill>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>{participant.schoolOrTeam}</p>
                    <p>{participant.qualificationStatus}</p>
                    <p>{participant.attendanceRate}% attendance this block</p>
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-normal text-accent">Open youth-safe profile</p>
                </div>
              </Link>
            ))}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Partner clubs"
          title="Club handoff is already visible"
          description="The pilot works because LGU enrollment does not stop at registration. It hands off into a club operator surface with compliance and roster context."
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

        <PilotSection
          eyebrow="Enrollment pathways"
          title="The pilot now uses pathway-based entry points"
          description="This keeps youth funding logic, fallback handling, and club operations legible instead of forcing everyone into one generic membership tier."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {youthPathways.map((pathway) => (
              <PathwayCard
                key={pathway.id}
                title={pathway.title}
                audience={pathway.audience}
                summary={pathway.summary}
                highlights={pathway.highlights}
                action={
                  <Button asChild>
                    <Link href={pathway.ctaHref}>{pathway.ctaLabel}</Link>
                  </Button>
                }
              />
            ))}
          </div>
        </PilotSection>
      </main>

      <AppFooter />
    </div>
  )
}
