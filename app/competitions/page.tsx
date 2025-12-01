import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"

const competitions = [
  {
    id: 1,
    name: "Philippine National Championships 2024",
    type: "Track & Field",
    location: "Rizal Memorial Stadium, Manila",
    date: "April 15-21, 2024",
    href: "/competitions/1",
  },
  {
    id: 2,
    name: "SEA Games 2023",
    type: "Regional",
    location: "Multiple Venues",
    date: "May 5-15, 2023",
    href: "/competitions/2",
  },
  {
    id: 3,
    name: "Asian Athletics Championships 2023",
    type: "Continental",
    location: "Bangkok, Thailand",
    date: "June 20-25, 2023",
    href: "/competitions/3",
  },
  {
    id: 4,
    name: "IAAF Regional Meet 2024",
    type: "International",
    location: "Various Cities",
    date: "August 2024",
    href: "/competitions/4",
  },
  {
    id: 5,
    name: "Visayas Track & Field Open",
    type: "Regional",
    location: "Iloilo City",
    date: "March 10-12, 2024",
    href: "/competitions/5",
  },
  {
    id: 6,
    name: "Mindanao Athletics Championship",
    type: "Regional",
    location: "Davao City",
    date: "February 24-26, 2024",
    href: "/competitions/6",
  },
]

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Competitions</h1>
          <p className="text-muted-foreground">Track and field competitions across the Philippines and beyond</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp) => (
            <ProfileCard
              key={comp.id}
              name={comp.name}
              subtitle={comp.type}
              details={[`Location: ${comp.location}`, `Date: ${comp.date}`]}
              href={comp.href}
              type="competition"
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
