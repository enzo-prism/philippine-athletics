import { Suspense } from "react"
import { SearchClient } from "./search-client"

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background">
          <div className="page-shell py-10 text-sm text-muted-foreground">Loading search...</div>
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  )
}
