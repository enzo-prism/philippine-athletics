import { test, expect } from "@playwright/test"

test("Flow: legacy pilot routes collapse into the core homepage", async ({ page }) => {
  for (const route of [
    "/demo/lgus?pilot=quezon-city&persona=lgu",
    "/dashboard/lgu/quezon-city?pilot=quezon-city&persona=lgu",
    "/participants/aira-mendoza?pilot=quezon-city&persona=guardian",
  ]) {
    await page.goto(route)
    await expect(page).toHaveURL(/\/$/)
    await expect(page.getByRole("heading", { name: /one platform/i })).toBeVisible()
  }
})
