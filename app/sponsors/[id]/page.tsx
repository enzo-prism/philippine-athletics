import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { getSponsorByIdOrStub, resolveRoster } from "@/lib/data/sponsors"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default function SponsorPage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params?.id || "").trim().replace(/\/+$/, "")
  const sponsor = getSponsorByIdOrStub(id)
  const isStub = sponsor.isStub
  const roster = resolveRoster(sponsor.roster)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <Link href="/sponsors" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Sponsors
        </Link>

        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
              Sponsor
            </span>
            {sponsor.badges?.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full"
              >
                <Emoji symbol={emojiIcons.shield} className="text-sm" aria-hidden />
                {badge}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">{sponsor.name}</h1>
            <p className="text-base text-muted-foreground">{sponsor.focus}</p>
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-foreground bg-muted border border-border px-3 py-1 rounded-full">
              <Emoji symbol={emojiIcons.location} className="text-sm" aria-hidden />
              {sponsor.location}
            </div>
          </div>

          {isStub ? (
            <div className="p-3 rounded-md border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
              Sponsor details are coming soon. Basic placeholder shown to avoid broken links.
            </div>
          ) : null}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Emoji symbol={emojiIcons.sponsor} className="text-base" aria-hidden />
                What they provide
              </h2>
              <div className="space-y-2">
                {sponsor.details.map((detail, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-border bg-card text-sm text-foreground">
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Emoji symbol={emojiIcons.trophy} className="text-base" aria-hidden />
                Sponsored roster
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {roster.map((entity) => (
                  <Link
                    key={`${entity.type}-${entity.id}`}
                    href={entity.href}
                    className="p-3 rounded-lg border border-border bg-card text-sm text-foreground hover:border-accent transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Emoji
                        symbol={
                          entity.type === "athlete"
                            ? emojiIcons.athlete
                            : entity.type === "coach"
                              ? emojiIcons.coach
                              : emojiIcons.club
                        }
                        className="text-base"
                        aria-hidden
                      />
                      <div>
                        <p className="font-semibold text-foreground">{entity.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{entity.type}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="p-4 rounded-lg border border-border bg-card space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
              <p className="text-sm text-muted-foreground">
                Reach out via sponsors@philippineathletics.ph to start a sponsorship conversation.
              </p>
              <Link
                href="mailto:sponsors@philippineathletics.ph"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Emoji symbol={emojiIcons.mail} className="text-base" aria-hidden />
                Email sponsor desk
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
