import Link from "next/link"

import { Avatar } from "@/components/avatar"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { MapEmbed } from "@/components/map-embed"
import { Navigation } from "@/components/navigation"
import { AppFooter, DetailHero } from "@/components/site/page-primitives"
import { WeeklySchedule } from "@/components/weekly-schedule"
import { Badge } from "@/components/badge"
import { Button } from "@/components/ui/button"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches } from "@/lib/data/clubs"
import { decodeIdParam } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

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

      <main className="page-shell page-stack py-6 sm:py-8">
        <Link href="/clubs" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Clubs
        </Link>

        <DetailHero
          eyebrow="Club"
          title={club.name}
          description={club.focus}
          chips={
            <>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                <Emoji symbol={emojiIcons.location} className="text-sm" />
                {club.location}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                Founded: {club.founded}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                <Emoji symbol={emojiIcons.users} className="text-sm" />
                {club.spots}
              </span>
            </>
          }
          notice={isStub ? "Club details are coming soon. Basic placeholder shown to avoid broken links." : undefined}
          stats={[
            { label: "Athletes", value: roster.length, note: "Roster-linked profiles" },
            { label: "Coaches", value: staff.length, note: "Visible on club and coach pages" },
            { label: "Founded", value: club.founded, note: "Club identity and continuity" },
            { label: "Athlete spots", value: club.spots, note: "Capacity shown in directory" },
          ]}
          aside={<DemoAdSlot slotId="club-profile-top" format="mrec" variant="spotlight" />}
        />

        {!isStub ? (
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <Link href="#roster">View roster</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="#coaches">View coaches</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="#contact">Contact club</Link>
            </Button>
          </div>
        ) : null}

        {!isStub ? (
          <section className="page-section-tight border-accent/20 bg-accent/5">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Emoji symbol={emojiIcons.check} className="text-base" />
              Demo callout: roster + coaches
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              This is the club proof point: show the roster, show the coaches, then click an athlete to confirm results.
            </p>
          </section>
        ) : null}

        {club.bio ? (
          <section className="page-section-tight">
            <p className="text-sm leading-6 text-foreground">{club.bio}</p>
          </section>
        ) : null}

        {club.locationDetail ? (
          <section className="page-section-tight space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.location} className="text-base" />
              <h2 className="text-lg font-semibold text-foreground">Practice location</h2>
            </div>
            <MapEmbed
              mapUrl={club.locationDetail.mapUrl}
              address={club.locationDetail.address}
              name={club.locationDetail.name}
              notes={club.locationDetail.notes}
              lat={club.locationDetail.lat}
              lng={club.locationDetail.lng}
            />
          </section>
        ) : null}

        {club.schedule && club.schedule.length > 0 ? (
          <section className="page-section-tight space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.calendar} className="text-base" />
              <h2 className="text-lg font-semibold text-foreground">Practice schedule</h2>
            </div>
            <WeeklySchedule sessions={club.schedule} />
          </section>
        ) : null}

        {club.recognitions && club.recognitions.length ? (
          <section className="page-section-tight space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.shield} className="text-base" />
              <h2 className="text-lg font-semibold text-foreground">Recognition</h2>
            </div>
            <div className="tag-cloud">
              {club.recognitions.map((item) => (
                <Badge key={item} text={item} variant="accent" />
              ))}
            </div>
            {club.recognitionDetails && club.recognitionDetails.length ? (
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {club.recognitionDetails.map((detail) => (
                  <div key={`${detail.label}-${detail.issuer}`} className="detail-list-item">
                    <p className="font-semibold text-foreground">{detail.label}</p>
                    <p className="text-xs text-muted-foreground">Issuer: {detail.issuer}</p>
                    {detail.validThrough ? <p className="text-xs text-muted-foreground">Valid through {detail.validThrough}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}
            {club.safety && club.safety.length ? (
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {club.safety.map((item) => (
                  <div key={item} className="detail-list-item">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}
            <p className="text-sm text-muted-foreground">
              Recognition shows the club meets Philippine Athletics standards for safety, coaching, and athlete care.
            </p>
          </section>
        ) : null}

        {club.achievements && club.achievements.length ? (
          <section className="page-section-tight space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Highlights</h2>
            <div className="space-y-2">
              {club.achievements.map((item, idx) => (
                <div key={idx} className="detail-list-item border-accent/20 bg-accent/5">
                  {item}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {roster.length ? (
          <section className="page-section-tight space-y-3" id="roster" data-testid="club-roster">
            <h2 className="text-lg font-semibold text-foreground">Roster</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {roster.map((athlete) => {
                const href = athlete.id ? `/athletes/${athlete.id}` : undefined
                const primaryEvent = athlete.events?.[0] || athlete.specialty
                const pbLabel = athlete.pb ? `PB: ${athlete.pb}` : null
                const content = (
                  <div
                    className="detail-list-item flex items-center gap-3 hover:border-accent transition-colors"
                    data-testid="club-roster-item"
                  >
                    <Avatar name={athlete.name} size="md" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                      <p className="text-xs text-muted-foreground">{primaryEvent}</p>
                      {pbLabel ? <p className="text-[11px] text-muted-foreground">{pbLabel}</p> : null}
                    </div>
                  </div>
                )

                return href ? (
                  <Link
                    key={athlete.name}
                    href={href}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    aria-label={`Open athlete profile for ${athlete.name}`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div key={athlete.name}>{content}</div>
                )
              })}
            </div>
          </section>
        ) : null}

        {staff.length ? (
          <section className="page-section-tight space-y-2" id="coaches" data-testid="club-coaches">
            <h2 className="text-lg font-semibold text-foreground">Coaching roster</h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {staff.map((coach) => {
                const href = coach.id ? `/coaches/${coach.id}` : undefined
                const inner = (
                  <div
                    className="detail-list-item flex items-center gap-3 hover:border-accent transition-colors"
                    data-testid="club-coach-item"
                  >
                    <Avatar name={coach.name} size="sm" />
                    <span className="text-sm text-foreground">{coach.name}</span>
                  </div>
                )

                return href ? (
                  <Link
                    key={coach.name}
                    href={href}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                    aria-label={`Open coach profile for ${coach.name}`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={coach.name}>{inner}</div>
                )
              })}
            </div>
          </section>
        ) : null}

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2" id="contact">
          <div className="detail-sidebar-card space-y-3">
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
                  href={`tel:${(club.contact?.phone ?? "+639170000000").replace(/[^\d+]/g, "")}`}
                  className="text-foreground hover:text-accent"
                >
                  {club.contact?.phone ?? "+63 917 000 0000"}
                </Link>
              </div>
            </div>
          </div>

          <div className="detail-sidebar-card space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.users} className="text-base" />
              <h2 className="text-sm font-semibold text-foreground">Team contacts</h2>
            </div>
            <div className="space-y-2 text-sm text-foreground">
              {(club.contact?.people ?? []).map((person) => (
                <div key={`${person.name}-${person.role}`} className="detail-list-item bg-background/74">
                  <p className="font-semibold text-foreground">{person.name}</p>
                  <p className="text-xs text-muted-foreground">{person.role}</p>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
                    {person.email ? (
                      <Link href={`mailto:${person.email}`} className="inline-flex items-center gap-1 text-accent hover:text-accent/80">
                        <Emoji symbol={emojiIcons.mail} className="text-sm" />
                        {person.email}
                      </Link>
                    ) : null}
                    {person.phone ? (
                      <Link href={`tel:${person.phone.replace(/[^\d+]/g, "")}`} className="inline-flex items-center gap-1 text-foreground hover:text-accent">
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
        </section>

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
      </main>

      <AppFooter />
    </div>
  )
}
