import { normalizeKey } from "@/lib/data/utils"

export type SanctionedEvent = {
  competitionName: string
  sanctioningBody: string
  status: "Sanctioned" | "Provisional"
  acceptedSources: Array<"csv">
}

export const sanctionedEvents: SanctionedEvent[] = []

export const getSanctionedEventByName = (competitionName: string) => {
  const normalizedTarget = normalizeKey(competitionName)
  if (!normalizedTarget) return undefined
  return sanctionedEvents.find((event) => normalizeKey(event.competitionName) === normalizedTarget)
}
