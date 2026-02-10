import Link from "next/link"
import { Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ProfileCard } from "@/components/profile-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { athleteSummaries } from "@/lib/data/athletes"
import { clubs } from "@/lib/data/clubs"
import { coaches } from "@/lib/data/coaches"
import { normalizeKey } from "@/lib/data/utils"

type SearchResult =
  | { type: "athlete"; name: string; href: string; details: string[]; score: number }
  | { type: "coach"; name: string; href: string; details: string[]; score: number }
  | { type: "club"; name: string; href: string; details: string[]; score: number }

const suggestionLinks = ["Lauren Hoffman", "Mia Santos", "Manila Striders Track Club"]

const formatRank = (rank?: number | string) => {
  if (rank === undefined || rank === null || rank === "") return "—"
  if (typeof rank === "number") return `#${rank}`
  const trimmed = rank.trim()
  return trimmed.startsWith("#") ? trimmed : `#${trimmed}`
}

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

export default function SearchPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>
}) {
  const query = getParam(searchParams, "q").trim()
  const normalizedQuery = normalizeKey(query)
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean)

  let topResult: SearchResult | null = null
  let grouped: { athletes: SearchResult[]; coaches: SearchResult[]; clubs: SearchResult[] } = {
    athletes: [],
    coaches: [],
    clubs: [],
  }

  if (normalizedQuery) {
    const scoreName = (name: string) => {
      const normalized = normalizeKey(name)
      if (normalized === normalizedQuery) return 0
      if (normalized.startsWith(normalizedQuery)) return 1
      if (tokens.every((token) => normalized.includes(token))) return 2
      if (normalized.includes(normalizedQuery)) return 3
      return 4
    }

    const athletes = athleteSummaries
      .filter((athlete) => {
        const normalized = normalizeKey(athlete.name)
        return tokens.every((token) => normalized.includes(token))
      })
      .map((athlete) => ({
        type: "athlete" as const,
        name: athlete.name,
        href: athlete.href,
        details: [
          `Club: ${athlete.club}`,
          athlete.pb ? `PB: ${athlete.pb}` : undefined,
          athlete.nationalRank ? `PH Rank: ${formatRank(athlete.nationalRank)}` : undefined,
        ].filter(Boolean) as string[],
        score: scoreName(athlete.name),
      }))
      .sort((a, b) => a.score - b.score)

    const coachResults = coaches
      .filter((coach) => tokens.every((token) => normalizeKey(coach.name).includes(token)))
      .map((coach) => ({
        type: "coach" as const,
        name: coach.name,
        href: `/coaches/${coach.slug ?? coach.id}`,
        details: [`Club: ${coach.club}`, coach.specialty].filter(Boolean) as string[],
        score: scoreName(coach.name),
      }))
      .sort((a, b) => a.score - b.score)

    const clubResults = clubs
      .filter((club) => tokens.every((token) => normalizeKey(club.name).includes(token)))
      .map((club) => ({
        type: "club" as const,
        name: club.name,
        href: `/clubs/${club.slug ?? club.id}`,
        details: [`Focus: ${club.focus}`, `Location: ${club.location}`].filter(Boolean) as string[],
        score: scoreName(club.name),
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="page-shell py-10 space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Search</h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Find athletes, coaches, and clubs in one place. Search by full name for the fastest match.
          </p>
          <form method="get" className="flex flex-col sm:flex-row gap-2 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden="true" />
              <Input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search by name"
                className="rounded-full pl-9"
                data-testid="search-input"
              />
            </div>
            <Button type="submit" className="rounded-full">
              Search
            </Button>
          </form>
        </header>

        <DemoAdSlot slotId="search-inline-1" format="leaderboard" />

        {!query ? (
          <Card className="shadow-soft py-0 gap-0">
            <CardContent className="p-6 space-y-3 text-sm text-muted-foreground">
              <p>Start typing a name to search across athletes, coaches, and clubs.</p>
              <div className="flex flex-wrap gap-2">
                {suggestionLinks.map((suggestion) => (
                  <Link
                    key={suggestion}
                    href={`/search?q=${encodeURIComponent(suggestion)}`}
                    className="text-accent font-semibold hover:text-accent/80"
                  >
                    Try "{suggestion}"
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : !hasResults ? (
          <Card className="shadow-soft py-0 gap-0">
            <CardContent className="p-6 text-sm text-muted-foreground">
              No results found for "{query}". Try another name or check spelling.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8" data-testid="search-results">
            {topResult ? (
              <Card className="py-0 gap-0 border-accent/40 bg-accent/5">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase text-accent">
                    Top result
                    <Badge variant="outline" className="border-accent/40 text-accent">
                      {topResult.type}
                    </Badge>
                  </div>
                  <ProfileCard
                    name={topResult.name}
                    subtitle=""
                    details={topResult.details}
                    href={topResult.href}
                    type={topResult.type}
                  />
                </CardContent>
              </Card>
            ) : null}

            {grouped.athletes.length > 0 ? (
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Athletes</h2>
                  <span className="text-xs text-muted-foreground">{grouped.athletes.length} results</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Coaches</h2>
                  <span className="text-xs text-muted-foreground">{grouped.coaches.length} results</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
              <section className="space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-foreground">Clubs</h2>
                  <span className="text-xs text-muted-foreground">{grouped.clubs.length} results</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
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
        )}
      </div>
    </div>
  )
}
