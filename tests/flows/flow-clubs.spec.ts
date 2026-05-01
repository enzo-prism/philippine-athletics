import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: club roster opens athlete profile", async ({ page }) => {
  const testInfo = test.info()

  await page.goto("/clubs?q=Fresh")
  await expect(page.getByRole("heading", { name: /^Clubs$/i })).toBeVisible()
  await expect(page.getByText(/No clubs found/i)).toBeVisible()

  await checkA11y(page, testInfo, "clubs-empty")

  await page.goto("/clubs/filam-sports")
  await expect(page.getByRole("heading", { name: /FilAm Sports/i })).toBeVisible()
  await expect(page.getByRole("heading", { name: /Online/i })).toBeVisible()
  await expect(page.getByRole("link", { name: /Official website/i })).toHaveAttribute("href", "https://www.filamsports.com/")
  await expect(page.getByRole("link", { name: /^Instagram @filamsports/i })).toHaveAttribute("href", "https://www.instagram.com/filamsports/")
  await expect(page.getByRole("link", { name: /Open map/i })).toHaveCount(0)

  await page.goto("/clubs/new-club")
  await expect(page.getByRole("heading", { name: /new club/i })).toBeVisible()
  await expect(page.getByText(/No athletes linked/i)).toBeVisible()
})
