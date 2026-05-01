import { test, expect } from "@playwright/test"

test("Flow: demo routes no longer create a public alternate shell", async ({ page }) => {
  for (const route of ["/demo", "/demo/lgus?pilot=quezon-city&persona=lgu", "/dashboard/lgu/quezon-city"]) {
    await page.goto(route)
    await expect(page).toHaveURL(/\/$/)
    await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()
  }
})
