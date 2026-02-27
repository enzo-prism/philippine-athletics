import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buildRankings, getRankingEvents, getRankingYears, type AgeGroup, type Gender } from "@/lib/data/rankings"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

const eventOptions = ["Select an event", ...getRankingEvents()]
const yearOptions = getRankingYears()
const genderOptions: Gender[] = ["Women", "Men"]
const ageGroupOptions: AgeGroup[] = ["Open", "Youth"]

const selectClassName =
  "h-9 w-full rounded-none border border-input bg-background px-3 text-sm text-foreground shadow-xs outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"

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

      <div className="page-shell py-12 space-y-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <Emoji symbol={emojiIcons.trophy} className="text-base" />
            Rankings
          </p>
          <h1 className="text-4xl font-bold text-foreground">Philippine Athletics Rankings</h1>
          <p className="text-muted-foreground max-w-2xl text-sm">
            Filter by event, gender, age group, and year to see the best performances. Rankings use the best result in the
            selected year.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>Data labels:</span>
            <Badge variant="outline" className="border-emerald-300/60 text-emerald-700 bg-emerald-50">
              World Athletics
            </Badge>
            <Badge variant="outline" className="border-border text-foreground bg-muted">
              Demo data
            </Badge>
          </div>
        </header>

        <DemoAdSlot slotId="rankings-inline-1" format="leaderboard" />

        <Card className="py-0 gap-0">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Emoji symbol={emojiIcons.filter} className="text-base" />
              Filters
            </div>
            <form method="get" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label htmlFor="event" className="text-xs font-semibold text-foreground uppercase">
                  Event
                </label>
                <select id="event" name="event" defaultValue={selectedEvent} className={selectClassName} data-testid="rankings-filter-event">
                  {eventOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="text-xs font-semibold text-foreground uppercase">
                  Gender
                </label>
                <select id="gender" name="gender" defaultValue={selectedGender} className={selectClassName} data-testid="rankings-filter-gender">
                  {genderOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="ageGroup" className="text-xs font-semibold text-foreground uppercase">
                  Age group
                </label>
                <select id="ageGroup" name="ageGroup" defaultValue={selectedAgeGroup} className={selectClassName} data-testid="rankings-filter-age">
                  {ageGroupOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="year" className="text-xs font-semibold text-foreground uppercase">
                  Year
                </label>
                <select id="year" name="year" defaultValue={String(selectedYear)} className={selectClassName} data-testid="rankings-filter-year">
                  {yearOptions.map((year) => (
                    <option key={year} value={String(year)}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {highlightId ? <input type="hidden" name="highlight" value={highlightId} /> : null}

              <div className="lg:col-span-4 flex items-center gap-2">
                <button
                  type="submit"
                  className="h-9 rounded-none bg-primary px-4 text-sm font-semibold text-primary-foreground"
                  data-testid="rankings-apply"
                >
                  Apply filters
                </button>
                <Link href="/rankings" className="text-xs font-semibold text-accent">
                  Reset
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {selectedEvent === "Select an event" ? (
          <Card className="py-0 gap-0 border-dashed bg-muted/40">
            <CardContent className="p-6 text-sm text-muted-foreground">Choose an event to load rankings.</CardContent>
          </Card>
        ) : rankings.length === 0 ? (
          <Card className="py-0 gap-0">
            <CardContent className="p-6 text-sm text-muted-foreground">
              No rankings found for {selectedEvent} in {selectedYear}. Try another filter.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="py-0 gap-0" data-testid="rankings-top-three">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Top 3</p>
                  <span className="text-xs text-muted-foreground">Best performances in {selectedYear}</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {topThree.map((entry) => (
                    <Link
                      key={entry.id}
                      href={`${entry.href}?event=${encodeURIComponent(selectedEvent)}&year=${selectedYear}`}
                      className="block"
                    >
                      <div className="p-4 rounded-none border border-border bg-card hover:border-accent transition-colors">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">{entry.name}</p>
                          <Badge variant="outline" className="border-accent/40 text-accent">
                            {formatRank(entry.rank)}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{entry.result}</p>
                        <p className="text-xs text-muted-foreground">{entry.meet}</p>
                        <div className="pt-1">
                          <Badge
                            variant="outline"
                            className={
                              entry.source === "World Athletics"
                                ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                                : "border-border text-foreground bg-muted"
                            }
                          >
                            {entry.source ?? "Demo data"}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="rankings-list">
              {rankings.map((entry) => {
                const isHighlighted = highlightId && entry.name.toLowerCase() === highlightId.toLowerCase()
                return (
                  <Link
                    key={`${entry.id}-${entry.rank}`}
                    href={`${entry.href}?event=${encodeURIComponent(selectedEvent)}&year=${selectedYear}`}
                    className="block"
                  >
                    <Card
                      className={`py-0 gap-0 transition-colors hover:border-accent ${
                        isHighlighted ? "border-accent ring-2 ring-accent/30" : ""
                      }`}
                      data-testid="rankings-row"
                    >
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-foreground truncate">{entry.name}</p>
                            <p className="text-xs text-muted-foreground">{entry.event}</p>
                          </div>
                          <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                            {formatRank(entry.rank)}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Emoji symbol={emojiIcons.location} className="text-sm" />
                          {entry.location}
                        </div>
                        <p className="text-xs text-muted-foreground">Club: {entry.club}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Emoji symbol={emojiIcons.medal} className="text-base" />
                          <span className="font-semibold text-foreground">Best: {entry.result}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {entry.meet} • {entry.date}
                        </p>
                        <Badge
                          variant="outline"
                          className={
                            entry.source === "World Athletics"
                              ? "border-emerald-300/60 text-emerald-700 bg-emerald-50"
                              : "border-border text-foreground bg-muted"
                          }
                        >
                          {entry.source ?? "Demo data"}
                        </Badge>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border mt-16">
        <div className="page-shell py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
