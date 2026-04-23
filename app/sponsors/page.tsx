import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { SponsorIcon } from "@/components/icons/athletics-icons"
import { ProfileCard } from "@/components/profile-card"
import { AppFooter, PageIntro, PageSection } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { sponsorCategories } from "@/lib/data/federation"
import { sponsors } from "@/lib/data/sponsors"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <SponsorIcon className="size-4" />
              Sponsors
            </span>
          }
          title="Official partners should feel part of the federation story."
          description="Sponsor visibility stays high, but it now has structure: sponsors, suppliers, technology partners, and community partners tied to athletes, events, clubs, and growth of the sport."
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/membership">
                  Support the pathway
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/events">See event moments</Link>
              </Button>
            </>
          }
          stats={[
            { label: "Active sponsor profiles", value: sponsors.length, note: "Partnerships across athletes, clubs, and events" },
            { label: "Partner categories", value: sponsorCategories.length, note: "Official sponsor, supplier, technology, and community lanes" },
          ]}
          aside={<DemoAdSlot slotId="sponsors-inline-1" format="mrec" variant="spotlight" />}
        />

        <PageSection
          eyebrow="Partner categories"
          title="Make sponsor proof easier to understand"
          description="USATF separates official sponsors, suppliers, technology partners, and medical partners. Philippine Athletics can use the same logic while keeping local community partners visible."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {sponsorCategories.map((category) => (
              <article key={category.name} className="stat-tile">
                <p className="text-sm font-semibold text-foreground">{category.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Directory"
          title="Sponsor directory"
          description="Open any sponsor to see their roster, supported profiles, focus areas, and pathway role."
        >
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
        </PageSection>
      </main>

      <AppFooter />
    </div>
  )
}
