import { redirect } from "next/navigation"

export default async function CompetitionRedirectPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}) {
  const { id } = await params
  const resolvedSearchParams = await searchParams
  const query = new URLSearchParams()

  Object.entries(resolvedSearchParams ?? {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => query.append(key, entry))
    } else if (value) {
      query.set(key, value)
    }
  })

  const suffix = query.toString() ? `?${query.toString()}` : ""
  redirect(`/events/${id}${suffix}`)
}
