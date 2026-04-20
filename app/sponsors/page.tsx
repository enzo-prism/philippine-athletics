import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { ProfileCard } from "@/components/profile-card"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { sponsors } from "@/lib/data/sponsors"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <Emoji symbol={emojiIcons.sparkles} className="text-base" />
              Sponsors
            </span>
          }
          title="Search sponsors"
          description="Brands actively sponsoring athletes, coaches, and clubs. Open any sponsor to see their roster and focus areas."
          stats={[{ label: "Active sponsor profiles", value: sponsors.length, note: "Partnerships across athletes, clubs, and events" }]}
          aside={<DemoAdSlot slotId="sponsors-inline-1" format="mrec" variant="spotlight" />}
        />

        <section className="page-section">
          <div className="section-toolbar">
            <div>
              <p className="brand-eyebrow">Results</p>
              <h2 className="section-title">Sponsor directory</h2>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <ProfileCard
              key={sponsor.id}
              name={sponsor.name}
              subtitle={sponsor.focus}
              location={sponsor.location}
              details={sponsor.details}
              href={`/sponsors/${sponsor.slug ?? sponsor.id}`}
              badges={sponsor.badges}
              type="sponsor"
            />
          ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
