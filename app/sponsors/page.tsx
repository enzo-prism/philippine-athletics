"use client"

import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { sponsors } from "@/lib/data/sponsors"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <header className="space-y-2">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-2">
            <Emoji symbol={emojiIcons.sparkles} className="text-base" aria-hidden />
            Sponsors
          </p>
          <h1 className="text-4xl font-bold text-foreground">Sponsorship Partners</h1>
          <p className="text-muted-foreground max-w-2xl text-sm">
            Brands actively sponsoring athletes, coaches, and clubs. Tap any sponsor to see their roster and focus areas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <ProfileCard
              key={sponsor.id}
              name={sponsor.name}
              subtitle={sponsor.focus}
              location={sponsor.location}
              details={sponsor.details}
              href={`/sponsors/${sponsor.slug ?? sponsor.id}`}
              badges={sponsor.badges}
              type="club"
            />
          ))}
        </div>
      </div>

      <div className="border-top border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
