import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { clubs } from "@/lib/data/clubs"

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Clubs</h1>
          <p className="text-muted-foreground">Explore track and field clubs across the Philippines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <ProfileCard
              key={club.id}
              name={club.name}
              subtitle=""
              location={club.location}
              details={[`Athlete Spots: ${club.spots}`]}
              href={`/clubs/${club.slug ?? club.id}`}
              type="club"
            />
          ))}
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
