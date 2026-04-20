"use client"

import { useRouter } from "next/navigation"
import { useEffect, useId, useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type GlobalSearchFormProps = {
  actionLabel?: string
  buttonClassName?: string
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
  className?: string
  defaultValue?: string
  inputClassName?: string
  variant?: "compact" | "hero"
}

export function GlobalSearchForm({
  actionLabel = "Search",
  buttonClassName,
  buttonVariant,
  className,
  defaultValue = "",
  inputClassName,
  variant = "compact",
}: GlobalSearchFormProps) {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue)
  const inputId = useId()

  const isCompact = variant === "compact"
  const resolvedButtonVariant = buttonVariant ?? (isCompact ? "secondary" : "default")

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const query = value.trim()
    if (!query) return
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex items-center gap-2 rounded-full border border-border/80 bg-background/84 p-1.5 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <Label htmlFor={inputId} className="sr-only">
        Search athletes, coaches, and clubs
      </Label>
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          id={inputId}
          type="search"
          autoComplete="off"
          inputMode="search"
          name="query"
          data-testid="global-search-input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Search athletes, clubs, IDs…"
          className={cn(
            "border-0 bg-transparent pl-10 shadow-none ring-0 focus-visible:border-transparent focus-visible:ring-0",
            isCompact ? "h-10 text-sm" : "h-12 text-base",
            inputClassName,
          )}
        />
      </div>
      <Button
        type="submit"
        size={isCompact ? "sm" : "lg"}
        variant={resolvedButtonVariant}
        className={cn(
          isCompact ? "min-w-[5rem] px-3" : "px-6",
          resolvedButtonVariant === "outline" && "text-muted-foreground hover:text-accent-foreground",
          buttonClassName,
        )}
        aria-label="Run search"
        data-testid="global-search-submit"
      >
        {isCompact ? actionLabel : actionLabel}
      </Button>
    </form>
  )
}
