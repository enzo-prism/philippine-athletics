import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: events list opens event detail and athlete result", async ({ page }) => {
  const testInfo = test.info()

  await page.goto("/events?status=All&q=Fresh")
  await expect(page.getByRole("heading", { name: /track the world athletics calendar/i })).toBeVisible()
  await expect(page.getByText(/No events found/i)).toBeVisible()

  await checkA11y(page, testInfo, "events-empty")

  await page.goto("/events?status=Upcoming&q=Doha")
  await expect(page.getByRole("link", { name: /wanda diamond league doha/i })).toBeVisible()
  await expect(page.getByText(/19 June 2026/i)).toBeVisible()

  await page.goto("/events/world-athletics-relays-gaborone-2026")
  await expect(page.getByRole("heading", { name: /world athletics relays gaborone 26/i })).toBeVisible()
  await expect(page.getByText(/Mixed 4x100m relay/i)).toBeVisible()
  await expect(page.getByText(/World Athletics Relays key information/i)).toBeVisible()

  await page.goto("/events/wanda-diamond-league-doha-2026")
  await expect(page.getByRole("heading", { name: /wanda diamond league doha/i })).toBeVisible()
  await expect(page.getByText(/Doha on 19 June 2026/i)).toBeVisible()
  await expect(page.getByRole("link", { name: /Wanda Diamond League calendar 2026/i })).toBeVisible()

  await page.goto("/events/new-event")
  await expect(page.getByRole("heading", { name: /new event/i })).toBeVisible()

  await checkA11y(page, testInfo, "event-profile")
})
