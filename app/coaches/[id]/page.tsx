import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getAthletesByCoach, getCoachOrStub } from "@/lib/data/coaches"
import { decodeIdParam } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default async function CoachProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const coach = getCoachOrStub(id)
  const coachedAthletes = getAthletesByCoach(coach.name || coach.id)
  const isStub = coach.isStub

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <Link href="/coaches" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Coaches
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Coach
            </span>
            {coach.badges?.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
                <Emoji symbol={emojiIcons.shield} className="text-sm" aria-hidden />
                {badge}
              </span>
            ))}
          </div>

          <div className="space-y-1">
            <h1 className="text-4xl font-bold text-foreground">{coach.name}</h1>
            <p className="text-base text-muted-foreground">{coach.specialty}</p>
            <p className="text-sm text-muted-foreground">Experience: {coach.experience}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted border border-border text-foreground">
              <Emoji symbol={emojiIcons.location} className="text-sm" aria-hidden />
              {coach.location}
            </span>
            {coach.clubId ? (
              <Link
                href={`/clubs/${coach.clubId}`}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted border border-border text-foreground hover:border-accent transition-colors"
              >
                Club: {coach.club}
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted border border-border text-foreground">
                Club: {coach.club}
              </span>
            )}
          </div>
        </div>

        {!isStub && coach.bio ? (
          <div className="p-4 rounded-lg border border-border bg-card space-y-2">
            <p className="text-sm text-foreground leading-relaxed">{coach.bio}</p>
            {coach.contact ? (
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {coach.contact.email ? (
                  <Link href={`mailto:${coach.contact.email}`} className="inline-flex items-center gap-1 text-accent hover:text-accent/80">
                    <Emoji symbol={emojiIcons.mail} className="text-sm" aria-hidden />
                    {coach.contact.email}
                  </Link>
                ) : null}
                {coach.contact.phone ? (
                  <Link href={`tel:${coach.contact.phone.replace(/[^\\d+]/g, "")}`} className="inline-flex items-center gap-1 text-foreground hover:text-accent">
                    <Emoji symbol={emojiIcons.phone} className="text-sm" aria-hidden />
                    {coach.contact.phone}
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        ) : isStub ? (
          <div className="p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
            Coach details are coming soon. Basic placeholder shown to avoid broken links.
          </div>
        ) : null}

        {coach.achievements && coach.achievements.length ? (
          <div className="space-y-2">
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
          <div className="space-y-2">
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

        <div className="flex gap-3">
          <Link
            href={coach.contact?.email ? `mailto:${coach.contact.email}` : "mailto:coaches@philippineathletics.ph"}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
