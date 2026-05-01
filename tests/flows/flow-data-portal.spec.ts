import { test, expect } from "@playwright/test"

test("Flow: internal intake and safety pages redirect home", async ({ page }) => {
  for (const route of ["/data-portal", "/safe-sport", "/profile"]) {
    await page.goto(route)
    await expect(page).toHaveURL(/\/$/)
    await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()
  }
})
