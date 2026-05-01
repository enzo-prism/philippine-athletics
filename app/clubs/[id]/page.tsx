import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches } from "@/lib/data/clubs"
import { decodeIdParam } from "@/lib/data/utils"

export default async function ClubProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const club = getClubByIdOrStub(id)
  const roster = getClubAthletes(club.id || club.name)
  const staff = getClubCoaches(club.id || club.name)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreBreadcrumb items={[{ label: "Clubs", href: "/clubs" }, { label: club.name }]} />

        <CoreHero
          eyebrow={club.isRecognized ? "Recognized club" : "Club"}
          title={club.name}
          description={club.focus}
          stats={[
            { label: "Location", value: club.location },
            { label: "Founded", value: club.founded },
            { label: "Athletes", value: roster.length },
            { label: "Coaches", value: staff.length },
          ]}
        />

        <div className="core-detail-grid">
          <div className="space-y-5">
            {club.bio ? (
              <CoreSection title="About">
                <p className="text-sm leading-6 text-foreground">{club.bio}</p>
              </CoreSection>
            ) : null}

            {club.achievements?.length || club.safety?.length ? (
              <CoreSection title="Operating focus" description="Publicly visible role, support model, and verification notes.">
                <div className="core-mini-list">
                  {club.achievements?.map((item) => (
                    <div key={item} className="core-mini-item">
                      {item}
                    </div>
                  ))}
                  {club.safety?.map((item) => (
                    <div key={item} className="core-mini-item">
                      {item}
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}

            <CoreSection title="Roster" description={`${roster.length} linked athlete records.`}>
              {roster.length ? (
                <div className="core-list" data-testid="club-roster">
                  {roster.map((athlete) => (
                    <CoreResultRow
                      key={athlete.id}
                      href={athlete.href}
                      eyebrow="Athlete"
                      title={athlete.name}
                      description={athlete.specialty}
                      facts={[athlete.pb ? `PB ${athlete.pb}` : "Profile", athlete.events?.[0] ?? "Event"]}
                      meta="Open athlete"
                    />
                  ))}
                </div>
              ) : (
                <EmptyState title="No athletes linked" description="Roster records will appear here when athletes are connected to this club." />
              )}
            </CoreSection>

            <CoreSection title="Coaches" description={`${staff.length} linked coach records.`}>
              {staff.length ? (
                <div className="core-list" data-testid="club-coaches">
                  {staff.map((coach) => (
                    <CoreResultRow
                      key={coach.id}
                      href={`/coaches/${coach.slug ?? coach.id}`}
                      eyebrow="Coach"
                      title={coach.name}
                      description={coach.specialty}
                      facts={[coach.location]}
                      meta="Open coach"
                    />
                  ))}
                </div>
              ) : (
                <EmptyState title="No coaches linked" description="Coach records will appear here when staff are connected to this club." />
              )}
            </CoreSection>
          </div>

          <aside className="space-y-5">
            <CoreSection title="Location">
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <p className="font-semibold">{club.locationDetail?.name ?? club.location}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {club.locationDetail?.address ?? club.location}
                  </p>
                  {club.locationDetail?.mapUrl ? (
                    <Link href={club.locationDetail.mapUrl} className="mt-3 inline-flex text-xs font-semibold text-accent">
                      Open map
                    </Link>
                  ) : null}
                </div>
                {club.locationDetail?.notes ? <div className="core-mini-item">{club.locationDetail.notes}</div> : null}
              </div>
            </CoreSection>

            <CoreSection title="Schedule">
              {club.schedule?.length ? (
                <div className="core-mini-list">
                  {club.schedule.slice(0, 6).map((session) => (
                    <div key={`${session.day}-${session.startTime}-${session.title}`} className="core-mini-item">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold">{session.day}</p>
                        <p className="text-xs text-muted-foreground">{session.startTime}-{session.endTime}</p>
                      </div>
                      <p className="mt-1">{session.title}</p>
                      {session.notes ? <p className="mt-1 text-xs text-muted-foreground">{session.notes}</p> : null}
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="Schedule coming soon" description="Training days and times will appear once the club schedule is published." />
              )}
            </CoreSection>

            <CoreSection title="Contact">
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <p className="font-semibold">Club desk</p>
                  <Link href={`mailto:${club.contact?.email ?? "clubs@philippineathletics.ph"}`} className="mt-1 block text-sm text-accent">
                    {club.contact?.email ?? "clubs@philippineathletics.ph"}
                  </Link>
                  {club.contact?.phone ? <p className="mt-1 text-xs text-muted-foreground">{club.contact.phone}</p> : null}
                </div>
                {club.contact?.people?.map((person) => (
                  <div key={`${person.name}-${person.email ?? person.phone ?? person.role}`} className="core-mini-item">
                    <p className="font-semibold">{person.name}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">{person.role}</p>
                    {person.email ? (
                      <Link href={`mailto:${person.email}`} className="mt-1 block text-sm text-accent">
                        {person.email}
                      </Link>
                    ) : null}
                    {person.phone ? <p className="mt-1 text-xs text-muted-foreground">{person.phone}</p> : null}
                  </div>
                ))}
              </div>
            </CoreSection>

            {club.researchSources?.length ? (
              <CoreSection title="Sources">
                <div className="core-mini-list">
                  {club.researchSources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow,color]"
                    >
                      <span className="flex items-center gap-2 font-semibold">
                        {source.label}
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </span>
                      {source.note ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.note}</span> : null}
                    </a>
                  ))}
                </div>
              </CoreSection>
            ) : null}
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
