import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { clubs } from "@/lib/data/clubs"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

const getParam = (
  searchParams: Record<string, string | string[] | undefined> | undefined,
  key: string,
) => {
  const value = searchParams?.[key]
  if (Array.isArray(value)) return value[0] ?? ""
  return value ?? ""
}

export default async function ClubsPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const resolvedSearchParams = await searchParams
  const query = getParam(resolvedSearchParams, "q").trim()
  const featuredClub = clubs.find((club) => club.slug === "manila-striders-track-club") ?? clubs[0]

  const filteredClubs = (() => {
    const term = query.toLowerCase()
    if (!term) return clubs
    return clubs.filter(
      (club) =>
        club.name.toLowerCase().includes(term) ||
        club.focus.toLowerCase().includes(term) ||
        club.location.toLowerCase().includes(term),
    )
  })()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="page-shell py-12 space-y-8">
        {featuredClub ? (
          <Card className="py-0 gap-0 border-accent/30 bg-accent/5 shadow-soft">
            <CardContent className="p-6 sm:p-8 space-y-4">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest">Featured club</p>
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{featuredClub.name}</h2>
                <p className="text-sm text-muted-foreground max-w-2xl">{featuredClub.focus}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center rounded-none border border-border bg-background px-3 py-1">
                  {featuredClub.location}
                </span>
                <span className="inline-flex items-center rounded-none border border-border bg-background px-3 py-1">
                  Founded: {featuredClub.founded}
                </span>
                <span className="inline-flex items-center rounded-none border border-border bg-background px-3 py-1">
                  Athlete spots: {featuredClub.spots}
                </span>
              </div>
              <Button asChild className="rounded-none">
                <Link href={`/clubs/${featuredClub.slug ?? featuredClub.id}`}>View club profile</Link>
              </Button>
            </CardContent>
          </Card>
        ) : null}

        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">Search Clubs</h1>
            <p className="text-muted-foreground">Explore track and field clubs across the Philippines</p>
          </div>
          <form method="get" className="flex flex-col sm:flex-row gap-3">
            <div className="relative w-full sm:w-96">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-muted-foreground" aria-hidden>
                <Emoji symbol={emojiIcons.search} className="text-base" />
              </span>
              <Input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Search by club, city, or focus..."
                className="rounded-none pl-9 shadow-soft"
              />
            </div>
            <Button type="submit" className="rounded-none">
              Search
            </Button>
            {query ? (
              <Button asChild variant="link" className="h-auto p-0 text-accent sm:self-center">
                <Link href="/clubs">Reset</Link>
              </Button>
            ) : null}
            <span className="text-xs text-muted-foreground sm:self-center">
              Showing {filteredClubs.length} of {clubs.length}
            </span>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <DemoAdSlot slotId="clubs-inline-1" format="leaderboard" />
          </div>
          {filteredClubs.map((club) => (
            <ProfileCard
              key={club.id}
              name={club.name}
              subtitle=""
              location={club.location}
              details={[`Athlete Spots: ${club.spots}`]}
              href={`/clubs/${club.slug ?? club.id}`}
              type="club"
            />
          ))}
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
