import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Avatar } from "@/components/avatar"
import { WeeklySchedule } from "@/components/weekly-schedule"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches } from "@/lib/data/clubs"
import { Badge } from "@/components/badge"
import { Button } from "@/components/ui/button"
import { decodeIdParam } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"
import { MapEmbed } from "@/components/map-embed"

export default async function ClubProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
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
              <Emoji symbol={emojiIcons.location} className="text-sm" />
              {club.location}
            </span>
            <span className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              Founded: {club.founded}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <Emoji symbol={emojiIcons.users} className="text-sm" />
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

        {!isStub ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Athletes</p>
              <p className="text-2xl font-bold text-foreground mt-1">{roster.length}</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Coaches</p>
              <p className="text-2xl font-bold text-foreground mt-1">{staff.length}</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Founded</p>
              <p className="text-2xl font-bold text-foreground mt-1">{club.founded}</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-card">
              <p className="text-xs text-muted-foreground uppercase font-semibold">Athlete spots</p>
              <p className="text-2xl font-bold text-foreground mt-1">{club.spots}</p>
            </div>
          </div>
        ) : null}

        {!isStub ? (
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href="#roster">View roster</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href="#coaches">View coaches</Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href="#contact">Contact club</Link>
            </Button>
          </div>
        ) : null}

        {!isStub ? (
          <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Emoji symbol={emojiIcons.check} className="text-base" />
              Demo callout: roster + coaches
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              This is the club proof point: show the roster, show the coaches, then click an athlete to confirm results.
            </p>
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
              <Emoji symbol={emojiIcons.location} className="text-base" />
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

        {club.schedule && club.schedule.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol="📅" className="text-base" />
              <h2 className="text-lg font-semibold text-foreground">Practice Schedule</h2>
            </div>
            <WeeklySchedule sessions={club.schedule} />
          </div>
        ) : null}

        {club.recognitions && club.recognitions.length ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.shield} className="text-base" />
              <h2 className="text-lg font-semibold text-foreground">Recognition</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {club.recognitions.map((item) => (
                <Badge key={item} text={item} variant="accent" />
              ))}
            </div>
            {club.recognitionDetails && club.recognitionDetails.length ? (
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {club.recognitionDetails.map((detail) => (
                  <div key={`${detail.label}-${detail.issuer}`} className="rounded-md border border-border bg-muted/40 px-3 py-2">
                    <p className="font-semibold text-foreground">{detail.label}</p>
                    <p className="text-xs text-muted-foreground">Issuer: {detail.issuer}</p>
                    {detail.validThrough ? (
                      <p className="text-xs text-muted-foreground">Valid through {detail.validThrough}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
            {club.safety && club.safety.length ? (
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {club.safety.map((item) => (
                  <div key={item} className="rounded-md border border-border bg-muted/40 px-3 py-2">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
            <p className="text-sm text-muted-foreground">
              Recognition shows the club meets Philippine Athletics standards for safety, coaching, and athlete care.
            </p>
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
          <div className="space-y-3" id="roster" data-testid="club-roster">
            <h2 className="text-lg font-semibold text-foreground">Roster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {roster.map((athlete) => {
                const href = athlete.id ? `/athletes/${athlete.id}` : undefined
                const primaryEvent = athlete.events?.[0] || athlete.specialty
                const pbLabel = athlete.pb ? `PB: ${athlete.pb}` : null
                const content = (
                  <div className="p-3 rounded-lg border border-border bg-card flex items-center gap-3 hover:border-accent transition-colors" data-testid="club-roster-item">
                    <Avatar name={athlete.name} size="md" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                      <p className="text-xs text-muted-foreground">{primaryEvent}</p>
                      {pbLabel ? <p className="text-[11px] text-muted-foreground">{pbLabel}</p> : null}
                    </div>
                  </div>
                )

                return href ? (
                  <Link key={athlete.name} href={href} className="block">
                    {content}
                  </Link>
                ) : (
                  <div key={athlete.name}>{content}</div>
                )
              })}
            </div>
          </div>
        ) : null}

        {staff && staff.length ? (
          <div className="space-y-2" id="coaches" data-testid="club-coaches">
            <h2 className="text-lg font-semibold text-foreground">Coaching Roster</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {staff.map((coach) => {
                const href = coach.id ? `/coaches/${coach.id}` : undefined
                const inner = (
                  <div className="p-3 rounded-lg border border-border bg-card flex items-center gap-3 hover:border-accent transition-colors" data-testid="club-coach-item">
                    <Avatar name={coach.name} size="sm" />
                    <span className="text-sm text-foreground">{coach.name}</span>
                  </div>
                )

                return href ? (
                  <Link key={coach.name} href={href} className="block">
                    {inner}
                  </Link>
                ) : (
                  <div key={coach.name}>{inner}</div>
                )
              })}
            </div>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="contact">
          <div className="p-4 rounded-lg border border-border bg-card space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.mail} className="text-base" />
              <h2 className="text-sm font-semibold text-foreground">Contact</h2>
            </div>
            <div className="space-y-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.mail} className="text-base" />
                <Link href={`mailto:${club.contact?.email ?? "clubs@philippineathletics.ph"}`} className="text-accent hover:text-accent/80">
                  {club.contact?.email ?? "clubs@philippineathletics.ph"}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.phone} className="text-base" />
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
              <Emoji symbol={emojiIcons.users} className="text-base" />
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
                        <Emoji symbol={emojiIcons.mail} className="text-sm" />
                        {person.email}
                      </Link>
                    ) : null}
                    {person.phone ? (
                      <Link
                        href={`tel:${person.phone.replace(/[^\\d+]/g, "")}`}
                        className="text-foreground hover:text-accent inline-flex items-center gap-1"
                      >
                        <Emoji symbol={emojiIcons.phone} className="text-sm" />
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
          <Button asChild variant="outline">
            <Link href="/signup?role=athlete">Apply as Athlete</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup?role=coach">Apply as Coach</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup?role=sponsor">Apply to Sponsor</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
