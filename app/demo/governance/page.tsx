import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { demoAthleteSpotlights, demoAthleteSummaries } from "@/lib/data/demo-athletes"
import { demoFlowConfigs } from "@/lib/demo/flows"

const governanceFlow = demoFlowConfigs.governance

export default function GovernanceDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{governanceFlow.label}</p>
          <h1 className="text-4xl font-bold text-foreground font-accent">Governance Demo Script</h1>
          <p className="text-sm text-muted-foreground">{governanceFlow.description}</p>
        </header>

        <section className="grid gap-3">
          {governanceFlow.scriptSteps.map((step, index) => (
            <Card key={step.title} className="py-0">
              <CardContent className="space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
                <p className="text-sm font-semibold text-foreground">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.detail}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Prepared athlete profiles (5 clickable examples)</p>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {demoAthleteSummaries.map((athlete) => {
              const spotlight = demoAthleteSpotlights.find((item) => item.id === athlete.id)
              return (
                <Link key={athlete.id} href={athlete.href} className="border border-border bg-card p-4 transition-colors hover:bg-muted/40">
                  <p className="text-sm font-semibold text-foreground">{athlete.name}</p>
                  <p className="text-xs text-muted-foreground">{athlete.membershipNumber}</p>
                  <p className="text-xs text-muted-foreground">{spotlight?.eventCategory ?? athlete.specialty}</p>
                  <p className="text-xs text-muted-foreground">{spotlight?.whyThisAthlete ?? ""}</p>
                  <p className="mt-2 text-xs font-semibold text-accent">Open athlete profile</p>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
