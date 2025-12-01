export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")

export const normalizeKey = (value: string) => value.trim().toLowerCase()

export const matchesIdOrSlug = (entity: { id: string; slug?: string }, query: string) => {
  const normalized = normalizeKey(query)
  return normalizeKey(entity.id) === normalized || (!!entity.slug && normalizeKey(entity.slug) === normalized)
}
