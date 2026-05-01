import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { getCompetitionByIdOrStub } from "@/lib/data/competitions"
import { decodeIdParam, normalizeKey } from "@/lib/data/utils"

export default async function EventProfilePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<{ event?: string }>
}) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const competition = getCompetitionByIdOrStub(id)
  const resolvedSearchParams = await searchParams
  const selectedEvent = resolvedSearchParams?.event?.trim() ?? ""
  const selectedEventKey = selectedEvent ? normalizeKey(selectedEvent) : null
  const results = competition.results ?? []
  const filteredResults = selectedEventKey
    ? results.filter((eventBlock) => normalizeKey(eventBlock.event) === selectedEventKey)
    : results
  const baseHref = `/events/${competition.slug ?? id}`
  const participantLabel = competition.participants ? competition.participants.toLocaleString() : "TBD"
  const countryLabel = competition.countries ? competition.countries.toLocaleString() : "TBD"
  const dateRangeLabel =
    competition.startDate === competition.endDate ? competition.startDate : `${competition.startDate} - ${competition.endDate}`

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreBreadcrumb items={[{ label: "Events", href: "/events" }, { label: competition.name }]} />

        <CoreHero
          eyebrow={competition.status}
          title={competition.name}
          description={`${competition.type} · ${competition.location}`}
          actions={
            competition.officialUrl ? (
              <Button asChild>
                <a href={competition.officialUrl} target="_blank" rel="noreferrer">
                  Official source
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            ) : null
          }
          stats={[
            { label: "Date", value: competition.dateLabel },
            { label: "Tier", value: competition.tier ?? competition.type },
            { label: "Events", value: competition.events.length },
            { label: "Source", value: competition.evidenceLevel ?? "Linked" },
          ]}
        />

        <div className="core-detail-grid">
          <div className="space-y-5">
            <CoreSection title="About">
              <p className="text-sm leading-6 text-foreground">{competition.about}</p>
            </CoreSection>

            {competition.watchReason ? (
              <CoreSection title="Why it matters">
                <p className="text-sm leading-6 text-foreground">{competition.watchReason}</p>
              </CoreSection>
            ) : null}

            <CoreSection title="Events">
              {competition.events.length ? (
                <div className="flex flex-wrap gap-2">
                  {competition.events.map((event) => (
                    <Badge key={event} variant="outline" className="core-fact">
                      {event}
                    </Badge>
                  ))}
                </div>
              ) : (
                <EmptyState title="Programme pending" description="Event programme details will be added when an official source is attached." />
              )}
            </CoreSection>

            <CoreSection
              title="Results"
              description={competition.status === "Upcoming" ? "Results will appear after the event." : "Open an athlete result to jump into the linked athlete profile."}
              actions={
                results.length ? (
                  <ButtonGroup className="flex-wrap">
                    <Button asChild size="sm" variant={!selectedEventKey ? "secondary" : "outline"}>
                      <Link href={baseHref}>All</Link>
                    </Button>
                    {results.map((eventBlock) => (
                      <Button
                        key={eventBlock.event}
                        asChild
                        size="sm"
                        variant={selectedEventKey === normalizeKey(eventBlock.event) ? "secondary" : "outline"}
                      >
                        <Link href={`${baseHref}?event=${encodeURIComponent(eventBlock.event)}`} data-testid="competition-event-filter">
                          {eventBlock.event}
                        </Link>
                      </Button>
                    ))}
                  </ButtonGroup>
                ) : null
              }
            >
              {filteredResults.length ? (
                <div className="core-list" data-testid="competition-results">
                  {filteredResults.map((eventBlock) => (
                    <div key={eventBlock.event} className="core-detail-card space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <h3 className="text-base font-semibold text-foreground">{eventBlock.event}</h3>
                          {eventBlock.round ? <p className="text-xs text-muted-foreground">{eventBlock.round}</p> : null}
                        </div>
                        <Badge variant="outline">{eventBlock.entries.length} results</Badge>
                      </div>
                      <div className="core-mini-list">
                        {eventBlock.entries.map((entry, index) => {
                          const content = (
                            <div className="flex items-center justify-between gap-3">
                              <div>
                                <p className="font-semibold">{entry.athleteName}</p>
                                <p className="text-xs text-muted-foreground">{entry.place}</p>
                                {entry.source ? <p className="text-[11px] text-muted-foreground">{entry.source}</p> : null}
                              </div>
                              <div className="text-right">
                                <p className="font-semibold">{entry.result}</p>
                                {entry.note ? <p className="text-xs text-muted-foreground">{entry.note}</p> : null}
                              </div>
                            </div>
                          )

                          return entry.athleteId ? (
                            <Link
                              key={`${entry.athleteName}-${index}`}
                              href={`/athletes/${entry.athleteId}?event=${encodeURIComponent(eventBlock.event)}`}
                              className="core-mini-item block transition-[background-color,border-color,box-shadow]"
                              data-testid="competition-result-entry"
                            >
                              {content}
                            </Link>
                          ) : (
                            <div key={`${entry.athleteName}-${index}`} className="core-mini-item" data-testid="competition-result-entry">
                              {content}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState
                  title={competition.status === "Upcoming" ? "Results pending" : "No results found"}
                  description={competition.status === "Upcoming" ? "Results will be posted after the event." : "No results match this filter."}
                />
              )}
            </CoreSection>
          </div>

          <aside className="space-y-5">
            <CoreSection title="Event facts">
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <p className="font-semibold">Dates</p>
                  <p className="mt-1 text-xs text-muted-foreground">{dateRangeLabel}</p>
                </div>
                <div className="core-mini-item">
                  <p className="font-semibold">Series</p>
                  <p className="mt-1 text-xs text-muted-foreground">{competition.series ?? competition.type}</p>
                </div>
                <div className="core-mini-item">
                  <p className="font-semibold">Organizer</p>
                  <p className="mt-1 text-xs text-muted-foreground">{competition.organizer}</p>
                </div>
                <div className="core-mini-item">
                  <p className="font-semibold">Participants</p>
                  <p className="mt-1 text-xs text-muted-foreground">{participantLabel}</p>
                </div>
                <div className="core-mini-item">
                  <p className="font-semibold">Countries</p>
                  <p className="mt-1 text-xs text-muted-foreground">{countryLabel}</p>
                </div>
                <div className="core-mini-item">
                  <p className="font-semibold">Ticket info</p>
                  <p className="mt-1 text-xs text-muted-foreground">{competition.ticketInfo}</p>
                </div>
                <div className="core-mini-item">
                  <p className="font-semibold">Partner support</p>
                  <p className="mt-1 text-xs text-muted-foreground">{competition.sponsor}</p>
                </div>
              </div>
            </CoreSection>

            <CoreSection title="Source confidence">
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <p className="font-semibold">{competition.evidenceLevel ?? "Linked source"}</p>
                  {competition.sourceUpdated ? (
                    <p className="mt-1 text-xs text-muted-foreground">{competition.sourceUpdated}</p>
                  ) : null}
                </div>
                {competition.evidenceNotes ? (
                  <div className="core-mini-item">
                    <p className="text-xs leading-5 text-muted-foreground">{competition.evidenceNotes}</p>
                  </div>
                ) : null}
              </div>
            </CoreSection>

            <CoreSection title="Highlights">
              {competition.highlights.length ? (
                <div className="core-mini-list">
                  {competition.highlights.slice(0, 4).map((highlight) => (
                    <div key={highlight} className="core-mini-item">
                      {highlight}
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="Highlights pending" description="Add official preview notes when this event is researched." />
              )}
            </CoreSection>

            {competition.sourceLinks?.length ? (
              <CoreSection title="Sources">
                <div className="core-mini-list">
                  {competition.sourceLinks.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow]"
                    >
                      <p className="font-semibold">{source.label}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{source.note}</p>
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
