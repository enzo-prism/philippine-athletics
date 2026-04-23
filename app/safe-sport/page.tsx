import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { AthleticsIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro, PageSection, StatusAlert } from "@/components/site/page-primitives"
import { Button } from "@/components/ui/button"
import { safetyResourceGroups } from "@/lib/data/federation"

const principles = [
  {
    title: "Youth-safe by default",
    text: "Youth participation can be visible as a pathway without exposing sensitive performance or attendance details publicly.",
  },
  {
    title: "Credentials near decisions",
    text: "Coach, club, and event trust signals should appear where athletes and families actually choose what to do next.",
  },
  {
    title: "Clear issue routing",
    text: "People should understand where to report concerns, who owns the follow-up, and what information is needed.",
  },
]

export default function SafeSportPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Safe Sport and integrity"
          title="Protecting athletes is part of the athletics system."
          description="USATF gives Safe Sport its own clear resource structure. Philippine Athletics should make athlete welfare, youth privacy, credential proof, and event accountability easy to find from the same public surface."
          actions={
            <>
              <Button asChild size="lg">
                <Link href="/recognition">
                  Recognition signals
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/data-portal">Review results intake</Link>
              </Button>
            </>
          }
          stats={[
            { label: "Resource groups", value: safetyResourceGroups.length, note: "Audience-specific support lanes" },
            { label: "Youth profiles", value: "Private-first", note: "Public proof without public overexposure" },
            { label: "Evidence model", value: "Linked", note: "Credentials, clubs, events, and results stay connected" },
          ]}
        />

        <StatusAlert
          tone="info"
          title="Implementation note"
          description="This page is a product and content structure for the pilot. Final policy language, reporting contacts, and safeguarding procedures should be reviewed by the federation or authorized safeguarding lead before public launch."
        />

        <PageSection
          eyebrow="Audience resources"
          title="Give every participant a clear next step"
          description="Safe Sport content works best when it is organized by the person looking for help, not by internal policy categories."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {safetyResourceGroups.map((group) => (
              <article key={group.audience} className="directory-card">
                <div className="directory-card-meta">
                  <AthleticsIcon name={group.icon} className="size-4" aria-hidden="true" />
                  <span>{group.audience}</span>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">{group.description}</p>
                <ul className="mt-auto space-y-2 text-sm text-muted-foreground">
                  {group.resources.map((resource) => (
                    <li key={resource} className="flex items-start gap-2">
                      <AthleticsIcon name="check" className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </PageSection>

        <PageSection
          eyebrow="Operating principles"
          title="Trust should show up before something goes wrong"
          description="The goal is not to turn the site into a compliance manual. It is to make safe choices and accountable operations visible in the workflows people already use."
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="stat-tile">
                <p className="text-sm font-semibold text-foreground">{principle.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{principle.text}</p>
              </div>
            ))}
          </div>
        </PageSection>
      </main>

      <AppFooter />
    </div>
  )
}
