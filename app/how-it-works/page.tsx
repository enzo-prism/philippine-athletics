import { Navigation } from "@/components/navigation"

const steps = [
  {
    title: "Create your profile",
    detail: "Sign up as an athlete, coach, or club. Add your location, specialties, and highlights.",
  },
  {
    title: "Get discovered",
    detail: "Searchable profiles help teams, coaches, and organizers find the right fit across the Philippines.",
  },
  {
    title: "Track opportunities",
    detail: "Stay informed about competitions, camps, and openings. Showcase availability or rankings.",
  },
  {
    title: "Keep it updated",
    detail: "Refresh your stats, achievements, and contact preferences to stay relevant to scouts and clubs.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">How it works</p>
          <h1 className="text-4xl font-bold text-foreground">Showcase and connect</h1>
          <p className="text-muted-foreground max-w-3xl">
            A simple workflow to get athletes, coaches, and clubs seen. Content is sample placeholder—replace with your
            real onboarding and FAQs later.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div key={step.title} className="p-6 border border-border rounded-lg bg-card space-y-2">
              <p className="text-xs font-semibold text-accent uppercase tracking-widest">Step {idx + 1}</p>
              <h2 className="text-xl font-semibold text-foreground">{step.title}</h2>
              <p className="text-sm text-muted-foreground">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="p-6 border border-border rounded-lg bg-muted/40 space-y-3">
          <h3 className="text-lg font-semibold text-foreground">What to replace next</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>Swap in real onboarding copy and visuals.</li>
            <li>Add links to docs for athletes, coaches, and clubs.</li>
            <li>Embed a short explainer video or carousel.</li>
            <li>Link to a real sign-up flow once ready.</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
