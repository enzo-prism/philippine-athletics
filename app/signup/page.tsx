import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { SignupPanel } from "@/components/signup/SignupPanel"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Join the journey"
          title="Start with the pathway that fits your role."
          description="Choose the route that matches how you participate in Philippine Athletics: LGU and school lead, club operator, youth participant or parent, adult athlete, official, volunteer, supporter, or sponsor."
        />

        <Suspense fallback={null}>
          <SignupPanel />
        </Suspense>
      </main>

      <AppFooter />
    </div>
  )
}
