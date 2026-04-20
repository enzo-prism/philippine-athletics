import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { Badge } from "@/components/ui/badge"
import {
  buildRankings,
  getRankingEvents,
  getRankingYears,
  type AgeGroup,
  type Gender,
} from "@/lib/data/rankings"

const eventOptions = ["Select an event", ...getRankingEvents()]
const yearOptions = getRankingYears()
const genderOptions: Gender[] = ["Women", "Men"]
const ageGroupOptions: AgeGroup[] = ["Open", "Youth"]

const selectClassName =
  "h-11 w-full rounded-[1.1rem] border border-input bg-background/92 px-4 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const normalizeEvent = (eventParam: string) =>
  eventOptions.includes(eventParam) ? eventParam : "Select an event"

const normalizeGender = (genderParam: string) =>
  genderOptions.includes(genderParam as Gender) ? (genderParam as Gender) : "Women"

const normalizeAgeGroup = (ageParam: string) =>
  ageGroupOptions.includes(ageParam as AgeGroup) ? (ageParam as AgeGroup) : "Open"

const normalizeYear = (yearParam: string) => {
  const fallback = yearOptions[0] ?? new Date().getFullYear()
  const parsed = Number.parseInt(yearParam ?? "", 10)
  return Number.isNaN(parsed) ? fallback : parsed
}

const formatRank = (rank: number) => `#${rank}`

const buildProfileContextHref = ({
  href,
  event,
  year,
  gender,
  ageGroup,
  highlight,
}: {
  href: string
  event: string
  year: number
  gender: Gender
  ageGroup: AgeGroup
  highlight?: string
}) => {
  const query = new URLSearchParams({
    event,
    year: String(year),
    gender,
    ageGroup,
  })
  if (highlight?.trim()) query.set("highlight", highlight.trim())
  return `${href}?${query.toString()}`
}

export default async function RankingsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const selectedEvent = normalizeEvent(getParam(resolvedSearchParams, "event"))
  const selectedGender = normalizeGender(getParam(resolvedSearchParams, "gender"))
  const selectedAgeGroup = normalizeAgeGroup(getParam(resolvedSearchParams, "ageGroup"))
  const selectedYear = normalizeYear(getParam(resolvedSearchParams, "year"))
  const highlightId = getParam(resolvedSearchParams, "highlight").trim()

  const rankings =
    selectedEvent === "Select an event"
      ? []
      : buildRankings({
          event: selectedEvent,
          gender: selectedGender,
          ageGroup: selectedAgeGroup,
          year: selectedYear,
        })

  const topThree = rankings.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Rankings workspace"
          title="Philippine Athletics Rankings"
          description="Filter by event, gender, age group, and year to see the best performances with ranking context preserved into athlete profiles."
          stats={[
            { label: "Selected event", value: selectedEvent, note: "Choose an event to load rankings" },
            { label: "Year / field", value: `${selectedYear} · ${selectedGender} · ${selectedAgeGroup}`, note: "URL state stays shareable" },
          ]}
          actions={
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">Sources:</span>
              <Badge variant="outline" className="border-emerald-300/60 bg-emerald-50 text-emerald-700">
                World Athletics
              </Badge>
              <Badge variant="outline">Demo data</Badge>
            </div>
          }
          aside={<DemoAdSlot slotId="rankings-inline-1" format="mrec" variant="spotlight" />}
        />

        <section className="filter-bar sticky top-24 z-20">
          <form method="get" className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            <div className="space-y-2">
              <label htmlFor="event" className="brand-eyebrow">
                Event
              </label>
              <select
                id="event"
                name="event"
                defaultValue={selectedEvent}
                className={selectClassName}
                data-testid="rankings-filter-event"
              >
                {eventOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="gender" className="brand-eyebrow">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                defaultValue={selectedGender}
                className={selectClassName}
                data-testid="rankings-filter-gender"
              >
                {genderOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="ageGroup" className="brand-eyebrow">
                Age group
              </label>
              <select
                id="ageGroup"
                name="ageGroup"
                defaultValue={selectedAgeGroup}
                className={selectClassName}
                data-testid="rankings-filter-age"
              >
                {ageGroupOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="year" className="brand-eyebrow">
                Year
              </label>
              <select
                id="year"
                name="year"
                defaultValue={String(selectedYear)}
                className={selectClassName}
                data-testid="rankings-filter-year"
              >
                {yearOptions.map((year) => (
                  <option key={year} value={String(year)}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {highlightId ? <input type="hidden" name="highlight" value={highlightId} /> : null}

            <div className="flex flex-wrap items-center gap-3 lg:col-span-4">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)]"
                data-testid="rankings-apply"
              >
                Apply filters
              </button>
              <Link href="/rankings" className="text-sm font-medium text-muted-foreground">
                Reset
              </Link>
            </div>
          </form>
        </section>

        {selectedEvent === "Select an event" ? (
          <section className="page-section text-sm text-muted-foreground">Choose an event to load rankings.</section>
        ) : rankings.length === 0 ? (
          <section className="page-section text-sm text-muted-foreground">
            No rankings found for {selectedEvent} in {selectedYear}. Try another filter.
          </section>
        ) : (
          <section className="section-stack">
            <div className="page-section" data-testid="rankings-top-three">
              <div className="section-toolbar">
                <div>
                  <p className="brand-eyebrow">Top three</p>
                  <h2 className="section-title">Best performances in {selectedYear}</h2>
                </div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {topThree.map((entry) => (
                  <Link
                    key={entry.id}
                    href={buildProfileContextHref({
                      href: entry.href,
                      event: selectedEvent,
                      year: selectedYear,
                      gender: selectedGender,
                      ageGroup: selectedAgeGroup,
                      highlight: entry.name,
                    })}
                    className="directory-card"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-lg font-semibold tracking-tight text-foreground">{entry.name}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{entry.result}</p>
                      </div>
                      <Badge variant="outline">{formatRank(entry.rank)}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{entry.meet}</p>
                    <Badge
                      variant="outline"
                      className={
                        entry.source === "World Athletics"
                          ? "border-emerald-300/60 bg-emerald-50 text-emerald-700"
                          : undefined
                      }
                    >
                      {entry.source ?? "Demo data"}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            <div className="page-section">
              <div className="section-toolbar">
                <div>
                  <p className="brand-eyebrow">Full list</p>
                  <h2 className="section-title">Ranking list</h2>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3" data-testid="rankings-list">
                {rankings.map((entry) => {
                  const isHighlighted = highlightId && entry.name.toLowerCase() === highlightId.toLowerCase()
                  return (
                    <Link
                      key={`${entry.id}-${entry.rank}`}
                      href={buildProfileContextHref({
                        href: entry.href,
                        event: selectedEvent,
                        year: selectedYear,
                        gender: selectedGender,
                        ageGroup: selectedAgeGroup,
                        highlight: entry.name,
                      })}
                      className="block"
                      data-testid="rankings-row-link"
                    >
                      <article
                        className={`directory-card ${isHighlighted ? "border-accent ring-2 ring-accent/20" : ""}`}
                        data-testid="rankings-row"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p
                              className="truncate text-lg font-semibold tracking-tight text-foreground"
                              data-testid="rankings-row-name"
                            >
                              {entry.name}
                            </p>
                            <p className="mt-1 text-sm text-muted-foreground" data-testid="rankings-row-event">
                              {entry.event}
                            </p>
                          </div>
                          <Badge variant="outline" data-testid="rankings-row-rank">
                            {formatRank(entry.rank)}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground" data-testid="rankings-row-result">
                            Best: {entry.result}
                          </p>
                          <p className="text-sm text-muted-foreground">{entry.club}</p>
                          <p className="text-sm text-muted-foreground">{entry.meet}</p>
                          <p className="text-sm text-muted-foreground">{entry.date}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            entry.source === "World Athletics"
                              ? "border-emerald-300/60 bg-emerald-50 text-emerald-700"
                              : undefined
                          }
                        >
                          {entry.source ?? "Demo data"}
                        </Badge>
                      </article>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </main>

      <AppFooter />
    </div>
  )
}
