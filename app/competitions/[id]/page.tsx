import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { getAthleteProfile } from "@/lib/data/athletes"
import { getCompetitionByIdOrStub } from "@/lib/data/competitions"
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

  const getResultFlags = (athleteId: string | undefined, event: string, result: string) => {
    if (!athleteId) return { isPB: false, isSB: false }
    const athlete = getAthleteProfile(athleteId)
    if (!athlete) return { isPB: false, isSB: false }
    const eventMatch = athlete.events.find((evt) => normalizeKey(evt.name) === normalizeKey(event))
    if (!eventMatch) return { isPB: false, isSB: false }
    const pb = eventMatch.personalBest?.trim()
    const sb = eventMatch.seasonBest?.trim()
    const normalizedResult = result.trim()
    return {
      isPB: Boolean(pb && pb !== "—" && pb === normalizedResult),
      isSB: Boolean(sb && sb !== "—" && sb === normalizedResult),
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="page-shell py-12">
        <Link href="/competitions" className="flex items-center gap-2 text-accent hover:text-accent/80 mb-8 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Competitions
        </Link>

        <div className="mb-12 pb-8 border-b border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Competition</p>
              <h1 className="text-5xl font-bold text-foreground">{competition.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{competition.type}</p>
            </div>
          </div>
          {isStub ? (
            <div className="mt-4 p-3 rounded-none border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
              Competition details are coming soon. Basic placeholder shown to avoid broken links.
            </div>
          ) : null}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-none bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Participants</p>
              <p className="text-2xl font-bold text-accent">{competition.participants}</p>
            </div>
            <div className="p-4 rounded-none bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Countries</p>
              <p className="text-2xl font-bold text-accent">{competition.countries}</p>
            </div>
            <div className="p-4 rounded-none bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Records Set</p>
              <p className="text-2xl font-bold text-accent">{competition.records}</p>
            </div>
            <div className="p-4 rounded-none bg-accent/10">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Location</p>
              <p className="text-sm font-bold text-foreground">{competition.location}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">About</h2>
              <p className="p-6 rounded-none border border-border text-foreground leading-relaxed">{competition.about}</p>
            </div>

            {isUpcoming ? (
              <div className="p-4 rounded-none border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
                Results will be posted after the competition concludes. Check back for official times and placements.
              </div>
            ) : results.length ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-foreground">Results</h2>
                  <Badge variant="outline" className="border-border text-foreground bg-muted">
                    Demo data
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Filter:</span>
                  <Link
                    href={baseHref}
                    className={`rounded-none border px-3 py-1 ${
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
                      className={`rounded-none border px-3 py-1 ${
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
                    <div key={eventBlock.event} className="p-4 rounded-none border border-border bg-card space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-foreground">{eventBlock.event}</p>
                        {eventBlock.round ? (
                          <span className="text-xs font-semibold text-muted-foreground uppercase">{eventBlock.round}</span>
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
                                    <Badge variant="outline" className="border-amber-300/70 text-amber-700 bg-amber-50">
                                      SB
                                    </Badge>
                                  ) : null}
                                </div>
                                <p className="text-xs text-muted-foreground">{entry.place}</p>
                                <p className="text-[11px] text-muted-foreground">
                                  {entry.source ?? "Demo data"}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-foreground">{entry.result}</p>
                                {entry.note ? (
                                  <p className="text-xs text-muted-foreground">{entry.note}</p>
                                ) : null}
                              </div>
                            </div>
                          )

                          const yearParam = new Date(competition.startDate).getFullYear()
                          const href = entry.athleteId
                            ? `/athletes/${entry.athleteId}?${new URLSearchParams({
                                event: eventBlock.event,
                                year: String(yearParam),
                              }).toString()}`
                            : null

                          return href ? (
                            <Link
                              key={`${entry.athleteName}-${idx}`}
                              href={href}
                              className="block rounded-none border border-border bg-background px-3 py-2 hover:border-accent transition-colors"
                              data-testid="competition-result-entry"
                            >
                              {content}
                            </Link>
                          ) : (
                            <div
                              key={`${entry.athleteName}-${idx}`}
                              className="rounded-none border border-border bg-background px-3 py-2"
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
              </div>
            ) : null}

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Events</h2>
              <div className="grid grid-cols-2 gap-2">
                {competition.events.map((event, i) => (
                  <div key={i} className="flex gap-2 p-3 rounded-none border border-border">
                    <div className="w-1.5 h-1.5 rounded-none bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{event}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Highlights</h2>
              <div className="space-y-2">
                {competition.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-none border border-accent/20 bg-accent/5">
                    <div className="w-2 h-2 rounded-none bg-accent mt-1.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Medal Winners (Philippines)</h2>
              {isUpcoming ? (
                <div className="p-4 rounded-none border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
                  Medal winners will be updated after the competition ends.
                </div>
              ) : (
                <div className="space-y-2">
                  {competition.medalists.map((medalist, i) => (
                    <div key={i} className="p-3 rounded-none border border-border hover:bg-muted transition-colors">
                      <p className="text-foreground text-sm">{medalist}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-none border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-4">Key Information</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Start Date</p>
                  <p className="text-sm font-medium text-foreground">{competition.startDate}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">End Date</p>
                  <p className="text-sm font-medium text-foreground">{competition.endDate}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Organizer</p>
                  <p className="text-sm font-medium text-foreground">{competition.organizer}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-none border border-border">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Logistics</p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tickets</p>
                  <p className="text-sm text-foreground">{competition.ticketInfo}</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Sponsors</p>
                  <p className="text-xs text-foreground">{competition.sponsor}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-none border border-accent/30 bg-accent/5">
              <p className="text-xs text-muted-foreground font-semibold uppercase mb-3">Competition Type</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">{competition.type}</p>
                <p className="text-xs text-muted-foreground mt-2">Participants: {competition.participants}</p>
                <p className="text-xs text-muted-foreground">Countries: {competition.countries}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-16">
        <div className="page-shell py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
