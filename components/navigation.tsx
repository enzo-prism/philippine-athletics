"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useState } from "react"
import {
  ClipboardList,
  FileText,
  House,
  Menu,
  Network,
  Search,
  ShieldCheck,
  Trophy,
  UserRound,
  Users,
  UserPlus,
  UsersRound,
  CalendarDays,
} from "lucide-react"
import { GlobalSearchForm } from "@/components/global-search"
import { DemoAdSlot } from "@/components/ads/DemoAdSlot"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const ictsiTopBanner = {
  name: "ICTSI Foundation",
  imageUrl: "/sponsor-assets/ictsi-foundation.jpg",
  alt: "ICTSI Foundation banner",
}

type NavLink = {
  href: string
  label: string
  icon: typeof House
}

const primaryLinks: NavLink[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/search", label: "Search", icon: Search },
  { href: "/athletes", label: "Athletes", icon: Users },
  { href: "/rankings", label: "Rankings", icon: Trophy },
  { href: "/competitions", label: "Competitions", icon: CalendarDays },
  { href: "/clubs", label: "Clubs", icon: UsersRound },
]

const secondaryLinks: NavLink[] = [
  { href: "/coaches", label: "Coaches", icon: UsersRound },
  { href: "/recognition", label: "Recognition", icon: ShieldCheck },
  { href: "/membership", label: "Membership", icon: UserPlus },
  { href: "/sponsors", label: "Sponsors", icon: UsersRound },
  { href: "/data-portal", label: "Data Portal", icon: ClipboardList },
  { href: "/how-it-works", label: "How it works", icon: Network },
  { href: "/changelog", label: "Updates", icon: FileText },
]

const accountLinks: NavLink[] = [
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/signup", label: "Sign up", icon: UserPlus },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const topAdOverride = pathname === "/" ? ictsiTopBanner : undefined

  const activeLabel = useMemo(() => {
    const match = [...primaryLinks, ...secondaryLinks, ...accountLinks].find((link) =>
      isActive(pathname, link.href),
    )
    return match?.label ?? "Menu"
  }, [pathname])

  return (
    <>
      <nav className="shell-surface">
        <div className="page-shell">
          <div className="shell-inner">
            <Link href="/" className="flex min-w-0 items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-card/90 shadow-[var(--shadow-soft)]">
                <img
                  src="https://res.cloudinary.com/dhqpqfw6w/image/upload/v1765124410/Philippine_Olympic_Committee.svg_eqska6.png"
                  alt="Philippine Olympic Committee logo"
                  className="size-8 object-contain"
                  width="32"
                  height="32"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-tight text-foreground">
                  Philippine Athletics
                </span>
                <span className="hidden text-[11px] text-muted-foreground sm:block">
                  National directory and results workspace
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 items-center justify-center xl:flex">
              <div className="flex items-center gap-1 rounded-full border border-border/80 bg-background/72 p-1">
                {primaryLinks.map((link) => {
                  const active = isActive(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-3 py-2 text-sm font-medium transition-[color,background-color]",
                        active
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <GlobalSearchForm className="hidden min-w-[270px] max-w-[360px] flex-1 lg:flex" />

              <Button
                asChild
                variant="ghost"
                size="icon-sm"
                className="lg:hidden"
                aria-label="Search"
              >
                <Link href="/search">
                  <Search aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                <Link href="/profile">Profile</Link>
              </Button>

              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    aria-label="Open navigation"
                  >
                    <Menu aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overscroll-contain p-0">
                  <SheetHeader className="border-b border-border/70">
                    <SheetTitle>Workspace</SheetTitle>
                    <SheetDescription>{activeLabel}</SheetDescription>
                  </SheetHeader>

                  <div className="flex flex-col gap-5 p-4">
                    <GlobalSearchForm className="w-full" />

                    <div className="space-y-2">
                      <p className="brand-eyebrow">Primary navigation</p>
                      <div className="grid gap-2">
                        {primaryLinks.map((link) => {
                          const Icon = link.icon
                          const active = isActive(pathname, link.href)
                          return (
                            <Button
                              key={link.href}
                              asChild
                              variant={active ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setOpen(false)}
                            >
                              <Link href={link.href}>
                                <Icon aria-hidden="true" />
                                {link.label}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="brand-eyebrow">Secondary</p>
                      <div className="grid gap-2">
                        {secondaryLinks.map((link) => {
                          const Icon = link.icon
                          const active = isActive(pathname, link.href)
                          return (
                            <Button
                              key={link.href}
                              asChild
                              variant={active ? "secondary" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setOpen(false)}
                            >
                              <Link href={link.href}>
                                <Icon aria-hidden="true" />
                                {link.label}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <p className="brand-eyebrow">Account</p>
                      <div className="grid gap-2">
                        {accountLinks.map((link) => {
                          const Icon = link.icon
                          const active = isActive(pathname, link.href)
                          return (
                            <Button
                              key={link.href}
                              asChild
                              variant={active ? "secondary" : "outline"}
                              className="w-full justify-start"
                              onClick={() => setOpen(false)}
                            >
                              <Link href={link.href}>
                                <Icon aria-hidden="true" />
                                {link.label}
                              </Link>
                            </Button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <div className="shell-partner-rail">
        <div className="page-shell py-2.5">
          <div className="hidden md:block">
            <DemoAdSlot
              slotId="global-top-leaderboard"
              format="leaderboard"
              variant="rail"
              creativeOverride={topAdOverride}
            />
          </div>
          <div className="md:hidden">
            <DemoAdSlot
              slotId="global-top-mobile"
              format="mobile"
              variant="rail"
              creativeOverride={topAdOverride}
            />
          </div>
        </div>
      </div>
    </>
  )
}
