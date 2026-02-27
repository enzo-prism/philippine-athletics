import { test, expect } from "@playwright/test"

test("Flow: Demo guard rails redirect off-script routes", async ({ page }) => {
  await page.goto("/demo/governance")
  await expect(page.getByRole("heading", { name: /Governance Demo Script/i })).toBeVisible()

  await page.goto("/signup")
  await expect(page).toHaveURL(/\/demo\/off-script\?flow=governance/)
  await expect(page.getByRole("heading", { name: /Route Locked/i })).toBeVisible()
  await expect(page.getByText(/outside the current scripted demo flow/i)).toBeVisible()
})
