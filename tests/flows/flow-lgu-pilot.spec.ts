import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: LGU pilot dashboard to participant to club operator to mobile", async ({ page }) => {
  const testInfo = test.info()

  await test.step("Open LGU pilot entry", async () => {
    await page.goto("/demo/lgus?pilot=quezon-city&persona=lgu")
    await expect(page.getByRole("heading", { name: /Quezon City pilot-funder story/i })).toBeVisible()
  })

  await test.step("Enter LGU dashboard", async () => {
    await page.getByRole("link", { name: /Open LGU dashboard/i }).click()
    await expect(page.getByRole("heading", { name: /Quezon City pilot dashboard/i })).toBeVisible()
    await checkA11y(page, testInfo, "lgu-dashboard")
  })

  await test.step("Open youth-safe participant", async () => {
    await page.getByTestId("lgu-participant-link").first().click()
    await expect(page.getByTestId("participant-profile")).toBeVisible()
    await expect(page.locator("h1")).toContainText(/Aira Mendoza/i)
    await expect(page.getByText(/^Birth date$/)).toHaveCount(0)
    await expect(page.getByText(/Personal best/i)).toHaveCount(0)
    await expect(page.getByText(/Philippines rank/i)).toHaveCount(0)
  })

  await test.step("Open club operator dashboard", async () => {
    await page.getByRole("link", { name: /Open club dashboard/i }).first().click()
    await expect(page.getByRole("heading", { name: /Manila Striders Track Club operator view/i })).toBeVisible()
  })

  await test.step("Finish on mobile walkthrough", async () => {
    await page.getByRole("link", { name: /Open mobile walkthrough/i }).click()
    await expect(page.getByRole("heading", { name: /Quezon City mobile demo/i })).toBeVisible()
    await expect(page.getByTestId("mobile-demo")).toBeVisible()
  })
})
