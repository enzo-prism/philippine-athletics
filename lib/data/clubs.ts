import { athleteSummaries } from "./athletes"
import { coaches } from "./coaches"
import { matchesIdOrSlug, slugify } from "./utils"

export type Club = {
  id: string
  slug: string
  name: string
  focus: string
  location: string
  founded: string
  spots: string
  bio?: string
  achievements?: string[]
  isStub?: boolean
  contact?: {
    email?: string
    phone?: string
    people?: { name: string; role: string; email?: string; phone?: string }[]
  }
  locationDetail?: {
    name?: string
    address: string
    lat?: number
    lng?: number
    mapUrl?: string
    notes?: string
  }
}

export const clubs: Club[] = [
  {
    id: "1",
    slug: slugify("Manila Speed Club"),
    name: "Manila Speed Club",
    focus: "Sprint Training",
    location: "Manila",
    founded: "2008",
    spots: "6 spots open",
    bio: "Dedicated to technical sprint development and relay excellence. Manila Speed Club supports elite and emerging sprinters with data-informed training.",
    achievements: ["12 National Champions", "SEA Games 5 Gold Medals", "Asian Games 2 Medalists"],
    contact: {
      email: "contact@manilaspeedclub.ph",
      phone: "+63 917 111 1111",
      people: [
        { name: "Coach Roberto Tan", role: "Head Coach", email: "roberto.tan@manilaspeedclub.ph", phone: "+63 917 111 1111" },
        { name: "Liza Mendoza", role: "Club Manager", email: "liza.mendoza@manilaspeedclub.ph" },
      ],
    },
    locationDetail: {
      name: "PhilSports Complex Track",
      address: "PhilSports Complex, Capt. Henry Javier, Pasig, Metro Manila",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.774453905747!2d121.0645807!3d14.6104336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c82c1923114f%3A0x5acdd226a7871004!2sPhilSports%20Track%20Oval!5e0!3m2!1sen!2sph!4v1700000000000",
      notes: "Entrance via Gate 3; track access near the west stands.",
    },
  },
  {
    id: "2",
    slug: slugify("Cebu Distance Runners"),
    name: "Cebu Distance Runners",
    focus: "Long Distance Running",
    location: "Cebu City",
    founded: "2010",
    spots: "4 spots open",
    bio: "Holistic distance program combining altitude blocks, nutrition support, and tactical race prep for track and road athletes.",
    achievements: ["Consistent SEA finalists", "National road podiums"],
    contact: {
      email: "hello@cebudistance.ph",
      phone: "+63 917 222 2222",
      people: [
        { name: "Coach Maria Gonzales", role: "Head Coach", email: "maria.gonzales@cebudistance.ph", phone: "+63 917 222 2222" },
        { name: "Ramon Cruz", role: "Club Admin", email: "ramon.cruz@cebudistance.ph" },
      ],
    },
    locationDetail: {
      name: "Cebu City Sports Center",
      address: "Cebu City Sports Complex, Osmeña Blvd, Cebu City",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2625366190157!2d123.8929876!3d10.3049236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9993608a68f27%3A0xd7e9f6f9d21db8f5!2sCebu%20City%20Sports%20Center!5e0!3m2!1sen!2sph!4v1700000000001",
      notes: "Meet at the south bleachers; morning sessions start 6:00 AM.",
    },
  },
  {
    id: "3",
    slug: slugify("Davao Athletics"),
    name: "Davao Athletics",
    focus: "Field Events",
    location: "Davao City",
    founded: "2012",
    spots: "8 spots open",
    bio: "Regional hub for jumps and throws with access to runway, pit, and cage facilities.",
    achievements: ["Regional dominance in jumps", "Produced national champions"],
    contact: {
      email: "contact@davaoathletics.ph",
      phone: "+63 917 333 3333",
      people: [
        { name: "Coach Antonio Reyes", role: "Head Coach", email: "antonio.reyes@davaoathletics.ph" },
        { name: "Miguel Santos", role: "Club Manager", email: "miguel.santos@davaoathletics.ph", phone: "+63 917 333 3333" },
      ],
    },
    locationDetail: {
      name: "Davao City Recreation Center",
      address: "Quimpo Blvd, Davao City",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63821.48342197436!2d125.5871997!3d7.0735781999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d2d0e4419a3%3A0x4d6b79a24f2b0fc8!2sDavao%20City%20Recreation%20Center!5e0!3m2!1sen!2sph!4v1700000000002",
      notes: "Field event area on the east side; ask security for throws sector access.",
    },
  },
  {
    id: "4",
    slug: slugify("Quezon City Sprinters"),
    name: "Quezon City Sprinters",
    focus: "Sprint & Relay",
    location: "Quezon City",
    founded: "2015",
    spots: "5 spots open",
    contact: {
      email: "info@qcsprinters.ph",
      phone: "+63 917 444 4444",
      people: [
        { name: "Coach Emmanuel Cruz", role: "Head Coach", email: "emmanuel.cruz@qcsprinters.ph" },
        { name: "Anna Lim", role: "Admin", email: "anna.lim@qcsprinters.ph" },
      ],
    },
    locationDetail: {
      name: "Amoranto Sports Complex",
      address: "Amoranto Stadium, Roces Ave, Quezon City",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.290657959675!2d121.019266!3d14.647843999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7a92f899cd1%3A0x8e0b1c1d7f66a701!2sAmoranto%20Sports%20Complex!5e0!3m2!1sen!2sph!4v1700000000003",
      notes: "Warm-up area near the north gate; parking on Roces Ave.",
    },
  },
  {
    id: "5",
    slug: slugify("Iloilo Track Club"),
    name: "Iloilo Track Club",
    focus: "Multi-Event Training",
    location: "Iloilo City",
    founded: "2011",
    spots: "3 spots open",
    contact: {
      email: "hello@iloilotrack.ph",
      phone: "+63 917 555 5555",
      people: [
        { name: "Coach Lisa Santos", role: "Head Coach", email: "lisa.santos@iloilotrack.ph" },
        { name: "Jared Ramos", role: "Club Manager", email: "jared.ramos@iloilotrack.ph" },
      ],
    },
    locationDetail: {
      name: "Iloilo Sports Complex",
      address: "Iloilo Sports Complex, Magsaysay Village, Iloilo City",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.018134614353!2d122.557686!3d10.7096747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee54660ad8b0f%3A0x3e27f2b9dbb391d3!2sIloilo%20Sports%20Complex!5e0!3m2!1sen!2sph!4v1700000000004",
      notes: "Meet at the main gate by the grandstand; afternoon sessions after 4 PM.",
    },
  },
  {
    id: "6",
    slug: slugify("Laguna Athletics Academy"),
    name: "Laguna Athletics Academy",
    focus: "Youth Development",
    location: "Laguna (Sta. Rosa)",
    founded: "2013",
    spots: "10 spots open",
    contact: {
      email: "contact@lagunaathletics.ph",
      phone: "+63 917 666 6666",
      people: [
        { name: "Coach Paula Dizon", role: "Head Coach", email: "paula.dizon@lagunaathletics.ph" },
        { name: "Marco Tan", role: "Program Director", email: "marco.tan@lagunaathletics.ph" },
      ],
    },
    locationDetail: {
      name: "Nuvali Track Oval",
      address: "Nuvali, Sta. Rosa, Laguna",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.754335624001!2d121.0654665!3d14.6610325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6215155c5a3f%3A0xf28ac1e64fdf75b9!2sNuvali!5e0!3m2!1sen!2sph!4v1700000000005",
      notes: "Track access via the south gate; bring ID for security.",
    },
  },
]

export const getClubById = (idOrSlug: string) => clubs.find((club) => matchesIdOrSlug(club, idOrSlug))

export const getClubByIdOrStub = (idOrSlug: string, nameHint?: string): Club => {
  const club = getClubById(idOrSlug)
  if (club) return club
  const displayName = nameHint || idOrSlug.replace(/-/g, " ") || "Club"
  return {
    id: idOrSlug,
    slug: slugify(idOrSlug),
    name: displayName,
    focus: "Track and field",
    location: "Philippines",
    founded: "—",
    spots: "TBD",
    bio: "Profile coming soon. Details to be updated.",
    isStub: true,
    contact: {
      email: "clubs@philippineathletics.ph",
      phone: "+63 917 000 0000",
      people: [{ name: displayName, role: "Club Contact", email: "clubs@philippineathletics.ph" }],
    },
  }
}

export const getClubAthletes = (clubIdOrName: string) =>
  athleteSummaries.filter(
    (athlete) =>
      athlete.clubId === clubIdOrName ||
      (athlete.club && athlete.club.toLowerCase() === clubIdOrName.toLowerCase()),
  )

export const getClubCoaches = (clubIdOrName: string) =>
  coaches.filter(
    (coach) => coach.clubId === clubIdOrName || coach.club.toLowerCase() === clubIdOrName.toLowerCase(),
  )
