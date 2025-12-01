import Link from "next/link"

export function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">PA</span>
          </div>
          <span className="text-xl font-bold text-foreground">Philippine Athletics</span>
        </Link>
        <div className="flex gap-8">
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
        </div>
      </div>
    </nav>
  )
}
