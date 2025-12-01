import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"

const athletes = [
  {
    id: 1,
    name: "Maria Santos",
    specialty: "400m Sprinter",
    club: "Manila Speed Club",
    pb: "52.34s",
    href: "/athletes/1",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    specialty: "5000m Runner",
    club: "Cebu Distance Runners",
    pb: "14:28.5",
    href: "/athletes/2",
  },
  {
    id: 3,
    name: "Ana Reyes",
    specialty: "Long Jump",
    club: "Davao Athletics",
    pb: "6.42m",
    href: "/athletes/3",
  },
  {
    id: 4,
    name: "Rafael Gomez",
    specialty: "100m Sprinter",
    club: "Quezon City Sprinters",
    pb: "10.42s",
    href: "/athletes/4",
  },
  {
    id: 5,
    name: "Linda Villegas",
    specialty: "High Jump",
    club: "Iloilo Track Club",
    pb: "1.84m",
    href: "/athletes/5",
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    specialty: "1500m Middle Distance",
    club: "Manila Distance Runners",
    pb: "3:54.2",
    href: "/athletes/6",
  },
]

export default function AthletesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Athletes</h1>
          <p className="text-muted-foreground">Explore profiles of track and field athletes across the Philippines</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {athletes.map((athlete) => (
            <ProfileCard
              key={athlete.id}
              name={athlete.name}
              subtitle={athlete.specialty}
              details={[`Club: ${athlete.club}`, `Personal Best: ${athlete.pb}`]}
              href={athlete.href}
              type="athlete"
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
