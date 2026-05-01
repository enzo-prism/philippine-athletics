import Image from "next/image"
import { ExternalLink } from "lucide-react"

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
            { label: "PH rank", value: formatRank(primaryEvent?.nationalRank) },
            { label: "Club", value: athlete.club },
          ]}
        />

        <div className="core-detail-grid">
          <div className="space-y-5">
            <CoreSection title="Profile overview">
              <p className="text-sm leading-7 text-muted-foreground">{athlete.bio}</p>
            </CoreSection>

            <CoreSection title="Performance">
              <div className="core-list">
                {athlete.events.map((event) => (
                  <div key={event.name} className="core-mini-item">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold">{event.name}</p>
                        {event.seasonBest ? <p className="text-xs text-muted-foreground">Season best {event.seasonBest}</p> : null}
                      </div>
                      <div className="core-facts sm:justify-end">
                        <Badge variant="outline" className="core-fact">PB {event.personalBest}</Badge>
                        <Badge variant="outline" className="core-fact">PH {formatRank(event.nationalRank)}</Badge>
                        {event.asianRank ? <Badge variant="outline" className="core-fact">Asia {formatRank(event.asianRank)}</Badge> : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CoreSection>

            <CoreSection
              title={requestedEvent ? `${formatEventLabel(requestedEvent)} results` : "Results"}
              description={latestResult ? `${latestResult.meet} is the latest visible result.` : undefined}
            >
              {visibleResults.length ? (
                <div className="core-list">
                  {visibleResults.map((result) => (
                    <div key={`${result.meet}-${result.date}-${result.event}-${result.result}`} className="core-mini-item">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-semibold">{formatEventLabel(result.event)}</p>
                          <p className="text-xs text-muted-foreground">{result.meet} · {result.date}</p>
                          <p className="text-xs text-muted-foreground">{result.location}</p>
                        </div>
                        <div className="text-sm font-semibold text-foreground sm:text-right">
                          <p>{result.result}</p>
                          <p className="text-xs font-normal text-muted-foreground">{result.place}</p>
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
            <CoreSection title="Profile details">
              <div className="core-mini-list">
                {profileFacts.map((fact) => (
                  <div key={fact.label} className="core-mini-item">
                    <p className="text-[11px] font-medium uppercase tracking-normal text-muted-foreground">{fact.label}</p>
                    <p className="mt-1 font-semibold leading-6">{fact.value}</p>
                  </div>
                ))}
              </div>
            </CoreSection>

            <CoreSection title="Relationships">
              <div className="core-list">
                <CoreResultRow
                  href={athlete.clubId ? `/clubs/${athlete.clubId}` : "/clubs"}
                  eyebrow="Club"
                  title={athlete.club}
                  description={athlete.location}
                  meta="Open club"
                />
                <CoreResultRow
                  href={athlete.coachId ? `/coaches/${athlete.coachId}` : "/coaches"}
                  eyebrow="Coach"
                  title={athlete.coach}
                  description="Linked coaching record"
                  meta="Open coach"
                />
              </div>
            </CoreSection>

            <CoreSection title="Proof">
              <div className="core-mini-list">
                {athlete.verificationBadges?.length ? (
                  athlete.verificationBadges.map((badge) => (
                    <div key={badge.label} className="core-mini-item">
                      <p className="font-semibold">{badge.label}</p>
                      {badge.detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{badge.detail}</p> : null}
                    </div>
                  ))
                ) : (
                  <div className="core-mini-item">{athlete.isStub ? "Profile details are coming soon." : "Competition results and club links are visible in this profile."}</div>
                )}
              </div>
            </CoreSection>

            {athlete.achievements.length ? (
              <CoreSection title="Highlights">
                <div className="core-mini-list">
                  {athlete.achievements.map((item) => (
                    <div key={item} className="core-mini-item">
                      {item}
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}

            {athlete.researchSources?.length ? (
              <CoreSection title="Sources">
                <div className="core-mini-list">
                  {athlete.researchSources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow]"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span>
                          <span className="block font-semibold">{source.label}</span>
                          {source.note ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.note}</span> : null}
                        </span>
                        <ExternalLink aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
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
