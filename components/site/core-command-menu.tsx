"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import {
  AthleteIcon,
  ClubIcon,
  CoachIcon,
  CompetitionIcon,
  HomeIcon,
} from "@/components/icons/athletics-icons"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"

const pageItems = [
  { label: "Home", href: "/", icon: HomeIcon, hint: "Overview" },
  { label: "Athletes", href: "/athletes", icon: AthleteIcon, hint: "Profiles" },
  { label: "Clubs", href: "/clubs", icon: ClubIcon, hint: "Directory" },
  { label: "Coaches", href: "/coaches", icon: CoachIcon, hint: "Directory" },
  { label: "Events", href: "/events", icon: CompetitionIcon, hint: "Calendar" },
]

const searchableItems = pageItems.filter((item) => item.href !== "/")

type CoreCommandMenuProps = {
  className?: string
  onNavigate?: () => void
}

const withQuery = (href: string, query: string) => {
  const trimmed = query.trim()
  if (!trimmed) return href
  const params = new URLSearchParams({ q: trimmed })
  return `${href}?${params.toString()}`
}

export function CoreCommandMenu({ className, onNavigate }: CoreCommandMenuProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        setOpen((current) => !current)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    onNavigate?.()
    router.push(href)
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className={cn("justify-start gap-2", className)}
        onClick={() => setOpen(true)}
      >
        <Search data-icon="inline-start" aria-hidden="true" />
        <span>Jump</span>
        <kbd className="ml-1 hidden rounded-sm border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground lg:inline-flex">
          Cmd K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Open core directory"
        description="Jump to athletes, clubs, coaches, events, or hand a search to a directory."
      >
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search athletes, clubs, coaches, or events"
        />
        <CommandList>
          <CommandEmpty>No matching command. Try a directory search.</CommandEmpty>
          <CommandGroup heading="Open page">
            {pageItems.map((item) => {
              const Icon = item.icon
              return (
                <CommandItem key={item.href} value={`${item.label} ${item.hint}`} onSelect={() => navigate(item.href)}>
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                  <CommandShortcut>{item.hint}</CommandShortcut>
                </CommandItem>
              )
            })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Search in directory">
            {searchableItems.map((item) => {
              const Icon = item.icon
              return (
                <CommandItem
                  key={`search-${item.href}`}
                  value={`Search ${item.label} ${query}`}
                  onSelect={() => navigate(withQuery(item.href, query))}
                >
                  <Icon aria-hidden="true" />
                  <span>Search {item.label}</span>
                  <CommandShortcut>{query.trim() || "Open"}</CommandShortcut>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
