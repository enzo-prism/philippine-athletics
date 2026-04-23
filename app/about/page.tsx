import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AthleticsIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro, PageSection } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { federationIdentity, federationPillars, federationProof, whatWeDo } from "@/lib/data/federation"

const governanceLinks = [
  { label: "Events & results", href: "/events", icon: "competition" as const },
  { label: "Rankings & records", href: "/rankings", icon: "rankings" as const },
  { label: "Membership pathways", href: "/membership", icon: "membership" as const },
  { label: "Safe Sport", href: "/safe-sport", icon: "recognition" as const },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="About Philippine Athletics"
          title="A trusted national layer for the sport."
          description={federationIdentity.subhead}
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/membership">
                  Join the pathway
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">See the system</Link>
              </Button>
            </>
          }
          stats={federationProof}
          aside={
            <div className="page-intro-surface">
              <p className="brand-eyebrow">Mission</p>
              <p className="text-xl font-semibold leading-8 tracking-normal text-foreground">
                {federationIdentity.mission}
              </p>
              <div className="rounded-lg border border-border bg-background/82 p-4">
                <p className="brand-eyebrow">Rally</p>
                <p className="mt-2 text-base font-semibold text-foreground">{federationIdentity.rally}</p>
              </div>
            </div>
          }
        />

        <PageSection
          eyebrow="What we do"
          title="Make the federation role visible in everyday workflows"
          description="USATF's About page works because it explains the organization behind the sport. This page gives Philippine Athletics the same kind of plain-language institutional story."
        >
          <div className="grid gap-3 lg:grid-cols-2">
            {whatWeDo.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
                <AthleticsIcon name="check" className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Operating pillars"
          title="The sport needs both public proof and daily operations"
          description="These pillars should inform homepage copy, stakeholder demos, route headings, and sponsor-facing language."
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {federationPillars.map((pillar) => (
              <article key={pillar.title} className="directory-card">
                <span className="athletics-icon-tile" aria-hidden="true">
                  <AthleticsIcon name={pillar.icon} className="size-5" />
                </span>
                <div className="space-y-2">
                  <h2 className="text-base font-semibold tracking-normal text-foreground">{pillar.title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Resources"
          title="Make governance feel reachable"
          description="For a national athletics site, trust comes from clear pathways to events, records, membership, safety, and operating proof."
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {governanceLinks.map((item) => (
              <Link key={item.href} href={item.href} className="home-action-card group">
                <span className="home-action-icon" aria-hidden="true">
                  <AthleticsIcon name={item.icon} className="size-5" />
                </span>
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                <ArrowRight className="ml-auto size-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </PageSection>
      </main>

      <AppFooter />
    </div>
  )
}
