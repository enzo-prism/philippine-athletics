import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface ProfileCardProps {
  name: string
  subtitle: string
  details: string[]
  href: string
  type: "athlete" | "coach" | "club" | "competition"
}

export function ProfileCard({ name, subtitle, details, href, type }: ProfileCardProps) {
  return (
    <Link href={href}>
      <div className="group p-6 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-200 cursor-pointer">
        <div className="space-y-3">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-widest">{type}</p>
            <h3 className="text-lg font-bold text-foreground mt-1 group-hover:text-accent transition-colors">{name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          </div>
          <div className="space-y-1">
            {details.map((detail, i) => (
              <p key={i} className="text-xs text-muted-foreground">
                {detail}
              </p>
            ))}
          </div>
          <div className="flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity pt-2">
            View Profile
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
