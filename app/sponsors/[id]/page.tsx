import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { AppFooter, DetailHero } from "@/components/site/page-primitives"
import { getSponsorByIdOrStub, resolveRoster } from "@/lib/data/sponsors"
import { Button } from "@/components/ui/button"
import { decodeIdParam } from "@/lib/data/utils"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"
import { Badge } from "@/components/badge"

export default async function SponsorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: rawId } = await params
  const id = decodeIdParam(rawId)
  const sponsor = getSponsorByIdOrStub(id)
  const isStub = sponsor.isStub
  const roster = resolveRoster(sponsor.roster)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <Link href="/sponsors" className="flex items-center gap-2 text-accent hover:text-accent/80 w-fit">
          <Emoji symbol={emojiIcons.back} className="text-base" label="Back" />
          Back to Sponsors
        </Link>

        <DetailHero
          eyebrow="Sponsor"
          title={sponsor.name}
          description={sponsor.focus}
          chips={
            <>
              <span className="inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
                <Emoji symbol={emojiIcons.location} className="text-sm" />
                {sponsor.location}
              </span>
              {sponsor.badges?.map((badge) => (
                <Badge key={badge} text={badge} variant="accent" />
              ))}
            </>
          }
          notice={
            isStub ? "Sponsor details are coming soon. Basic placeholder shown to avoid broken links." : undefined
          }
          stats={[
            { label: "Roster entities", value: roster.length, note: "Athletes, coaches, and clubs supported by this sponsor" },
            { label: "Support areas", value: sponsor.details.length, note: "Partnership benefits and focus areas" },
          ]}
          aside={<DemoAdSlot slotId="sponsor-profile-top" format="mrec" variant="spotlight" />}
        />

        <div className="detail-layout">
          <div className="detail-stack">
            <section className="page-section-tight space-y-3">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Emoji symbol={emojiIcons.sponsor} className="text-base" />
                What they provide
              </h2>
              <div className="detail-list">
                {sponsor.details.map((detail, idx) => (
                  <div key={idx} className="detail-list-item">
                    {detail}
                  </div>
                ))}
              </div>
            </section>

            <section className="page-section-tight space-y-3">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Emoji symbol={emojiIcons.trophy} className="text-base" />
                Sponsored roster
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {roster.map((entity) => (
                  <Link
                    key={`${entity.type}-${entity.id}`}
                    href={entity.href}
                    className="detail-list-item hover:border-accent transition-colors"
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
                      />
                      <div>
                        <p className="font-semibold text-foreground">{entity.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{entity.type}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-stack">
            <div className="detail-sidebar-card space-y-2">
              <p className="text-xs text-muted-foreground font-semibold uppercase">Contact</p>
              <p className="text-sm text-muted-foreground">
                Reach out via sponsors@philippineathletics.ph to start a sponsorship conversation.
              </p>
              <Button asChild>
                <Link href="mailto:sponsors@philippineathletics.ph" className="inline-flex items-center gap-2">
                  <Emoji symbol={emojiIcons.mail} className="text-base" />
                  Email sponsor desk
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
