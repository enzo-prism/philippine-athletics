type SearchParamValue = string | string[] | undefined

export type PilotPersona =
  | "lgu"
  | "club-owner"
  | "guardian"
  | "adult-athlete"
  | "supporter"

export type PilotContext = {
  pilot?: string
  club?: string
  persona?: PilotPersona
}

type PilotContextInput = {
  pilot?: string | null
  club?: string | null
  persona?: string | null
}

const allowedPersonas: PilotPersona[] = ["lgu", "club-owner", "guardian", "adult-athlete", "supporter"]

const firstValue = (value: SearchParamValue) => (Array.isArray(value) ? value[0] : value)

const clean = (value?: string | null) => {
  const trimmed = value?.trim()
  return trimmed ? trimmed : undefined
}

const isPilotPersona = (value?: string): value is PilotPersona =>
  Boolean(value && allowedPersonas.includes(value as PilotPersona))

export const buildPilotContext = (input?: PilotContextInput): PilotContext => ({
  pilot: clean(input?.pilot),
  club: clean(input?.club),
  persona:
    typeof input?.persona === "string" && isPilotPersona(input.persona)
      ? (input.persona as PilotPersona)
      : undefined,
})

export const getPilotContextFromSearchParams = (
  searchParams?: Record<string, SearchParamValue>,
): PilotContext =>
  buildPilotContext({
    pilot: firstValue(searchParams?.pilot),
    club: firstValue(searchParams?.club),
    persona: firstValue(searchParams?.persona),
  })

export const withPilotContext = (href: string, context?: PilotContextInput) => {
  const safeContext = buildPilotContext(context)
  const [pathname, query = ""] = href.split("?", 2)
  const searchParams = new URLSearchParams(query)

  if (safeContext.pilot) searchParams.set("pilot", safeContext.pilot)
  if (safeContext.club) searchParams.set("club", safeContext.club)
  if (safeContext.persona) searchParams.set("persona", safeContext.persona)

  const suffix = searchParams.toString()
  return suffix ? `${pathname}?${suffix}` : pathname
}
