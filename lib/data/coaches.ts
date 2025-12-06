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
    id: "1",
    slug: slugify("Coach Roberto Tan"),
    name: "Coach Roberto Tan",
    specialty: "Sprint Coach",
    location: "Manila",
    club: "Manila Speed Club",
    clubId: "1",
    badges: ["National Team Coach"],
    experience: "25 years",
    bio: "Sprint coach focused on acceleration mechanics, relay chemistry, and repeatable speed. Works with national pool athletes and club sprinters.",
    achievements: ["Trained 15+ national champions", "Produced 5 Olympic athletes", "SEA Games Gold Medal Coach 2023"],
    contact: { email: "roberto.tan@manilaspeedclub.ph", phone: "+63 917 111 1111" },
  },
  {
    id: "2",
    slug: slugify("Coach Maria Gonzales"),
    name: "Coach Maria Gonzales",
    specialty: "Distance Running Specialist",
    location: "Cebu City",
    club: "Cebu Distance Runners",
    clubId: "2",
    experience: "18 years",
    bio: "Distance coach focusing on periodization, altitude blocks, and healthy volume for long-term success.",
    achievements: ["Guided multiple SEA Games finalists", "Built Cebu endurance pipeline"],
    contact: { email: "maria.gonzales@cebudistance.ph", phone: "+63 917 222 2222" },
  },
  {
    id: "3",
    slug: slugify("Coach Antonio Reyes"),
    name: "Coach Antonio Reyes",
    specialty: "Field Events Coach",
    location: "Davao City",
    club: "Davao Athletics",
    clubId: "3",
    experience: "15 years",
    bio: "Field coach specializing in jump technique, approach rhythm, and strength balance for horizontal jumpers.",
    achievements: ["Developed national long jump champion", "Davao regional coach of the year"],
    contact: { email: "antonio.reyes@davaoathletics.ph", phone: "+63 917 333 3333" },
  },
  {
    id: "4",
    slug: slugify("Coach Emmanuel Cruz"),
    name: "Coach Emmanuel Cruz",
    specialty: "Sprint Specialist",
    location: "Quezon City",
    club: "Quezon City Sprinters",
    clubId: "4",
    experience: "22 years",
    bio: "Sprint and relay coach emphasizing maximal velocity development and baton work for urban programs.",
    achievements: ["Built consistent sub-41 relay teams", "Longtime national relay consultant"],
    contact: { email: "emmanuel.cruz@qcsprinters.ph", phone: "+63 917 444 4444" },
  },
  {
    id: "5",
    slug: slugify("Coach Lisa Santos"),
    name: "Coach Lisa Santos",
    specialty: "Jumps & Throws Coach",
    location: "Iloilo City",
    club: "Iloilo Track Club",
    clubId: "5",
    experience: "12 years",
    bio: "Technical jumps and throws coach focusing on posture, timing, and injury-free development.",
    achievements: ["Mentored junior national triple jump champion", "Led throws clinics across Western Visayas"],
    contact: { email: "lisa.santos@iloilotrack.ph", phone: "+63 917 555 5555" },
  },
  {
    id: "6",
    slug: slugify("Coach Paula Dizon"),
    name: "Coach Paula Dizon",
    specialty: "Youth Development",
    location: "Laguna",
    club: "Laguna Athletics Academy",
    clubId: "6",
    badges: ["Youth Dev", "SafeSport"],
    experience: "14 years",
    bio: "Youth coach building foundational movement, speed, and durability for multi-event athletes.",
    achievements: ["Built U16 relay champions", "Launched province-wide grassroots program"],
    contact: { email: "paula.dizon@lagunaathletics.ph", phone: "+63 917 666 6666" },
  },
  {
    id: "7",
    slug: slugify("Coach Rafael Cruz"),
    name: "Coach Rafael Cruz",
    specialty: "Road & Marathon",
    location: "Taguig",
    club: "Manila Speed Club",
    clubId: "1",
    badges: ["Road", "Marathon"],
    experience: "16 years",
    bio: "Endurance coach focused on marathon builds, nutrition timing, and heat adaptation for road athletes.",
    achievements: ["Coached national marathon champion", "Designed heat-adapted training blocks"],
    contact: { email: "rafael.cruz@manilaspeedclub.ph", phone: "+63 917 777 7777" },
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
