"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  AthleteIcon,
  ClubIcon,
  CoachIcon,
  CompetitionIcon,
  HomeIcon,
  type AthleticsIconComponent,
} from "@/components/icons/athletics-icons"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type NavLink = {
  href: string
  label: string
  icon: AthleticsIconComponent
}

const coreLinks: NavLink[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/athletes", label: "Athletes", icon: AthleteIcon },
  { href: "/clubs", label: "Clubs", icon: ClubIcon },
  { href: "/coaches", label: "Coaches", icon: CoachIcon },
  { href: "/events", label: "Events", icon: CompetitionIcon },
]

const isActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="shell-surface">
        <div className="page-shell">
          <div className="shell-inner">
            <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Philippine Athletics home">
              <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-white p-0.5 shadow-[var(--shadow-soft)]">
                <Image
                  src="/brand/philippine-athletics-seal.png"
                  alt=""
                  width={44}
                  height={42}
                  priority
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold tracking-normal text-foreground">
                  Philippine Athletics
                </span>
                <span className="hidden text-[11px] text-muted-foreground sm:block">
                  Athletes, clubs, coaches, events
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 items-center justify-center md:flex" aria-label="Primary">
              <div className="flex items-center gap-1 rounded-lg border border-border bg-background/76 p-1">
                {coreLinks.map((link) => {
                  const Icon = link.icon
                  const active = isActive(pathname, link.href)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-[color,background-color]",
                        active
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
                      )}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {link.label}
                    </Link>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon-sm"
                    className="md:hidden"
                    aria-label="Open navigation"
                  >
                    <Menu data-icon="inline-start" aria-hidden="true" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="overscroll-contain p-0">
                  <SheetHeader className="border-b border-border/70">
                    <SheetTitle>Philippine Athletics</SheetTitle>
                  </SheetHeader>

                  <div className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto p-4" aria-label="Core navigation">
                    <div className="space-y-2">
                      <p className="brand-eyebrow">Core navigation</p>
                      <div className="grid gap-2">
                        {coreLinks.map((link) => {
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
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
