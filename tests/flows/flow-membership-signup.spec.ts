import { test, expect } from "@playwright/test"

test("Flow: membership and signup routes are no longer public product surfaces", async ({ page }) => {
  for (const route of ["/membership", "/membership/benefits", "/signup?pathway=lgu-sponsored-youth"]) {
    await page.goto(route)
    await expect(page).toHaveURL(/\/$/)
    await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()
  }
})
