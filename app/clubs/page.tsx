import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
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

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Club directory"
          title="Search clubs"
          description="Explore training environments, locations, and club focus areas across the Philippines."
          stats={[{ label: "Showing", value: `${filteredClubs.length} of ${clubs.length}`, note: "Filter by city, focus, or club name" }]}
          actions={
            <form method="get" className="flex w-full flex-col gap-3 sm:flex-row">
              <div className="relative w-full sm:max-w-md">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-muted-foreground" aria-hidden>
                  <Emoji symbol={emojiIcons.search} className="text-base" />
                </span>
                <Input
                  type="text"
                  name="q"
                  defaultValue={query}
                  autoComplete="off"
                  placeholder="Search by club, city, or focus…"
                  className="pl-11"
                />
              </div>
              <Button type="submit" size="lg">
                Search
              </Button>
              {query ? (
                <Button asChild variant="ghost" className="sm:self-center">
                  <Link href="/clubs">Reset</Link>
                </Button>
              ) : null}
            </form>
          }
          aside={<DemoAdSlot slotId="clubs-inline-1" format="mrec" variant="spotlight" />}
        />

        {featuredClub ? (
          <section className="page-section-tight">
            <div className="section-toolbar">
              <div>
                <p className="brand-eyebrow">Featured club</p>
                <h2 className="section-title">{featuredClub.name}</h2>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-full border border-border/80 bg-background/84 px-3 py-1">{featuredClub.location}</span>
                <span className="rounded-full border border-border/80 bg-background/84 px-3 py-1">Founded: {featuredClub.founded}</span>
                <span className="rounded-full border border-border/80 bg-background/84 px-3 py-1">Athlete spots: {featuredClub.spots}</span>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{featuredClub.focus}</p>
            <div className="mt-5">
              <Button asChild>
                <Link href={`/clubs/${featuredClub.slug ?? featuredClub.id}`}>View club profile</Link>
              </Button>
            </div>
          </section>
        ) : null}

        <section className="page-section">
          <div className="section-toolbar">
            <div>
              <p className="brand-eyebrow">Results</p>
              <h2 className="section-title">Clubs</h2>
            </div>
          </div>
          <div className="mt-6 results-grid">
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
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
