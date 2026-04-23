import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { MembershipIcon } from "@/components/icons/athletics-icons"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { PathwayCard, PilotDataCard, PilotSection } from "@/components/pilot/dashboard-primitives"
import { Button } from "@/components/ui/button"
import { membershipPathways } from "@/lib/data/membership-pathways"

const comparisonRows = [
  {
    label: "Best used when",
    render: (pathwayId: string) => membershipPathways.find((pathway) => pathway.id === pathwayId)?.bestFor.join(", "),
  },
  {
    label: "Payment story",
    render: (pathwayId: string) => membershipPathways.find((pathway) => pathway.id === pathwayId)?.paymentStory,
  },
  {
    label: "Profile visibility",
    render: (pathwayId: string) => membershipPathways.find((pathway) => pathway.id === pathwayId)?.profileVisibility,
  },
  {
    label: "Sign-up role",
    render: (pathwayId: string) => membershipPathways.find((pathway) => pathway.id === pathwayId)?.signupRoleLabel,
  },
]

export default function MembershipBenefitsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow={
            <span className="inline-flex items-center gap-2">
              <MembershipIcon className="size-4" />
              Pathway comparison
            </span>
          }
          title="Compare the operating paths"
          description="This is the cleanest way to explain the new model to stakeholders. It keeps youth privacy, club operations, and adult public discovery in the same product without pretending they are all the same workflow."
          actions={
            <Button asChild variant="outline" size="lg">
              <Link href="/membership">
                <ArrowLeft className="size-4" />
                Back to pathway overview
              </Link>
            </Button>
          }
          stats={[
            { label: "Youth", value: "Protected", note: "Private-by-default participant surfaces" },
            { label: "Clubs", value: "Operator-ready", note: "Roster and compliance context made visible" },
            { label: "Adults", value: "Public", note: "Performance and ranking continuity remain intact" },
          ]}
        />

        <PilotSection
          eyebrow="Matrix"
          title="Compare the four primary paths"
          description="This table is deliberately qualitative because pricing assumptions are still being cleaned up."
        >
          <section className="page-section overflow-x-auto border border-border/90 bg-card p-0">
            <table className="w-full min-w-[860px] text-sm">
              <thead className="bg-muted/70">
                <tr>
                  <th className="p-3 text-left font-semibold text-foreground">Question</th>
                  {membershipPathways.map((pathway) => (
                    <th key={pathway.id} className="p-3 text-left font-semibold text-foreground">
                      {pathway.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-t border-border/80 align-top">
                    <td className="p-3 font-medium text-foreground">{row.label}</td>
                    {membershipPathways.map((pathway) => (
                      <td key={`${row.label}-${pathway.id}`} className="p-3 text-muted-foreground">
                        {row.render(pathway.id)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </PilotSection>

        <PilotSection
          eyebrow="Deep dive"
          title="What each path is optimizing for"
          description="These cards keep the same pathway definitions as the overview page, but make the reasoning easier to hand to another stakeholder."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {membershipPathways.map((pathway) => (
              <div key={pathway.id} id={pathway.id} className="scroll-mt-24">
                <PathwayCard
                  title={pathway.title}
                  audience={pathway.audience}
                  summary={pathway.summary}
                  highlights={pathway.highlights}
                  action={
                    <div className="space-y-3">
                      <PilotDataCard title="Best for">
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {pathway.bestFor.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </PilotDataCard>
                      <div className="flex flex-wrap gap-2">
                        <Button asChild>
                          <Link href={pathway.ctaHref}>{pathway.ctaLabel}</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href={pathway.completionHref}>{pathway.completionLabel}</Link>
                        </Button>
                      </div>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </PilotSection>
      </main>

      <AppFooter />
    </div>
  )
}
