import Link from "next/link"
import { cookies } from "next/headers"
import { Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ProfileCard } from "@/components/profile-card"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { demoAthleteSpotlights, demoAthleteSummaries } from "@/lib/data/demo-athletes"
import { DEMO_FLOW_COOKIE, getDemoFlowConfig } from "@/lib/demo/flows"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { athleteSummaries } from "@/lib/data/athletes"
import { clubs } from "@/lib/data/clubs"
import { coaches } from "@/lib/data/coaches"
import { normalizeKey } from "@/lib/data/utils"

type SearchResult =
  | { type: "athlete"; name: string; href: string; details: string[]; score: number }
  | { type: "coach"; name: string; href: string; details: string[]; score: number }
  | { type: "club"; name: string; href: string; details: string[]; score: number }

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

const formatRank = (rank?: number | string) => {
  if (rank === undefined || rank === null || rank === "") return "—"
  if (typeof rank === "number") return `#${rank}`
  const trimmed = rank.trim()
  return trimmed.startsWith("#") ? trimmed : `#${trimmed}`
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const query = getParam(resolvedSearchParams, "q").trim()
  const normalizedQuery = normalizeKey(query)
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean)

  const cookieStore = await cookies()
  const activeDemoFlow = getDemoFlowConfig(cookieStore.get(DEMO_FLOW_COOKIE)?.value)
  const isDemoMode = Boolean(activeDemoFlow)

  const athleteSource = isDemoMode ? demoAthleteSummaries : athleteSummaries
  const suggestionLinks = isDemoMode
    ? demoAthleteSummaries.map((athlete) => athlete.membershipNumber).slice(0, 3)
    : ["Lauren Hoffman", "Mia Santos", "PA-JCDELACRUZ"]

  let topResult: SearchResult | null = null
  let grouped: { athletes: SearchResult[]; coaches: SearchResult[]; clubs: SearchResult[] } = {
    athletes: [],
    coaches: [],
    clubs: [],
  }

  if (normalizedQuery) {
    const scoreAthlete = (name: string, membershipNumber: string) => {
      const normalizedName = normalizeKey(name)
      const normalizedMembership = normalizeKey(membershipNumber)

      if (normalizedMembership === normalizedQuery || normalizedName === normalizedQuery) return 0
      if (normalizedMembership.startsWith(normalizedQuery) || normalizedName.startsWith(normalizedQuery)) return 1

      const tokenMatch = tokens.every(
        (token) => normalizedName.includes(token) || normalizedMembership.includes(token),
      )
      if (tokenMatch) return 2

      if (normalizedName.includes(normalizedQuery) || normalizedMembership.includes(normalizedQuery)) return 3
      return 4
    }

    const athletes = athleteSource
      .filter((athlete) => {
        const normalizedName = normalizeKey(athlete.name)
        const normalizedMembership = normalizeKey(athlete.membershipNumber)
        return tokens.every((token) => normalizedName.includes(token) || normalizedMembership.includes(token))
      })
      .map((athlete) => ({
        type: "athlete" as const,
        name: athlete.name,
        href: athlete.href,
        details: [
          `Membership: ${athlete.membershipNumber}`,
          `Club: ${athlete.club}`,
          athlete.pb ? `PB: ${athlete.pb}` : undefined,
          athlete.nationalRank ? `PH Rank: ${formatRank(athlete.nationalRank)}` : undefined,
        ].filter(Boolean) as string[],
        score: scoreAthlete(athlete.name, athlete.membershipNumber),
      }))
      .sort((a, b) => a.score - b.score)

    const coachResults = isDemoMode
      ? []
      : coaches
          .filter((coach) => tokens.every((token) => normalizeKey(coach.name).includes(token)))
          .map((coach) => ({
            type: "coach" as const,
            name: coach.name,
            href: `/coaches/${coach.slug ?? coach.id}`,
            details: [`Club: ${coach.club}`, coach.specialty].filter(Boolean) as string[],
            score: normalizeKey(coach.name) === normalizedQuery ? 0 : 3,
          }))
          .sort((a, b) => a.score - b.score)

    const clubResults = isDemoMode
      ? []
      : clubs
          .filter((club) => tokens.every((token) => normalizeKey(club.name).includes(token)))
          .map((club) => ({
            type: "club" as const,
            name: club.name,
            href: `/clubs/${club.slug ?? club.id}`,
            details: [`Focus: ${club.focus}`, `Location: ${club.location}`].filter(Boolean) as string[],
            score: normalizeKey(club.name) === normalizedQuery ? 0 : 3,
          }))
          .sort((a, b) => a.score - b.score)

    const combined = [...athletes, ...coachResults, ...clubResults].sort((a, b) => {
      if (a.score !== b.score) return a.score - b.score
      if (a.type === "athlete" && b.type !== "athlete") return -1
      if (b.type === "athlete" && a.type !== "athlete") return 1
      return a.name.localeCompare(b.name)
    })

    topResult = combined[0] ?? null
    grouped = { athletes, coaches: coachResults, clubs: clubResults }
  }

  const hasResults = grouped.athletes.length > 0 || grouped.coaches.length > 0 || grouped.clubs.length > 0
  const totalResults = grouped.athletes.length + grouped.coaches.length + grouped.clubs.length

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Directory workspace"
          title="Search"
          description="Find athletes, coaches, and clubs in one place. Search supports full names, club names, and athlete membership numbers."
          stats={[
            { label: "Athletes", value: athleteSource.length, note: "Search by name or membership ID" },
            { label: "Coaches", value: isDemoMode ? "Guided flow" : coaches.length, note: "Search by coach name" },
            { label: "Clubs", value: isDemoMode ? "Locked" : clubs.length, note: "Search by club name or focus" },
          ]}
          actions={
            <div className="flex w-full flex-col gap-3">
              {isDemoMode ? (
                <div className="rounded-[1.2rem] border border-border/80 bg-background/74 px-4 py-3 text-sm text-foreground">
                  <p className="font-medium">Demo flow active: {activeDemoFlow?.label}</p>
                  <p className="mt-1 text-muted-foreground">
                    Search is limited to five curated athletes for this guided flow.
                  </p>
                </div>
              ) : null}

              <form method="get" className="flex w-full flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <Input
                    type="text"
                    name="q"
                    defaultValue={query}
                    autoComplete="off"
                    placeholder="Search by name or membership number…"
                    className="pl-11"
                    data-testid="search-input"
                  />
                </div>
                <Button type="submit" size="lg">
                  Search
                </Button>
              </form>

              <div className="flex flex-wrap gap-2">
                {suggestionLinks.map((suggestion) => (
                  <Link key={suggestion} href={`/search?q=${encodeURIComponent(suggestion)}`}>
                    <Badge variant="outline">{suggestion}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          }
          aside={<DemoAdSlot slotId="search-inline-1" format="mrec" variant="spotlight" />}
        />

        {!query ? (
          <section className="page-section">
            <div className="section-toolbar">
              <div>
                <p className="brand-eyebrow">Suggested searches</p>
                <h2 className="section-title">Start from a known entry point</h2>
              </div>
              <p className="section-copy">Use full names for discovery or membership IDs for direct profile lookup.</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(isDemoMode ? demoAthleteSummaries : athleteSummaries.slice(0, 6)).map((athlete) => {
                const spotlight = demoAthleteSpotlights.find((item) => item.id === athlete.id)
                return (
                  <Link
                    key={athlete.id}
                    href={`/search?q=${encodeURIComponent(athlete.membershipNumber)}`}
                    className="directory-card"
                  >
                    <div>
                      <p className="text-lg font-semibold tracking-tight text-foreground">{athlete.name}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{athlete.membershipNumber}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{spotlight?.eventCategory ?? athlete.specialty}</p>
                    <div className="mt-auto text-sm font-medium text-muted-foreground">Search this athlete</div>
                  </Link>
                )
              })}
            </div>
          </section>
        ) : !hasResults ? (
          <section className="page-section text-sm text-muted-foreground">
            {isDemoMode
              ? `No results found for "${query}" in the current demo pack. Try one of the curated athlete membership numbers.`
              : `No results found for "${query}". Try another name or membership number.`}
          </section>
        ) : (
          <section className="section-stack" data-testid="search-results">
            {topResult ? (
              <div className="page-section">
                <div className="section-toolbar">
                  <div>
                    <p className="brand-eyebrow">Top result</p>
                    <h2 className="section-title">{topResult.name}</h2>
                  </div>
                  <Badge variant="outline" className="capitalize">
                    {topResult.type}
                  </Badge>
                </div>
                <div className="mt-5">
                  <ProfileCard
                    name={topResult.name}
                    subtitle=""
                    details={topResult.details}
                    href={topResult.href}
                    type={topResult.type}
                  />
                </div>
              </div>
            ) : null}

            <div className="page-section">
              <div className="section-toolbar">
                <div>
                  <p className="brand-eyebrow">Results</p>
                  <h2 className="section-title">
                    {totalResults} result{totalResults === 1 ? "" : "s"} for “{query}”
                  </h2>
                </div>
              </div>

              <div className="mt-6 section-stack">
                {grouped.athletes.length > 0 ? (
                  <section className="section-stack">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Athletes</h3>
                      <span className="text-xs text-muted-foreground">{grouped.athletes.length}</span>
                    </div>
                    <div className="results-grid">
                      {grouped.athletes.map((athlete) => (
                        <ProfileCard
                          key={athlete.href}
                          name={athlete.name}
                          subtitle=""
                          details={athlete.details}
                          href={athlete.href}
                          type="athlete"
                        />
                      ))}
                    </div>
                  </section>
                ) : null}

                {grouped.coaches.length > 0 ? (
                  <section className="section-stack">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Coaches</h3>
                      <span className="text-xs text-muted-foreground">{grouped.coaches.length}</span>
                    </div>
                    <div className="results-grid">
                      {grouped.coaches.map((coach) => (
                        <ProfileCard
                          key={coach.href}
                          name={coach.name}
                          subtitle=""
                          details={coach.details}
                          href={coach.href}
                          type="coach"
                        />
                      ))}
                    </div>
                  </section>
                ) : null}

                {grouped.clubs.length > 0 ? (
                  <section className="section-stack">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Clubs</h3>
                      <span className="text-xs text-muted-foreground">{grouped.clubs.length}</span>
                    </div>
                    <div className="results-grid">
                      {grouped.clubs.map((club) => (
                        <ProfileCard
                          key={club.href}
                          name={club.name}
                          subtitle=""
                          details={club.details}
                          href={club.href}
                          type="club"
                        />
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </section>
        )}
      </main>

      <AppFooter />
    </div>
  )
}
