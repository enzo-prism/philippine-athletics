export const competitionStatusOptions = ["Upcoming", "Past", "All"] as const

export type CompetitionStatusFilter = (typeof competitionStatusOptions)[number]
export type CompetitionStatus = Exclude<CompetitionStatusFilter, "All">

type CompetitionDateRange = {
  startDate: string
  endDate: string
}

type SortableCompetitionDateRange = CompetitionDateRange & {
  name: string
}

const competitionStatusTimeZone = "Asia/Manila"
const dateKeyFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: competitionStatusTimeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})

const getDateKeyFromParts = (date: Date) => {
  const parts = Object.fromEntries(dateKeyFormat.formatToParts(date).map((part) => [part.type, part.value]))
  return `${parts.year}-${parts.month}-${parts.day}`
}

const parseCompetitionDateKey = (value: string | undefined) =>
  value && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : null

const getCompetitionSortDate = (competition: CompetitionDateRange, preferEndDate = false) =>
  (preferEndDate ? parseCompetitionDateKey(competition.endDate) : null) ??
  parseCompetitionDateKey(competition.startDate) ??
  parseCompetitionDateKey(competition.endDate) ??
  ""

export const getCurrentCompetitionDateKey = (now = new Date()) => getDateKeyFromParts(now)

export const getCompetitionStatus = (
  competition: CompetitionDateRange,
  currentDateKey = getCurrentCompetitionDateKey(),
): CompetitionStatus => {
  const eventEndDate = parseCompetitionDateKey(competition.endDate) ?? parseCompetitionDateKey(competition.startDate)
  if (!eventEndDate) return "Upcoming"
  return eventEndDate < currentDateKey ? "Past" : "Upcoming"
}

export const sortCompetitionsForStatus = <TCompetition extends SortableCompetitionDateRange>(
  items: TCompetition[],
  status: CompetitionStatusFilter = "Upcoming",
): TCompetition[] =>
  [...items].sort((a, b) => {
    const dateOrder =
      status === "Past"
        ? getCompetitionSortDate(b, true).localeCompare(getCompetitionSortDate(a, true))
        : getCompetitionSortDate(a).localeCompare(getCompetitionSortDate(b))

    return dateOrder || a.name.localeCompare(b.name)
  })
