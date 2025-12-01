"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { ProfileCard } from "@/components/profile-card"
import { Search, SlidersHorizontal, SortAsc } from "lucide-react"

type Athlete = {
  id: number
  name: string
  specialty: string
  club: string
  pb: string
  location: string
  nationalRank?: string
  asianRank?: string
  globalRank?: string
  href: string
  events?: string[]
}

const eventOptions = [
  { label: "All events", value: "All" },
  { label: "Sprints", value: "Sprints" },
  { label: "100m", value: "100m" },
  { label: "200m", value: "200m" },
  { label: "400m", value: "400m" },
  { label: "Middle Distance", value: "Middle Distance" },
  { label: "800m", value: "800m" },
  { label: "1500m", value: "1500m" },
  { label: "Long Distance", value: "Long Distance" },
  { label: "5000m", value: "5000m" },
  { label: "10,000m", value: "10,000m" },
  { label: "Hurdles", value: "Hurdles" },
  { label: "110m hurdles (men)", value: "110m hurdles (men)" },
  { label: "100m hurdles (women)", value: "100m hurdles (women)" },
  { label: "400m hurdles", value: "400m hurdles" },
  { label: "Steeplechase", value: "Steeplechase" },
  { label: "3000m steeplechase", value: "3000m steeplechase" },
  { label: "Relays", value: "Relays" },
  { label: "4×100m relay", value: "4×100m relay" },
  { label: "4×400m relay", value: "4×400m relay" },
  { label: "Jumps", value: "Jumps" },
  { label: "High jump", value: "High jump" },
  { label: "Pole vault", value: "Pole vault" },
  { label: "Long jump", value: "Long jump" },
  { label: "Triple jump", value: "Triple jump" },
  { label: "Throws", value: "Throws" },
  { label: "Shot put", value: "Shot put" },
  { label: "Discus throw", value: "Discus throw" },
  { label: "Hammer throw", value: "Hammer throw" },
  { label: "Javelin throw", value: "Javelin throw" },
  { label: "Combined Events", value: "Combined Events" },
  { label: "Decathlon (men)", value: "Decathlon (men)" },
  { label: "Heptathlon (women)", value: "Heptathlon (women)" },
  { label: "Road Events", value: "Road Events" },
  { label: "Marathon", value: "Marathon" },
]

const categoryByEvent: Record<string, string> = {
  Sprints: "Sprints",
  "100m": "Sprints",
  "200m": "Sprints",
  "400m": "Sprints",
  "Middle Distance": "Middle Distance",
  "800m": "Middle Distance",
  "1500m": "Middle Distance",
  "Long Distance": "Long Distance",
  "5000m": "Long Distance",
  "10,000m": "Long Distance",
  Hurdles: "Hurdles",
  "110m hurdles (men)": "Hurdles",
  "100m hurdles (women)": "Hurdles",
  "400m hurdles": "Hurdles",
  Steeplechase: "Steeplechase",
  "3000m steeplechase": "Steeplechase",
  Relays: "Relays",
  "4×100m relay": "Relays",
  "4×400m relay": "Relays",
  Jumps: "Jumps",
  "High jump": "Jumps",
  "Pole vault": "Jumps",
  "Long jump": "Jumps",
  "Triple jump": "Jumps",
  Throws: "Throws",
  "Shot put": "Throws",
  "Discus throw": "Throws",
  "Hammer throw": "Throws",
  "Javelin throw": "Throws",
  "Combined Events": "Combined Events",
  "Decathlon (men)": "Combined Events",
  "Heptathlon (women)": "Combined Events",
  "Road Events": "Road Events",
  Marathon: "Road Events",
}

const athletes: Athlete[] = [
  {
    id: 1,
    name: "Maria Santos",
    specialty: "400m Sprinter",
    club: "Manila Speed Club",
    pb: "52.34s",
    location: "Taguig (Bonifacio Global City)",
    nationalRank: "#1 PH",
    asianRank: "#4 Asia",
    globalRank: "#32 World",
    events: ["400m", "200m", "4×400m relay"],
    href: "/athletes/1",
  },
  {
    id: 2,
    name: "Juan Dela Cruz",
    specialty: "5000m Runner",
    club: "Cebu Distance Runners",
    pb: "14:28.5",
    location: "Cebu City",
    nationalRank: "#2 PH",
    asianRank: "#15 Asia",
    globalRank: "#120 World",
    events: ["5000m", "10,000m"],
    href: "/athletes/2",
  },
  {
    id: 3,
    name: "Ana Reyes",
    specialty: "Long Jump",
    club: "Davao Athletics",
    pb: "6.42m",
    location: "Davao City",
    nationalRank: "#1 PH",
    asianRank: "#6 Asia",
    globalRank: "#48 World",
    events: ["Long jump", "Triple jump"],
    href: "/athletes/3",
  },
  {
    id: 4,
    name: "Rafael Gomez",
    specialty: "100m Sprinter",
    club: "Quezon City Sprinters",
    pb: "10.42s",
    location: "Quezon City",
    nationalRank: "#3 PH",
    asianRank: "#20 Asia",
    globalRank: "#150 World",
    events: ["100m", "200m", "4×100m relay"],
    href: "/athletes/4",
  },
  {
    id: 5,
    name: "Linda Villegas",
    specialty: "High Jump",
    club: "Iloilo Track Club",
    pb: "1.84m",
    location: "Iloilo City",
    nationalRank: "#2 PH",
    asianRank: "#10 Asia",
    globalRank: "#70 World",
    events: ["High jump"],
    href: "/athletes/5",
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    specialty: "1500m Middle Distance",
    club: "Manila Distance Runners",
    pb: "3:54.2",
    location: "Manila",
    nationalRank: "#2 PH",
    asianRank: "#18 Asia",
    globalRank: "#110 World",
    events: ["1500m", "800m"],
    href: "/athletes/6",
  },
  {
    id: 7,
    name: "Paolo Ramirez",
    specialty: "200m Sprinter",
    club: "Taguig Elite Track",
    pb: "20.88s",
    location: "Taguig (Bonifacio Global City)",
    nationalRank: "#4 PH",
    asianRank: "#25 Asia",
    globalRank: "#180 World",
    events: ["200m", "100m"],
    href: "/athletes/7",
  },
  {
    id: 8,
    name: "Sofia Cruz",
    specialty: "800m Runner",
    club: "Sta. Rosa Striders",
    pb: "2:04.1",
    location: "Laguna (Sta. Rosa)",
    nationalRank: "#3 PH",
    asianRank: "#22 Asia",
    globalRank: "#145 World",
    events: ["800m", "1500m"],
    href: "/athletes/8",
  },
  {
    id: 9,
    name: "Miguel Ortega",
    specialty: "Pole Vault",
    club: "Makati Apex Field",
    pb: "5.30m",
    location: "Makati",
    nationalRank: "#1 PH",
    asianRank: "#9 Asia",
    globalRank: "#55 World",
    events: ["Pole vault"],
    href: "/athletes/9",
  },
  {
    id: 10,
    name: "Jasmine Uy",
    specialty: "100m Hurdles",
    club: "Quezon City Hurricanes",
    pb: "13.35s",
    location: "Quezon City",
    nationalRank: "#2 PH",
    asianRank: "#14 Asia",
    globalRank: "#90 World",
    events: ["100m hurdles (women)", "100m"],
    href: "/athletes/10",
  },
  {
    id: 11,
    name: "Diego Bautista",
    specialty: "Triple Jump",
    club: "Pasig Flight Club",
    pb: "16.55m",
    location: "Pasig",
    nationalRank: "#1 PH",
    asianRank: "#11 Asia",
    globalRank: "#68 World",
    events: ["Triple jump", "Long jump"],
    href: "/athletes/11",
  },
  {
    id: 12,
    name: "Carla Navarro",
    specialty: "Marathon",
    club: "Manila Distance Project",
    pb: "2:29:45",
    location: "Manila",
    nationalRank: "#1 PH",
    asianRank: "#18 Asia",
    globalRank: "#95 World",
    events: ["Marathon", "10,000m"],
    href: "/athletes/12",
  },
  {
    id: 13,
    name: "Nico Reyes",
    specialty: "Shot Put",
    club: "Baguio Highland Throws",
    pb: "20.21m",
    location: "Baguio City",
    nationalRank: "#1 PH",
    asianRank: "#10 Asia",
    globalRank: "#60 World",
    href: "/athletes/13",
  },
  {
    id: 14,
    name: "Liza Soriano",
    specialty: "Discus Throw",
    club: "La Union Power Club",
    pb: "60.12m",
    location: "La Union (San Fernando)",
    nationalRank: "#1 PH",
    asianRank: "#12 Asia",
    globalRank: "#70 World",
    href: "/athletes/14",
  },
  {
    id: 15,
    name: "Aaron Villanueva",
    specialty: "400m Hurdles",
    club: "Mandaluyong Track Works",
    pb: "49.85s",
    location: "Mandaluyong",
    nationalRank: "#2 PH",
    asianRank: "#16 Asia",
    globalRank: "#108 World",
    href: "/athletes/15",
  },
  {
    id: 16,
    name: "Bianca Robles",
    specialty: "1500m Runner",
    club: "Cebu City Striders",
    pb: "4:08.5",
    location: "Cebu City",
    nationalRank: "#2 PH",
    asianRank: "#20 Asia",
    globalRank: "#130 World",
    href: "/athletes/16",
  },
  {
    id: 17,
    name: "Kenji Tan",
    specialty: "100m Sprinter",
    club: "Makati Velocity Club",
    pb: "10.55s",
    location: "Makati",
    nationalRank: "#4 PH",
    asianRank: "#28 Asia",
    globalRank: "#210 World",
    href: "/athletes/17",
  },
  {
    id: 18,
    name: "Erika Santos",
    specialty: "Heptathlon",
    club: "Quezon Province Multi-Event",
    pb: "6290 pts",
    location: "Quezon Province (Lucena)",
    nationalRank: "#1 PH",
    asianRank: "#8 Asia",
    globalRank: "#52 World",
    href: "/athletes/18",
  },
  {
    id: 19,
    name: "Marco de la Paz",
    specialty: "3000m Steeplechase",
    club: "Rizal Trail Runners",
    pb: "8:32.1",
    location: "Rizal (Antipolo)",
    nationalRank: "#1 PH",
    asianRank: "#7 Asia",
    globalRank: "#49 World",
    href: "/athletes/19",
  },
  {
    id: 20,
    name: "Hannah Lim",
    specialty: "10,000m Runner",
    club: "Davao Endurance Crew",
    pb: "32:15",
    location: "Davao City",
    nationalRank: "#1 PH",
    asianRank: "#13 Asia",
    globalRank: "#85 World",
    href: "/athletes/20",
  },
  {
    id: 21,
    name: "Felix Ramos",
    specialty: "Javelin Throw",
    club: "Pangasinan Spearheads",
    pb: "84.12m",
    location: "Pangasinan (Dagupan)",
    nationalRank: "#1 PH",
    asianRank: "#6 Asia",
    globalRank: "#38 World",
    href: "/athletes/21",
  },
  {
    id: 22,
    name: "Aimee Delgado",
    specialty: "High Jump",
    club: "Iloilo Heights Club",
    pb: "1.90m",
    location: "Iloilo City",
    nationalRank: "#1 PH",
    asianRank: "#10 Asia",
    globalRank: "#65 World",
    href: "/athletes/22",
  },
  {
    id: 23,
    name: "Carlo Manalo",
    specialty: "800m Runner",
    club: "Bacoor Middle Distance",
    pb: "1:46.8",
    location: "Cavite (Bacoor)",
    nationalRank: "#3 PH",
    asianRank: "#21 Asia",
    globalRank: "#140 World",
    href: "/athletes/23",
  },
  {
    id: 24,
    name: "Denise Yulo",
    specialty: "20km Race Walk",
    club: "Cagayan de Oro Walkers",
    pb: "1:29:30",
    location: "Cagayan de Oro",
    nationalRank: "#1 PH",
    asianRank: "#12 Asia",
    globalRank: "#72 World",
    href: "/athletes/24",
  },
  {
    id: 25,
    name: "Ryan Cruz",
    specialty: "Decathlon",
    club: "Clark Titans",
    pb: "8020 pts",
    location: "Clark / Angeles City",
    nationalRank: "#1 PH",
    asianRank: "#9 Asia",
    globalRank: "#58 World",
    href: "/athletes/25",
  },
  {
    id: 26,
    name: "Janelle Chua",
    specialty: "100m Sprinter",
    club: "Marikina Sprints",
    pb: "11.48s",
    location: "Marikina",
    nationalRank: "#3 PH",
    asianRank: "#18 Asia",
    globalRank: "#125 World",
    href: "/athletes/26",
  },
  {
    id: 27,
    name: "Ethan Sy",
    specialty: "Shot Put",
    club: "Tagum Steel",
    pb: "19.02m",
    location: "Tagum",
    nationalRank: "#2 PH",
    asianRank: "#18 Asia",
    globalRank: "#118 World",
    href: "/athletes/27",
  },
  {
    id: 28,
    name: "Pia Vergara",
    specialty: "5000m Runner",
    club: "Bacolod Distance",
    pb: "15:32",
    location: "Bacolod City",
    nationalRank: "#2 PH",
    asianRank: "#17 Asia",
    globalRank: "#115 World",
    href: "/athletes/28",
  },
  {
    id: 29,
    name: "Vince Herrera",
    specialty: "400m Runner",
    club: "Palawan Coastal Track",
    pb: "45.88s",
    location: "Palawan (Puerto Princesa)",
    nationalRank: "#2 PH",
    asianRank: "#14 Asia",
    globalRank: "#95 World",
    href: "/athletes/29",
  },
  {
    id: 30,
    name: "Trixie Lopez",
    specialty: "100m Hurdles",
    club: "Valenzuela Hurdle Crew",
    pb: "13.28s",
    location: "Valenzuela",
    nationalRank: "#1 PH",
    asianRank: "#12 Asia",
    globalRank: "#82 World",
    href: "/athletes/30",
  },
  {
    id: 31,
    name: "Omar Fernandez",
    specialty: "10,000m Runner",
    club: "General Santos Striders",
    pb: "28:32",
    location: "General Santos City",
    nationalRank: "#2 PH",
    asianRank: "#15 Asia",
    globalRank: "#105 World",
    href: "/athletes/31",
  },
  {
    id: 32,
    name: "Camille Ramos",
    specialty: "3000m Steeplechase",
    club: "Laguna Lakeside",
    pb: "9:41.2",
    location: "Laguna (Calamba)",
    nationalRank: "#2 PH",
    asianRank: "#14 Asia",
    globalRank: "#92 World",
    href: "/athletes/32",
  },
  {
    id: 33,
    name: "Joshua Perez",
    specialty: "110m Hurdles",
    club: "Laoag Flyers",
    pb: "13.65s",
    location: "Ilocos Norte (Laoag)",
    nationalRank: "#2 PH",
    asianRank: "#19 Asia",
    globalRank: "#130 World",
    href: "/athletes/33",
  },
  {
    id: 34,
    name: "Katrina Villena",
    specialty: "800m Runner",
    club: "Muntinlupa Track Club",
    pb: "2:02.9",
    location: "Muntinlupa",
    nationalRank: "#2 PH",
    asianRank: "#20 Asia",
    globalRank: "#138 World",
    href: "/athletes/34",
  },
  {
    id: 35,
    name: "Leo Dominguez",
    specialty: "100m Sprinter",
    club: "Parañaque Speedworks",
    pb: "10.49s",
    location: "Parañaque",
    nationalRank: "#5 PH",
    asianRank: "#30 Asia",
    globalRank: "#220 World",
    href: "/athletes/35",
  },
  {
    id: 36,
    name: "Mia Gutierrez",
    specialty: "200m Sprinter",
    club: "Las Piñas Phoenix",
    pb: "23.15s",
    location: "Las Piñas",
    nationalRank: "#2 PH",
    asianRank: "#16 Asia",
    globalRank: "#115 World",
    href: "/athletes/36",
  },
  {
    id: 37,
    name: "Anton Sandoval",
    specialty: "Discus Throw",
    club: "Zamboanga Steel",
    pb: "62.40m",
    location: "Zamboanga City",
    nationalRank: "#2 PH",
    asianRank: "#15 Asia",
    globalRank: "#100 World",
    href: "/athletes/37",
  },
  {
    id: 38,
    name: "Bea Alcaraz",
    specialty: "400m Runner",
    club: "Tarlac Quarter Milers",
    pb: "52.90s",
    location: "Tarlac",
    nationalRank: "#3 PH",
    asianRank: "#21 Asia",
    globalRank: "#150 World",
    href: "/athletes/38",
  },
  {
    id: 39,
    name: "Noel Castillo",
    specialty: "Hammer Throw",
    club: "Batangas Power Throwers",
    pb: "74.12m",
    location: "Batangas (Lipa)",
    nationalRank: "#1 PH",
    asianRank: "#8 Asia",
    globalRank: "#50 World",
    href: "/athletes/39",
  },
  {
    id: 40,
    name: "Rica Bautista",
    specialty: "1500m Runner",
    club: "Pasay Bay Runners",
    pb: "4:12.0",
    location: "Pasay",
    nationalRank: "#3 PH",
    asianRank: "#23 Asia",
    globalRank: "#160 World",
    href: "/athletes/40",
  },
  {
    id: 41,
    name: "Cedric Lim",
    specialty: "Long Jump",
    club: "Navotas Coastal Flight",
    pb: "7.98m",
    location: "Navotas",
    nationalRank: "#2 PH",
    asianRank: "#17 Asia",
    globalRank: "#112 World",
    href: "/athletes/41",
  },
  {
    id: 42,
    name: "Janine Santos",
    specialty: "Marathon",
    club: "Ormoc Road Project",
    pb: "2:32:15",
    location: "Ormoc",
    nationalRank: "#2 PH",
    asianRank: "#24 Asia",
    globalRank: "#155 World",
    href: "/athletes/42",
  },
  {
    id: 43,
    name: "Paolo Aquino",
    specialty: "200m Sprinter",
    club: "Bataan Express",
    pb: "20.76s",
    location: "Bataan (Balanga)",
    nationalRank: "#3 PH",
    asianRank: "#20 Asia",
    globalRank: "#150 World",
    href: "/athletes/43",
  },
  {
    id: 44,
    name: "Thea Villarin",
    specialty: "800m Runner",
    club: "Mactan Waves",
    pb: "2:03.5",
    location: "Lapu-Lapu (Mactan Island)",
    nationalRank: "#4 PH",
    asianRank: "#24 Asia",
    globalRank: "#170 World",
    href: "/athletes/44",
  },
  {
    id: 45,
    name: "Ivan Mercado",
    specialty: "400m Hurdles",
    club: "Malabon Rail Runners",
    pb: "50.10s",
    location: "Malabon",
    nationalRank: "#3 PH",
    asianRank: "#21 Asia",
    globalRank: "#140 World",
    href: "/athletes/45",
  },
  {
    id: 46,
    name: "Chloe de Mesa",
    specialty: "Pole Vault",
    club: "Pasig River Vault Club",
    pb: "4.40m",
    location: "Pasig",
    nationalRank: "#1 PH",
    asianRank: "#11 Asia",
    globalRank: "#72 World",
    href: "/athletes/46",
  },
  {
    id: 47,
    name: "Rico Santiago",
    specialty: "5000m Runner",
    club: "Naga City Distance",
    pb: "13:55",
    location: "Bicol (Naga)",
    nationalRank: "#1 PH",
    asianRank: "#11 Asia",
    globalRank: "#70 World",
    href: "/athletes/47",
  },
  {
    id: 48,
    name: "Dana Perez",
    specialty: "Triple Jump",
    club: "Subic Bay Flyers",
    pb: "14.25m",
    location: "Zambales (Subic)",
    nationalRank: "#1 PH",
    asianRank: "#9 Asia",
    globalRank: "#58 World",
    href: "/athletes/48",
  },
  {
    id: 49,
    name: "Luis Ramos",
    specialty: "800m Runner",
    club: "Antipolo Highlanders",
    pb: "1:47.2",
    location: "Rizal (Antipolo)",
    nationalRank: "#4 PH",
    asianRank: "#23 Asia",
    globalRank: "#165 World",
    href: "/athletes/49",
  },
  {
    id: 50,
    name: "Ivy Manansala",
    specialty: "100m Sprinter",
    club: "San Juan Track House",
    pb: "11.72s",
    location: "San Juan",
    nationalRank: "#4 PH",
    asianRank: "#24 Asia",
    globalRank: "#175 World",
    href: "/athletes/50",
  },
  {
    id: 51,
    name: "Joel Cabrera",
    specialty: "10,000m Runner",
    club: "Dasmariñas Endurance",
    pb: "28:58",
    location: "Cavite (Dasmariñas)",
    nationalRank: "#3 PH",
    asianRank: "#18 Asia",
    globalRank: "#120 World",
    href: "/athletes/51",
  },
  {
    id: 52,
    name: "Margo Sy",
    specialty: "5000m Runner",
    club: "Surigao Striders",
    pb: "15:58",
    location: "Surigao City",
    nationalRank: "#3 PH",
    asianRank: "#22 Asia",
    globalRank: "#148 World",
    href: "/athletes/52",
  },
  {
    id: 53,
    name: "Dante Velasco",
    specialty: "400m Runner",
    club: "Caloocan North Sprint",
    pb: "46.20s",
    location: "Caloocan",
    nationalRank: "#3 PH",
    asianRank: "#19 Asia",
    globalRank: "#125 World",
    href: "/athletes/53",
  },
  {
    id: 54,
    name: "Celine Uy",
    specialty: "Heptathlon",
    club: "Koronadal Multi Sport",
    pb: "6150 pts",
    location: "Koronadal",
    nationalRank: "#2 PH",
    asianRank: "#12 Asia",
    globalRank: "#78 World",
    href: "/athletes/54",
  },
  {
    id: 55,
    name: "Art Villanueva",
    specialty: "Javelin Throw",
    club: "Pagadian Arrows",
    pb: "82.40m",
    location: "Pagadian",
    nationalRank: "#2 PH",
    asianRank: "#8 Asia",
    globalRank: "#46 World",
    href: "/athletes/55",
  },
  {
    id: 56,
    name: "Nia Santos",
    specialty: "800m Runner",
    club: "Mandaue City Pace",
    pb: "2:01.8",
    location: "Mandaue",
    nationalRank: "#1 PH",
    asianRank: "#9 Asia",
    globalRank: "#60 World",
    href: "/athletes/56",
  },
]

const normalizeEvents = (events: string[]) => Array.from(new Set(events.filter(Boolean).map((e) => e.trim())))

const deriveEventsFromSpecialty = (specialty: string): string[] => {
  const lower = specialty.toLowerCase()
  const events: string[] = []

  if (lower.includes("110m hurdle")) events.push("110m hurdles (men)")
  if (lower.includes("100m hurdle") && !lower.includes("110m")) events.push("100m hurdles (women)")
  if (lower.includes("400m hurdle")) events.push("400m hurdles")
  if (lower.includes("steeple")) events.push("3000m steeplechase", "Steeplechase")

  if (lower.includes("4x100") || lower.includes("4×100")) events.push("4×100m relay")
  if (lower.includes("4x400") || lower.includes("4×400")) events.push("4×400m relay")
  if (lower.includes("relay")) events.push("Relays")

  if (lower.includes("100m") && !lower.includes("hurdle")) events.push("100m")
  if (lower.includes("200m") && !lower.includes("hurdle")) events.push("200m")
  if (lower.includes("400m") && !lower.includes("hurdle")) events.push("400m")
  if (lower.includes("sprinter")) events.push("Sprints")

  if (lower.includes("1500")) events.push("1500m")
  if (lower.includes("800")) events.push("800m")
  if (lower.includes("middle")) events.push("Middle Distance")

  if (lower.includes("5000")) events.push("5000m")
  if (lower.includes("10,000") || lower.includes("10000") || lower.includes("10k")) events.push("10,000m")
  if (lower.includes("marathon")) events.push("Marathon", "Road Events")
  if (lower.includes("distance") || lower.includes("endurance") || lower.includes("walk")) events.push("Long Distance")

  if (lower.includes("pole vault") || lower.includes("vault")) events.push("Pole vault")
  if (lower.includes("high jump")) events.push("High jump")
  if (lower.includes("triple jump")) events.push("Triple jump")
  if (lower.includes("long jump")) events.push("Long jump")
  if (lower.includes("jump")) events.push("Jumps")

  if (lower.includes("shot put") || lower.includes("shot")) events.push("Shot put")
  if (lower.includes("discus")) events.push("Discus throw")
  if (lower.includes("hammer")) events.push("Hammer throw")
  if (lower.includes("javelin")) events.push("Javelin throw")
  if (lower.includes("throw")) events.push("Throws")

  if (lower.includes("decathlon")) events.push("Decathlon (men)", "Combined Events")
  if (lower.includes("heptathlon")) events.push("Heptathlon (women)", "Combined Events")
  if (lower.includes("multi")) events.push("Combined Events")

  return normalizeEvents(events.length ? events : ["Other"])
}

const getDisplayEvents = (athlete: Athlete) => {
  const base = athlete.events && athlete.events.length ? athlete.events : deriveEventsFromSpecialty(athlete.specialty)
  return normalizeEvents(base)
}

const getEventTags = (athlete: Athlete) => {
  const events = getDisplayEvents(athlete)
  const tags = new Set(events)
  events.forEach((evt) => {
    const category = categoryByEvent[evt]
    if (category) tags.add(category)
  })
  return Array.from(tags)
}

export default function AthletesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [regionFilter, setRegionFilter] = useState("All")
  const [eventFilter, setEventFilter] = useState("All")
  const [sortOption, setSortOption] = useState("relevance")

  const classifyRegion = (location: string) => {
    const metroManila = [
      "manila",
      "quezon city",
      "makati",
      "taguig",
      "bonifacio global city",
      "bgc",
      "pasay",
      "pasig",
      "mandaluyong",
      "san juan",
      "parañaque",
      "las piñas",
      "marikina",
      "caloocan",
      "valenzuela",
      "malabon",
      "navotas",
      "muntinlupa",
    ]
    const visayas = [
      "cebu",
      "iloilo",
      "bacolod",
      "mactan",
      "aklan",
      "capiz",
      "tacloban",
      "ormoc",
      "bohol",
      "mandaue",
    ]
    const mindanao = [
      "davao",
      "cagayan de oro",
      "iligan",
      "tagum",
      "digos",
      "general santos",
      "koronadal",
      "zamboanga",
      "dipolog",
      "pagadian",
      "surigao",
      "butuan",
      "siargao",
    ]

    const lower = location.toLowerCase()
    if (metroManila.some((city) => lower.includes(city))) return "Metro Manila"
    if (visayas.some((city) => lower.includes(city))) return "Visayas"
    if (mindanao.some((city) => lower.includes(city))) return "Mindanao"
    return "Luzon"
  }

  const parseRank = (rank: string | undefined) => {
    if (!rank) return Number.POSITIVE_INFINITY
    const match = rank.match(/#(\d+)/)
    return match ? parseInt(match[1], 10) : Number.POSITIVE_INFINITY
  }

  const parsePerformance = (perf: string | undefined) => {
    if (!perf) return { value: Number.POSITIVE_INFINITY, higherIsBetter: false }
    const lower = perf.toLowerCase()
    const hasColon = lower.includes(":")
    const endsWithSeconds = /\ds\b/.test(lower) || lower.endsWith("s")
    const isTime = hasColon || endsWithSeconds

    if (isTime) {
      if (hasColon) {
        const parts = perf.split(":").map((p) => parseFloat(p))
        const [first, second = 0, third = 0] = parts
        const totalSeconds = parts.length === 3 ? first * 3600 + second * 60 + third : first * 60 + second
        return { value: totalSeconds, higherIsBetter: false }
      }
      return { value: parseFloat(perf), higherIsBetter: false }
    }

    const numeric = parseFloat(perf)
    const higherIsBetter = lower.includes("m") || lower.includes("pt") || lower.includes("pts")
    return { value: numeric, higherIsBetter }
  }

  const filteredAthletes = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()

    let result = athletes.filter((athlete) => {
      const events = getDisplayEvents(athlete)
      const matchesSearch =
        !term ||
        athlete.name.toLowerCase().includes(term) ||
        athlete.specialty.toLowerCase().includes(term) ||
        athlete.club.toLowerCase().includes(term) ||
        athlete.location.toLowerCase().includes(term) ||
        events.some((evt) => evt.toLowerCase().includes(term))

      const region = classifyRegion(athlete.location)
      const eventTags = getEventTags(athlete)
      const matchesRegion = regionFilter === "All" || region === regionFilter
      const matchesEvent = eventFilter === "All" || eventTags.includes(eventFilter)

      return matchesSearch && matchesRegion && matchesEvent
    })

    const sorter = (a: (typeof athletes)[number], b: (typeof athletes)[number]) => {
      switch (sortOption) {
        case "national_rank":
          return parseRank(a.nationalRank) - parseRank(b.nationalRank)
        case "asian_rank":
          return parseRank(a.asianRank) - parseRank(b.asianRank)
        case "global_rank":
          return parseRank(a.globalRank) - parseRank(b.globalRank)
        case "name":
          return a.name.localeCompare(b.name)
        case "personal_best": {
          const perfA = parsePerformance(a.pb)
          const perfB = parsePerformance(b.pb)
          if (perfA.higherIsBetter !== perfB.higherIsBetter) return 0
          if (perfA.higherIsBetter) {
            return perfB.value - perfA.value
          }
          return perfA.value - perfB.value
        }
        default:
          return 0
      }
    }

    return sortOption === "relevance" ? result : [...result].sort(sorter)
  }, [searchTerm, regionFilter, eventFilter, sortOption])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Athletes</h1>
          <p className="text-muted-foreground">Explore profiles of track and field athletes across the Philippines</p>
        </div>

        <div className="space-y-6 mb-10">
          <div className="p-4 border border-border rounded-lg bg-card">
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Search className="w-4 h-4 text-accent" />
                Search athletes
              </label>
              <input
                type="text"
                placeholder="Search by name, event, or club..."
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border rounded-lg bg-card">
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal className="w-4 h-4 text-accent" />
                <p className="text-sm font-semibold text-foreground">Filter by Region</p>
              </div>
              <select
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option value="All">All locations</option>
                <option value="Metro Manila">Metro Manila</option>
                <option value="Luzon">Luzon</option>
                <option value="Visayas">Visayas</option>
                <option value="Mindanao">Mindanao</option>
              </select>
            </div>

            <div className="p-4 border border-border rounded-lg bg-card">
              <div className="flex items-center gap-2 mb-3">
                <SlidersHorizontal className="w-4 h-4 text-accent" />
                <p className="text-sm font-semibold text-foreground">Filter by Event</p>
              </div>
              <select
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={eventFilter}
                onChange={(e) => setEventFilter(e.target.value)}
              >
                {eventOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-4 border border-border rounded-lg bg-card">
              <div className="flex items-center gap-2 mb-3">
                <SortAsc className="w-4 h-4 text-accent" />
                <p className="text-sm font-semibold text-foreground">Sort results</p>
              </div>
              <select
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="national_rank">National Rank</option>
                <option value="asian_rank">Asian Rank</option>
                <option value="global_rank">Global Rank</option>
                <option value="personal_best">Personal Best</option>
                <option value="name">Name (A-Z)</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Showing {filteredAthletes.length} of {athletes.length} athletes
          </div>
        </div>

        {filteredAthletes.length === 0 ? (
          <div className="p-6 border border-border rounded-lg bg-card text-sm text-muted-foreground">
            No athletes match your filters. Try adjusting search, region, or event.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAthletes.map((athlete) => (
              <ProfileCard
                key={athlete.id}
                name={athlete.name}
                subtitle={athlete.specialty}
                location={athlete.location}
                badges={getDisplayEvents(athlete).slice(0, 4)}
                details={[
                  `Club: ${athlete.club}`,
                  `Personal Best: ${athlete.pb}`,
                  `National Rank: ${athlete.nationalRank}`,
                  `Asian Rank: ${athlete.asianRank}`,
                  `Global Rank: ${athlete.globalRank}`,
                ]}
                href={athlete.href}
                type="athlete"
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">&copy; 2025 Philippine Athletics</p>
        </div>
      </div>
    </div>
  )
}
