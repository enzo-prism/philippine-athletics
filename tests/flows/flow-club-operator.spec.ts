import { test, expect } from "@playwright/test"
import { checkA11y } from "./a11y"

test("Flow: Club operator dashboard shows compliance, coaches, and youth roster", async ({ page }) => {
  const testInfo = test.info()

  await page.goto(
    "/dashboard/clubs/manila-striders-track-club?pilot=quezon-city&club=club-manila-striders&persona=club-owner",
  )

  await expect(page.getByRole("heading", { name: /Manila Striders Track Club operator view/i })).toBeVisible()
  await expect(page.getByTestId("club-dashboard-compliance")).toBeVisible()
  await expect(page.getByText(/SafeSport readiness/i)).toBeVisible()
  await expect(page.getByText(/Ana Reyes/i)).toBeVisible()
  await expect(page.getByText(/Aira Mendoza/i)).toBeVisible()

  await checkA11y(page, testInfo, "club-operator-dashboard")
})
