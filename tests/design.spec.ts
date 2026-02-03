import { test, expect } from "@playwright/test"

test.describe("Design snapshots", () => {
  const routes = [
    { name: "home", path: "/" },
    { name: "athletes", path: "/athletes" },
    { name: "athlete-profile", path: "/athletes/athlete-lauren-hoffman" },
    { name: "rankings", path: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025" },
    { name: "competitions", path: "/competitions" },
    { name: "competition-profile", path: "/competitions/2025-southeast-asian-games" },
    { name: "clubs", path: "/clubs" },
    { name: "club-profile", path: "/clubs/manila-striders-track-club" },
    { name: "coaches", path: "/coaches" },
    { name: "recognition", path: "/recognition" },
    { name: "data-portal", path: "/data-portal" },
    { name: "changelog", path: "/changelog" },
  ]

  for (const route of routes) {
    test(`visual ${route.name}`, async ({ page }) => {
      await page.emulateMedia({ reducedMotion: "reduce" })
      await page.goto(route.path, { waitUntil: "networkidle" })
      await page.addStyleTag({
        content: `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        `,
      })
      await page.waitForTimeout(300)
      await expect(page).toHaveScreenshot(`${route.name}.png`, { fullPage: true })
    })
  }
})
