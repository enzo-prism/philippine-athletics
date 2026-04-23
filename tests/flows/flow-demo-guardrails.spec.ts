import { test, expect } from "@playwright/test"

test("Flow: Demo guard rails redirect off-script routes", async ({ page }) => {
  await page.goto("/demo/lgus?pilot=quezon-city&persona=lgu")
  await expect(page.getByRole("heading", { name: /pilot-funder story/i })).toBeVisible()

  await page.goto("/dashboard/lgu/quezon-city?pilot=quezon-city&persona=lgu")
  await expect(page.getByRole("heading", { name: /Quezon City pilot dashboard/i })).toBeVisible()

  await page.goto("/rankings")
  await expect(page).toHaveURL(/\/demo\/off-script\?flow=lgus/)
  await expect(page.getByRole("heading", { name: /Route Locked/i })).toBeVisible()
  await expect(page.getByText(/outside the current scripted demo flow/i)).toBeVisible()
})
