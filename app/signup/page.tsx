import { Navigation } from "@/components/navigation"
import { SignupPanel } from "@/components/signup/SignupPanel"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-4">
          <p className="brand-eyebrow">Membership Sign-up</p>
          <h1 className="text-4xl font-bold text-foreground">Create your account</h1>
        </div>

        <SignupPanel />
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="brand-subtext">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
