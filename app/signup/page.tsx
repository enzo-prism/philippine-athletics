import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest">Join the community</p>
          <h1 className="text-4xl font-bold text-foreground">Create your account</h1>
          <p className="text-muted-foreground max-w-2xl">
            Sign up to showcase your profile, connect with coaches and clubs, and stay updated on competitions. This is
            sample copy—replace with your registration flow later.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="space-y-4 p-6 border border-border rounded-lg bg-card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">First Name</label>
                <input
                  type="text"
                  placeholder="Maria"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Last Name</label>
                <input
                  type="text"
                  placeholder="Santos"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Role</label>
                <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Athlete</option>
                  <option>Coach</option>
                  <option>Club Manager</option>
                  <option>Fan / Supporter</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Location</label>
                <input
                  type="text"
                  placeholder="Quezon City"
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>
            <button
              type="button"
              className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              Create account (sample)
            </button>
            <p className="text-xs text-muted-foreground">
              By signing up you agree to the sample terms. Replace this copy and wire up real auth when ready.
            </p>
          </form>

          <div className="p-6 border border-border rounded-lg bg-muted/40 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">What you get</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
              <li>Showcase athlete, coach, or club profiles with stats and achievements.</li>
              <li>Connect with regional communities across the Philippines.</li>
              <li>Stay updated on competitions and training opportunities.</li>
              <li>Manage availability and share contact info securely.</li>
            </ul>
            <div className="text-sm text-muted-foreground">
              Already have an account? <Link href="/login" className="text-accent underline">Log in</Link>
            </div>
          </div>
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
