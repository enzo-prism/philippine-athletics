import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { AppFooter, DetailHero } from "@/components/site/page-primitives"
import { Badge } from "@/components/ui/badge"
import { getAthleteProfile } from "@/lib/data/athletes"
import { getCompetitionByIdOrStub } from "@/lib/data/competitions"
import {
  getAgeGroup,
  getBestResultForEvent,
  getCompetitionYear,
  toCanonicalEventKey,
} from "@/lib/data/performance-evidence"
import { decodeIdParam, normalizeKey } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default async function CompetitionProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ event?: string }>
}) {
  const { id: rawId } = await params
  const param = decodeIdParam(rawId)
  const competition = getCompetitionByIdOrStub(param)
  const isStub = competition.isStub
  const resolvedSearchParams = await searchParams
  const selectedEvent = resolvedSearchParams?.event?.trim() ?? ""
  const normalizedSelected = selectedEvent ? normalizeKey(selectedEvent) : null
  const results = competition.results ?? []
  const isUpcoming = competition.status === "Upcoming"
  const filteredResults = normalizedSelected
    ? results.filter((eventBlock) => normalizeKey(eventBlock.event) === normalizedSelected)
    : results
  const baseHref = `/competitions/${competition.slug ?? param}`
  const competitionYear = getCompetitionYear(competition.startDate) ?? new Date().getFullYear()

  const getResultFlags = (athleteId: string | undefined, event: string, result: string) => {
    if (!athleteId) return { isPB: false, isSB: false }
    const athlete = getAthleteProfile(athleteId)
    if (!athlete) return { isPB: false, isSB: false }
    const eventKey = toCanonicalEventKey(event)
    const pb = getBestResultForEvent({ athlete, eventKey, scope: "all-time" })?.competition.result?.trim()
    const sb = getBestResultForEvent({
      athlete,
      eventKey,
      scope: "year",
      year: competitionYear,
    })?.competition.result?.trim()
    const normalizedResult = result.trim()
    return {
      isPB: Boolean(pb && pb !== "—" && pb === normalizedResult),
      isSB: Boolean(sb && sb !== "—" && sb === normalizedResult),
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <Link href="/competitions" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Competitions
        </Link>

        <DetailHero
          eyebrow="Competition"
          title={competition.name}
          description={competition.type}
          chips={
            <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
              <Emoji symbol={emojiIcons.location} className="text-sm" />
              {competition.location}
            </span>
          }
          notice={
            isStub ? "Competition details are coming soon. Basic placeholder shown to avoid broken links." : undefined
          }
          stats={[
            { label: "Participants", value: competition.participants, note: "Competition scale and field size" },
            { label: "Countries", value: competition.countries, note: "Regional or international footprint" },
            { label: "Records set", value: competition.records, note: "Competition performance markers" },
            { label: "Status", value: competition.status, note: competition.dateLabel },
          ]}
          aside={
            <div className="detail-sidebar-card space-y-3">
              <p className="brand-eyebrow">Competition context</p>
              <p className="text-sm text-muted-foreground">{competition.dateLabel}</p>
              <div className="detail-list-item bg-background/74">
                <p className="text-xs font-semibold uppercase text-muted-foreground">Organizer</p>
                <p className="mt-1 text-sm text-foreground">{competition.organizer}</p>
              </div>
              <div className="detail-list-item bg-background/74">
                <p className="text-xs font-semibold uppercase text-muted-foreground">Sponsor</p>
                <p className="mt-1 text-sm text-foreground">{competition.sponsor}</p>
              </div>
            </div>
          }
        />

        <div className="detail-layout">
          <div className="detail-stack">
            <section className="page-section-tight space-y-3">
              <h2 className="text-xl font-semibold text-foreground">About</h2>
              <p className="text-sm leading-6 text-foreground">{competition.about}</p>
            </section>

            {isUpcoming ? (
              <section className="page-section-tight text-sm text-muted-foreground">
                Results will be posted after the competition concludes. Check back for official times and placements.
              </section>
            ) : results.length ? (
              <section className="page-section-tight space-y-4">
                <div className="section-toolbar">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-foreground">Results</h2>
                    <p className="text-sm text-muted-foreground">Filter event blocks while preserving athlete deep links.</p>
                  </div>
                  <Badge variant="outline" className="border-border text-foreground bg-background/78">
                    Demo data
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Filter:</span>
                  <Link
                    href={baseHref}
                    className={`rounded-full border px-3 py-1 ${
                      !normalizedSelected ? "border-accent text-accent" : "border-border text-foreground"
                    }`}
                    data-testid="competition-event-filter"
                  >
                    All events
                  </Link>
                  {results.map((eventBlock) => (
                    <Link
                      key={eventBlock.event}
                      href={`${baseHref}?event=${encodeURIComponent(eventBlock.event)}`}
                      className={`rounded-full border px-3 py-1 ${
                        normalizedSelected && normalizeKey(eventBlock.event) === normalizedSelected
                          ? "border-accent text-accent"
                          : "border-border text-foreground"
                      }`}
                      data-testid="competition-event-filter"
                    >
                      {eventBlock.event}
                    </Link>
                  ))}
                </div>

                <div className="space-y-4" data-testid="competition-results">
                  {filteredResults.map((eventBlock) => (
                    <div key={eventBlock.event} className="page-section-tight space-y-3 bg-background/78">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-foreground">{eventBlock.event}</p>
                        {eventBlock.round ? (
                          <span className="text-xs font-semibold uppercase text-muted-foreground">{eventBlock.round}</span>
                        ) : null}
                      </div>

                      <div className="space-y-2">
                        {eventBlock.entries.map((entry, idx) => {
                          const { isPB, isSB } = getResultFlags(entry.athleteId, eventBlock.event, entry.result)
                          const content = (
                            <div className="flex items-center justify-between gap-3 text-sm">
                              <div>
                                <div className="flex flex-wrap items-center gap-2">
                                  <p className="font-semibold text-foreground">{entry.athleteName}</p>
                                  {isPB ? (
                                    <Badge variant="outline" className="border-accent/40 text-accent">
                                      PB
                                    </Badge>
                                  ) : null}
                                  {!isPB && isSB ? (
                                    <Badge variant="outline" className="border-amber-300/70 bg-amber-50 text-amber-700">
                                      SB
                                    </Badge>
                                  ) : null}
                                </div>
                                <p className="text-xs text-muted-foreground">{entry.place}</p>
                                <p className="text-[11px] text-muted-foreground">{entry.source ?? "Demo data"}</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-foreground">{entry.result}</p>
                                {entry.note ? <p className="text-xs text-muted-foreground">{entry.note}</p> : null}
                              </div>
                            </div>
                          )

                          const linkedAthlete = entry.athleteId ? getAthleteProfile(entry.athleteId) : undefined
                          const linkQuery = new URLSearchParams({
                            event: eventBlock.event,
                            year: String(competitionYear),
                          })
                          if (linkedAthlete?.gender) {
                            linkQuery.set("gender", linkedAthlete.gender)
                            linkQuery.set("ageGroup", getAgeGroup(linkedAthlete.birthDate, competitionYear))
                          }
                          const href = entry.athleteId ? `/athletes/${entry.athleteId}?${linkQuery.toString()}` : null

                          return href ? (
                            <Link
                              key={`${entry.athleteName}-${idx}`}
                              href={href}
                              className="block detail-list-item hover:border-accent transition-colors"
                              data-testid="competition-result-entry"
                            >
                              {content}
                            </Link>
                          ) : (
                            <div
                              key={`${entry.athleteName}-${idx}`}
                              className="detail-list-item"
                              data-testid="competition-result-entry"
                            >
                              {content}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="page-section-tight space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Events</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {competition.events.map((event, i) => (
                  <div key={i} className="detail-list-item flex gap-2 bg-background/74">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <p className="text-sm text-foreground">{event}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="page-section-tight space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Highlights</h2>
              <div className="space-y-2">
                {competition.highlights.map((highlight, i) => (
                  <div key={i} className="detail-list-item border-accent/20 bg-accent/5">
                    {highlight}
                  </div>
                ))}
              </div>
            </section>

            <section className="page-section-tight space-y-3">
              <h2 className="text-xl font-semibold text-foreground">Medal winners (Philippines)</h2>
              {isUpcoming ? (
                <div className="text-sm text-muted-foreground">
                  Medal winners will be updated after the competition ends.
                </div>
              ) : (
                <div className="space-y-2">
                  {competition.medalists.map((medalist, i) => (
                    <div key={i} className="detail-list-item bg-background/74">
                      <p className="text-sm text-foreground">{medalist}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="detail-stack">
            <div className="detail-sidebar-card space-y-4">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Key information</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground">Start date</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{competition.startDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">End date</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{competition.endDate}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Organizer</p>
                  <p className="mt-1 text-sm font-medium text-foreground">{competition.organizer}</p>
                </div>
              </div>
            </div>

            <div className="detail-sidebar-card space-y-3">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Logistics</p>
              <div>
                <p className="text-xs text-muted-foreground">Tickets</p>
                <p className="mt-1 text-sm text-foreground">{competition.ticketInfo}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Sponsor</p>
                <p className="mt-1 text-sm text-foreground">{competition.sponsor}</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
