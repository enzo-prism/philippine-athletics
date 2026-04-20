import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { coaches } from "@/lib/data/coaches"

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Coach directory"
          title="Search coaches"
          description="Browse coaching profiles, specialties, and club affiliations in the same visual system as the athlete and club directories."
          stats={[{ label: "Coach profiles", value: coaches.length, note: "Searchable across specialties and clubs" }]}
          aside={<DemoAdSlot slotId="coaches-inline-1" format="mrec" variant="spotlight" />}
        />

        <section className="page-section">
          <div className="section-toolbar">
            <div>
              <p className="brand-eyebrow">Results</p>
              <h2 className="section-title">Coaches</h2>
            </div>
          </div>

          <div className="mt-6 results-grid">
            {coaches.map((coach) => (
              <ProfileCard
                key={coach.id}
                name={coach.name}
                subtitle={coach.specialty}
                location={coach.location}
                details={[`Club: ${coach.club}`, `Experience: ${coach.experience}`]}
                badges={coach.badges}
                href={`/coaches/${coach.slug ?? coach.id}`}
                type="coach"
              />
            ))}
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
