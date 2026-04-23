import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { MembershipIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { PathwayCard, PilotDataCard, PilotSection, StatusPill } from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { membershipPathways } from "@/lib/data/membership-pathways"

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <MembershipIcon className="size-4" />
              Enrollment pathways
            </span>
          }
          title="Welcome to the sport, the team, and the journey."
          description="Membership is the front door into Philippine Athletics. The right pathway depends on who is participating, who is operating the roster, who funds the support, and what profile information should be public or private."
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/signup">
                  Start sign-up
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/membership/benefits">Compare pathways</Link>
              </Button>
            </>
          }
          stats={[
            { label: "Pathways", value: membershipPathways.length, note: "Four primary routes for this pilot phase" },
            { label: "Youth model", value: "Private-by-default", note: "Attendance and qualification visible; public performance hidden" },
            { label: "Adult model", value: "Public + evidence-linked", note: "Adult profiles stay connected to rankings and public discovery" },
          ]}
          aside={
            <PilotDataCard
              title="Why this changed"
              description="USATF frames membership as joining the team. This pilot keeps that spirit while making the operating pathway clear."
            >
              <div className="space-y-2 text-sm leading-6 text-muted-foreground">
                <p>Pricing is still unresolved, so this page focuses on entry paths, operator needs, and data visibility instead of locking in unreliable fee math.</p>
                <div className="flex flex-wrap gap-2">
                  <StatusPill tone="accent">Pilot-first</StatusPill>
                  <StatusPill tone="support">Youth-safe</StatusPill>
                  <StatusPill tone="support">Club-aware</StatusPill>
                </div>
              </div>
            </PilotDataCard>
          }
        />

        <PilotSection
          eyebrow="Primary pathways"
          title="Join the Philippine Athletics community through the right route"
          description="Athletes, clubs, LGUs, operators, and supporters should not have to decode an internal system. The pathway cards make the next step visible."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {membershipPathways.map((pathway) => (
              <PathwayCard
                key={pathway.id}
                title={pathway.title}
                audience={pathway.audience}
                summary={pathway.summary}
                highlights={pathway.highlights}
                action={
                  <div className="flex flex-wrap gap-2">
                    <Button asChild>
                      <Link href={pathway.ctaHref}>{pathway.ctaLabel}</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href={`/membership/benefits#${pathway.id}`}>Why this path fits</Link>
                    </Button>
                  </div>
                }
              />
            ))}
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Decision help"
          title="Fast way to choose a pathway"
          description="Use these rules when presenting the pilot to athletes, parents, clubs, LGUs, sponsors, or federation stakeholders."
        >
          <div className="grid gap-3 lg:grid-cols-2">
            <PilotDataCard title="Start with LGU-sponsored youth">
              <p className="text-sm leading-6 text-muted-foreground">
                Use this when the conversation is about city funding, school coordination, bulk enrollment, and proof that the LGU spend is producing visible activity.
              </p>
            </PilotDataCard>
            <PilotDataCard title="Use individual youth fallback only when needed">
              <p className="text-sm leading-6 text-muted-foreground">
                This keeps the participant inside the same pilot story when city coverage is partial or delayed, without breaking the roster.
              </p>
            </PilotDataCard>
            <PilotDataCard title="Use club / coach operator for real operations">
              <p className="text-sm leading-6 text-muted-foreground">
                This is the right route when the stakeholder needs to see roster health, compliance, and youth-to-adult handoff inside a club.
              </p>
            </PilotDataCard>
            <PilotDataCard title="Keep adult / elite / masters public">
              <p className="text-sm leading-6 text-muted-foreground">
                Adult profiles keep the performance and ranking story alive while the youth pilot stays protected and operational.
              </p>
            </PilotDataCard>
          </div>
        </PilotSection>

        <PilotSection
          eyebrow="Secondary audience"
          title="Supporters and sponsors still have a place in the journey"
          description="They are not a primary membership pathway in this pilot pass, but the sign-up flow still supports a stakeholder-facing supporter or sponsor route."
        >
          <PilotDataCard title="Supporter / sponsor route">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <p>Use this when someone wants to follow the project, fund visibility, or review the stakeholder-facing sponsor layer.</p>
              <Button asChild variant="outline" size="sm">
                <Link href="/signup">Open sign-up</Link>
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href="/sponsors">Open sponsors</Link>
              </Button>
            </div>
          </PilotDataCard>
        </PilotSection>
      </main>

      <AppFooter />
    </div>
  )
}
