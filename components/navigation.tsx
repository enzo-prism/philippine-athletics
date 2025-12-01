import Link from "next/link"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">PA</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <div className="flex gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/athletes" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Athletes
            </Link>
            <Link href="/coaches" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Coaches
            </Link>
            <Link href="/clubs" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Clubs
            </Link>
            <Link
              href="/competitions"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Competitions
            </Link>
            <Link href="/rankings" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Rankings
            </Link>
            <Link href="/sponsors" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Sponsors
            </Link>
          </div>
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <Emoji symbol={emojiIcons.profile} className="text-base" label="Profile" />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}
