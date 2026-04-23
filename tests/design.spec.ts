import { test, expect } from "@playwright/test"

test.describe("Desktop design snapshots", () => {
  const routes = [
    { name: "home", path: "/" },
    { name: "athletes", path: "/athletes" },
    { name: "athlete-profile", path: "/athletes/athlete-lauren-hoffman" },
    { name: "rankings", path: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025" },
    { name: "competitions", path: "/competitions" },
    { name: "competition-profile", path: "/competitions/2025-southeast-asian-games" },
    { name: "clubs", path: "/clubs" },
    { name: "club-profile", path: "/clubs/manila-striders-track-club" },
    { name: "lgu-dashboard", path: "/dashboard/lgu/quezon-city?pilot=quezon-city&persona=lgu" },
    {
      name: "club-owner-dashboard",
      path: "/dashboard/clubs/manila-striders-track-club?pilot=quezon-city&club=club-manila-striders&persona=club-owner",
    },
    { name: "coaches", path: "/coaches" },
    { name: "recognition", path: "/recognition" },
    { name: "data-portal", path: "/data-portal" },
    { name: "changelog", path: "/changelog" },
  ]

  for (const route of routes) {
    test(`visual ${route.name}`, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "Desktop", "Desktop-only snapshot suite")
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

test.describe("Mobile design snapshots", () => {
  const routes = [
    { name: "home-mobile", path: "/" },
    { name: "search-mobile", path: "/search" },
    { name: "athlete-profile-mobile", path: "/athletes/athlete-lauren-hoffman" },
    { name: "rankings-mobile", path: "/rankings?event=100m&gender=Women&ageGroup=Open&year=2025" },
    { name: "recognition-mobile", path: "/recognition" },
    { name: "data-portal-mobile", path: "/data-portal" },
    {
      name: "participant-mobile",
      path: "/participants/aira-mendoza?pilot=quezon-city&club=club-manila-striders&persona=guardian",
    },
    { name: "mobile-demo-mobile", path: "/demo/mobile?pilot=quezon-city&persona=guardian" },
    { name: "profile-mobile", path: "/profile" },
  ]

  for (const route of routes) {
    test(`visual ${route.name}`, async ({ page }, testInfo) => {
      test.skip(testInfo.project.name !== "Mobile", "Mobile-only snapshot suite")
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
