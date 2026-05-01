import Image from "next/image"
import type { ReactNode } from "react"
import {
  Activity,
  Award,
  Building2,
  CalendarDays,
  ClipboardCheck,
  ExternalLink,
  FileCheck2,
  Flag,
  Link2,
  MapPin,
  Medal,
  ShieldCheck,
  Timer,
  Trophy,
  UserRound,
  type LucideIcon,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Badge } from "@/components/ui/badge"
import { getAthleteProfileOrStub } from "@/lib/data/athletes"
import { getMergedCompetitionResults } from "@/lib/data/performance-evidence"
import { decodeIdParam, formatEventLabel, normalizeKey, parseDateToTimestamp } from "@/lib/data/utils"

export const dynamic = "force-dynamic"
export const dynamicParams = true

const formatRank = (rank?: string | number) => {
  if (rank === undefined || rank === null || rank === "") return "Unranked"
  const value = typeof rank === "number" ? String(rank) : rank.replace("#", "")
  return `#${value}`
}

const getHeroRankStat = (event?: { nationalRank?: string | number; globalRank?: string | number }) => {
  if (event?.nationalRank) return { label: "PH rank", value: formatRank(event.nationalRank) }
  if (event?.globalRank) return { label: "World rank", value: formatRank(event.globalRank) }
  return { label: "Rank", value: "Unranked" }
}

const factIconMap: Record<string, LucideIcon> = {
  "World Athletics ID": ShieldCheck,
  Born: CalendarDays,
  Hometown: MapPin,
  Team: Flag,
  Club: Building2,
  Coach: ClipboardCheck,
  "Coach / operator": ClipboardCheck,
  "Primary event": Activity,
  "Primary range": Activity,
  "All-time PB": Timer,
  "National records": Trophy,
  "SEA Games proof": Medal,
  "Philippine record note": Award,
} satisfies Record<string, LucideIcon>

type IconLabelProps = {
  icon: LucideIcon
  children: ReactNode
}

function IconLabel({ icon: Icon, children }: IconLabelProps) {
  return (
    <span className="athlete-icon-label">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </span>
  )
}

function getFactIcon(label: string) {
  return factIconMap[label] ?? FileCheck2
}

export default async function AthleteProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ event?: string }>
}) {
  const { id: rawId } = await params
  const resolvedSearchParams = await searchParams
  const id = decodeIdParam(rawId)
  const athlete = getAthleteProfileOrStub(id)
  const fullName = `${athlete.firstName} ${athlete.lastName}`.trim()
  const primaryEvent = athlete.events[0]
  const requestedEvent = resolvedSearchParams?.event?.trim()
  const requestedEventKey = requestedEvent ? normalizeKey(requestedEvent) : null
  const sortedResults = getMergedCompetitionResults(athlete).sort(
    (a, b) => (parseDateToTimestamp(b.date) ?? 0) - (parseDateToTimestamp(a.date) ?? 0),
  )
  const visibleResults = requestedEventKey
    ? sortedResults.filter((result) => normalizeKey(result.event) === requestedEventKey)
    : sortedResults
  const latestResult = visibleResults[0] ?? sortedResults[0]
  const heroRankStat = getHeroRankStat(primaryEvent)
  const profileFacts =
    athlete.profileFacts?.length
      ? athlete.profileFacts
      : [
          { label: "Born", value: athlete.birthDate },
          { label: "Hometown", value: athlete.hometown ?? athlete.location },
          { label: "Team", value: athlete.teamAffiliation ?? athlete.club },
          { label: "Coach", value: athlete.coach },
        ].filter((fact) => fact.value && fact.value !== "—")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreBreadcrumb items={[{ label: "Athletes", href: "/athletes" }, { label: fullName }]} />

        <CoreHero
          eyebrow={athlete.pathwayStage ?? "Athlete"}
          title={fullName}
          description={athlete.specialty}
          visual={
            athlete.headshot ? (
              <figure className="athlete-headshot-panel">
                <div className="athlete-headshot-frame">
                  <Image
                    src={athlete.headshot.src}
                    alt={athlete.headshot.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 292px, 260px"
                    style={{ objectPosition: athlete.headshot.position ?? "center" }}
                  />
                </div>
                <figcaption className="athlete-headshot-caption">
                  <strong>{fullName}</strong>
                  <span>{athlete.teamAffiliation ?? athlete.club}</span>
                </figcaption>
              </figure>
            ) : undefined
          }
          stats={[
            { label: "Primary event", value: primaryEvent?.name ?? "Event" },
            { label: "Personal best", value: primaryEvent?.personalBest ?? "TBD" },
            heroRankStat,
            { label: "Club", value: athlete.club },
          ]}
        />

        <div className="core-detail-grid">
          <div className="space-y-5">
            <CoreSection title={<IconLabel icon={UserRound}>Profile overview</IconLabel>}>
              <p className="text-sm leading-7 text-muted-foreground">{athlete.bio}</p>
            </CoreSection>

            <CoreSection title={<IconLabel icon={Activity}>Performance</IconLabel>}>
              <div className="core-list">
                {athlete.events.map((event) => (
                  <div key={event.name} className="core-mini-item">
                    <div className="athlete-scan-row sm:items-center">
                      <span className="athlete-row-icon" aria-hidden="true">
                        <Activity />
                      </span>
                      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <p className="font-semibold">{event.name}</p>
                          {event.seasonBest ? (
                            <p className="athlete-inline-meta">
                              <Timer aria-hidden="true" />
                              <span>Season best {event.seasonBest}</span>
                            </p>
                          ) : null}
                        </div>
                        <div className="core-facts sm:justify-end">
                          <Badge variant="outline" className="core-fact">PB {event.personalBest}</Badge>
                          {event.nationalRank ? <Badge variant="outline" className="core-fact">PH {formatRank(event.nationalRank)}</Badge> : null}
                          {!event.nationalRank && event.globalRank ? <Badge variant="outline" className="core-fact">World {formatRank(event.globalRank)}</Badge> : null}
                          {event.asianRank ? <Badge variant="outline" className="core-fact">Asia {formatRank(event.asianRank)}</Badge> : null}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CoreSection>

            <CoreSection
              title={<IconLabel icon={Timer}>{requestedEvent ? `${formatEventLabel(requestedEvent)} results` : "Results"}</IconLabel>}
              description={latestResult ? `${latestResult.meet} is the latest visible result.` : undefined}
            >
              {visibleResults.length ? (
                <div className="core-list">
                  {visibleResults.map((result) => (
                    <div key={`${result.meet}-${result.date}-${result.event}-${result.result}`} className="core-mini-item">
                      <div className="athlete-scan-row sm:items-center">
                        <span className="athlete-row-icon" aria-hidden="true">
                          <Timer />
                        </span>
                        <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="min-w-0">
                            <p className="font-semibold">{formatEventLabel(result.event)}</p>
                            <p className="athlete-inline-meta">
                              <CalendarDays aria-hidden="true" />
                              <span>{result.meet} · {result.date}</span>
                            </p>
                            <p className="athlete-inline-meta">
                              <MapPin aria-hidden="true" />
                              <span>{result.location}</span>
                            </p>
                          </div>
                          <div className="text-sm font-semibold text-foreground sm:text-right">
                            <p>{result.result}</p>
                            <p className="text-xs font-normal text-muted-foreground">{result.place}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="No results available" description="Results for this event will appear once they are linked to the athlete profile." />
              )}
            </CoreSection>
          </div>

          <aside className="space-y-5">
            <CoreSection title={<IconLabel icon={FileCheck2}>Profile details</IconLabel>}>
              <div className="core-mini-list">
                {profileFacts.map((fact) => {
                  const FactIcon = getFactIcon(fact.label)

                  return (
                    <div key={fact.label} className="core-mini-item">
                      <div className="athlete-scan-row">
                        <span className="athlete-row-icon" aria-hidden="true">
                          <FactIcon />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[11px] font-medium uppercase tracking-normal text-muted-foreground">{fact.label}</p>
                          <p className="mt-1 font-semibold leading-6">{fact.value}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CoreSection>

            <CoreSection title={<IconLabel icon={Link2}>Relationships</IconLabel>}>
              <div className="core-list">
                <CoreResultRow
                  href={athlete.clubId ? `/clubs/${athlete.clubId}` : "/clubs"}
                  eyebrow={<IconLabel icon={Building2}>Club</IconLabel>}
                  title={athlete.club}
                  description={athlete.location}
                  meta="Open club"
                />
                <CoreResultRow
                  href={athlete.coachId ? `/coaches/${athlete.coachId}` : "/coaches"}
                  eyebrow={<IconLabel icon={ClipboardCheck}>Coach</IconLabel>}
                  title={athlete.coach}
                  description="Linked coaching record"
                  meta="Open coach"
                />
              </div>
            </CoreSection>

            <CoreSection title={<IconLabel icon={ShieldCheck}>Proof</IconLabel>}>
              <div className="core-mini-list">
                {athlete.verificationBadges?.length ? (
                  athlete.verificationBadges.map((badge) => (
                    <div key={badge.label} className="core-mini-item">
                      <div className="athlete-scan-row">
                        <span className="athlete-row-icon" aria-hidden="true">
                          <ShieldCheck />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold">{badge.label}</p>
                          {badge.detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{badge.detail}</p> : null}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="core-mini-item">
                    <div className="athlete-scan-row">
                      <span className="athlete-row-icon" aria-hidden="true">
                        <ShieldCheck />
                      </span>
                      <span>{athlete.isStub ? "Profile details are coming soon." : "Competition results and club links are visible in this profile."}</span>
                    </div>
                  </div>
                )}
              </div>
            </CoreSection>

            {athlete.achievements.length ? (
              <CoreSection title={<IconLabel icon={Medal}>Highlights</IconLabel>}>
                <div className="core-mini-list">
                  {athlete.achievements.map((item) => (
                    <div key={item} className="core-mini-item">
                      <div className="athlete-scan-row">
                        <span className="athlete-row-icon" aria-hidden="true">
                          <Medal />
                        </span>
                        <span className="min-w-0 leading-6">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}

            {athlete.researchSources?.length ? (
              <CoreSection title={<IconLabel icon={Link2}>Sources</IconLabel>}>
                <div className="core-mini-list">
                  {athlete.researchSources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow]"
                    >
                      <span className="athlete-scan-row">
                        <span className="athlete-row-icon" aria-hidden="true">
                          <Link2 />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold">{source.label}</span>
                          {source.note ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.note}</span> : null}
                        </span>
                        <ExternalLink aria-hidden="true" className="mt-1 size-4 shrink-0 text-muted-foreground" />
                      </span>
                    </a>
                  ))}
                </div>
              </CoreSection>
            ) : null}
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
