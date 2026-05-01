import Link from "next/link"
import type { ReactNode } from "react"
import {
  Activity,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  ExternalLink,
  FileCheck2,
  Flag,
  Handshake,
  Link2,
  Mail,
  Medal,
  Phone,
  ShieldCheck,
  Trophy,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { cleanCoachPublicText, getAthletesByCoach, getCoachOrStub, getCoachPublicRole } from "@/lib/data/coaches"
import { decodeIdParam } from "@/lib/data/utils"

const coachFactIconMap: Record<string, LucideIcon> = {
  "Club role": Handshake,
  "National team background": Flag,
  "Olympic team": Medal,
  Event: Activity,
  "SEA Games record": Trophy,
  "FilAm Sports responsibilities": ClipboardList,
  Role: ClipboardCheck,
  Specialty: Activity,
  Location: Flag,
  Experience: Award,
  "Current public role": ClipboardCheck,
  Discipline: Activity,
  "Recent delegation evidence": CalendarDays,
  "PSC status": ShieldCheck,
  "Athlete legacy": Trophy,
  "National record": Trophy,
  "Also listed as": UserRound,
  Credentials: BadgeCheck,
  "Public role evidence": ShieldCheck,
  "Discipline context": Activity,
  "College coaching": Building2,
  "Recent athlete context": CalendarDays,
  Confidence: ShieldCheck,
  "Coach education": BadgeCheck,
  "Family pathway": Users,
  "Name spelling": FileCheck2,
  "Athlete coached": UserRound,
  "Self-published role": Link2,
  "Record lineage": Trophy,
}

type CoachIconLabelProps = {
  icon: LucideIcon
  children: ReactNode
}

function CoachIconLabel({ icon: Icon, children }: CoachIconLabelProps) {
  return (
    <span className="coach-icon-label">
      <Icon aria-hidden="true" />
      <span>{children}</span>
    </span>
  )
}

function getCoachFactIcon(label: string) {
  return coachFactIconMap[label] ?? FileCheck2
}

export default async function CoachProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const coach = getCoachOrStub(id)
  const coachPublicRole = getCoachPublicRole(coach)
  const coachAliases = [coach.name, coach.id, coach.slug, ...(coach.alsoKnownAs ?? [])].filter(Boolean)
  const coachedAthletes = Array.from(
    new Map(coachAliases.flatMap((alias) => getAthletesByCoach(alias)).map((athlete) => [athlete.id, athlete])).values(),
  )
  const profileFacts = coach.profileFacts?.length
    ? coach.profileFacts
    : [
        { label: "Role", value: coachPublicRole || "Coach profile" },
        { label: "Specialty", value: coach.specialty },
        { label: "Location", value: coach.location },
        { label: "Experience", value: coach.experience },
      ]
  const contactEmail = coach.contact?.email ?? "patafa_nsa@yahoo.com"

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="core-main">
        <CoreBreadcrumb items={[{ label: "Coaches", href: "/coaches" }, { label: coach.name }]} />

        <CoreHero
          eyebrow={coach.isRecognized ? "Recognized coach" : "Coach"}
          title={coach.name}
          description={coach.specialty}
          stats={[
            { label: "Role", value: coachPublicRole || "Coach" },
            { label: "Athletes", value: coachedAthletes.length },
            { label: "Location", value: coach.location },
          ]}
        />

        <div className="core-detail-grid">
          <div className="space-y-5">
            {coach.bio ? (
              <CoreSection title={<CoachIconLabel icon={UserRound}>About</CoachIconLabel>}>
                <p className="text-sm leading-6 text-foreground">{coach.bio}</p>
              </CoreSection>
            ) : null}

            <CoreSection title={<CoachIconLabel icon={Users}>Athletes coached</CoachIconLabel>} description={`${coachedAthletes.length} linked athlete records.`}>
              {coachedAthletes.length ? (
                <div className="core-list">
                  {coachedAthletes.map((athlete) => (
                    <CoreResultRow
                      key={athlete.id}
                      href={athlete.href}
                      eyebrow={<CoachIconLabel icon={Activity}>Athlete</CoachIconLabel>}
                      title={athlete.name}
                      description={athlete.specialty}
                      facts={[athlete.pb ? `PB ${athlete.pb}` : "Profile", athlete.events?.[0] ?? "Event"]}
                      meta="Open athlete"
                    />
                  ))}
                </div>
              ) : (
                <EmptyState title="No athletes linked" description="Athlete records will appear here when they are connected to this coach." />
              )}
            </CoreSection>

            {coach.achievements?.length ? (
              <CoreSection title={<CoachIconLabel icon={Trophy}>Highlights</CoachIconLabel>}>
                <div className="core-mini-list">
                  {coach.achievements.map((achievement) => (
                    <div key={achievement} className="core-mini-item">
                      <div className="coach-scan-row">
                        <span className="coach-row-icon" aria-hidden="true">
                          <Trophy />
                        </span>
                        <span className="min-w-0 leading-6">{achievement}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}

            {coach.evidenceNotes?.length ? (
              <CoreSection title={<CoachIconLabel icon={ShieldCheck}>Evidence notes</CoachIconLabel>} description="How this profile was classified from public sources.">
                <div className="core-mini-list">
                  {coach.evidenceNotes.map((note) => (
                    <div key={note} className="core-mini-item">
                      <div className="coach-scan-row">
                        <span className="coach-row-icon" aria-hidden="true">
                          <ShieldCheck />
                        </span>
                        <span className="min-w-0 leading-6">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}
          </div>

          <aside className="space-y-5">
            <CoreSection title={<CoachIconLabel icon={FileCheck2}>Profile details</CoachIconLabel>}>
              <div className="core-mini-list">
                {profileFacts.map((fact) => {
                  const FactIcon = getCoachFactIcon(fact.label)

                  return (
                    <div key={`${fact.label}-${fact.value}`} className="core-mini-item">
                      <div className="coach-scan-row">
                        <span className="coach-row-icon" aria-hidden="true">
                          <FactIcon />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{cleanCoachPublicText(fact.label)}</p>
                          <p className="mt-1 font-semibold text-foreground">{cleanCoachPublicText(fact.value)}</p>
                          {fact.detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{cleanCoachPublicText(fact.detail)}</p> : null}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CoreSection>

            <CoreSection title={<CoachIconLabel icon={BadgeCheck}>Credentials</CoachIconLabel>}>
              <div className="core-mini-list">
                {(coach.certifications?.length ? coach.certifications : coach.badges ?? ["Credential details coming soon"]).map((item) => (
                  <div key={item} className="core-mini-item">
                    <div className="coach-scan-row">
                      <span className="coach-row-icon" aria-hidden="true">
                        <BadgeCheck />
                      </span>
                      <span className="min-w-0 leading-6">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CoreSection>

            <CoreSection title={<CoachIconLabel icon={Building2}>Club</CoachIconLabel>}>
              <CoreResultRow
                href={coach.clubId ? `/clubs/${coach.clubId}` : "/clubs"}
                eyebrow={<CoachIconLabel icon={Building2}>Club</CoachIconLabel>}
                title={coach.club}
                description={coach.location}
                meta="Open club"
              />
            </CoreSection>

            <CoreSection title={<CoachIconLabel icon={Mail}>Contact</CoachIconLabel>}>
              <div className="core-mini-item">
                <div className="coach-scan-row">
                  <span className="coach-row-icon" aria-hidden="true">
                    <Mail />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">{coach.contact?.email ? "Coach contact" : "Federation contact"}</p>
                    <Link href={`mailto:${contactEmail}`} className="coach-inline-link">
                      <Mail aria-hidden="true" />
                      <span>{contactEmail}</span>
                    </Link>
                    {coach.contact?.phone ? (
                      <p className="coach-inline-meta">
                        <Phone aria-hidden="true" />
                        <span>{coach.contact.phone}</span>
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </CoreSection>

            {coach.researchSources?.length ? (
              <CoreSection title={<CoachIconLabel icon={Link2}>Sources</CoachIconLabel>}>
                <div className="core-mini-list">
                  {coach.researchSources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow,color]"
                    >
                      <span className="coach-scan-row">
                        <span className="coach-row-icon" aria-hidden="true">
                          <Link2 />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2 font-semibold">
                            {source.label}
                            <ExternalLink className="size-3.5 shrink-0" aria-hidden="true" />
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.description}</span>
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
