import { Navigation } from "@/components/navigation"
import { SystemArchitectureInfographic } from "@/components/system-architecture-infographic"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How It Works</p>
          <h1 className="text-4xl font-bold text-foreground font-accent">System Architecture</h1>
          <p className="text-sm text-muted-foreground">
            Governance, education, public sector partners, and sponsors connected through one athletics platform.
          </p>
        </header>

        <SystemArchitectureInfographic />
      </main>
    </div>
  )
}

