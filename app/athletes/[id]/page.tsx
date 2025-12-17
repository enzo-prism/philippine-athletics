import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getAthleteProfileOrStub } from "@/lib/data/athletes"
import { decodeIdParam } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export const dynamic = "force-dynamic"
export const dynamicParams = true

const ContactItem = ({ emoji, label, value }: { emoji: string; label: string; value: string }) => (
  <div className="flex items-center gap-2 text-sm text-foreground">
    <Emoji symbol={emoji} className="text-base" />
    <span className="font-medium">{label}:</span>
    <span className="text-muted-foreground">{value}</span>
  </div>
)

export default async function AthleteProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const athlete = getAthleteProfileOrStub(id)
  const isStub = athlete.isStub

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Link href="/athletes" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Athletes
        </Link>

        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Athlete
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <Emoji symbol={emojiIcons.location} className="text-sm" />
              {athlete.location}
            </span>
            <span className="text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              Club: {athlete.club}
            </span>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {athlete.firstName} {athlete.lastName}
              </h1>
            </div>
          </div>

          {isStub ? (
            <div className="p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
              Athlete details are coming soon. Basic placeholder shown to avoid broken links.
            </div>
          ) : null}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol={emojiIcons.medal} className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Event Performances</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {athlete.events.map((evt) => {
                  const query = new URLSearchParams({
                    event: evt.name,
                    level: "National",
                    highlight: `${athlete.firstName} ${athlete.lastName}`,
                  })

                  return (
                    <Link key={evt.name} href={`/rankings?${query.toString()}`} className="block group">
                      <div className="p-4 rounded-lg border border-border bg-card space-y-2 group-hover:border-accent group-hover:bg-accent/5 transition-colors">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-foreground">{evt.name}</p>
                          <span className="text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-2 py-1 rounded-full">
                            PB: {evt.personalBest}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p>National: {evt.nationalRank || "—"}</p>
                          <p>Asian: {evt.asianRank || "—"}</p>
                          <p>Global: {evt.globalRank || "—"}</p>
                          {evt.seasonBest ? <p>Season: {evt.seasonBest}</p> : null}
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol="📅" className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Recent Competitions</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {athlete.competitions.map((comp, i) => (
                  <div key={`${comp.meet}-${i}`} className="p-4 rounded-lg border border-border bg-card space-y-1">
                    <p className="text-sm font-semibold text-foreground">{comp.meet}</p>
                    <p className="text-xs text-muted-foreground">
                      {comp.date} • {comp.location}
                    </p>
                    <p className="text-xs text-foreground">
                      {comp.event} — {comp.result} ({comp.place})
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Emoji symbol="🗓️" className="text-base" />
                <h2 className="text-xl font-semibold text-foreground">Upcoming Competitions</h2>
              </div>
              {athlete.upcoming.length === 0 ? (
                <p className="text-sm text-muted-foreground">No upcoming competitions listed.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {athlete.upcoming.map((up, i) => (
                    <div key={`${up.meet}-${i}`} className="p-4 rounded-lg border border-border bg-card space-y-1">
                      <p className="text-sm font-semibold text-foreground">{up.meet}</p>
                      <p className="text-xs text-muted-foreground">
                        {up.date} • {up.location}
                      </p>
                      <p className="text-xs text-foreground">Events: {up.events.join(", ")}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <div className="p-6 rounded-lg border border-border bg-card space-y-4">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Profile</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Birth date</p>
                  <p className="text-foreground font-medium">{athlete.birthDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Hometown</p>
                  <p className="text-foreground font-medium">{athlete.hometown}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Club</p>
                  {athlete.clubId ? (
                    <Link
                      href={`/clubs/${athlete.clubId}`}
                      className="text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      {athlete.club}
                    </Link>
                  ) : (
                    <p className="text-foreground font-medium">{athlete.club}</p>
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground">Coach</p>
                  {athlete.coachId ? (
                    <Link
                      href={`/coaches/${athlete.coachId}`}
                      className="text-accent font-medium hover:text-accent/80 transition-colors"
                    >
                      {athlete.coach}
                    </Link>
                  ) : (
                    <p className="text-foreground font-medium">{athlete.coach}</p>
                  )}
                </div>
                <div>
                  <p className="text-muted-foreground">Joined</p>
                  <p className="text-foreground font-medium">{athlete.joinedYear}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Years Active</p>
                  <p className="text-foreground font-medium">{new Date().getFullYear() - athlete.joinedYear} years</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
              <div className="space-y-2">
                {athlete.contact.sms ? <ContactItem emoji={emojiIcons.phone} label="Text" value={athlete.contact.sms} /> : null}
                {athlete.contact.whatsapp ? (
                  <ContactItem emoji={emojiIcons.chat} label="WhatsApp" value={athlete.contact.whatsapp} />
                ) : null}
                {athlete.contact.email ? <ContactItem emoji={emojiIcons.mail} label="Email" value={athlete.contact.email} /> : null}
                {athlete.contact.instagram ? (
                  <ContactItem emoji={emojiIcons.sparkles} label="Instagram" value={athlete.contact.instagram} />
                ) : null}
                {athlete.contact.facebook ? (
                  <ContactItem emoji={emojiIcons.chat} label="Facebook" value={athlete.contact.facebook} />
                ) : null}
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-muted/40 space-y-3">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Sponsors</p>
              {athlete.sponsors.length === 0 ? (
                <p className="text-sm text-muted-foreground">No sponsors listed.</p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {athlete.sponsors.map((sponsor) => (
                    <span
                      key={sponsor.name}
                      className="text-xs font-semibold px-2 py-1 rounded-md bg-white text-accent border border-accent/30"
                      title={sponsor.note}
                    >
                      {sponsor.name} • {sponsor.category}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
