import { test, expect } from "@playwright/test"

test("Flow: data portal is removed from the public app", async ({ page }) => {
  await page.goto("/data-portal")
  await expect(page).toHaveURL(/\/$/)
  await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()
})
