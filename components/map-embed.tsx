type MapEmbedProps = {
  mapUrl?: string
  address: string
  name?: string
  notes?: string
  lat?: number
  lng?: number
}

const GOOGLE_MAPS_BASE_URL = "https://www.google.com/maps"

const extractQueryFromMapUrl = (mapUrl?: string) => {
  if (!mapUrl) return undefined

  try {
    const url = new URL(mapUrl)
    return url.searchParams.get("q") ?? url.searchParams.get("query") ?? undefined
  } catch {
    return undefined
  }
}

const buildMapUrls = ({ mapUrl, address, lat, lng }: Pick<MapEmbedProps, "mapUrl" | "address" | "lat" | "lng">) => {
  const coordinateQuery =
    typeof lat === "number" && Number.isFinite(lat) && typeof lng === "number" && Number.isFinite(lng)
      ? `${lat},${lng}`
      : undefined

  const query = coordinateQuery ?? extractQueryFromMapUrl(mapUrl) ?? address

  const embedUrl = `${GOOGLE_MAPS_BASE_URL}?q=${encodeURIComponent(query)}&output=embed`
  const openUrl = mapUrl ?? `${GOOGLE_MAPS_BASE_URL}/search/?api=1&query=${encodeURIComponent(query)}`

  return { embedUrl, openUrl }
}

export function MapEmbed({ mapUrl, address, name, notes, lat, lng }: MapEmbedProps) {
  const { embedUrl, openUrl } = buildMapUrls({ mapUrl, address, lat, lng })

  return (
    <div className="space-y-2">
      <div className="p-4 rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1">
            {name ? <p className="text-sm font-semibold text-foreground">{name}</p> : null}
            <p className="text-sm text-muted-foreground">{address}</p>
            {notes ? <p className="text-xs text-muted-foreground">{notes}</p> : null}
          </div>
          <a href={openUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent hover:text-accent/80">
            Open in Maps
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-border overflow-hidden shadow-soft aspect-video">
        <iframe
          src={embedUrl}
          title={name ?? "Practice Location"}
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
