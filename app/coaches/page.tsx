import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { coaches } from "@/lib/data/coaches"

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Coaches</h1>
          <p className="text-muted-foreground">Meet the coaching professionals guiding Philippines track and field</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach) => (
            <ProfileCard
              key={coach.id}
              name={coach.name}
              subtitle={coach.specialty}
              location={coach.location}
              details={[`Club: ${coach.club}`, `Experience: ${coach.experience}`]}
              badges={coach.badges}
              href={`/coaches/${coach.slug ?? coach.id}`}
              type="coach"
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
