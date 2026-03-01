export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")

export const normalizeKey = (value: string) => value.trim().toLowerCase()

const eventAliasMap: Record<string, string> = {
  "10000m": "10000m",
  "10 000m": "10000m",
  "10,000m": "10000m",
  "4x100m relay": "4x100m relay",
  "4x400m relay": "4x400m relay",
  "100m hurdles (women)": "100m hurdles",
  "110m hurdles (men)": "110m hurdles",
}

const eventDisplayMap: Record<string, string> = {
  "10000m": "10,000m",
  "4x100m relay": "4×100m relay",
  "4x400m relay": "4×400m relay",
  "100m hurdles": "100m hurdles",
  "110m hurdles": "110m hurdles",
  "long jump": "Long jump",
  "triple jump": "Triple jump",
  "high jump": "High jump",
  "pole vault": "Pole vault",
  "shot put": "Shot put",
  "discus throw": "Discus throw",
  "javelin throw": "Javelin throw",
  "hammer throw": "Hammer throw",
  "3000m steeplechase": "3000m steeplechase",
}

const toTitleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((part) => {
      if (/^\d/.test(part)) return part
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join(" ")

export const normalizeEventKey = (value: string) => {
  const base = normalizeKey(value)
    .replace(/×/g, "x")
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ",")
    .trim()

  if (!base) return ""

  if (eventAliasMap[base]) return eventAliasMap[base]
  if (base.includes("10,000m")) return "10000m"
  if (base.includes("10000m")) return "10000m"
  if (base.includes("4x100m relay")) return "4x100m relay"
  if (base.includes("4x400m relay")) return "4x400m relay"
  if (base.includes("100m hurdles")) return "100m hurdles"
  if (base.includes("110m hurdles")) return "110m hurdles"

  return base
}

export const formatEventLabel = (value: string) => {
  const normalized = normalizeEventKey(value)
  if (!normalized) return ""
  if (eventDisplayMap[normalized]) return eventDisplayMap[normalized]
  return toTitleCase(normalized)
}

export const parseDateToTimestamp = (value?: string) => {
  if (!value) return null
  const trimmed = value.trim()
  if (!trimmed || trimmed.toLowerCase() === "tbd") return null

  const iso = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/)
  if (iso) {
    const [, year, month, day] = iso
    const timestamp = Date.UTC(Number(year), Number(month) - 1, Number(day), 12, 0, 0)
    return Number.isNaN(timestamp) ? null : timestamp
  }

  const parsed = Date.parse(trimmed)
  if (Number.isNaN(parsed)) return null
  return parsed
}

export const matchesIdOrSlug = (entity: { id: string; slug?: string }, query: string) => {
  const normalized = normalizeKey(query)
  return normalizeKey(entity.id) === normalized || (!!entity.slug && normalizeKey(entity.slug) === normalized)
}

export const decodeIdParam = (value?: string) => decodeURIComponent(value ?? "").trim().replace(/\/+$/, "")
