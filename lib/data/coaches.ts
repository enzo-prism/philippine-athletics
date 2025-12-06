import { athleteSummaries } from "./athletes"
import { matchesIdOrSlug, slugify } from "./utils"

export type Coach = {
  id: string
  slug: string
  name: string
  specialty: string
  location: string
  club: string
  clubId?: string
  experience: string
  badges?: string[]
  bio?: string
  achievements?: string[]
  isStub?: boolean
  contact?: {
    email?: string
    phone?: string
  }
}

export const coaches: Coach[] = [
  {
    id: "coach-ana-reyes",
    slug: "ana-reyes",
    name: "Ana Reyes",
    specialty: "Sprints & Hurdles",
    location: "Manila, NCR",
    club: "Manila Striders Track Club",
    clubId: "club-manila-striders",
    experience: "Former national team 100m hurdler turned coach with over 10 years leading high school and collegiate sprint programs in Metro Manila.",
    badges: ["World Athletics CE Level 1", "Philippine Athletics Certified Coach", "SafeSport Trained"],
    bio: "Ana focuses on building strong fundamentals in acceleration, mechanics, and race planning for youth sprinters transitioning into elite competition.",
    achievements: [
      "Coached multiple Palarong Pambansa medalists in 100m and 200m",
      "Guided athletes to sub-11.0 100m and sub-22.0 200m national-level performances",
      "Regular clinician for NCR grassroots sprint camps",
    ],
    contact: { email: "ana.reyes@example.com", phone: "+63 917 000 0001" },
    isStub: false,
  },
  {
    id: "coach-mark-villanueva",
    slug: "mark-villanueva",
    name: "Mark Villanueva",
    specialty: "Sprints & Relays",
    location: "Pasig, NCR",
    club: "Manila Striders Track Club",
    clubId: "club-manila-striders",
    experience: "Relay specialist and former 4x100m national pool member, now coordinating relays and speed development sessions.",
    badges: ["Philippine Athletics Relay Clinic Facilitator"],
    bio: "Mark enjoys designing competitive relay programs for clubs and schools, emphasizing baton skills and teamwork.",
    achievements: [
      "Set multiple meet records in 4x100m at regional championships as a coach",
      "Organized quarterly relay camps bringing together sprinters from different NCR schools",
    ],
    contact: { email: "mark.villanueva@example.com", phone: "+63 917 000 0002" },
    isStub: false,
  },
  {
    id: "coach-liza-tan",
    slug: "liza-tan",
    name: "Liza Tan",
    specialty: "Middle Distance (800m–3000m)",
    location: "Cebu City, Central Visayas",
    club: "Cebu Distance Project",
    clubId: "club-cebu-distance-project",
    experience: "Former UAAP 1500m champion with a sports science background, leading structured middle-distance training in Cebu.",
    badges: ["World Athletics CE Level 1", "Strength & Conditioning for Endurance Runners"],
    bio: "Liza builds annual training plans that balance school, academics, and high-performance distance running.",
    achievements: [
      "Coached athletes to podium finishes in UAAP 800m and 1500m",
      "Helped multiple youth athletes transition from road races to track championships",
    ],
    contact: { email: "liza.tan@example.com", phone: "+63 917 000 0003" },
    isStub: false,
  },
  {
    id: "coach-joel-mercado",
    slug: "joel-mercado",
    name: "Joel Mercado",
    specialty: "Long Distance & Road-to-Track Development",
    location: "Cebu City, Central Visayas",
    club: "Cebu Distance Project",
    clubId: "club-cebu-distance-project",
    experience: "Over 15 years of experience coaching 5K–marathon athletes, building a bridge from the running community to track events.",
    badges: ["Marathon Training Specialist", "Philippine Athletics Endurance Coach"],
    bio: "Joel focuses on aerobic development, race strategy, and progressive loading for young distance runners.",
    achievements: [
      "Coached sub-32 minute 10K and sub-70 minute half marathon Filipino runners",
      "Organizer and race director for community time trials in Cebu",
    ],
    contact: { email: "joel.mercado@example.com", phone: "+63 917 000 0004" },
    isStub: false,
  },
  {
    id: "coach-ramon-castillo",
    slug: "ramon-castillo",
    name: 'Ramon "Mon" Castillo',
    specialty: "Jumps & Throws",
    location: "Davao City, Davao Region",
    club: "Davao Field & Jumps Academy",
    clubId: "club-davao-field-jumps",
    experience: "Former national decathlete now dedicated to developing field event talent across Southern Mindanao.",
    badges: ["World Athletics CE Level 1", "Certified Throws Coach", "SafeSport Trained"],
    bio: "Mon runs a technical, fundamentals-first program for young jumpers and throwers with limited access to facilities.",
    achievements: [
      "Guided athletes to Mindanao regional records in long jump and javelin",
      "Produced SEA Youth Games medalists in field events",
    ],
    contact: { email: "ramon.castillo@example.com", phone: "+63 917 000 0005" },
    isStub: false,
  },
]

export const getCoachById = (idOrSlug: string) => coaches.find((coach) => matchesIdOrSlug(coach, idOrSlug))

export const getCoachOrStub = (idOrSlug: string, nameHint?: string) => {
  const coach = getCoachById(idOrSlug)
  if (coach) return coach
  const displayName = nameHint || idOrSlug.replace(/-/g, " ") || "Coach profile"
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    name: displayName,
    specialty: "Coach",
    location: "Philippines",
    club: "To be confirmed",
    experience: "TBD",
    bio: "Profile coming soon. Details to be updated.",
    isStub: true,
  }
}

export const getAthletesByCoach = (coachIdOrName: string) =>
  athleteSummaries.filter(
    (athlete) =>
      athlete.coachId === coachIdOrName ||
      (athlete.coach && athlete.coach.toLowerCase() === coachIdOrName.toLowerCase()),
  )
