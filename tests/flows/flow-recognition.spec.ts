import { test, expect } from "@playwright/test"

test("Flow: recognition and sponsor pages are hidden from the public shell", async ({ page }) => {
  for (const route of ["/recognition", "/sponsors", "/sponsors/fastfeet-ph"]) {
    await page.goto(route)
    await expect(page).toHaveURL(/\/$/)
    await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()
  }
})
