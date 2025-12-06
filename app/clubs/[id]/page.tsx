import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches } from "@/lib/data/clubs"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"
import { MapEmbed } from "@/components/map-embed"

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

        {club.locationDetail ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.location} className="text-base" aria-hidden />
              <h2 className="text-lg font-semibold text-foreground">Practice Location</h2>
            </div>
            <MapEmbed
              mapUrl={club.locationDetail.mapUrl}
              address={club.locationDetail.address}
              name={club.locationDetail.name}
              notes={club.locationDetail.notes}
            />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-border bg-card space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.mail} className="text-base" aria-hidden />
              <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            </div>
            <div className="space-y-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.mail} className="text-base" aria-hidden />
                <Link href={`mailto:${club.contact?.email ?? "clubs@philippineathletics.ph"}`} className="text-accent hover:text-accent/80">
                  {club.contact?.email ?? "clubs@philippineathletics.ph"}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.phone} className="text-base" aria-hidden />
                <Link
                  href={`tel:${(club.contact?.phone ?? "+639170000000").replace(/[^\\d+]/g, "")}`}
                  className="text-foreground hover:text-accent"
                >
                  {club.contact?.phone ?? "+63 917 000 0000"}
                </Link>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border border-border bg-card space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.users} className="text-base" aria-hidden />
              <h2 className="text-sm font-semibold text-foreground">Team Contacts</h2>
            </div>
            <div className="space-y-2 text-sm text-foreground">
              {(club.contact?.people ?? []).map((person) => (
                <div key={`${person.name}-${person.role}`} className="p-2 rounded-md bg-muted/60 border border-border">
                  <p className="font-semibold text-foreground">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs mt-1">
                    {person.email ? (
                      <Link href={`mailto:${person.email}`} className="text-accent hover:text-accent/80 inline-flex items-center gap-1">
                        <Emoji symbol={emojiIcons.mail} className="text-sm" aria-hidden />
                        {person.email}
                      </Link>
                    ) : null}
                    {person.phone ? (
                      <Link
                        href={`tel:${person.phone.replace(/[^\\d+]/g, "")}`}
                        className="text-foreground hover:text-accent inline-flex items-center gap-1"
                      >
                        <Emoji symbol={emojiIcons.phone} className="text-sm" aria-hidden />
                        {person.phone}
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))}
              {(!club.contact?.people || club.contact.people.length === 0) && (
                <p className="text-xs text-muted-foreground">Contact details coming soon.</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
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
