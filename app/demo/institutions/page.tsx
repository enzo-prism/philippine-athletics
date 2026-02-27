import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { demoFlowConfigs } from "@/lib/demo/flows"

const institutionsFlow = demoFlowConfigs.institutions

export default function InstitutionsDemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{institutionsFlow.label}</p>
          <h1 className="text-4xl font-bold text-foreground font-accent">Institutions Demo Script</h1>
          <p className="text-sm text-muted-foreground">{institutionsFlow.description}</p>
        </header>

        <section className="grid gap-3">
          {institutionsFlow.scriptSteps.map((step, index) => (
            <Card key={step.title} className="py-0">
              <CardContent className="space-y-1 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Step {index + 1}</p>
                <p className="text-sm font-semibold text-foreground">{step.title}</p>
                <p className="text-sm text-muted-foreground">{step.detail}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  )
}

