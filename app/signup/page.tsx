import { Navigation } from "@/components/navigation"
import { AppFooter, PageIntro } from "@/components/site/page-primitives"
import { SignupPanel } from "@/components/signup/SignupPanel"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-shell page-stack py-6 sm:py-8">
        <PageIntro
          eyebrow="Membership sign-up"
          title="Create your account"
          description="Join Philippine Athletics with a calmer, step-by-step sign-up experience designed for athletes, coaches, clubs, supporters, and sponsors."
        />

        <SignupPanel />
      </main>

      <AppFooter />
    </div>
  )
}
