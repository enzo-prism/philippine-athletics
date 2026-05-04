import Link from "next/link"
import { CalendarDays, Search } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { CoreFilterDisclosure } from "@/components/site/core-filter-disclosure"
import { AppFooter, CoreDirectoryHeader, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  competitionStatusOptions,
  getCompetitions,
  sortCompetitionsForStatus,
  type CompetitionStatusFilter,
} from "@/lib/data/competitions"

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const normalizeStatus = (value: string): CompetitionStatusFilter =>
  competitionStatusOptions.includes(value as CompetitionStatusFilter) ? (value as CompetitionStatusFilter) : "Upcoming"

const normalizeType = (value: string, typeOptions: string[]) => (typeOptions.includes(value) ? value : "All")

export default async function EventsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const currentCompetitions = getCompetitions()
  const typeOptions = ["All", ...Array.from(new Set(currentCompetitions.map((competition) => competition.type))).sort()]
  const query = getParam(resolvedSearchParams, "q").trim()
  const status = normalizeStatus(getParam(resolvedSearchParams, "status"))
  const type = normalizeType(getParam(resolvedSearchParams, "type"), typeOptions)
  const term = query.toLowerCase()
  const activeFilterSummary = [
    query ? `Search: ${query}` : null,
    status !== "Upcoming" ? status : null,
    type !== "All" ? type : null,
  ].filter(Boolean) as string[]

  const filtered = sortCompetitionsForStatus(
    currentCompetitions.filter((competition) => {
      const matchesStatus = status === "All" || competition.status === status
      const matchesType = type === "All" || competition.type === type
      const matchesQuery =
        !term ||
        [
          competition.name,
          competition.type,
          competition.location,
          competition.organizer,
          competition.dateLabel,
          competition.series,
          competition.tier,
          competition.watchReason,
          competition.evidenceNotes,
          ...competition.events,
        ]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(term))
      return matchesStatus && matchesType && matchesQuery
    }),
    status,
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreDirectoryHeader title="Events" count={filtered.length} total={currentCompetitions.length} />

        <CoreFilterDisclosure
          summary={activeFilterSummary.length ? activeFilterSummary.join(" · ") : "Search, status, type"}
          activeCount={activeFilterSummary.length}
        >
          <form method="get" className="core-filter-bar">
            <FieldGroup className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_190px_170px_auto]">
              <Field>
                <FieldLabel htmlFor="event-query" className="sr-only">
                  Search events
                </FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <Search aria-hidden="true" />
                  </InputGroupAddon>
                  <InputGroupInput id="event-query" name="q" type="search" defaultValue={query} placeholder="Search events" />
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="event-status" className="sr-only">
                  Status
                </FieldLabel>
                <NativeSelect id="event-status" name="status" defaultValue={status} aria-label="Status">
                  {competitionStatusOptions.map((option) => (
                    <NativeSelectOption key={option} value={option}>
                      {option}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </Field>
              <Field>
                <FieldLabel htmlFor="event-type" className="sr-only">
                  Type
                </FieldLabel>
                <NativeSelect id="event-type" name="type" defaultValue={type} aria-label="Type">
                  {typeOptions.map((option) => (
                    <NativeSelectOption key={option} value={option}>
                      {option}
                    </NativeSelectOption>
                  ))}
                </NativeSelect>
              </Field>
              <ButtonGroup className="w-full sm:w-fit" aria-label="Event filter actions">
                <Button type="submit">Apply</Button>
                {query || status !== "Upcoming" || type !== "All" ? (
                  <Button asChild variant="ghost">
                    <Link href="/events">Reset</Link>
                  </Button>
                ) : null}
              </ButtonGroup>
            </FieldGroup>
          </form>
        </CoreFilterDisclosure>

        <CoreSection
          title="Event calendar"
          description="Dates are held to official or organizer-level sources wherever possible; each profile shows the source trail."
        >
          {filtered.length ? (
            <div className="core-list" data-testid="events-list">
              {filtered.map((competition) => (
                <CoreResultRow
                  key={competition.id}
                  href={`/events/${competition.slug}`}
                  eyebrow={`${competition.status} · ${competition.tier ?? competition.type}`}
                  title={competition.name}
                  description={`${competition.location} · ${competition.organizer}`}
                  facts={[
                    <span key="date" className="inline-flex items-center gap-1">
                      <CalendarDays aria-hidden="true" className="size-3" />
                      {competition.dateLabel}
                    </span>,
                    competition.type,
                    competition.evidenceLevel ?? "Source linked",
                  ]}
                  meta="Open event"
                >
                  {competition.watchReason ? (
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">{competition.watchReason}</p>
                  ) : null}
                </CoreResultRow>
              ))}
            </div>
          ) : (
            <EmptyState title="No events found" description="Try a broader search term or switch the status filter to All." />
          )}
        </CoreSection>
      </main>

      <AppFooter />
    </div>
  )
}
