import { test, expect } from "@playwright/test"

test("Flow: Membership pathways route into the correct signup story", async ({ page }) => {
  await test.step("Open pathway-based membership page", async () => {
    await page.goto("/membership")
    await expect(page.getByRole("heading", { name: /sport, the team, and the journey/i })).toBeVisible()
    await expect(page.getByText(/LGU-sponsored youth/i).first()).toBeVisible()
    await expect(page.getByText(/Club \/ coach operator/i).first()).toBeVisible()
  })

  await test.step("Start the LGU flow from membership", async () => {
    await page.getByRole("link", { name: /Set up LGU flow/i }).click()
    await expect(page).toHaveURL(/\/signup\?pathway=lgu-sponsored-youth/)
    await expect(page.getByText(/LGU \/ School Lead/i)).toBeVisible()
  })

  await test.step("Complete a lightweight email signup and confirm destination", async () => {
    await page.getByRole("button", { name: /Continue with email/i }).click()
    await page.getByLabel("First Name").fill("Mara")
    await page.getByLabel("Last Name").fill("Santos")
    await page.getByLabel("Email").fill("mara@example.com")
    await page.getByRole("button", { name: /Create account/i }).click()
    await expect(page.getByRole("link", { name: /Open LGU dashboard/i })).toBeVisible()
  })
})
