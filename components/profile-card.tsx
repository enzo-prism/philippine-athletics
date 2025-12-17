import Link from "next/link"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"
import { Badge } from "@/components/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Badge as UiBadge } from "@/components/ui/badge"

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
    <Link href={href} className="block">
      <Card className="group py-0 gap-0 shadow-none transition-colors hover:bg-muted cursor-pointer">
        <CardContent className="p-5 md:p-6 space-y-3">
          <div>
            <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-accent transition-colors">{name}</h3>
            {subtitle ? <p className="text-sm text-muted-foreground mt-1">{subtitle}</p> : null}
          </div>

          {(badges?.length || location) && (
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
              {badges?.map((badge) => (
                <Badge key={badge} text={badge} variant="accent" className="uppercase tracking-wide rounded-md" />
              ))}
              {location && (
                <UiBadge variant="outline" className="gap-1 rounded-md bg-muted/80 text-foreground">
                  <Emoji symbol={emojiIcons.location} className="text-sm" />
                  <span>{location}</span>
                </UiBadge>
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

          <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pt-2">
            {type === "club" ? "View club details" : "View Profile"}
            <Emoji symbol="➡️" className="text-base" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
