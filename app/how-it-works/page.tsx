import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { SystemArchitectureInfographic } from "@/components/system-architecture-infographic"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-10">
        <PageIntro
          eyebrow="How it works"
          title="System architecture"
          description="Governance, education, public sector partners, and sponsors connected through one athletics platform."
        />

        <section className="page-section">
          <SystemArchitectureInfographic />
        </section>
      </main>

      <AppFooter />
    </div>
  )
}
