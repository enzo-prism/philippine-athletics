import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"

const coaches = [
  {
    id: 1,
    name: "Coach Roberto Tan",
    specialty: "Sprint Coach",
    club: "Manila Speed Club",
    experience: "25 years",
    href: "/coaches/1",
  },
  {
    id: 2,
    name: "Coach Maria Gonzales",
    specialty: "Distance Running Specialist",
    club: "Cebu Distance Runners",
    experience: "18 years",
    href: "/coaches/2",
  },
  {
    id: 3,
    name: "Coach Antonio Reyes",
    specialty: "Field Events Coach",
    club: "Davao Athletics",
    experience: "15 years",
    href: "/coaches/3",
  },
  {
    id: 4,
    name: "Coach Emmanuel Cruz",
    specialty: "Sprint Specialist",
    club: "Quezon City Sprinters",
    experience: "22 years",
    href: "/coaches/4",
  },
  {
    id: 5,
    name: "Coach Lisa Santos",
    specialty: "Jumps & Throws Coach",
    club: "Iloilo Track Club",
    experience: "12 years",
    href: "/coaches/5",
  },
  {
    id: 6,
    name: "Coach Pedro Villalobos",
    specialty: "Head Coach",
    club: "Philippine National Team",
    experience: "30 years",
    href: "/coaches/6",
  },
]

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
              details={[`Club: ${coach.club}`, `Experience: ${coach.experience}`]}
              href={coach.href}
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
