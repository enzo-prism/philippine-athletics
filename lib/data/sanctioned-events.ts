import { normalizeKey } from "@/lib/data/utils"

export type SanctionedEvent = {
  competitionName: string
  sanctioningBody: string
  status: "Sanctioned" | "Provisional"
  acceptedSources: Array<"csv">
}

export const sanctionedEvents: SanctionedEvent[] = [
  {
    competitionName: "Philippine National Championships 2025",
    sanctioningBody: "PATAFA",
    status: "Sanctioned",
    acceptedSources: ["csv"],
  },
  {
    competitionName: "2025 Southeast Asian Games",
    sanctioningBody: "Southeast Asian Games Federation",
    status: "Sanctioned",
    acceptedSources: ["csv"],
  },
  {
    competitionName: "2025 Asian Athletics Championships",
    sanctioningBody: "Asian Athletics Association",
    status: "Sanctioned",
    acceptedSources: ["csv"],
  },
  {
    competitionName: "World Athletics Continental Tour (Asia leg)",
    sanctioningBody: "World Athletics",
    status: "Sanctioned",
    acceptedSources: ["csv"],
  },
  {
    competitionName: "2026 Asian Games",
    sanctioningBody: "Olympic Council of Asia",
    status: "Provisional",
    acceptedSources: ["csv"],
  },
]

export const getSanctionedEventByName = (competitionName: string) => {
  const normalizedTarget = normalizeKey(competitionName)
  if (!normalizedTarget) return undefined
  return sanctionedEvents.find((event) => normalizeKey(event.competitionName) === normalizedTarget)
}
