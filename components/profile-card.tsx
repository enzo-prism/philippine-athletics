import Link from "next/link"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

interface ProfileCardProps {
  name: string
  subtitle: string
  details: string[]
  href: string
  type: "athlete" | "coach" | "club" | "competition"
  location?: string
  badges?: string[]
}

export function ProfileCard({ name, subtitle, details, href, type, location, badges }: ProfileCardProps) {
  return (
    <Link href={href}>
      <div className="group p-6 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-200 cursor-pointer">
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-accent transition-colors">{name}</h3>
            {subtitle ? <p className="text-sm text-muted-foreground mt-1">{subtitle}</p> : null}
          </div>
          {(badges?.length || location) && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              {badges?.map((badge) => (
                <span
                  key={badge}
                  className="rounded-md bg-accent/10 text-accent px-2 py-1 border border-accent/30 uppercase tracking-wide"
                >
                  {badge}
                </span>
              ))}
              {location && (
                <span className="p-1.5 rounded-md bg-muted/80 border border-border flex items-center gap-1 text-foreground">
                  <Emoji symbol={emojiIcons.location} className="text-sm" aria-hidden />
                  <span>{location}</span>
                </span>
              )}
            </div>
          )}
          <div className="space-y-1">
            {details.map((detail, i) => (
              <p key={i} className="text-xs text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pt-2">
            {type === "club" ? "View club details" : "View Profile"}
            <Emoji symbol="➡️" className="text-base" aria-hidden />
          </div>
        </div>
      </div>
    </Link>
  )
}
