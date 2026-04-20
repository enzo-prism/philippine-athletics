import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ProfileAvatar } from "@/components/ProfileAvatar"
import { AppFooter, DetailHero } from "@/components/site/page-primitives"
import { getAthletesByCoach, getCoachOrStub } from "@/lib/data/coaches"
import { Button } from "@/components/ui/button"
import { decodeIdParam } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"
import { Badge } from "@/components/badge"

export default async function CoachProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const coach = getCoachOrStub(id)
  const coachedAthletes = getAthletesByCoach(coach.name || coach.id)
  const isStub = coach.isStub

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <Link href="/coaches" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Coaches
        </Link>

        <DetailHero
          eyebrow="Coach"
          title={coach.name}
          description={coach.specialty}
          chips={
            <>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                <Emoji symbol={emojiIcons.location} className="text-sm" />
                {coach.location}
              </span>
              {coach.clubId ? (
                <Link
                  href={`/clubs/${coach.clubId}`}
                  className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent"
                >
                  Club: {coach.club}
                </Link>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                  Club: {coach.club}
                </span>
              )}
              {coach.badges?.map((badge) => (
                <Badge key={badge} text={badge} variant="accent" />
              ))}
            </>
          }
          notice={
            isStub ? "Coach details are coming soon. Basic placeholder shown to avoid broken links." : undefined
          }
          stats={[
            { label: "Experience", value: coach.experience, note: "Visible in roster and directory contexts" },
            { label: "Athletes coached", value: coachedAthletes.length, note: "Linked from club and coach profiles" },
          ]}
          aside={
            <div className="detail-sidebar-card space-y-4">
              <ProfileAvatar name={coach.name} />
              <div className="space-y-1">
                <p className="brand-eyebrow">Coach profile</p>
                <p className="text-lg font-semibold tracking-tight text-foreground">{coach.name}</p>
                <p className="text-sm text-muted-foreground">
                  Experience: {coach.experience}
                </p>
              </div>
              <DemoAdSlot slotId="coach-profile-top" format="mobile" variant="inline" />
            </div>
          }
        />

        <div className="detail-layout">
          <div className="detail-stack">
        {!isStub && coach.bio ? (
          <div className="page-section-tight space-y-2">
            <p className="text-sm text-foreground leading-relaxed">{coach.bio}</p>
            {coach.contact ? (
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {coach.contact.email ? (
                  <Link href={`mailto:${coach.contact.email}`} className="inline-flex items-center gap-1 text-accent hover:text-accent/80">
                    <Emoji symbol={emojiIcons.mail} className="text-sm" />
                    {coach.contact.email}
                  </Link>
                ) : null}
                {coach.contact.phone ? (
                  <Link href={`tel:${coach.contact.phone.replace(/[^\\d+]/g, "")}`} className="inline-flex items-center gap-1 text-foreground hover:text-accent">
                    <Emoji symbol={emojiIcons.phone} className="text-sm" />
                    {coach.contact.phone}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : isStub ? (
          null
        ) : null}

        {coach.recognitions && coach.recognitions.length ? (
          <div className="page-section-tight space-y-3">
            <div className="flex items-center gap-2">
              <Emoji symbol={emojiIcons.shield} className="text-base" />
              <h2 className="text-lg font-semibold text-foreground">Recognition</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {coach.recognitions.map((item) => (
                <Badge key={item} text={item} variant="accent" />
              ))}
            </div>
            {coach.recognitionDetails && coach.recognitionDetails.length ? (
              <div className="grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
                {coach.recognitionDetails.map((detail) => (
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
            {coach.certifications && coach.certifications.length ? (
              <div className="flex flex-wrap gap-2">
                {coach.certifications.map((item) => (
                  <Badge key={item} text={item} variant="outline" />
                ))}
              </div>
            ) : null}
            <p className="text-sm text-muted-foreground">
              Recognition and certifications show a coach is verified and trained under Philippine Athletics standards.
            </p>
          </div>
        ) : null}

        {coach.achievements && coach.achievements.length ? (
          <div className="page-section-tight space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Highlights</h2>
            <div className="space-y-2">
              {coach.achievements.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg border border-accent/20 bg-accent/5 text-sm text-foreground">
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {coachedAthletes.length ? (
          <div className="page-section-tight space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Athletes coached</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {coachedAthletes.map((athlete) => {
                const href = athlete.slug ? `/athletes/${athlete.slug}` : `/athletes/${athlete.id}`
                return (
                  <Link
                    key={athlete.id}
                    href={href}
                    className="p-3 rounded-lg border border-border bg-card text-sm text-foreground hover:border-accent transition-colors"
                  >
                    {athlete.name} — {athlete.specialty}
                  </Link>
                )
              })}
            </div>
          </div>
        ) : null}
          </div>

          <aside className="detail-stack">
            <div className="detail-sidebar-card space-y-3">
              <p className="text-xs font-semibold uppercase text-muted-foreground">Contact</p>
              <p className="text-sm text-muted-foreground">
                Reach this coach directly when contact information is available, or route through the coach desk.
              </p>
              <Button asChild>
                <Link href={coach.contact?.email ? `mailto:${coach.contact.email}` : "mailto:coaches@philippineathletics.ph"}>
                  Contact
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
