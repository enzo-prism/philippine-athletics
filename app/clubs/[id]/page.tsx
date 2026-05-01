import Link from "next/link"
import type { ReactNode } from "react"
import {
  Activity,
  BadgeCheck,
  Building2,
  CalendarDays,
  ClipboardList,
  Clock3,
  ExternalLink,
  Facebook,
  Globe2,
  Instagram,
  Link2,
  Mail,
  MapPin,
  MapPinned,
  Phone,
  ShieldCheck,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { getClubAthletes, getClubByIdOrStub, getClubCoaches, type Club, type ClubSocialPlatform } from "@/lib/data/clubs"
import { decodeIdParam } from "@/lib/data/utils"

type ClubIconLabelProps = {
  icon: LucideIcon
  children: ReactNode
}

function ClubIconLabel({ icon: Icon, children }: ClubIconLabelProps) {
  return (
    <span className="club-icon-label">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </span>
  )
}

const clubSocialIconMap: Partial<Record<ClubSocialPlatform, LucideIcon>> = {
  Instagram,
  Facebook,
}

const getClubOnlineLinks = (club: Club) => [
  ...(club.website
    ? [
        {
          key: `website-${club.website.href}`,
          label: club.website.label ?? "Website",
          href: club.website.href,
          detail: club.website.note,
          icon: Globe2,
        },
      ]
    : []),
  ...(club.socialLinks?.map((link) => {
    const detail = [link.handle, link.note].filter(Boolean).join(" · ")

    return {
      key: `${link.platform}-${link.href}`,
      label: link.label ?? link.platform,
      href: link.href,
      detail,
      icon: clubSocialIconMap[link.platform] ?? Link2,
    }
  }) ?? []),
]

export default async function ClubProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const club = getClubByIdOrStub(id)
  const roster = getClubAthletes(club.id || club.name)
  const staff = getClubCoaches(club.id || club.name)
  const onlineLinks = getClubOnlineLinks(club)

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
              <CoreSection title={<ClubIconLabel icon={Building2}>About</ClubIconLabel>}>
                <p className="text-sm leading-6 text-foreground">{club.bio}</p>
              </CoreSection>
            ) : null}

            {club.achievements?.length || club.safety?.length ? (
              <CoreSection
                title={<ClubIconLabel icon={ClipboardList}>Operating focus</ClubIconLabel>}
                description="Publicly visible role, support model, and verification notes."
              >
                <div className="core-mini-list">
                  {club.achievements?.map((item) => (
                    <div key={item} className="core-mini-item">
                      <div className="club-scan-row">
                        <span className="club-row-icon" aria-hidden="true">
                          <BadgeCheck />
                        </span>
                        <span className="min-w-0 leading-6">{item}</span>
                      </div>
                    </div>
                  ))}
                  {club.safety?.map((item) => (
                    <div key={item} className="core-mini-item">
                      <div className="club-scan-row">
                        <span className="club-row-icon" aria-hidden="true">
                          <ShieldCheck />
                        </span>
                        <span className="min-w-0 leading-6">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}

            <CoreSection title={<ClubIconLabel icon={Users}>Roster</ClubIconLabel>} description={`${roster.length} linked athlete records.`}>
              {roster.length ? (
                <div className="core-list" data-testid="club-roster">
                  {roster.map((athlete) => (
                    <CoreResultRow
                      key={athlete.id}
                      href={athlete.href}
                      eyebrow={<ClubIconLabel icon={Activity}>Athlete</ClubIconLabel>}
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

            <CoreSection title={<ClubIconLabel icon={UserRound}>Coaches</ClubIconLabel>} description={`${staff.length} linked coach records.`}>
              {staff.length ? (
                <div className="core-list" data-testid="club-coaches">
                  {staff.map((coach) => (
                    <CoreResultRow
                      key={coach.id}
                      href={`/coaches/${coach.slug ?? coach.id}`}
                      eyebrow={<ClubIconLabel icon={UserRound}>Coach</ClubIconLabel>}
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
            {onlineLinks.length ? (
              <CoreSection title={<ClubIconLabel icon={Globe2}>Online</ClubIconLabel>}>
                <div className="core-mini-list">
                  {onlineLinks.map((link) => {
                    const LinkIcon = link.icon

                    return (
                      <a
                        key={link.key}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="core-mini-item block transition-[background-color,border-color,box-shadow,color]"
                      >
                        <span className="club-scan-row">
                          <span className="club-row-icon" aria-hidden="true">
                            <LinkIcon />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex items-center gap-2 font-semibold">
                              {link.label}
                              <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                            </span>
                            {link.detail ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{link.detail}</span> : null}
                          </span>
                        </span>
                      </a>
                    )
                  })}
                </div>
              </CoreSection>
            ) : null}

            <CoreSection title={<ClubIconLabel icon={MapPinned}>Location</ClubIconLabel>}>
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <div className="club-scan-row">
                    <span className="club-row-icon" aria-hidden="true">
                      <MapPin />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold">{club.locationDetail?.name ?? club.location}</p>
                      <p className="club-inline-meta">
                        <Globe2 aria-hidden="true" />
                        <span>{club.locationDetail?.address ?? club.location}</span>
                      </p>
                      {club.locationDetail?.mapUrl ? (
                        <Link href={club.locationDetail.mapUrl} className="club-inline-link">
                          <MapPinned aria-hidden="true" />
                          <span>Open map</span>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
                {club.locationDetail?.notes ? (
                  <div className="core-mini-item">
                    <div className="club-scan-row">
                      <span className="club-row-icon" aria-hidden="true">
                        <Globe2 />
                      </span>
                      <span className="min-w-0 leading-6">{club.locationDetail.notes}</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </CoreSection>

            <CoreSection title={<ClubIconLabel icon={CalendarDays}>Schedule</ClubIconLabel>}>
              {club.schedule?.length ? (
                <div className="core-mini-list">
                  {club.schedule.slice(0, 6).map((session) => (
                    <div key={`${session.day}-${session.startTime}-${session.title}`} className="core-mini-item">
                      <div className="club-scan-row">
                        <span className="club-row-icon" aria-hidden="true">
                          <CalendarDays />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="font-semibold">{session.day}</p>
                            <p className="club-inline-meta mt-0">
                              <Clock3 aria-hidden="true" />
                              <span>{session.startTime}-{session.endTime}</span>
                            </p>
                          </div>
                          <p className="mt-1">{session.title}</p>
                          {session.notes ? <p className="mt-1 text-xs text-muted-foreground">{session.notes}</p> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyState title="Schedule coming soon" description="Training days and times will appear once the club schedule is published." />
              )}
            </CoreSection>

            <CoreSection title={<ClubIconLabel icon={Mail}>Contact</ClubIconLabel>}>
              <div className="core-mini-list">
                <div className="core-mini-item">
                  <div className="club-scan-row">
                    <span className="club-row-icon" aria-hidden="true">
                      <Mail />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold">Club desk</p>
                      <Link href={`mailto:${club.contact?.email ?? "clubs@philippineathletics.ph"}`} className="club-inline-link">
                        <Mail aria-hidden="true" />
                        <span>{club.contact?.email ?? "clubs@philippineathletics.ph"}</span>
                      </Link>
                      {club.contact?.phone ? (
                        <p className="club-inline-meta">
                          <Phone aria-hidden="true" />
                          <span>{club.contact.phone}</span>
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                {club.contact?.people?.map((person) => (
                  <div key={`${person.name}-${person.email ?? person.phone ?? person.role}`} className="core-mini-item">
                    <div className="club-scan-row">
                      <span className="club-row-icon" aria-hidden="true">
                        <UserRound />
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold">{person.name}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">{person.role}</p>
                        {person.email ? (
                          <Link href={`mailto:${person.email}`} className="club-inline-link">
                            <Mail aria-hidden="true" />
                            <span>{person.email}</span>
                          </Link>
                        ) : null}
                        {person.phone ? (
                          <p className="club-inline-meta">
                            <Phone aria-hidden="true" />
                            <span>{person.phone}</span>
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CoreSection>

            {club.researchSources?.length ? (
              <CoreSection title={<ClubIconLabel icon={Link2}>Sources</ClubIconLabel>}>
                <div className="core-mini-list">
                  {club.researchSources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow,color]"
                    >
                      <span className="club-scan-row">
                        <span className="club-row-icon" aria-hidden="true">
                          <Link2 />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2 font-semibold">
                            {source.label}
                            <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                          </span>
                          {source.note ? <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.note}</span> : null}
                        </span>
                      </span>
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
