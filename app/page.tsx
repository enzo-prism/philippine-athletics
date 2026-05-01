import Link from "next/link"

import { AthleteIcon, ClubIcon, CoachIcon, CompetitionIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { CoreHero, CoreResultRow, CoreSection, EmptyState, AppFooter } from "@/components/site/page-primitives"
import { CoreSearchJump } from "@/components/site/core-search-jump"
import { LordIcon } from "@/components/site/lord-icon"
import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item"
import { competitions } from "@/lib/data/competitions"

const pathways = [
  {
    label: "Athletes",
    href: "/athletes",
    icon: AthleteIcon,
    animatedIconSrc: "https://cdn.lordicon.com/ewwetlvt.json",
  },
  {
    label: "Clubs",
    href: "/clubs",
    icon: ClubIcon,
    animatedIconSrc: "https://cdn.lordicon.com/zjdxuyoy.json",
  },
  {
    label: "Coaches",
    href: "/coaches",
    icon: CoachIcon,
    animatedIconSrc: "https://cdn.lordicon.com/fcfmyrne.json",
  },
  {
    label: "Events",
    href: "/events",
    icon: CompetitionIcon,
    animatedIconSrc: "https://cdn.lordicon.com/aswjckcz.json",
  },
]

export default function Home() {
  const upcoming = competitions.filter((competition) => competition.status === "Upcoming")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="core-main">
        <CoreHero
          title="One platform for athletes, clubs, coaches, and events."
          actions={<CoreSearchJump />}
        />

        <CoreSection title="Browse Live Records" className="home-path-section">
          <div className="home-path-grid">
            {pathways.map((pathway) => {
              const Icon = pathway.icon
              return (
                <Item key={pathway.label} asChild variant="outline" className="home-path-card">
                  <Link href={pathway.href} aria-label={`Open ${pathway.label}`}>
                    <ItemMedia className="home-path-icon">
                      {pathway.animatedIconSrc ? (
                        <LordIcon
                          src={pathway.animatedIconSrc}
                          trigger="loop"
                          delay="2000"
                          stroke="bold"
                          colors="primary:#121331,secondary:#3080e8"
                          label={pathway.label}
                          style={{
                            display: "block",
                            width: "clamp(78px, 8vw, 112px)",
                            height: "clamp(78px, 8vw, 112px)",
                          }}
                        />
                      ) : (
                        <Icon aria-hidden="true" />
                      )}
                    </ItemMedia>
                    <ItemContent className="items-center text-center">
                      <ItemTitle className="home-path-title">{pathway.label}</ItemTitle>
                    </ItemContent>
                  </Link>
                </Item>
              )
            })}
          </div>
        </CoreSection>

        <CoreSection title="Next events" description="The event surface is the primary calendar and results path.">
          {upcoming.length ? (
            <div className="core-list">
              {upcoming.slice(0, 3).map((competition) => (
                <CoreResultRow
                  key={competition.id}
                  href={`/events/${competition.slug}`}
                  eyebrow={competition.status}
                  title={competition.name}
                  description={competition.location}
                  facts={[competition.dateLabel, competition.type]}
                  meta="Open event"
                />
              ))}
            </div>
          ) : (
            <EmptyState title="No events yet" description="New event records will appear here once the fresh data set is added." />
          )}
        </CoreSection>
      </main>

      <AppFooter />
    </div>
  )
}
