import Link from "next/link"
import type { ReactNode } from "react"
import {
  Activity,
  Building2,
  CalendarDays,
  ExternalLink,
  FileCheck2,
  Globe2,
  Handshake,
  Layers,
  Link2,
  ListChecks,
  MapPin,
  Medal,
  Radio,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { getCompetitionByIdOrStub } from "@/lib/data/competitions"
import { decodeIdParam, normalizeKey } from "@/lib/data/utils"

type EventIconLabelProps = {
  icon: LucideIcon
  children: ReactNode
}

function EventIconLabel({ icon: Icon, children }: EventIconLabelProps) {
  return (
    <span className="event-icon-label">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </span>
  )
}

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
  const eventFacts: Array<{ label: string; value: ReactNode; icon: LucideIcon }> = [
    { label: "Dates", value: dateRangeLabel, icon: CalendarDays },
    { label: "Series", value: competition.series ?? competition.type, icon: Layers },
    { label: "Organizer", value: competition.organizer, icon: Building2 },
    { label: "Participants", value: participantLabel, icon: Users },
    { label: "Countries", value: countryLabel, icon: Globe2 },
    { label: "Ticket info", value: competition.ticketInfo, icon: Ticket },
    { label: "Partner support", value: competition.sponsor, icon: Handshake },
  ]

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
            <CoreSection title={<EventIconLabel icon={MapPin}>About</EventIconLabel>}>
              <p className="text-sm leading-6 text-foreground">{competition.about}</p>
            </CoreSection>

            {competition.watchReason ? (
              <CoreSection title={<EventIconLabel icon={Trophy}>Why it matters</EventIconLabel>}>
                <p className="text-sm leading-6 text-foreground">{competition.watchReason}</p>
              </CoreSection>
            ) : null}

            <CoreSection title={<EventIconLabel icon={ListChecks}>Events</EventIconLabel>}>
              {competition.events.length ? (
                <div className="flex flex-wrap gap-2">
                  {competition.events.map((event) => (
                    <Badge key={event} variant="outline" className="core-fact">
                      <span className="event-programme-chip">
                        <Activity aria-hidden="true" />
                        <span>{event}</span>
                      </span>
                    </Badge>
                  ))}
                </div>
              ) : (
                <EmptyState title="Programme pending" description="Event programme details will be added when an official source is attached." />
              )}
            </CoreSection>

            <CoreSection
              title={<EventIconLabel icon={Radio}>Results</EventIconLabel>}
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
                        <div className="event-scan-row">
                          <span className="event-row-icon" aria-hidden="true">
                            <ListChecks />
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold text-foreground">{eventBlock.event}</h3>
                            {eventBlock.round ? (
                              <p className="event-inline-meta">
                                <Activity aria-hidden="true" />
                                <span>{eventBlock.round}</span>
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <Badge variant="outline">{eventBlock.entries.length} results</Badge>
                      </div>
                      <div className="core-mini-list">
                        {eventBlock.entries.map((entry, index) => {
                          const content = (
                            <div className="event-scan-row sm:items-center">
                              <span className="event-row-icon" aria-hidden="true">
                                <Medal />
                              </span>
                              <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                <div className="min-w-0">
                                  <p className="font-semibold">{entry.athleteName}</p>
                                  <p className="event-inline-meta">
                                    <Trophy aria-hidden="true" />
                                    <span>{entry.place}</span>
                                  </p>
                                  {entry.source ? (
                                    <p className="event-inline-meta">
                                      <ShieldCheck aria-hidden="true" />
                                      <span>{entry.source}</span>
                                    </p>
                                  ) : null}
                                </div>
                                <div className="text-sm font-semibold text-foreground sm:text-right">
                                  <p>{entry.result}</p>
                                  {entry.note ? <p className="text-xs font-normal text-muted-foreground">{entry.note}</p> : null}
                                </div>
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
            <CoreSection title={<EventIconLabel icon={FileCheck2}>Event facts</EventIconLabel>}>
              <div className="core-mini-list">
                {eventFacts.map((fact) => {
                  const FactIcon = fact.icon

                  return (
                    <div key={fact.label} className="core-mini-item">
                      <div className="event-scan-row">
                        <span className="event-row-icon" aria-hidden="true">
                          <FactIcon />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold">{fact.label}</p>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">{fact.value}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CoreSection>

            <CoreSection title={<EventIconLabel icon={ShieldCheck}>Source confidence</EventIconLabel>}>
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <div className="event-scan-row">
                    <span className="event-row-icon" aria-hidden="true">
                      <ShieldCheck />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold">{competition.evidenceLevel ?? "Linked source"}</p>
                      {competition.sourceUpdated ? (
                        <p className="event-inline-meta">
                          <CalendarDays aria-hidden="true" />
                          <span>{competition.sourceUpdated}</span>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                {competition.evidenceNotes ? (
                  <div className="core-mini-item">
                    <div className="event-scan-row">
                      <span className="event-row-icon" aria-hidden="true">
                        <FileCheck2 />
                      </span>
                      <p className="min-w-0 text-xs leading-5 text-muted-foreground">{competition.evidenceNotes}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </CoreSection>

            <CoreSection title={<EventIconLabel icon={Sparkles}>Highlights</EventIconLabel>}>
              {competition.highlights.length ? (
                <div className="core-mini-list">
                  {competition.highlights.slice(0, 4).map((highlight) => (
                    <div key={highlight} className="core-mini-item">
                      <div className="event-scan-row">
                        <span className="event-row-icon" aria-hidden="true">
                          <Sparkles />
                        </span>
                        <span className="min-w-0 leading-6">{highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="Highlights pending" description="Add official preview notes when this event is researched." />
              )}
            </CoreSection>

            {competition.sourceLinks?.length ? (
              <CoreSection title={<EventIconLabel icon={Link2}>Sources</EventIconLabel>}>
                <div className="core-mini-list">
                  {competition.sourceLinks.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow]"
                    >
                      <span className="event-scan-row">
                        <span className="event-row-icon" aria-hidden="true">
                          <Link2 />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2 font-semibold">
                            {source.label}
                            <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.note}</span>
                        </span>
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
