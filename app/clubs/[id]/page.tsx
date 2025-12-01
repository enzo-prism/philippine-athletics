import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches } from "@/lib/data/clubs"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default function ClubProfilePage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params?.id || "").trim().replace(/\/+$/, "")
  const club = getClubByIdOrStub(id)
  const roster = getClubAthletes(club.name || club.id)
  const staff = getClubCoaches(club.name || club.id)
  const isStub = club.isStub

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Link href="/clubs" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Clubs
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Club
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <Emoji symbol={emojiIcons.location} className="text-sm" aria-hidden />
              {club.location}
            </span>
            <span className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              Founded: {club.founded}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <Emoji symbol={emojiIcons.users} className="text-sm" aria-hidden />
              {club.spots}
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl font-bold text-foreground">{club.name}</h1>
            <p className="text-base text-muted-foreground">{club.focus}</p>
          </div>
        </div>

        {isStub ? (
          <div className="p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
            Club details are coming soon. Basic placeholder shown to avoid broken links.
          </div>
        ) : null}

        {club.bio ? (
          <div className="p-4 rounded-lg border border-border bg-card">
            <p className="text-sm text-foreground leading-relaxed">{club.bio}</p>
          </div>
        ) : null}

        {club.achievements && club.achievements.length ? (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Highlights</h2>
            <div className="space-y-2">
              {club.achievements.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-accent/20 bg-accent/5 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {roster && roster.length ? (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Roster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {roster.map((athlete) => {
                const href = athlete.id ? `/athletes/${athlete.id}` : undefined
                const content = href ? (
                  <Link href={href} className="inline-flex">
                    <span className="p-3 rounded-lg border border-border bg-card text-sm text-foreground hover:border-accent transition-colors">
                      {athlete.name}
                    </span>
                  </Link>
                ) : (
                  <span className="p-3 rounded-lg border border-border bg-card text-sm text-foreground">{athlete.name}</span>
                )

                return (
                  <div key={athlete.name} className="flex">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}

        {staff && staff.length ? (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Coaching Roster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {staff.map((coach) => {
                const href = coach.id ? `/coaches/${coach.id}` : undefined
                const content = href ? (
                  <Link href={href} className="inline-flex">
                    <span className="p-3 rounded-lg border border-border bg-card text-sm text-foreground hover:border-accent transition-colors">
                      {coach.name}
                    </span>
                  </Link>
                ) : (
                  <span className="p-3 rounded-lg border border-border bg-card text-sm text-foreground">{coach.name}</span>
                )

                return (
                  <div key={coach.name} className="flex">
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}

        <div className="flex gap-3">
          <Link
            href="mailto:clubs@philippineathletics.ph"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
          <Link
            href="/signup?role=athlete"
            className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
          >
            Apply as Athlete
          </Link>
          <Link
            href="/signup?role=coach"
            className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
          >
            Apply as Coach
          </Link>
          <Link
            href="/signup?role=sponsor"
            className="px-4 py-2 border border-border text-foreground rounded-md font-semibold hover:bg-muted transition-colors"
          >
            Apply to Sponsor
          </Link>
        </div>
      </div>
    </div>
  )
}
