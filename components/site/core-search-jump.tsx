"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

const destinations = [
  { label: "Athletes", value: "/athletes" },
  { label: "Clubs", value: "/clubs" },
  { label: "Coaches", value: "/coaches" },
  { label: "Events", value: "/events" },
]

export function CoreSearchJump() {
  const router = useRouter()
  const [destination, setDestination] = useState(destinations[0].value)
  const [query, setQuery] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const params = new URLSearchParams()
    const trimmed = query.trim()
    if (trimmed) params.set("q", trimmed)
    router.push(`${destination}${params.toString() ? `?${params.toString()}` : ""}`)
  }

  return (
    <form onSubmit={handleSubmit} className="core-filter-bar w-full">
      <FieldGroup className="grid gap-3 md:grid-cols-[minmax(0,1fr)_180px_auto]">
        <Field>
          <FieldLabel htmlFor="core-search" className="sr-only">
            Search the core app
          </FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <Search aria-hidden="true" />
            </InputGroupAddon>
            <InputGroupInput
              id="core-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search a name, club, coach, event, or city"
            />
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel htmlFor="core-destination" className="sr-only">
            Search destination
          </FieldLabel>
          <NativeSelect
            id="core-destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            aria-label="Search destination"
          >
            {destinations.map((item) => (
              <NativeSelectOption key={item.value} value={item.value}>
                {item.label}
              </NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <ButtonGroup className="w-full md:w-fit">
          <Button type="submit" className="w-full md:w-fit">
            Go
            <ArrowRight data-icon="inline-end" aria-hidden="true" />
          </Button>
        </ButtonGroup>
      </FieldGroup>
    </form>
  )
}
