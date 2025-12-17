"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Emoji, emojiIcons } from "@/lib/ui/emoji"

type NavLink = { href: string; label: string; symbol: string }

const primaryLinks: NavLink[] = [
  { href: "/clubs", label: "Clubs", symbol: emojiIcons.club },
  { href: "/coaches", label: "Coaches", symbol: emojiIcons.coach },
  { href: "/athletes", label: "Athletes", symbol: emojiIcons.athlete },
]

const actionLinks: NavLink[] = [
  { href: "/signup", label: "Sign Up", symbol: emojiIcons.sparkles },
  { href: "/profile", label: "Profile", symbol: emojiIcons.profile },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const activeLabel = useMemo(() => {
    if (pathname === "/") return "Home"
    const match = [...primaryLinks, ...actionLinks].find((link) => isActive(pathname, link.href))
    return match?.label ?? "Menu"
  }, [pathname])

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="page-shell py-3 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-md flex items-center justify-center bg-card border border-accent transition-colors group-hover:bg-accent/10">
              <span className="text-foreground font-bold text-lg leading-none">🇵🇭</span>
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-foreground">Philippine Athletics</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {primaryLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <Button
                  key={link.href}
                  asChild
                  variant="ghost"
                  className={active ? "text-accent" : "text-foreground"}
                >
                  <Link href={link.href} aria-current={active ? "page" : undefined}>
                    {link.label}
                  </Link>
                </Button>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild variant="outline">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild>
              <Link href="/profile">Profile</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">{activeLabel}</span>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button type="button" variant="outline" size="icon" aria-label="Open navigation">
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <SheetHeader className="border-b border-border">
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>{activeLabel}</SheetDescription>
                </SheetHeader>

                <div className="p-4 space-y-4">
                  <div className="grid gap-2">
                    {primaryLinks.map((link) => {
                      const active = isActive(pathname, link.href)
                      return (
                        <Button
                          key={link.href}
                          asChild
                          variant={active ? "secondary" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setOpen(false)}
                        >
                          <Link
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            className="flex items-center gap-2"
                          >
                            <Emoji symbol={link.symbol} className="text-base" />
                            {link.label}
                          </Link>
                        </Button>
                      )
                    })}
                  </div>

                  <Separator />

                  <div className="grid gap-2">
                    {actionLinks.map((link) => {
                      const active = isActive(pathname, link.href)
                      const variant =
                        link.href === "/profile" ? "default" : active ? "secondary" : "outline"
                      return (
                        <Button
                          key={link.href}
                          asChild
                          variant={variant}
                          className="w-full justify-start"
                          onClick={() => setOpen(false)}
                        >
                          <Link
                            href={link.href}
                            aria-current={active ? "page" : undefined}
                            className="flex items-center gap-2"
                          >
                            <Emoji symbol={link.symbol} className="text-base" />
                            {link.label}
                          </Link>
                        </Button>
                      )
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/90 shadow-soft">
        <div className="grid grid-cols-3 gap-1 px-2 py-2 pb-safe text-[11px] font-semibold text-muted-foreground">
          {primaryLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 rounded-md px-2 py-1 transition-colors ${
                  active ? "bg-accent/10 text-accent" : "hover:bg-muted text-foreground"
                }`}
              >
                <Emoji symbol={link.symbol} className="text-base" />
                <span className="text-center leading-tight">{link.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
