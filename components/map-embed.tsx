type MapEmbedProps = {
  mapUrl?: string
  address: string
  name?: string
  notes?: string
}

export function MapEmbed({ mapUrl, address, name, notes }: MapEmbedProps) {
  return (
    <div className="space-y-2">
      <div className="p-4 rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between gap-3">
          <div className="space-y-1">
            {name ? <p className="text-sm font-semibold text-foreground">{name}</p> : null}
            <p className="text-sm text-muted-foreground">{address}</p>
            {notes ? <p className="text-xs text-muted-foreground">{notes}</p> : null}
          </div>
          {mapUrl ? (
            <a
              href={mapUrl.replace("embed?", "")}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-accent hover:text-accent/80"
            >
              Open in Maps
            </a>
          ) : null}
        </div>
      </div>
      {mapUrl ? (
        <div className="rounded-2xl border border-border overflow-hidden shadow-soft aspect-video">
          <iframe
            src={mapUrl}
            title={name ?? "Practice Location"}
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-muted/40 p-6 text-sm text-muted-foreground">
          Map coming soon.
        </div>
      )}
    </div>
  )
}
