import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { AppFooter, CoreBreadcrumb, CoreHero, CoreResultRow, CoreSection, EmptyState } from "@/components/site/page-primitives"
import { getAthletesByCoach, getCoachOrStub } from "@/lib/data/coaches"
import { decodeIdParam } from "@/lib/data/utils"

export default async function CoachProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const coach = getCoachOrStub(id)
  const coachAliases = [coach.name, coach.id, coach.slug, ...(coach.alsoKnownAs ?? [])].filter(Boolean)
  const coachedAthletes = Array.from(
    new Map(coachAliases.flatMap((alias) => getAthletesByCoach(alias)).map((athlete) => [athlete.id, athlete])).values(),
  )
  const profileFacts = coach.profileFacts?.length
    ? coach.profileFacts
    : [
        { label: "Role", value: coach.role ?? "Coach profile" },
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
            { label: "Role", value: coach.role ?? "Coach" },
            { label: "Evidence", value: coach.evidenceLevel ?? (coach.isStub ? "Profile pending" : "Profile") },
            { label: "Athletes", value: coachedAthletes.length },
            { label: "Location", value: coach.location },
          ]}
        />

        <div className="core-detail-grid">
          <div className="space-y-5">
            {coach.bio ? (
              <CoreSection title="About">
                <p className="text-sm leading-6 text-foreground">{coach.bio}</p>
              </CoreSection>
            ) : null}

            <CoreSection title="Athletes coached" description={`${coachedAthletes.length} linked athlete records.`}>
              {coachedAthletes.length ? (
                <div className="core-list">
                  {coachedAthletes.map((athlete) => (
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
                <EmptyState title="No athletes linked" description="Athlete records will appear here when they are connected to this coach." />
              )}
            </CoreSection>

            {coach.achievements?.length ? (
              <CoreSection title="Highlights">
                <div className="core-mini-list">
                  {coach.achievements.map((achievement) => (
                    <div key={achievement} className="core-mini-item">
                      {achievement}
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}

            {coach.evidenceNotes?.length ? (
              <CoreSection title="Evidence notes" description="How this profile was classified from public sources.">
                <div className="core-mini-list">
                  {coach.evidenceNotes.map((note) => (
                    <div key={note} className="core-mini-item">
                      {note}
                    </div>
                  ))}
                </div>
              </CoreSection>
            ) : null}
          </div>

          <aside className="space-y-5">
            <CoreSection title="Profile details">
              <div className="core-mini-list">
                {profileFacts.map((fact) => (
                  <div key={`${fact.label}-${fact.value}`} className="core-mini-item">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{fact.label}</p>
                    <p className="mt-1 font-semibold text-foreground">{fact.value}</p>
                    {fact.detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{fact.detail}</p> : null}
                  </div>
                ))}
              </div>
            </CoreSection>

            <CoreSection title="Credentials">
              <div className="core-mini-list">
                {(coach.certifications?.length ? coach.certifications : coach.badges ?? ["Credential details coming soon"]).map((item) => (
                  <div key={item} className="core-mini-item">
                    {item}
                  </div>
                ))}
              </div>
            </CoreSection>

            <CoreSection title="Club">
              <CoreResultRow
                href={coach.clubId ? `/clubs/${coach.clubId}` : "/clubs"}
                eyebrow="Club"
                title={coach.club}
                description={coach.location}
                meta="Open club"
              />
            </CoreSection>

            <CoreSection title="Contact">
              <div className="core-mini-item">
                <p className="font-semibold">{coach.contact?.email ? "Coach contact" : "Federation contact"}</p>
                <Link href={`mailto:${contactEmail}`} className="mt-1 block text-sm text-accent">
                  {contactEmail}
                </Link>
                {coach.contact?.phone ? <p className="mt-1 text-xs text-muted-foreground">{coach.contact.phone}</p> : null}
              </div>
            </CoreSection>

            {coach.researchSources?.length ? (
              <CoreSection title="Sources">
                <div className="core-mini-list">
                  {coach.researchSources.map((source) => (
                    <a
                      key={source.url}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="core-mini-item block transition-[background-color,border-color,box-shadow,color]"
                    >
                      <span className="flex items-center gap-2 font-semibold">
                        {source.label}
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">{source.description}</span>
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
