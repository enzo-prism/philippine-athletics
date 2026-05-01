import { test, expect } from "@playwright/test"

test("Flow: sponsor presence is subtle on the core app", async ({ page }) => {
  const routeChecks = [
    "/",
    "/athletes",
    "/clubs",
    "/coaches",
    "/events",
    "/athletes/new-athlete",
    "/events/new-event",
  ]

  for (const route of routeChecks) {
    await page.goto(route, { waitUntil: "networkidle" })
    await expect(page.locator('[data-testid^="demo-ad-"]')).toHaveCount(0)
    await expect(page.getByText(/Built with partner support/i)).toBeVisible()
  }
})
