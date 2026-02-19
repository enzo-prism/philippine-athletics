export type CommitFile = {
  path: string
  additions: number | null
  deletions: number | null
}

export type CommitStats = {
  files: number
  insertions: number
  deletions: number
  summary: string
}

export type CommitLogEntry = {
  hash: string
  shortHash: string
  subject: string
  body?: string
  author: string
  date: string
  stats: CommitStats
  areas: string[]
  tags: string[]
  summary: string
  notes: string[]
  plainSummary: string
  plainNotes: string[]
  plainImpact: string
  files: CommitFile[]
}

export const commitLogUpdatedAt = "2026-02-19T16:18:56.715Z"

export const commitLog: CommitLogEntry[] = [
  {
    "hash": "2eda61bec24d73c855377a43b06fae9e5df0ba95",
    "shortHash": "2eda61b",
    "subject": "feat: restore changelog commit feed and enforce sync",
    "author": "enzo-prism",
    "date": "2026-02-19T08:17:56-08:00",
    "stats": {
      "files": 9,
      "insertions": 1780,
      "deletions": 425,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "docs",
      "data",
      "scripts"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Docs",
      "Demo Data",
      "Config",
      "Tooling"
    ],
    "summary": "Added General updates, Core screens, Guides & notes, Sample data, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Added update timeline, core screens, and guides & notes.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Added clearer guidance for teammates and stakeholders.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 190,
        "deletions": 47
      },
      {
        "path": "docs/STATUS.md",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 15,
        "deletions": 0
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 1522,
        "deletions": 9
      },
      {
        "path": "package.json",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "scripts/check-changelog-sync.mjs",
        "additions": 16,
        "deletions": 0
      },
      {
        "path": "scripts/generate-commit-log.mjs",
        "additions": 29,
        "deletions": 1
      },
      {
        "path": "scripts/generate-commit-log.ts",
        "additions": 0,
        "deletions": 368
      }
    ]
  },
  {
    "hash": "1722165f2772422555e48c2f149bc8e62256c96c",
    "shortHash": "1722165",
    "subject": "chore: guard changelog sync in build/lint and push workflow",
    "author": "enzo-prism",
    "date": "2026-02-19T08:10:51-08:00",
    "stats": {
      "files": 1,
      "insertions": 4,
      "deletions": 3,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "package.json",
        "additions": 4,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "b03c39e97da4c816e1594030b8c7bd76a66b1430",
    "shortHash": "b03c39e",
    "subject": "chore: sync changelog and apply shadcn ui migration",
    "author": "enzo-prism",
    "date": "2026-02-19T08:10:33-08:00",
    "stats": {
      "files": 21,
      "insertions": 1190,
      "deletions": 578,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "docs",
      "data",
      "scripts"
    ],
    "tags": [
      "Athletes",
      "App Pages",
      "Accounts",
      "Search",
      "Components",
      "Docs",
      "Demo Data",
      "Config",
      "Tooling"
    ],
    "summary": "Updated General updates, Core screens, Shared interface, Guides & notes, Sample data, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Updated athlete profiles, core screens, and profiles & sign-up.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved core screens and layouts.",
      "Smoothed sign-up and profile steps.",
      "Made it quicker to find people and results."
    ],
    "plainImpact": "Makes athlete profiles clearer and easier to share. Makes finding people and clubs faster.",
    "files": [
      {
        "path": ".gitignore",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 6
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 8,
        "deletions": 8
      },
      {
        "path": "app/globals.css",
        "additions": 66,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 8,
        "deletions": 8
      },
      {
        "path": "app/profile/page.tsx",
        "additions": 6,
        "deletions": 6
      },
      {
        "path": "app/search/page.tsx",
        "additions": 11,
        "deletions": 11
      },
      {
        "path": "components/ui/avatar.tsx",
        "additions": 103,
        "deletions": 41
      },
      {
        "path": "components/ui/badge.tsx",
        "additions": 11,
        "deletions": 9
      },
      {
        "path": "components/ui/button.tsx",
        "additions": 4,
        "deletions": 2
      },
      {
        "path": "components/ui/dropdown-menu.tsx",
        "additions": 3,
        "deletions": 3
      },
      {
        "path": "components/ui/label.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/ui/select.tsx",
        "additions": 3,
        "deletions": 3
      },
      {
        "path": "components/ui/separator.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/ui/sheet.tsx",
        "additions": 9,
        "deletions": 5
      },
      {
        "path": "components/ui/tabs.tsx",
        "additions": 34,
        "deletions": 9
      },
      {
        "path": "docs/STATUS.md",
        "additions": 2,
        "deletions": 1
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 16,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 3,
        "deletions": 28
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 858,
        "deletions": 436
      },
      {
        "path": "scripts/check-changelog-sync.mjs",
        "additions": 35,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "4cd3b0a16c636dc677b92305c3bed77778380c66",
    "shortHash": "4cd3b0a",
    "subject": "docs: add missing changelog entries through Feb 2026",
    "author": "enzo-prism",
    "date": "2026-02-19T08:01:06-08:00",
    "stats": {
      "files": 1,
      "insertions": 17,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [],
    "summary": "Added General updates.",
    "notes": [],
    "plainSummary": "Added the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 17,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "09a494331b5e4db10cd76504a27a450cbb71073c",
    "shortHash": "09a4943",
    "subject": "Merge pull request #32 from enzo-prism/codex/test-searching,-filtering,-and-sorting-features",
    "body": "fix: await async searchParams for search/filter pages and restore Playwright webServer",
    "author": "enzo",
    "date": "2026-02-10T22:49:00-08:00",
    "stats": {
      "files": 8,
      "insertions": 52,
      "deletions": 37,
      "summary": ""
    },
    "areas": [
      "app",
      "other"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Competitions",
      "Rankings",
      "Search"
    ],
    "summary": "Updated Core screens, General updates.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Highlighted meet results and how to explore them."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 5,
        "deletions": 4
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 7,
        "deletions": 6
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 3,
        "deletions": 2
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 24,
        "deletions": 15
      },
      {
        "path": "app/search/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "playwright.config.ts",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "26dbe40e77d8da611114f1fbdd18ef4398fb3fed",
    "shortHash": "26dbe40",
    "subject": "fix: restore app search/filter routes and flow test server startup",
    "author": "enzo",
    "date": "2026-02-10T22:48:48-08:00",
    "stats": {
      "files": 8,
      "insertions": 52,
      "deletions": 37,
      "summary": ""
    },
    "areas": [
      "app",
      "other"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Competitions",
      "Rankings",
      "Search"
    ],
    "summary": "Fixed Core screens, General updates.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 5,
        "deletions": 4
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 7,
        "deletions": 6
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 3,
        "deletions": 2
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 24,
        "deletions": 15
      },
      {
        "path": "app/search/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "playwright.config.ts",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "7846c2e71e9f7ae95848135ffb345ffdf71bacdd",
    "shortHash": "7846c2e",
    "subject": "Merge pull request #31 from enzo-prism/codex/update-and-detail-changelog",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-10T22:35:43-08:00",
    "stats": {
      "files": 2,
      "insertions": 37,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "other",
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Updated General updates, Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated sample data.",
    "plainNotes": [
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 11,
        "deletions": 1
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 26,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "89d3c4326445a42bd9ff5d06e71d87a40459864c",
    "shortHash": "89d3c43",
    "subject": "docs: update changelog with latest product updates",
    "author": "enzo",
    "date": "2026-02-10T22:35:30-08:00",
    "stats": {
      "files": 2,
      "insertions": 37,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "other",
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Updated General updates, Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated sample data.",
    "plainNotes": [
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 11,
        "deletions": 1
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 26,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "c5c822997d50f0877295dcabf145bacdabe5ab34",
    "shortHash": "c5c8229",
    "subject": "Merge pull request #30 from enzo-prism/codex/replace-join-button-text-with-register",
    "body": "fix: rename membership Join button to Register",
    "author": "enzo",
    "date": "2026-02-10T22:22:26-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/page.tsx",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "2e164b6604a8bce5cfaeda347c72fcaadec6e47e",
    "shortHash": "2e164b6",
    "subject": "fix: rename membership join button to register",
    "author": "enzo",
    "date": "2026-02-10T22:22:14-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/page.tsx",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "1bd47183aeaaab40aa02a0d158465106b8985237",
    "shortHash": "1bd4718",
    "subject": "Merge pull request #29 from enzo-prism/codex/update-membership-and-benefits-page-text",
    "body": "Update membership and benefits page copy",
    "author": "enzo",
    "date": "2026-02-10T22:13:55-08:00",
    "stats": {
      "files": 2,
      "insertions": 49,
      "deletions": 57,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/benefits/page.tsx",
        "additions": 26,
        "deletions": 23
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 23,
        "deletions": 34
      }
    ]
  },
  {
    "hash": "3a0e004c2997c850e110901cd3834a491a079202",
    "shortHash": "3a0e004",
    "subject": "feat: refresh membership page copy",
    "author": "enzo",
    "date": "2026-02-10T22:13:43-08:00",
    "stats": {
      "files": 2,
      "insertions": 49,
      "deletions": 57,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/benefits/page.tsx",
        "additions": 26,
        "deletions": 23
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 23,
        "deletions": 34
      }
    ]
  },
  {
    "hash": "cf46e64ee1359065506d25ba6253d6dd41d807be",
    "shortHash": "cf46e64",
    "subject": "Merge pull request #28 from enzo-prism/codex/update-homepage-h1-and-sub-text",
    "body": "Update homepage hero messaging",
    "author": "enzo",
    "date": "2026-02-10T22:10:37-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 2,
        "deletions": 2
      }
    ]
  },
  {
    "hash": "d571facae7a2d8bd564899eacbbb2e62a9a8cb62",
    "shortHash": "d571fac",
    "subject": "feat: update homepage hero messaging",
    "author": "enzo",
    "date": "2026-02-10T22:10:28-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 2,
        "deletions": 2
      }
    ]
  },
  {
    "hash": "005ce979581ae58e6393ab05c73d52c7991b10e1",
    "shortHash": "005ce97",
    "subject": "Merge pull request #27 from enzo-prism/codex/add-banner-ads-to-demo",
    "body": "feat: add demo banner ad creatives and use one as homepage default",
    "author": "enzo",
    "date": "2026-02-10T22:00:36-08:00",
    "stats": {
      "files": 3,
      "insertions": 38,
      "deletions": 7,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Demo Data"
    ],
    "summary": "Updated Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated core screens, shared interface pieces, and sample data.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic. Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/ads/DemoAdSlot.tsx",
        "additions": 8,
        "deletions": 5
      },
      {
        "path": "lib/data/demo-ad-creatives.ts",
        "additions": 29,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "fe17a4ef37a2230c3abc5f311cbdb9e0f742b3e9",
    "shortHash": "fe17a4e",
    "subject": "feat: add demo banner ad creatives on homepage",
    "author": "enzo",
    "date": "2026-02-10T22:00:27-08:00",
    "stats": {
      "files": 3,
      "insertions": 38,
      "deletions": 7,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Demo Data"
    ],
    "summary": "Added Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added core screens, shared interface pieces, and sample data.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic. Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/ads/DemoAdSlot.tsx",
        "additions": 8,
        "deletions": 5
      },
      {
        "path": "lib/data/demo-ad-creatives.ts",
        "additions": 29,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "0663e6259ab14deb8e2c0ae06a925a0101e57440",
    "shortHash": "0663e62",
    "subject": "Merge pull request #26 from enzo-prism/codex/overhaul-/changelog-design-for-clarity",
    "body": "feat: simplify and declutter /changelog design",
    "author": "enzo",
    "date": "2026-02-10T19:31:36-08:00",
    "stats": {
      "files": 2,
      "insertions": 57,
      "deletions": 175,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "Changelog",
      "App Pages"
    ],
    "summary": "Updated General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Refreshed update timeline and core screens.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 52,
        "deletions": 175
      }
    ]
  },
  {
    "hash": "d6322be4ade4917df89de1104adaabaaa5e5beab",
    "shortHash": "d6322be",
    "subject": "feat: simplify changelog layout and update card spacing",
    "author": "enzo",
    "date": "2026-02-10T19:31:24-08:00",
    "stats": {
      "files": 2,
      "insertions": 57,
      "deletions": 175,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "Changelog",
      "App Pages"
    ],
    "summary": "Added General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added update timeline and core screens.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 52,
        "deletions": 175
      }
    ]
  },
  {
    "hash": "15988b0dfc1ef07d99a3358fc1ffa1806b1154f7",
    "shortHash": "15988b0",
    "subject": "Merge pull request #25 from enzo-prism/codex/fix-sample-map-for-club-profile-pages",
    "body": "fix: render club practice maps using embeddable URLs",
    "author": "enzo",
    "date": "2026-02-10T19:25:22-08:00",
    "stats": {
      "files": 2,
      "insertions": 48,
      "deletions": 27,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Clubs",
      "App Pages",
      "Components"
    ],
    "summary": "Fixed Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Fixed club pages, core screens, and shared interface pieces.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "components/map-embed.tsx",
        "additions": 46,
        "deletions": 27
      }
    ]
  },
  {
    "hash": "bbb9ff7154c0c98babcb08bc23d8a3251d66f160",
    "shortHash": "bbb9ff7",
    "subject": "fix: render club practice maps using embeddable google url",
    "author": "enzo",
    "date": "2026-02-10T19:25:12-08:00",
    "stats": {
      "files": 2,
      "insertions": 48,
      "deletions": 27,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Clubs",
      "App Pages",
      "Components"
    ],
    "summary": "Fixed Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Fixed club pages, core screens, and shared interface pieces.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "components/map-embed.tsx",
        "additions": 46,
        "deletions": 27
      }
    ]
  },
  {
    "hash": "c6687009a8d722a22b043437c0f02049f7cc19a1",
    "shortHash": "c668700",
    "subject": "Merge pull request #24 from enzo-prism/codex/update-benefits-page-information",
    "body": "fix: align membership benefits page content with overview",
    "author": "enzo",
    "date": "2026-02-10T11:00:41-08:00",
    "stats": {
      "files": 1,
      "insertions": 57,
      "deletions": 26,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/benefits/page.tsx",
        "additions": 57,
        "deletions": 26
      }
    ]
  },
  {
    "hash": "88d9bff3fb6e432d1c25823f72826e593c3fbf31",
    "shortHash": "88d9bff",
    "subject": "fix: align membership benefits page content with overview",
    "author": "enzo",
    "date": "2026-02-10T11:00:31-08:00",
    "stats": {
      "files": 1,
      "insertions": 57,
      "deletions": 26,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/benefits/page.tsx",
        "additions": 57,
        "deletions": 26
      }
    ]
  },
  {
    "hash": "62c811abfdd93f9e24a7c12df3f770ed0553dfb3",
    "shortHash": "62c811a",
    "subject": "Merge pull request #23 from enzo-prism/codex/update-membership-pricing",
    "body": "fix: update membership monthly pricing tiers",
    "author": "enzo",
    "date": "2026-02-10T08:19:27-08:00",
    "stats": {
      "files": 1,
      "insertions": 12,
      "deletions": 12,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/page.tsx",
        "additions": 12,
        "deletions": 12
      }
    ]
  },
  {
    "hash": "22c244ab126a15265fe86a22a22af3d15a58a9e1",
    "shortHash": "22c244a",
    "subject": "fix: update membership monthly pricing tiers",
    "author": "enzo",
    "date": "2026-02-10T08:19:01-08:00",
    "stats": {
      "files": 1,
      "insertions": 12,
      "deletions": 12,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/page.tsx",
        "additions": 12,
        "deletions": 12
      }
    ]
  },
  {
    "hash": "fbd6d10afe72d7744e125a21e3bc8405968646cb",
    "shortHash": "fbd6d10",
    "subject": "Merge pull request #22 from enzo-prism/codex/fix-build-error-in-layout.tsx",
    "body": "fix: close malformed metadata object in app layout",
    "author": "enzo",
    "date": "2026-02-10T08:12:16-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/layout.tsx",
        "additions": 1,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "72852d543800132bedae3e76fd5c559398794c7d",
    "shortHash": "72852d5",
    "subject": "fix: close metadata icons object in root layout",
    "author": "enzo",
    "date": "2026-02-10T08:12:04-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/layout.tsx",
        "additions": 1,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "141cb2c9e606e595dcf4806ac812a2c0725e5f3d",
    "shortHash": "141cb2c",
    "subject": "Merge pull request #21 from enzo-prism/codex/update-favicon-images-for-all-pages",
    "body": "fix: switch favicon implementation to text-only SVG assets",
    "author": "enzo",
    "date": "2026-02-10T08:07:11-08:00",
    "stats": {
      "files": 3,
      "insertions": 9,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/apple-icon.svg",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/icon.svg",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/layout.tsx",
        "additions": 3,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "1add0daf26ed47cdbb7d129a731decaed8e5b102",
    "shortHash": "1add0da",
    "subject": "Merge branch 'main' into codex/update-favicon-images-for-all-pages",
    "author": "enzo",
    "date": "2026-02-10T08:07:04-08:00",
    "stats": {
      "files": 4,
      "insertions": 1607,
      "deletions": 13,
      "summary": ""
    },
    "areas": [
      "app",
      "data"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Updated Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline, core screens, and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "app/changelog/page.tsx",
        "additions": 15,
        "deletions": 4
      },
      {
        "path": "app/layout.tsx",
        "additions": 6,
        "deletions": 0
      },
      {
        "path": "app/opengraph-image.tsx",
        "additions": 39,
        "deletions": 0
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 1547,
        "deletions": 9
      }
    ]
  },
  {
    "hash": "439cd9f7b0ef68ceea3ea68f522df63cea9372c8",
    "shortHash": "439cd9f",
    "subject": "fix: switch favicon assets to text-based svg files",
    "author": "enzo",
    "date": "2026-02-10T08:06:29-08:00",
    "stats": {
      "files": 3,
      "insertions": 10,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/apple-icon.svg",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/icon.svg",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/layout.tsx",
        "additions": 4,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "155140ff8d80a2df6402d83721143a859aef3310",
    "shortHash": "155140f",
    "subject": "Merge pull request #20 from enzo-prism/codex/set-open-graph-image-for-all-pages",
    "body": "fix: replace binary Open Graph asset with generated opengraph route",
    "author": "enzo",
    "date": "2026-02-10T08:06:04-08:00",
    "stats": {
      "files": 2,
      "insertions": 46,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/layout.tsx",
        "additions": 7,
        "deletions": 0
      },
      {
        "path": "app/opengraph-image.tsx",
        "additions": 39,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "d2d53a5788fcf7e42dcf137a8f44cf9c59ae98c5",
    "shortHash": "d2d53a5",
    "subject": "fix: use generated global opengraph image route",
    "author": "enzo",
    "date": "2026-02-10T08:05:52-08:00",
    "stats": {
      "files": 2,
      "insertions": 46,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/layout.tsx",
        "additions": 7,
        "deletions": 0
      },
      {
        "path": "app/opengraph-image.tsx",
        "additions": 39,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "c767451aa5181a458e25f11c0205ee705fd6d381",
    "shortHash": "c767451",
    "subject": "Merge pull request #19 from enzo-prism/codex/fix-changelog-date-capture-issue",
    "body": "fix: correct changelog date rendering and refresh commit feed",
    "author": "enzo",
    "date": "2026-02-10T08:05:22-08:00",
    "stats": {
      "files": 2,
      "insertions": 1562,
      "deletions": 13,
      "summary": ""
    },
    "areas": [
      "app",
      "data"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Fixed Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Fixed update timeline, core screens, and sample data.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "app/changelog/page.tsx",
        "additions": 15,
        "deletions": 4
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 1547,
        "deletions": 9
      }
    ]
  },
  {
    "hash": "ad89a52ba7a8ef926ddea7560a47caa43bdb3a9e",
    "shortHash": "ad89a52",
    "subject": "fix: correct changelog date rendering and refresh commit feed",
    "author": "enzo",
    "date": "2026-02-10T08:05:05-08:00",
    "stats": {
      "files": 2,
      "insertions": 1562,
      "deletions": 13,
      "summary": ""
    },
    "areas": [
      "app",
      "data"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Fixed Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Fixed update timeline, core screens, and sample data.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "app/changelog/page.tsx",
        "additions": 15,
        "deletions": 4
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 1547,
        "deletions": 9
      }
    ]
  },
  {
    "hash": "3f40c1dd4d4697a2a48b60f825135e2693782bc5",
    "shortHash": "3f40c1d",
    "subject": "Merge pull request #18 from enzo-prism/codex/redesign-and-update-membership-page",
    "body": "feat: redesign membership page and add detailed benefits breakdown",
    "author": "enzo",
    "date": "2026-02-10T07:54:49-08:00",
    "stats": {
      "files": 2,
      "insertions": 350,
      "deletions": 412,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/benefits/page.tsx",
        "additions": 182,
        "deletions": 0
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 168,
        "deletions": 412
      }
    ]
  },
  {
    "hash": "981264d6de971187985e06993508cee2cb1ea667",
    "shortHash": "981264d",
    "subject": "feat: redesign membership experience and add benefits page",
    "author": "enzo",
    "date": "2026-02-10T07:54:25-08:00",
    "stats": {
      "files": 2,
      "insertions": 350,
      "deletions": 412,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/membership/benefits/page.tsx",
        "additions": 182,
        "deletions": 0
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 168,
        "deletions": 412
      }
    ]
  },
  {
    "hash": "1a520e0bf1d443d36356050da47198d663fff5a3",
    "shortHash": "1a520e0",
    "subject": "Merge pull request #17 from enzo-prism/codex/update-cta-buttons-in-hero-section",
    "body": "feat: update homepage CTAs and add membership package options",
    "author": "enzo",
    "date": "2026-02-10T07:42:56-08:00",
    "stats": {
      "files": 3,
      "insertions": 92,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 85,
        "deletions": 1
      },
      {
        "path": "app/page.tsx",
        "additions": 3,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "78f5c55be7493c76830b5e4d5c747822929c46d7",
    "shortHash": "78f5c55",
    "subject": "Merge branch 'main' into codex/update-cta-buttons-in-hero-section",
    "author": "enzo",
    "date": "2026-02-10T07:42:48-08:00",
    "stats": {
      "files": 3,
      "insertions": 328,
      "deletions": 191,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "data"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Updated General updates, Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline, core screens, and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 138,
        "deletions": 191
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 186,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "80e9ab2dec743d1c236aad5c3627d819de630944",
    "shortHash": "80e9ab2",
    "subject": "feat: update hero CTAs and add membership packages",
    "author": "enzo",
    "date": "2026-02-10T07:39:21-08:00",
    "stats": {
      "files": 3,
      "insertions": 93,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 85,
        "deletions": 1
      },
      {
        "path": "app/page.tsx",
        "additions": 3,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "9b11002496da860428bd28f5f8a99b4bde2a6613",
    "shortHash": "9b11002",
    "subject": "Merge pull request #16 from enzo-prism/codex/enhance-changelog-feature-for-updates",
    "body": "feat: overhaul changelog experience with structured release history",
    "author": "enzo",
    "date": "2026-02-10T07:34:09-08:00",
    "stats": {
      "files": 3,
      "insertions": 329,
      "deletions": 191,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "data"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Updated General updates, Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline, core screens, and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 138,
        "deletions": 191
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 186,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "33327337aa33db266cecece282e0f07e2fef4639",
    "shortHash": "3332733",
    "subject": "feat: overhaul changelog experience with structured release history",
    "author": "enzo",
    "date": "2026-02-10T07:33:56-08:00",
    "stats": {
      "files": 3,
      "insertions": 329,
      "deletions": 191,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "data"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added update timeline, core screens, and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 138,
        "deletions": 191
      },
      {
        "path": "lib/data/changelog-updates.ts",
        "additions": 186,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "5c7a9b31da7b7146fb7cbf724c611897264a6045",
    "shortHash": "5c7a9b3",
    "subject": "Merge pull request #15 from enzo-prism/codex/remove-icon-for-cleaner-look",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-10T07:28:53-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 2
      }
    ]
  },
  {
    "hash": "0259c7a51e5f07742f461a38b58273b2a895a58d",
    "shortHash": "0259c7a",
    "subject": "style: remove hero badge icon for cleaner header text",
    "author": "enzo",
    "date": "2026-02-10T07:28:40-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Polished Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Polished core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 2
      }
    ]
  },
  {
    "hash": "7e0450f921e5257e92057ac68b2630805c388151",
    "shortHash": "7e0450f",
    "subject": "Merge pull request #14 from enzo-prism/codex/add-home-item-to-top-nav-bar",
    "body": "feat: add Home item to top nav bar menu",
    "author": "enzo",
    "date": "2026-02-10T07:23:49-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 2,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "f959818b7a1a837e5d1bdb2ef5c5eb2c5dc3df61",
    "shortHash": "f959818",
    "subject": "feat: add home link to top navigation",
    "author": "enzo",
    "date": "2026-02-10T07:23:35-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Added Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 2,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "1fc3368b5b7b2aec46e451715357b5a9d006718f",
    "shortHash": "1fc3368",
    "subject": "Merge pull request #13 from enzo-prism/codex/fix-hamburger-menu-icon-color",
    "body": "fix: darken mobile hamburger menu icon",
    "author": "enzo",
    "date": "2026-02-10T07:23:25-08:00",
    "stats": {
      "files": 1,
      "insertions": 7,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Fixed Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Fixed navigation.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 7,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "d1088f300a0def379ae21c5461dc60d26aba9f76",
    "shortHash": "d1088f3",
    "subject": "fix: darken mobile hamburger menu icon",
    "author": "enzo",
    "date": "2026-02-10T07:23:15-08:00",
    "stats": {
      "files": 1,
      "insertions": 7,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Fixed Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Fixed navigation.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 7,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "66bbfc670801cf304be3235e74bd6f058ff16292",
    "shortHash": "66bbfc6",
    "subject": "Merge pull request #12 from enzo-prism/codex/redesign-homepage-logo-display",
    "body": "feat: emphasize official partner logos on homepage",
    "author": "enzo",
    "date": "2026-02-10T07:20:01-08:00",
    "stats": {
      "files": 1,
      "insertions": 8,
      "deletions": 8,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 8,
        "deletions": 8
      }
    ]
  },
  {
    "hash": "176ab0aac542af7a57d3d68b20030d0e0582bbb1",
    "shortHash": "176ab0a",
    "subject": "feat: emphasize official partner logos on homepage",
    "author": "enzo",
    "date": "2026-02-10T07:19:50-08:00",
    "stats": {
      "files": 1,
      "insertions": 8,
      "deletions": 8,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 8,
        "deletions": 8
      }
    ]
  },
  {
    "hash": "54142fd9be2cef53759674db872cdfec68960ba6",
    "shortHash": "54142fd",
    "subject": "Merge pull request #11 from enzo-prism/codex/add-banner-ads-for-demo-placements",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-10T07:14:16-08:00",
    "stats": {
      "files": 6,
      "insertions": 46,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "Competitions",
      "App Pages",
      "Recognition"
    ],
    "summary": "Updated General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated meet results, core screens, and trust and safety.",
    "plainNotes": [
      "Highlighted meet results and how to explore them.",
      "Improved core screens and layouts.",
      "Added clearer trust signals and verification context."
    ],
    "plainImpact": "Makes competition results easier to find after a meet. Clarifies trust and safety signals for parents and staff.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/events/page.tsx",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 10,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/recognition/page.tsx",
        "additions": 8,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "40252391b195a022ffd274312eeb45511e947537",
    "shortHash": "4025239",
    "subject": "feat: expand demo sponsor ad placements across key pages",
    "author": "enzo",
    "date": "2026-02-10T07:14:03-08:00",
    "stats": {
      "files": 6,
      "insertions": 46,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "Competitions",
      "App Pages",
      "Recognition"
    ],
    "summary": "Added General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added meet results, core screens, and trust and safety.",
    "plainNotes": [
      "Highlighted meet results and how to explore them.",
      "Improved core screens and layouts.",
      "Added clearer trust signals and verification context."
    ],
    "plainImpact": "Makes competition results easier to find after a meet. Clarifies trust and safety signals for parents and staff.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/events/page.tsx",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/membership/page.tsx",
        "additions": 10,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/recognition/page.tsx",
        "additions": 8,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "d8c1fa1a4e10eb7510ddc418fa581a0fc840a2cd",
    "shortHash": "d8c1fa1",
    "subject": "Merge pull request #10 from enzo-prism/codex/update-homepage-image-frames-for-partners",
    "body": "fix: improve official partner logo frame aspect ratios",
    "author": "enzo",
    "date": "2026-02-10T07:08:45-08:00",
    "stats": {
      "files": 1,
      "insertions": 7,
      "deletions": 7,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 7,
        "deletions": 7
      }
    ]
  },
  {
    "hash": "736077b89175ef8fee75d016c51622e9d7b20543",
    "shortHash": "736077b",
    "subject": "fix: improve official partner logo frame aspect ratios",
    "author": "enzo",
    "date": "2026-02-10T07:08:19-08:00",
    "stats": {
      "files": 1,
      "insertions": 7,
      "deletions": 7,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 7,
        "deletions": 7
      }
    ]
  },
  {
    "hash": "2b0a082f87ea9e40d11aa44d0f430f7b8eeae087",
    "shortHash": "2b0a082",
    "subject": "Add partner logos and ads",
    "author": "enzo-prism",
    "date": "2026-02-10T06:09:43-08:00",
    "stats": {
      "files": 18,
      "insertions": 778,
      "deletions": 151,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Rankings",
      "Search",
      "Components",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes athlete profiles clearer and easier to share.",
    "files": [
      {
        "path": ".pa-dev.log",
        "additions": 271,
        "deletions": 0
      },
      {
        "path": ".pa-dev.parent.pid",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 49,
        "deletions": 28
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/coaches/page.tsx",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/globals.css",
        "additions": 0,
        "deletions": 6
      },
      {
        "path": "app/page.tsx",
        "additions": 42,
        "deletions": 0
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/search/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/sponsors/[id]/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "app/sponsors/page.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "components/ads/DemoAdSlot.tsx",
        "additions": 80,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 144,
        "deletions": 117
      },
      {
        "path": "lib/data/demo-ad-creatives.ts",
        "additions": 161,
        "deletions": 0
      },
      {
        "path": "tsconfig.tsbuildinfo",
        "additions": 1,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "44590586a5a77f79cf269fc065f70429f3c99901",
    "shortHash": "4459058",
    "subject": "Merge pull request #9 from enzo-prism/codex/improve-homepage-design-and-cards",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-09T21:37:37-08:00",
    "stats": {
      "files": 1,
      "insertions": 5,
      "deletions": 33,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 5,
        "deletions": 33
      }
    ]
  },
  {
    "hash": "93b2204c915db171147d5b301a201728a137cbcd",
    "shortHash": "93b2204",
    "subject": "feat: simplify homepage hero and footer cards",
    "author": "enzo",
    "date": "2026-02-09T21:37:28-08:00",
    "stats": {
      "files": 1,
      "insertions": 5,
      "deletions": 33,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 5,
        "deletions": 33
      }
    ]
  },
  {
    "hash": "0812b7a6644934fff0986f607219a6aeadec6f67",
    "shortHash": "0812b7a",
    "subject": "Merge pull request #8 from enzo-prism/codex/improve-homepage-design-flow",
    "author": "enzo",
    "date": "2026-02-09T21:27:34-08:00",
    "stats": {
      "files": 1,
      "insertions": 69,
      "deletions": 33,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 69,
        "deletions": 33
      }
    ]
  },
  {
    "hash": "4caa17a848efcc6f4a11c07d20429b19f7a51acd",
    "shortHash": "4caa17a",
    "subject": "feat: improve homepage visual flow and hierarchy",
    "author": "enzo",
    "date": "2026-02-09T21:27:17-08:00",
    "stats": {
      "files": 1,
      "insertions": 69,
      "deletions": 33,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 69,
        "deletions": 33
      }
    ]
  },
  {
    "hash": "c178f20781dd6727c2b8b971d5d8182f605f4149",
    "shortHash": "c178f20",
    "subject": "Merge pull request #7 from enzo-prism/codex/redesign-homepage-for-visual-focus",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-09T21:21:38-08:00",
    "stats": {
      "files": 5,
      "insertions": 134,
      "deletions": 321,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Config"
    ],
    "summary": "Updated General updates, Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated core screens, shared interface pieces, and app setup.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Improves consistency across shared interface pieces. Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 88,
        "deletions": 321
      },
      {
        "path": "components/unicorn-home-scene.tsx",
        "additions": 19,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 21,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "f876931d18f1754abb3694e0e9280b04db84d94f",
    "shortHash": "f876931",
    "subject": "feat: redesign homepage with unicorn studio hero",
    "author": "enzo",
    "date": "2026-02-09T21:21:07-08:00",
    "stats": {
      "files": 5,
      "insertions": 134,
      "deletions": 321,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Config"
    ],
    "summary": "Added General updates, Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added core screens, shared interface pieces, and app setup.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Improves consistency across shared interface pieces. Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 88,
        "deletions": 321
      },
      {
        "path": "components/unicorn-home-scene.tsx",
        "additions": 19,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 21,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "957cef053f4b9c77cb560efb7e84dc68461f72ba",
    "shortHash": "957cef0",
    "subject": "Merge pull request #6 from enzo-prism/codex/redesign-homepage-for-animation",
    "body": "feat: redesign homepage hero around animation",
    "author": "enzo",
    "date": "2026-02-09T21:05:10-08:00",
    "stats": {
      "files": 1,
      "insertions": 66,
      "deletions": 39,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 66,
        "deletions": 39
      }
    ]
  },
  {
    "hash": "08d2a6c93933eb033fcae845e145963f74c315e6",
    "shortHash": "08d2a6c",
    "subject": "feat: redesign homepage hero around animation",
    "author": "enzo",
    "date": "2026-02-09T21:04:59-08:00",
    "stats": {
      "files": 1,
      "insertions": 66,
      "deletions": 39,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 66,
        "deletions": 39
      }
    ]
  },
  {
    "hash": "b8e614c2720c0eff7ddc67fb9566c825465739fd",
    "shortHash": "b8e614c",
    "subject": "Merge pull request #5 from enzo-prism/codex/use-animation-as-hero-section-background",
    "body": "feat: add animated hero background to homepage",
    "author": "enzo",
    "date": "2026-02-09T20:58:44-08:00",
    "stats": {
      "files": 2,
      "insertions": 160,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Components"
    ],
    "summary": "Updated Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated core screens and shared interface pieces.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Improves consistency across shared interface pieces. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 5,
        "deletions": 5
      },
      {
        "path": "components/HeroAnimationBackground.tsx",
        "additions": 155,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "e2793dd550e0c0beccd5f37e431f9394e6daedd4",
    "shortHash": "e2793dd",
    "subject": "feat: add animated hero background on homepage",
    "author": "enzo",
    "date": "2026-02-09T20:58:10-08:00",
    "stats": {
      "files": 2,
      "insertions": 160,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Components"
    ],
    "summary": "Added Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added core screens and shared interface pieces.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Improves consistency across shared interface pieces. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 5,
        "deletions": 5
      },
      {
        "path": "components/HeroAnimationBackground.tsx",
        "additions": 155,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "d4c1c12d978583149618ab6ecab73b02c133c362",
    "shortHash": "d4c1c12",
    "subject": "Merge pull request #4 from enzo-prism/codex/analyze-and-integrate-logo-assets",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-09T20:49:38-08:00",
    "stats": {
      "files": 4,
      "insertions": 92,
      "deletions": 19,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Updated General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated core screens, navigation, and sample data.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Made navigation easier to follow.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Improves discoverability of key areas. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 22,
        "deletions": 17
      },
      {
        "path": "components/navigation.tsx",
        "additions": 3,
        "deletions": 2
      },
      {
        "path": "lib/data/logo-assets.ts",
        "additions": 62,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "fa43f397f317c18f2b799cb39f5ac039e41de3b6",
    "shortHash": "fa43f39",
    "subject": "feat: integrate Cloudinary logo assets across app design",
    "author": "enzo",
    "date": "2026-02-09T20:49:22-08:00",
    "stats": {
      "files": 4,
      "insertions": 92,
      "deletions": 19,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added core screens, navigation, and sample data.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Made navigation easier to follow.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Improves discoverability of key areas. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 22,
        "deletions": 17
      },
      {
        "path": "components/navigation.tsx",
        "additions": 3,
        "deletions": 2
      },
      {
        "path": "lib/data/logo-assets.ts",
        "additions": 62,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "786f48932476324156a73da0fd1f5cb86ecad0cb",
    "shortHash": "786f489",
    "subject": "chore: regenerate commit log",
    "author": "enzo-prism",
    "date": "2026-02-08T21:37:06-08:00",
    "stats": {
      "files": 1,
      "insertions": 67,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Changelog",
      "Demo Data"
    ],
    "summary": "Updated Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/commit-log.ts",
        "additions": 67,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "5fd882b18e8bf16903024632956fd7809e555eca",
    "shortHash": "5fd882b",
    "subject": "chore: sync next-env route types",
    "author": "enzo-prism",
    "date": "2026-02-08T21:36:58-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": [
      {
        "path": "next-env.d.ts",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "32422279d6305c1253f46448cac3e2b032322992",
    "shortHash": "3242227",
    "subject": "chore: regenerate commit log",
    "author": "enzo-prism",
    "date": "2026-02-08T21:35:49-08:00",
    "stats": {
      "files": 1,
      "insertions": 67,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Changelog",
      "Demo Data"
    ],
    "summary": "Updated Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/commit-log.ts",
        "additions": 67,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "e34d7fc010bc51bd2aa3e8abb7dde2ad2ee54877",
    "shortHash": "e34d7fc",
    "subject": "docs: tidy changelog entry",
    "author": "enzo-prism",
    "date": "2026-02-08T21:35:42-08:00",
    "stats": {
      "files": 1,
      "insertions": 0,
      "deletions": 3,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 0,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "cae8246266b0ec67fa49561ca4586f6c6f4bb404",
    "shortHash": "cae8246",
    "subject": "chore: regenerate commit log",
    "author": "enzo-prism",
    "date": "2026-02-08T21:32:50-08:00",
    "stats": {
      "files": 1,
      "insertions": 568,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Changelog",
      "Demo Data"
    ],
    "summary": "Updated Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline and sample data.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/commit-log.ts",
        "additions": 568,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "6a1a0d876c1bebcae6a16593e8a7ac21c38e16fe",
    "shortHash": "6a1a0d8",
    "subject": "Merge pull request #2 from enzo-prism/codex/implement-web-app-updates-from-spec-uxn2b2",
    "body": "feat: membership & sponsor refresh, events page, badge and data updates",
    "author": "enzo",
    "date": "2026-02-08T19:22:38-08:00",
    "stats": {
      "files": 1,
      "insertions": 4,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 4,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "a104bf05f68a10048391d113fe7447ee2cdf8f41",
    "shortHash": "a104bf0",
    "subject": "Merge branch 'main' into codex/implement-web-app-updates-from-spec-uxn2b2",
    "author": "enzo",
    "date": "2026-02-08T19:22:05-08:00",
    "stats": {
      "files": 1,
      "insertions": 3,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 3,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "2109f8a61b478092277b74f5a88b5b2a3a5d9e61",
    "shortHash": "2109f8a",
    "subject": "docs: expand changelog entry",
    "author": "enzo",
    "date": "2026-02-08T19:20:37-08:00",
    "stats": {
      "files": 8,
      "insertions": 366,
      "deletions": 96,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Updated General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated core screens, shared interface pieces, and navigation.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Made navigation easier to follow.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Improves discoverability of key areas. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 6,
        "deletions": 0
      },
      {
        "path": "app/events/page.tsx",
        "additions": 78,
        "deletions": 0
      },
      {
        "path": "app/{how-it-works => membership}/page.tsx",
        "additions": 14,
        "deletions": 12
      },
      {
        "path": "app/page.tsx",
        "additions": 221,
        "deletions": 54
      },
      {
        "path": "components/badge.tsx",
        "additions": 19,
        "deletions": 13
      },
      {
        "path": "components/navigation.tsx",
        "additions": 17,
        "deletions": 9
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 6,
        "deletions": 3
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 5,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "f1de1608c31e08679c57cf9846e46e6f54605556",
    "shortHash": "f1de160",
    "subject": "Merge pull request #1 from enzo-prism/codex/implement-web-app-updates-from-spec",
    "body": "Codex-generated pull request",
    "author": "enzo",
    "date": "2026-02-08T19:09:04-08:00",
    "stats": {
      "files": 8,
      "insertions": 365,
      "deletions": 96,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Updated General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated core screens, shared interface pieces, and navigation.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Made navigation easier to follow.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Improves discoverability of key areas. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/events/page.tsx",
        "additions": 78,
        "deletions": 0
      },
      {
        "path": "app/{how-it-works => membership}/page.tsx",
        "additions": 14,
        "deletions": 12
      },
      {
        "path": "app/page.tsx",
        "additions": 221,
        "deletions": 54
      },
      {
        "path": "components/badge.tsx",
        "additions": 19,
        "deletions": 13
      },
      {
        "path": "components/navigation.tsx",
        "additions": 17,
        "deletions": 9
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 6,
        "deletions": 3
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 5,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "6976ed5e101745882cd6c7cc93ba162d482b6763",
    "shortHash": "6976ed5",
    "subject": "feat: refresh membership and sponsors",
    "author": "enzo",
    "date": "2026-02-08T19:08:14-08:00",
    "stats": {
      "files": 8,
      "insertions": 365,
      "deletions": 96,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added core screens, shared interface pieces, and navigation.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Made navigation easier to follow.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Improves discoverability of key areas. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/events/page.tsx",
        "additions": 78,
        "deletions": 0
      },
      {
        "path": "app/{how-it-works => membership}/page.tsx",
        "additions": 14,
        "deletions": 12
      },
      {
        "path": "app/page.tsx",
        "additions": 221,
        "deletions": 54
      },
      {
        "path": "components/badge.tsx",
        "additions": 19,
        "deletions": 13
      },
      {
        "path": "components/navigation.tsx",
        "additions": 17,
        "deletions": 9
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 6,
        "deletions": 3
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 5,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "b40474792cb08f59e2e37bb493406e36c6761f60",
    "shortHash": "b404747",
    "subject": "Add ICTSI Foundation banner",
    "author": "enzo-prism",
    "date": "2026-02-05T08:06:38-08:00",
    "stats": {
      "files": 23,
      "insertions": 374,
      "deletions": 27,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "docs",
      "scripts"
    ],
    "tags": [
      "Clubs",
      "App Pages",
      "Competitions",
      "Results Intake",
      "Rankings",
      "Recognition",
      "Search",
      "Components",
      "Docs",
      "Config",
      "Tooling"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Guides & notes, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Added club pages, core screens, and meet results.",
    "plainNotes": [
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Highlighted meet results and how to explore them.",
      "Refined the result submission and preview flow."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "README.md",
        "additions": 12,
        "deletions": 0
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 4,
        "deletions": 4
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 5,
        "deletions": 1
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 3,
        "deletions": 2
      },
      {
        "path": "app/data-portal/page.tsx",
        "additions": 18,
        "deletions": 11
      },
      {
        "path": "app/page.tsx",
        "additions": 18,
        "deletions": 0
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 8,
        "deletions": 6
      },
      {
        "path": "app/recognition/page.tsx",
        "additions": 2,
        "deletions": 2
      },
      {
        "path": "app/search/page.tsx",
        "additions": 2,
        "deletions": 1
      },
      {
        "path": "components/global-search.tsx",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "docs/TESTING.md",
        "additions": 48,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "playwright.config.ts",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 19,
        "deletions": 0
      },
      {
        "path": "scripts/test-flows.sh",
        "additions": 31,
        "deletions": 0
      },
      {
        "path": "tests/fixtures/results-intake.csv",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "tests/flows/a11y.ts",
        "additions": 18,
        "deletions": 0
      },
      {
        "path": "tests/flows/flow-athlete-search.spec.ts",
        "additions": 30,
        "deletions": 0
      },
      {
        "path": "tests/flows/flow-clubs.spec.ts",
        "additions": 24,
        "deletions": 0
      },
      {
        "path": "tests/flows/flow-competitions.spec.ts",
        "additions": 33,
        "deletions": 0
      },
      {
        "path": "tests/flows/flow-data-portal.spec.ts",
        "additions": 41,
        "deletions": 0
      },
      {
        "path": "tests/flows/flow-rankings.spec.ts",
        "additions": 28,
        "deletions": 0
      },
      {
        "path": "tests/flows/flow-recognition.spec.ts",
        "additions": 19,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "010846b7292b255ab34d642187c8ec4f3ff3c2a5",
    "shortHash": "010846b",
    "subject": "Simplify changelog language",
    "author": "enzo-prism",
    "date": "2026-02-03T13:48:20-08:00",
    "stats": {
      "files": 1,
      "insertions": 45,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "pnpm-lock.yaml",
        "additions": 45,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "61c9601e070618c11d9d1d32f7d207dec580838e",
    "shortHash": "61c9601",
    "subject": "Simplify changelog language",
    "author": "enzo-prism",
    "date": "2026-02-03T12:47:48-08:00",
    "stats": {
      "files": 5,
      "insertions": 786,
      "deletions": 774,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "data",
      "scripts"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Navigation",
      "Demo Data",
      "Tooling"
    ],
    "summary": "Updated Core screens, Shared interface, Sample data, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed update timeline, core screens, and navigation.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Made navigation easier to follow.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Improves discoverability of key areas.",
    "files": [
      {
        "path": "app/changelog/page.tsx",
        "additions": 74,
        "deletions": 94
      },
      {
        "path": "components/navigation.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 585,
        "deletions": 537
      },
      {
        "path": "scripts/generate-commit-log.mjs",
        "additions": 61,
        "deletions": 71
      },
      {
        "path": "scripts/generate-commit-log.ts",
        "additions": 65,
        "deletions": 71
      }
    ]
  },
  {
    "hash": "8af8c8244d2f4366a9fa2e317d9b37af262724c2",
    "shortHash": "8af8c82",
    "subject": "Add design test suite",
    "author": "enzo-prism",
    "date": "2026-02-03T11:53:59-08:00",
    "stats": {
      "files": 15,
      "insertions": 647,
      "deletions": 84,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "docs",
      "data",
      "scripts"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Search",
      "Components",
      "Navigation",
      "Docs",
      "Demo Data",
      "Config",
      "Tooling"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Guides & notes, Sample data, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Added update timeline, core screens, and finding people.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Made it quicker to find people and results.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Makes finding people and clubs faster. Keeps everyone aligned on progress.",
    "files": [
      {
        "path": ".gitignore",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "CLAUDE.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "Changelog.md",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "README.md",
        "additions": 11,
        "deletions": 1
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 245,
        "deletions": 76
      },
      {
        "path": "components/global-search.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/navigation.tsx",
        "additions": 4,
        "deletions": 4
      },
      {
        "path": "docs/STATUS.md",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 135,
        "deletions": 1
      },
      {
        "path": "package.json",
        "additions": 4,
        "deletions": 1
      },
      {
        "path": "playwright.config.ts",
        "additions": 43,
        "deletions": 0
      },
      {
        "path": "scripts/generate-commit-log.mjs",
        "additions": 61,
        "deletions": 0
      },
      {
        "path": "scripts/generate-commit-log.ts",
        "additions": 61,
        "deletions": 0
      },
      {
        "path": "scripts/test-design.sh",
        "additions": 31,
        "deletions": 0
      },
      {
        "path": "tests/design.spec.ts",
        "additions": 37,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "f0475160d0507ba2ee6f0a32c5f35c3782b0a430",
    "shortHash": "f047516",
    "subject": "Improve changelog design",
    "author": "enzo-prism",
    "date": "2026-02-03T11:21:05-08:00",
    "stats": {
      "files": 4,
      "insertions": 176,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "components",
      "data",
      "scripts"
    ],
    "tags": [
      "Navigation",
      "Changelog",
      "Demo Data",
      "Tooling"
    ],
    "summary": "Updated Shared interface, Sample data, Tools.",
    "notes": [
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Refreshed navigation, update timeline, and sample data.",
    "plainNotes": [
      "Made navigation easier to follow.",
      "Improved how updates are shared in plain language.",
      "Refreshed sample data for more realistic browsing.",
      "Improved internal tools for upkeep."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 107,
        "deletions": 2
      },
      {
        "path": "scripts/generate-commit-log.mjs",
        "additions": 34,
        "deletions": 1
      },
      {
        "path": "scripts/generate-commit-log.ts",
        "additions": 34,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "c2728a416fb10e342ae9b5ec09800316c14081e3",
    "shortHash": "c2728a4",
    "subject": "Update changelog documentation",
    "author": "enzo-prism",
    "date": "2026-02-03T11:10:31-08:00",
    "stats": {
      "files": 6,
      "insertions": 1034,
      "deletions": 54,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "docs",
      "data",
      "scripts"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Docs",
      "Demo Data",
      "Tooling"
    ],
    "summary": "Updated General updates, Core screens, Guides & notes, Sample data, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Refreshed update timeline, core screens, and guides & notes.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Added clearer guidance for teammates and stakeholders.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 34,
        "deletions": 21
      },
      {
        "path": "docs/STATUS.md",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 744,
        "deletions": 31
      },
      {
        "path": "scripts/generate-commit-log.mjs",
        "additions": 127,
        "deletions": 1
      },
      {
        "path": "scripts/generate-commit-log.ts",
        "additions": 127,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "5f193fc7815ae018db2ce82e77b217d48a5db473",
    "shortHash": "5f193fc",
    "subject": "Add commit-history changelog menu",
    "author": "enzo-prism",
    "date": "2026-02-03T10:54:09-08:00",
    "stats": {
      "files": 10,
      "insertions": 3487,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "docs",
      "data",
      "scripts"
    ],
    "tags": [
      "Changelog",
      "App Pages",
      "Navigation",
      "Docs",
      "Demo Data",
      "Config",
      "Tooling"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Guides & notes, Sample data, Tools.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Added update timeline, core screens, and navigation.",
    "plainNotes": [
      "Improved how updates are shared in plain language.",
      "Improved core screens and layouts.",
      "Made navigation easier to follow.",
      "Added clearer guidance for teammates and stakeholders."
    ],
    "plainImpact": "Keeps everyone aligned on progress. Improves discoverability of key areas.",
    "files": [
      {
        "path": "CLAUDE.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "Changelog.md",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "README.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/changelog/page.tsx",
        "additions": 171,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "docs/STATUS.md",
        "additions": 3,
        "deletions": 1
      },
      {
        "path": "lib/data/commit-log.ts",
        "additions": 3019,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 2,
        "deletions": 1
      },
      {
        "path": "scripts/generate-commit-log.mjs",
        "additions": 127,
        "deletions": 0
      },
      {
        "path": "scripts/generate-commit-log.ts",
        "additions": 154,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "3c002b51f80524c8d4fa271f2e8729f318eb6b3d",
    "shortHash": "3c002b5",
    "subject": "Add detailed docs for preview flow",
    "author": "enzo-prism",
    "date": "2026-02-03T10:46:37-08:00",
    "stats": {
      "files": 9,
      "insertions": 2058,
      "deletions": 9,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "docs"
    ],
    "tags": [
      "Results Intake",
      "App Pages",
      "Search",
      "Components",
      "Navigation",
      "Docs"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Guides & notes.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Updated guides so everyone stays aligned."
    ],
    "plainSummary": "Added result submissions, core screens, and finding people.",
    "plainNotes": [
      "Refined the result submission and preview flow.",
      "Improved core screens and layouts.",
      "Made it quicker to find people and results.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Makes finding people and clubs faster. Helps capture official results even without external feeds.",
    "files": [
      {
        "path": "CLAUDE.md",
        "additions": 9,
        "deletions": 0
      },
      {
        "path": "Changelog.md",
        "additions": 10,
        "deletions": 0
      },
      {
        "path": "DemoFlows.md",
        "additions": 15,
        "deletions": 0
      },
      {
        "path": "README.md",
        "additions": 15,
        "deletions": 0
      },
      {
        "path": "app/data-portal/page.tsx",
        "additions": 1827,
        "deletions": 0
      },
      {
        "path": "components/global-search.tsx",
        "additions": 12,
        "deletions": 1
      },
      {
        "path": "components/navigation.tsx",
        "additions": 11,
        "deletions": 8
      },
      {
        "path": "docs/STATUS.md",
        "additions": 42,
        "deletions": 0
      },
      {
        "path": "docs/research/results-intake.md",
        "additions": 117,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "ec56f06774e19f3c1bfbf187aee17069dfd1e5f9",
    "shortHash": "ec56f06",
    "subject": "Add results pending callout",
    "author": "enzo-prism",
    "date": "2026-02-02T19:33:52-08:00",
    "stats": {
      "files": 11,
      "insertions": 712,
      "deletions": 684,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "data"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Competitions",
      "Rankings",
      "Search",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Highlighted meet results and how to explore them."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 5,
        "deletions": 0
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 229,
        "deletions": 248
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 30,
        "deletions": 12
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 19,
        "deletions": 8
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 48,
        "deletions": 29
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 85,
        "deletions": 125
      },
      {
        "path": "app/search/page.tsx",
        "additions": 251,
        "deletions": 12
      },
      {
        "path": "app/search/search-client.tsx",
        "additions": 0,
        "deletions": 236
      },
      {
        "path": "app/sponsors/page.tsx",
        "additions": 0,
        "deletions": 2
      },
      {
        "path": "lib/data/competitions.ts",
        "additions": 35,
        "deletions": 2
      },
      {
        "path": "lib/data/sponsors.ts",
        "additions": 10,
        "deletions": 10
      }
    ]
  },
  {
    "hash": "359ea13b951580650daa0b7b659fb35ead0a0fbd",
    "shortHash": "359ea13",
    "subject": "fix: wrap search page in suspense",
    "author": "enzo-prism",
    "date": "2026-01-31T10:57:47-08:00",
    "stats": {
      "files": 3,
      "insertions": 248,
      "deletions": 231,
      "summary": ""
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "Search",
      "App Pages"
    ],
    "summary": "Fixed General updates, Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed finding people and core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Made it quicker to find people and results.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes finding people and clubs faster. Makes core pages feel more complete.",
    "files": [
      {
        "path": "Changelog.md",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "app/search/page.tsx",
        "additions": 11,
        "deletions": 231
      },
      {
        "path": "app/search/search-client.tsx",
        "additions": 236,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "b443b3c3e7de519adbc702b972d3eff6e0000343",
    "shortHash": "b443b3c",
    "subject": "feat: enhance demo flows and changelog",
    "author": "enzo-prism",
    "date": "2026-01-31T10:37:25-08:00",
    "stats": {
      "files": 24,
      "insertions": 1957,
      "deletions": 230,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Rankings",
      "Recognition",
      "Search",
      "Components",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "AGENTS.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "Changelog.md",
        "additions": 43,
        "deletions": 0
      },
      {
        "path": "DemoFlows.md",
        "additions": 125,
        "deletions": 0
      },
      {
        "path": "README.md",
        "additions": 4,
        "deletions": 0
      },
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 171,
        "deletions": 8
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 14,
        "deletions": 3
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 92,
        "deletions": 3
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 31,
        "deletions": 0
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 37,
        "deletions": 0
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 138,
        "deletions": 2
      },
      {
        "path": "app/page.tsx",
        "additions": 39,
        "deletions": 56
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 194,
        "deletions": 94
      },
      {
        "path": "app/recognition/page.tsx",
        "additions": 116,
        "deletions": 0
      },
      {
        "path": "app/search/page.tsx",
        "additions": 236,
        "deletions": 0
      },
      {
        "path": "components/badge.tsx",
        "additions": 6,
        "deletions": 0
      },
      {
        "path": "components/global-search.tsx",
        "additions": 69,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 28,
        "deletions": 3
      },
      {
        "path": "lib/data/athletes.ts",
        "additions": 260,
        "deletions": 60
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 25,
        "deletions": 0
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 36,
        "deletions": 0
      },
      {
        "path": "lib/data/competitions.ts",
        "additions": 90,
        "deletions": 0
      },
      {
        "path": "lib/data/rankings.ts",
        "additions": 185,
        "deletions": 0
      },
      {
        "path": "lib/data/validate.ts",
        "additions": 13,
        "deletions": 0
      },
      {
        "path": "next-env.d.ts",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "ee98efbd380b10a0cb253a6eafc0378d18ad4b08",
    "shortHash": "ee98efb",
    "subject": "feat: enrich athlete sample data",
    "author": "enzo-prism",
    "date": "2025-12-19T19:50:15-08:00",
    "stats": {
      "files": 1,
      "insertions": 788,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Added Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added sample data.",
    "plainNotes": [
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/athletes.ts",
        "additions": 788,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "e2b023d840dabfae5b7363705efb6fd012d30067",
    "shortHash": "e2b023d",
    "subject": "fix: make profile preview switcher usable on mobile",
    "author": "enzo-prism",
    "date": "2025-12-17T09:35:40-08:00",
    "stats": {
      "files": 1,
      "insertions": 65,
      "deletions": 20,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Accounts",
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed profiles & sign-up and core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Smoothed sign-up and profile steps.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Smooths sign-up and profile flows. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/profile/page.tsx",
        "additions": 65,
        "deletions": 20
      }
    ]
  },
  {
    "hash": "f39ebf17ecdc485eaeabbd2a37256ff38edcfee7",
    "shortHash": "f39ebf1",
    "subject": "refactor: simplify athletes page filters",
    "author": "enzo-prism",
    "date": "2025-12-16T21:27:41-08:00",
    "stats": {
      "files": 1,
      "insertions": 102,
      "deletions": 160,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Athletes"
    ],
    "summary": "Improved Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Improved athlete profiles.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse."
    ],
    "plainImpact": "Makes athlete profiles clearer and easier to share.",
    "files": [
      {
        "path": "app/athletes/page.tsx",
        "additions": 102,
        "deletions": 160
      }
    ]
  },
  {
    "hash": "75fe671235f4e847d2ef866a7ccc2ddd28463ff3",
    "shortHash": "75fe671",
    "subject": "refactor: use lucide icons in mobile nav",
    "author": "enzo-prism",
    "date": "2025-12-16T21:06:35-08:00",
    "stats": {
      "files": 1,
      "insertions": 13,
      "deletions": 11,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Improved Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Improved navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 13,
        "deletions": 11
      }
    ]
  },
  {
    "hash": "f1738d2f71ecb14f351ce53fcc6c06275228fbfe",
    "shortHash": "f1738d2",
    "subject": "fix: use Google logo on signup",
    "author": "enzo-prism",
    "date": "2025-12-16T21:02:08-08:00",
    "stats": {
      "files": 1,
      "insertions": 18,
      "deletions": 3,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Components"
    ],
    "summary": "Fixed Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Fixed shared interface pieces.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "components/signup/SignupPanel.tsx",
        "additions": 18,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "0298357be510e4b13d43bf09727939a0bd13a6fd",
    "shortHash": "0298357",
    "subject": "fix: prevent badge overflow in cards",
    "author": "enzo-prism",
    "date": "2025-12-16T21:00:11-08:00",
    "stats": {
      "files": 2,
      "insertions": 11,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Components"
    ],
    "summary": "Fixed Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Fixed shared interface pieces.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "components/badge.tsx",
        "additions": 6,
        "deletions": 1
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 5,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "cc22eb41164bd16884a9020a75b638d0ae69ff57",
    "shortHash": "cc22eb4",
    "subject": "feat: add profile avatar placeholders",
    "author": "enzo-prism",
    "date": "2025-12-16T20:55:49-08:00",
    "stats": {
      "files": 4,
      "insertions": 98,
      "deletions": 8,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Athletes",
      "Coaches",
      "App Pages",
      "Components"
    ],
    "summary": "Added Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added athlete profiles, coach profiles, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Made coaching details easier to understand.",
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Makes athlete profiles clearer and easier to share. Helps athletes find qualified coaching.",
    "files": [
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 8,
        "deletions": 4
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 8,
        "deletions": 4
      },
      {
        "path": "components/ProfileAvatar.tsx",
        "additions": 35,
        "deletions": 0
      },
      {
        "path": "components/ui/avatar.tsx",
        "additions": 47,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "5817a90a21dc2ddf6e119c732ce030369b80a6d1",
    "shortHash": "5817a90",
    "subject": "fix: make how-to cards clickable",
    "author": "enzo-prism",
    "date": "2025-12-16T20:48:26-08:00",
    "stats": {
      "files": 1,
      "insertions": 31,
      "deletions": 27,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 31,
        "deletions": 27
      }
    ]
  },
  {
    "hash": "c55c4fad1313e73afbac5f9227db828d863c57fe",
    "shortHash": "c55c4fa",
    "subject": "fix: reorder homepage category cards",
    "author": "enzo-prism",
    "date": "2025-12-16T20:47:08-08:00",
    "stats": {
      "files": 1,
      "insertions": 6,
      "deletions": 6,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 6,
        "deletions": 6
      }
    ]
  },
  {
    "hash": "f2e88e57d3b8d88ac3c5f87518055e4777256529",
    "shortHash": "f2e88e5",
    "subject": "refactor: migrate UI to shadcn components",
    "author": "enzo-prism",
    "date": "2025-12-16T20:42:47-08:00",
    "stats": {
      "files": 25,
      "insertions": 1667,
      "deletions": 709,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Accounts",
      "Rankings",
      "Components",
      "Navigation"
    ],
    "summary": "Improved Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Improved athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 5,
        "deletions": 5
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 174,
        "deletions": 155
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 20,
        "deletions": 28
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 5,
        "deletions": 4
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 9,
        "deletions": 9
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 22,
        "deletions": 17
      },
      {
        "path": "app/page.tsx",
        "additions": 76,
        "deletions": 85
      },
      {
        "path": "app/profile/page.tsx",
        "additions": 134,
        "deletions": 109
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 74,
        "deletions": 64
      },
      {
        "path": "app/sponsors/[id]/page.tsx",
        "additions": 10,
        "deletions": 11
      },
      {
        "path": "app/sponsors/page.tsx",
        "additions": 2,
        "deletions": 2
      },
      {
        "path": "components/badge.tsx",
        "additions": 10,
        "deletions": 12
      },
      {
        "path": "components/navigation.tsx",
        "additions": 107,
        "deletions": 110
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 14,
        "deletions": 9
      },
      {
        "path": "components/signup/SignupPanel.tsx",
        "additions": 80,
        "deletions": 89
      },
      {
        "path": "components/ui/badge.tsx",
        "additions": 46,
        "deletions": 0
      },
      {
        "path": "components/ui/button.tsx",
        "additions": 62,
        "deletions": 0
      },
      {
        "path": "components/ui/card.tsx",
        "additions": 92,
        "deletions": 0
      },
      {
        "path": "components/ui/dropdown-menu.tsx",
        "additions": 257,
        "deletions": 0
      },
      {
        "path": "components/ui/input.tsx",
        "additions": 21,
        "deletions": 0
      },
      {
        "path": "components/ui/label.tsx",
        "additions": 24,
        "deletions": 0
      },
      {
        "path": "components/ui/select.tsx",
        "additions": 190,
        "deletions": 0
      },
      {
        "path": "components/ui/separator.tsx",
        "additions": 28,
        "deletions": 0
      },
      {
        "path": "components/ui/sheet.tsx",
        "additions": 139,
        "deletions": 0
      },
      {
        "path": "components/ui/tabs.tsx",
        "additions": 66,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "ca9d3fd081ca7ce2ad84feb5f7f5b79b91eec9e3",
    "shortHash": "ca9d3fd",
    "subject": "feat: add social signup UI and simplify pages",
    "author": "enzo-prism",
    "date": "2025-12-16T19:24:54-08:00",
    "stats": {
      "files": 6,
      "insertions": 375,
      "deletions": 104,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Athletes",
      "Coaches",
      "App Pages",
      "Accounts",
      "Navigation",
      "Components"
    ],
    "summary": "Added Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added athlete profiles, coach profiles, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Made coaching details easier to understand.",
      "Improved core screens and layouts.",
      "Smoothed sign-up and profile steps."
    ],
    "plainImpact": "Makes athlete profiles clearer and easier to share. Helps athletes find qualified coaching.",
    "files": [
      {
        "path": "app/athletes/page.tsx",
        "additions": 1,
        "deletions": 6
      },
      {
        "path": "app/coaches/page.tsx",
        "additions": 4,
        "deletions": 5
      },
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 14
      },
      {
        "path": "app/signup/page.tsx",
        "additions": 2,
        "deletions": 77
      },
      {
        "path": "components/navigation.tsx",
        "additions": 2,
        "deletions": 2
      },
      {
        "path": "components/signup/SignupPanel.tsx",
        "additions": 365,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "5bcb2620ea5355a67c6efba8e70f8d2e9310b199",
    "shortHash": "5bcb262",
    "subject": "feat: add Gemini generated image to homepage bottom section",
    "author": "enzo-prism",
    "date": "2025-12-08T18:54:14-08:00",
    "stats": {
      "files": 1,
      "insertions": 12,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 12,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "8e54c69d76f3bd0836bbb0badb4d4ec0f3e14a8b",
    "shortHash": "8e54c69",
    "subject": "feat: add fade-in and slide-up animations to hero section",
    "author": "enzo-prism",
    "date": "2025-12-08T18:23:28-08:00",
    "stats": {
      "files": 2,
      "insertions": 29,
      "deletions": 6,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/globals.css",
        "additions": 23,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 6,
        "deletions": 6
      }
    ]
  },
  {
    "hash": "8cd1e3b77dcaccf6a82436c31fecb49b447897f9",
    "shortHash": "8cd1e3b",
    "subject": "style: replace emojis with flat modern lucide icons in badges",
    "author": "enzo-prism",
    "date": "2025-12-08T18:06:36-08:00",
    "stats": {
      "files": 1,
      "insertions": 32,
      "deletions": 18,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Components"
    ],
    "summary": "Polished Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Polished shared interface pieces.",
    "plainNotes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "components/badge.tsx",
        "additions": 32,
        "deletions": 18
      }
    ]
  },
  {
    "hash": "d61c851ac1541fbb87b456581174a0c6e0b4a1b9",
    "shortHash": "d61c851",
    "subject": "feat: implement badge system with custom icons for coaches and sponsors",
    "author": "enzo-prism",
    "date": "2025-12-08T18:01:01-08:00",
    "stats": {
      "files": 4,
      "insertions": 58,
      "deletions": 17,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Coaches",
      "App Pages",
      "Components"
    ],
    "summary": "Added Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added coach profiles, core screens, and shared interface pieces.",
    "plainNotes": [
      "Made coaching details easier to understand.",
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Helps athletes find qualified coaching. Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 2,
        "deletions": 4
      },
      {
        "path": "app/sponsors/[id]/page.tsx",
        "additions": 2,
        "deletions": 7
      },
      {
        "path": "components/badge.tsx",
        "additions": 52,
        "deletions": 0
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 2,
        "deletions": 6
      }
    ]
  },
  {
    "hash": "a7d4a7541f8679dff08e8f8ff634f773525a10b7",
    "shortHash": "a7d4a75",
    "subject": "feat: add avatar headshots and weekly schedule to club pages",
    "body": "- Add initials-based Avatar component with deterministic colors\n- Add WeeklySchedule component with responsive design (grid/list)\n- Display practice schedules with AM/PM times and session type colors\n- Add sample schedule data for all 3 clubs\n- Update roster sections to show avatar headshots\n- Add CLAUDE.md with project documentation\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>",
    "author": "enzo-prism",
    "date": "2025-12-08T17:48:28-08:00",
    "stats": {
      "files": 6,
      "insertions": 287,
      "deletions": 20,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data"
    ],
    "tags": [
      "Clubs",
      "App Pages",
      "Components",
      "Demo Data"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added club pages, core screens, and shared interface pieces.",
    "plainNotes": [
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "CLAUDE.md",
        "additions": 63,
        "deletions": 0
      },
      {
        "path": "README.md",
        "additions": 6,
        "deletions": 5
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 29,
        "deletions": 15
      },
      {
        "path": "components/avatar.tsx",
        "additions": 45,
        "deletions": 0
      },
      {
        "path": "components/weekly-schedule.tsx",
        "additions": 109,
        "deletions": 0
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 35,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "e0d67f8c4f368da131a4aaeba31218cd5e9aefaa",
    "shortHash": "e0d67f8",
    "subject": "style: align how-it-works buttons",
    "author": "enzo-prism",
    "date": "2025-12-07T08:25:14-08:00",
    "stats": {
      "files": 1,
      "insertions": 4,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Polished Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Polished core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 4,
        "deletions": 4
      }
    ]
  },
  {
    "hash": "510b7cc6c38fc17e89e8aefcff406ad1c16debdf",
    "shortHash": "510b7cc",
    "subject": "style: add hover motion to hero badge",
    "author": "enzo-prism",
    "date": "2025-12-07T08:22:41-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "7af6a5dcf2e6dddfde110e24fb4600e8f3f66c4f",
    "shortHash": "7af6a5d",
    "subject": "chore: enlarge hero badge to larger minimum size",
    "author": "enzo-prism",
    "date": "2025-12-07T08:22:08-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 2,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 2,
        "deletions": 2
      }
    ]
  },
  {
    "hash": "0905a79358cb8233dcedd89a368560c93a041527",
    "shortHash": "0905a79",
    "subject": "chore: enlarge hero partner badge and remove label",
    "author": "enzo-prism",
    "date": "2025-12-07T08:21:43-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 3,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 2,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "6c0f8c2a14dbf2dc7e43308c541685b1fa88adef",
    "shortHash": "6c0f8c2",
    "subject": "feat: add POC partner badge to hero",
    "author": "enzo-prism",
    "date": "2025-12-07T08:21:16-08:00",
    "stats": {
      "files": 1,
      "insertions": 9,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 9,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "78cf7ad2f49d64fad421c44196cdfdaf07c6fd36",
    "shortHash": "78cf7ad",
    "subject": "feat: add coach and club links to how it works search step",
    "author": "enzo-prism",
    "date": "2025-12-07T08:18:43-08:00",
    "stats": {
      "files": 1,
      "insertions": 15,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 15,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "ac28c75f523575ba0c019a42b1b9efbd56ec7162",
    "shortHash": "ac28c75",
    "subject": "feat: add signup link to how it works step",
    "author": "enzo-prism",
    "date": "2025-12-07T08:18:08-08:00",
    "stats": {
      "files": 1,
      "insertions": 9,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 9,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "4178eedec0e833840c6999de2fecf89596482729",
    "shortHash": "4178eed",
    "subject": "feat: show live counts in home category tiles",
    "author": "enzo-prism",
    "date": "2025-12-07T08:17:33-08:00",
    "stats": {
      "files": 1,
      "insertions": 6,
      "deletions": 3,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 6,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "4fee8d1b06acd16eef82bb84c465775dec5f6650",
    "shortHash": "4fee8d1",
    "subject": "feat: add learn more link to how it works section",
    "author": "enzo-prism",
    "date": "2025-12-07T08:16:13-08:00",
    "stats": {
      "files": 1,
      "insertions": 6,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 6,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "8493b3ce768ed0adc5e3a558259b26a8f39281ca",
    "shortHash": "8493b3c",
    "subject": "chore: remove how it works hero button",
    "author": "enzo-prism",
    "date": "2025-12-07T08:15:38-08:00",
    "stats": {
      "files": 1,
      "insertions": 0,
      "deletions": 6,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 0,
        "deletions": 6
      }
    ]
  },
  {
    "hash": "77d88242305449947567677f94e26fe66f3194b5",
    "shortHash": "77d8824",
    "subject": "feat: add how it works steps to homepage",
    "author": "enzo-prism",
    "date": "2025-12-07T08:15:09-08:00",
    "stats": {
      "files": 1,
      "insertions": 29,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 29,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "67640ffc5174157a0f102f556edb45213b37ffa9",
    "shortHash": "67640ff",
    "subject": "chore: add home nav link and update coach CTA copy",
    "author": "enzo-prism",
    "date": "2025-12-07T08:13:17-08:00",
    "stats": {
      "files": 2,
      "insertions": 2,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Navigation"
    ],
    "summary": "Added Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added core screens and navigation.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/navigation.tsx",
        "additions": 1,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "b1b8f0026b9cf1b3f545a952381371fe7f953789",
    "shortHash": "b1b8f00",
    "subject": "fix: avoid toSummary ref error in athlete data",
    "author": "enzo-prism",
    "date": "2025-12-07T08:11:14-08:00",
    "stats": {
      "files": 1,
      "insertions": 25,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Fixed Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Fixed sample data.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/athletes.ts",
        "additions": 25,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "cadfb89d7d307336f082de12cac439d4b9a60ed2",
    "shortHash": "cadfb89",
    "subject": "fix: unwrap params and simplify nav",
    "author": "enzo-prism",
    "date": "2025-12-07T08:09:12-08:00",
    "stats": {
      "files": 8,
      "insertions": 23,
      "deletions": 22,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "data"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Navigation",
      "Demo Data"
    ],
    "summary": "Fixed Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Fixed athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes competition results easier to find after a meet. Makes athlete profiles clearer and easier to share.",
    "files": [
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 4,
        "deletions": 3
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 4,
        "deletions": 2
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 4,
        "deletions": 2
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 4,
        "deletions": 2
      },
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 8
      },
      {
        "path": "app/sponsors/[id]/page.tsx",
        "additions": 4,
        "deletions": 2
      },
      {
        "path": "components/navigation.tsx",
        "additions": 0,
        "deletions": 3
      },
      {
        "path": "lib/data/utils.ts",
        "additions": 2,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "a3b79e98982da09cc6c5bf0f68c463fc8bfc4571",
    "shortHash": "a3b79e9",
    "subject": "chore: replace sample data with new club/coach/athlete JSON",
    "author": "enzo-prism",
    "date": "2025-12-06T09:57:27-08:00",
    "stats": {
      "files": 4,
      "insertions": 456,
      "deletions": 1197,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Updated Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated sample data.",
    "plainNotes": [
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/athletes.ts",
        "additions": 302,
        "deletions": 304
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 72,
        "deletions": 123
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 81,
        "deletions": 84
      },
      {
        "path": "lib/data/legacy-athlete-records.ts",
        "additions": 1,
        "deletions": 686
      }
    ]
  },
  {
    "hash": "ce1c6a528d577300aec74ed1e28677a157d4d9c6",
    "shortHash": "ce1c6a5",
    "subject": "fix: render full coach profiles and correct athlete links",
    "author": "enzo-prism",
    "date": "2025-12-06T09:23:52-08:00",
    "stats": {
      "files": 1,
      "insertions": 34,
      "deletions": 17,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Coaches",
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed coach profiles and core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Made coaching details easier to understand.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Helps athletes find qualified coaching. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 34,
        "deletions": 17
      }
    ]
  },
  {
    "hash": "c0ee83344181d2083776d0f5137211957772834c",
    "shortHash": "c0ee833",
    "subject": "chore: remove legacy stub athletes and rely on rich sample profiles",
    "author": "enzo-prism",
    "date": "2025-12-06T09:19:32-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 28,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Updated Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Updated sample data.",
    "plainNotes": [
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/athletes.ts",
        "additions": 1,
        "deletions": 28
      }
    ]
  },
  {
    "hash": "30b29b0dbe9f8e46d24badcb7224e7696c4b0fd2",
    "shortHash": "30b29b0",
    "subject": "feat: enrich sample athlete and coach data with full profiles",
    "author": "enzo-prism",
    "date": "2025-12-06T09:18:40-08:00",
    "stats": {
      "files": 2,
      "insertions": 127,
      "deletions": 8,
      "summary": ""
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "Added Sample data.",
    "notes": [
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added sample data.",
    "plainNotes": [
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "lib/data/athletes.ts",
        "additions": 93,
        "deletions": 0
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 34,
        "deletions": 8
      }
    ]
  },
  {
    "hash": "d455d05fd59768fdb0fedbd4499357f01f38f423",
    "shortHash": "d455d05",
    "subject": "fix: make clubs page client for search state",
    "author": "enzo-prism",
    "date": "2025-12-06T08:00:17-08:00",
    "stats": {
      "files": 1,
      "insertions": 3,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Clubs",
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed club pages and core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/clubs/page.tsx",
        "additions": 3,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "652f8c399ace6210bf5d7ea6332bc245e1c0a92a",
    "shortHash": "652f8c3",
    "subject": "feat: add minimal club search bar",
    "author": "enzo-prism",
    "date": "2025-12-06T07:59:20-08:00",
    "stats": {
      "files": 1,
      "insertions": 36,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Clubs",
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added club pages and core screens.",
    "plainNotes": [
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/clubs/page.tsx",
        "additions": 36,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "6106970de81ae6d20252448e9b13cf31bde3b838",
    "shortHash": "6106970",
    "subject": "chore: trim mobile bottom nav to home/clubs/coaches",
    "author": "enzo-prism",
    "date": "2025-12-06T07:57:18-08:00",
    "stats": {
      "files": 1,
      "insertions": 0,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 0,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "5b4190cc8bbafb03f3bf16e16287408e2303ec49",
    "shortHash": "5b4190c",
    "subject": "chore: simplify mobile bottom nav to home/clubs/coaches/athletes",
    "author": "enzo-prism",
    "date": "2025-12-06T07:55:49-08:00",
    "stats": {
      "files": 1,
      "insertions": 2,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 2,
        "deletions": 4
      }
    ]
  },
  {
    "hash": "4b186f50eec068c6512910e49cf437057b69a6bc",
    "shortHash": "4b186f5",
    "subject": "chore: ensure mobile nav uses emoji-only tabs",
    "author": "enzo-prism",
    "date": "2025-12-06T07:53:30-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "3574c533f781b702740a6b6413921d94722f44b6",
    "shortHash": "3574c53",
    "subject": "chore: update mobile bottom nav emojis",
    "author": "enzo-prism",
    "date": "2025-12-06T07:52:49-08:00",
    "stats": {
      "files": 1,
      "insertions": 9,
      "deletions": 8,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 9,
        "deletions": 8
      }
    ]
  },
  {
    "hash": "e3e6e6c4d9a8dfee861800ae7739fa53ac638c14",
    "shortHash": "e3e6e6c",
    "subject": "chore: ensure pages reset scroll to top on navigation",
    "author": "enzo-prism",
    "date": "2025-12-06T07:50:40-08:00",
    "stats": {
      "files": 2,
      "insertions": 16,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Components"
    ],
    "summary": "Updated Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated core screens and shared interface pieces.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency."
    ],
    "plainImpact": "Improves consistency across shared interface pieces. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/layout.tsx",
        "additions": 2,
        "deletions": 0
      },
      {
        "path": "components/scroll-reset.tsx",
        "additions": 14,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "7957d31c5d5b49ca11398c6bb6fcfef459e37119",
    "shortHash": "7957d31",
    "subject": "chore: update mobile bottom nav to clubs/coaches/athletes",
    "author": "enzo-prism",
    "date": "2025-12-06T07:49:52-08:00",
    "stats": {
      "files": 1,
      "insertions": 4,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 4,
        "deletions": 4
      }
    ]
  },
  {
    "hash": "de49d3cede1dc0fe3861e99d79107057bd60f8f6",
    "shortHash": "de49d3c",
    "subject": "feat: show athlete events in club roster",
    "author": "enzo-prism",
    "date": "2025-12-06T07:47:23-08:00",
    "stats": {
      "files": 1,
      "insertions": 13,
      "deletions": 13,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Clubs",
      "App Pages"
    ],
    "summary": "Added Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Added club pages and core screens.",
    "plainNotes": [
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 13,
        "deletions": 13
      }
    ]
  },
  {
    "hash": "247154634ab9b87252a9e4ee45b7b64e596f0b31",
    "shortHash": "2471546",
    "subject": "feat: add practice location map section to club pages",
    "author": "enzo-prism",
    "date": "2025-12-06T07:46:26-08:00",
    "stats": {
      "files": 3,
      "insertions": 108,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "data"
    ],
    "tags": [
      "Clubs",
      "App Pages",
      "Components",
      "Demo Data"
    ],
    "summary": "Added Core screens, Shared interface, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added club pages, core screens, and shared interface pieces.",
    "plainNotes": [
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 16,
        "deletions": 0
      },
      {
        "path": "components/map-embed.tsx",
        "additions": 48,
        "deletions": 0
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 44,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "3bc599f6c688a310e42109e19e482071be889c30",
    "shortHash": "3bc599f",
    "subject": "feat: add structured contact section to club pages",
    "author": "enzo-prism",
    "date": "2025-12-06T07:44:18-08:00",
    "stats": {
      "files": 2,
      "insertions": 120,
      "deletions": 7,
      "summary": ""
    },
    "areas": [
      "app",
      "data"
    ],
    "tags": [
      "Clubs",
      "App Pages",
      "Demo Data"
    ],
    "summary": "Added Core screens, Sample data.",
    "notes": [
      "Updated core screens and key flows.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added club pages, core screens, and sample data.",
    "plainNotes": [
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Refreshed sample data for more realistic browsing."
    ],
    "plainImpact": "Helps families evaluate clubs and training options. Makes the demo feel more complete and realistic.",
    "files": [
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 62,
        "deletions": 7
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 58,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "e645577ad79fb09168f0297aed79943108a10750",
    "shortHash": "e645577",
    "subject": "chore: tweak hero headline",
    "author": "enzo-prism",
    "date": "2025-12-06T07:39:20-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "dc78194a0d4123eec674c3f493f9b2a0282de78e",
    "shortHash": "dc78194",
    "subject": "chore: update hero messaging",
    "author": "enzo-prism",
    "date": "2025-12-06T07:38:43-08:00",
    "stats": {
      "files": 1,
      "insertions": 1,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 1,
        "deletions": 4
      }
    ]
  },
  {
    "hash": "7e7a3470df7572484fd63513cbc730e4153a0cb8",
    "shortHash": "7e7a347",
    "subject": "chore: update hero eyebrow text",
    "author": "enzo-prism",
    "date": "2025-12-06T07:36:32-08:00",
    "stats": {
      "files": 1,
      "insertions": 3,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Updated Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Updated core screens.",
    "plainNotes": [
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 3,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "efc6b570b644cd1fffc58926e7ea392f6ebbe99a",
    "shortHash": "efc6b57",
    "subject": "chore: remove emoji from profile nav button",
    "author": "enzo-prism",
    "date": "2025-12-06T07:36:00-08:00",
    "stats": {
      "files": 1,
      "insertions": 0,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 0,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "0c684ae34364aff30527a4f4d4ada6a94be62b33",
    "shortHash": "0c684ae",
    "subject": "chore: remove emoji from signup nav button",
    "author": "enzo-prism",
    "date": "2025-12-06T07:35:28-08:00",
    "stats": {
      "files": 1,
      "insertions": 0,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "Updated Shared interface.",
    "notes": [
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas.",
    "files": [
      {
        "path": "components/navigation.tsx",
        "additions": 0,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "4953fb3ad5d7123edf63ebe58d0d81f600baeeae",
    "shortHash": "4953fb3",
    "subject": "feat: simplify athletes filters and refine hero/video layout",
    "author": "enzo-prism",
    "date": "2025-12-06T07:34:55-08:00",
    "stats": {
      "files": 3,
      "insertions": 201,
      "deletions": 170,
      "summary": ""
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "Athletes",
      "App Pages",
      "Navigation"
    ],
    "summary": "Added Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added athlete profiles, core screens, and navigation.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved core screens and layouts.",
      "Made navigation easier to follow."
    ],
    "plainImpact": "Makes athlete profiles clearer and easier to share. Improves discoverability of key areas.",
    "files": [
      {
        "path": "app/athletes/page.tsx",
        "additions": 168,
        "deletions": 145
      },
      {
        "path": "app/page.tsx",
        "additions": 27,
        "deletions": 22
      },
      {
        "path": "components/navigation.tsx",
        "additions": 6,
        "deletions": 3
      }
    ]
  },
  {
    "hash": "23e991d6420e09cf22aa20167bc49d0010227b6b",
    "shortHash": "23e991d",
    "subject": "chore: bump next/react to patched RSC versions",
    "author": "enzo-prism",
    "date": "2025-12-06T07:17:51-08:00",
    "stats": {
      "files": 2,
      "insertions": 6863,
      "deletions": 890,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "package.json",
        "additions": 3,
        "deletions": 3
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 6860,
        "deletions": 887
      }
    ]
  },
  {
    "hash": "9fbf51e96ae14ec25fd92ae75f4212b2f8ebd601",
    "shortHash": "9fbf51e",
    "subject": "chore: sync main changes to project",
    "body": "Update project files and assets from main branch\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-06T15:03:36Z",
    "stats": {
      "files": 2,
      "insertions": 337,
      "deletions": 6310,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "package.json",
        "additions": 2,
        "deletions": 2
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 335,
        "deletions": 6308
      }
    ]
  },
  {
    "hash": "e1e860549ffcb7e35940128550569a90dbacf24f",
    "shortHash": "e1e8605",
    "subject": "chore: whitelist esbuild build script for pnpm",
    "author": "enzo-prism",
    "date": "2025-12-06T07:01:23-08:00",
    "stats": {
      "files": 1,
      "insertions": 6,
      "deletions": 1,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "package.json",
        "additions": 6,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "636cfd8d4eb492f7b682638252004a681f2af8ab",
    "shortHash": "636cfd8",
    "subject": "chore: bump typescript to 5.9.3",
    "author": "enzo-prism",
    "date": "2025-12-06T06:57:09-08:00",
    "stats": {
      "files": 2,
      "insertions": 60,
      "deletions": 60,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "package.json",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 59,
        "deletions": 59
      }
    ]
  },
  {
    "hash": "1b4aa0c4f6a6bbb824c30f1655a1d31a195971d0",
    "shortHash": "1b4aa0c",
    "subject": "feat: add hero background video and nav emoji mapping",
    "author": "enzo-prism",
    "date": "2025-12-06T06:50:38-08:00",
    "stats": {
      "files": 5,
      "insertions": 83,
      "deletions": 26,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "lib",
      "other"
    ],
    "tags": [
      "App Pages",
      "Components",
      "Navigation"
    ],
    "summary": "Added Core screens, Shared interface, Behind the scenes, General updates.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added core screens, shared interface pieces, and navigation.",
    "plainNotes": [
      "Improved core screens and layouts.",
      "Refined shared UI pieces for consistency.",
      "Made navigation easier to follow."
    ],
    "plainImpact": "Improves discoverability of key areas. Improves consistency across shared interface pieces.",
    "files": [
      {
        "path": "app/page.tsx",
        "additions": 41,
        "deletions": 23
      },
      {
        "path": "components/background-video.tsx",
        "additions": 22,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 16,
        "deletions": 2
      },
      {
        "path": "lib/ui/emoji.tsx",
        "additions": 3,
        "deletions": 0
      },
      {
        "path": "next-env.d.ts",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "a1677626738a13697c0d00acd127569984f5a514",
    "shortHash": "a167762",
    "subject": "fix: restore global styles by removing invalid shadow apply",
    "author": "enzo-prism",
    "date": "2025-12-06T06:49:49-08:00",
    "stats": {
      "files": 1,
      "insertions": 29,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "Fixed Core screens.",
    "notes": [
      "Updated core screens and key flows."
    ],
    "plainSummary": "Fixed core screens.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved core screens and layouts."
    ],
    "plainImpact": "Makes core pages feel more complete.",
    "files": [
      {
        "path": "app/globals.css",
        "additions": 29,
        "deletions": 0
      }
    ]
  },
  {
    "hash": "a5fdefee6f1b295cf01cbbfae8622be9182916f9",
    "shortHash": "a5fdefe",
    "subject": "chore: sync main changes into project",
    "body": "Update project files and assets from main branch.\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-06T14:39:39Z",
    "stats": {
      "files": 0,
      "insertions": 0,
      "deletions": 0,
      "summary": ""
    },
    "areas": [],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": []
  },
  {
    "hash": "af1f928fcaafbb929fc7781bf7eae6ace9d0827e",
    "shortHash": "af1f928",
    "subject": "feat: improve mobile navigation and search headings",
    "author": "enzo-prism",
    "date": "2025-12-06T06:27:56-08:00",
    "stats": {
      "files": 9,
      "insertions": 378,
      "deletions": 129,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "other"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Navigation",
      "Components"
    ],
    "summary": "Added Core screens, Shared interface, General updates.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Makes competition results easier to find after a meet. Makes athlete profiles clearer and easier to share.",
    "files": [
      {
        "path": "app/athletes/page.tsx",
        "additions": 184,
        "deletions": 86
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "app/coaches/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "app/globals.css",
        "additions": 35,
        "deletions": 0
      },
      {
        "path": "app/sponsors/page.tsx",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "components/navigation.tsx",
        "additions": 152,
        "deletions": 36
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 2,
        "deletions": 2
      },
      {
        "path": "next-env.d.ts",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "9f6520a37ba1bc09102517a115ab512c1c810f08",
    "shortHash": "9f6520a",
    "subject": "chore: sync main changes into project",
    "body": "Update project files and assets from main branch.\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-01T20:30:54Z",
    "stats": {
      "files": 0,
      "insertions": 0,
      "deletions": 0,
      "summary": ""
    },
    "areas": [],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": []
  },
  {
    "hash": "0955f72e2ba34f9ed4f8daf405504617b82bc569",
    "shortHash": "0955f72",
    "subject": "chore: sync main changes into project",
    "body": "Update project files and assets from main branch.\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-01T20:11:28Z",
    "stats": {
      "files": 0,
      "insertions": 0,
      "deletions": 0,
      "summary": ""
    },
    "areas": [],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": []
  },
  {
    "hash": "c65ac1f0cf10bb5113d5c9b5a06152cb5c541fd3",
    "shortHash": "c65ac1f",
    "subject": "chore: sync main changes into project",
    "body": "Update project files and assets from main branch.\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-01T20:08:25Z",
    "stats": {
      "files": 0,
      "insertions": 0,
      "deletions": 0,
      "summary": ""
    },
    "areas": [],
    "tags": [],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
    "plainImpact": "Keeps the product moving forward.",
    "files": []
  },
  {
    "hash": "e34b5839800a52d1f987730be1b6d9a94c8dadc3",
    "shortHash": "e34b583",
    "subject": "chore: sync main changes into project",
    "body": "Update project files and assets from main branch.\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-01T20:07:07Z",
    "stats": {
      "files": 1,
      "insertions": 5,
      "deletions": 5,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "package.json",
        "additions": 5,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "bd97bea38066ca2dea70a2813acae468aaed46f4",
    "shortHash": "bd97bea",
    "subject": "feat: add structured athletics data and pages",
    "author": "enzo-prism",
    "date": "2025-12-01T12:05:16-08:00",
    "stats": {
      "files": 27,
      "insertions": 3698,
      "deletions": 2232,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "data",
      "lib"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Accounts",
      "Rankings",
      "Navigation",
      "Components",
      "Demo Data",
      "Config"
    ],
    "summary": "Added General updates, Core screens, Shared interface, Sample data, Behind the scenes.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Improved the sample data used in the demo."
    ],
    "plainSummary": "Added athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": "README.md",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 68,
        "deletions": 213
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 13,
        "deletions": 711
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 117,
        "deletions": 247
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 4,
        "deletions": 60
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 75,
        "deletions": 304
      },
      {
        "path": "app/coaches/page.tsx",
        "additions": 2,
        "deletions": 60
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 15,
        "deletions": 226
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 11,
        "deletions": 90
      },
      {
        "path": "app/how-it-works/page.tsx",
        "additions": 337,
        "deletions": 40
      },
      {
        "path": "app/profile/page.tsx",
        "additions": 497,
        "deletions": 166
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 110,
        "deletions": 59
      },
      {
        "path": "app/sponsors/[id]/page.tsx",
        "additions": 123,
        "deletions": 0
      },
      {
        "path": "app/sponsors/page.tsx",
        "additions": 48,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 5,
        "deletions": 2
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 5,
        "deletions": 6
      },
      {
        "path": "lib/data/athletes.ts",
        "additions": 492,
        "deletions": 0
      },
      {
        "path": "lib/data/clubs.ts",
        "additions": 110,
        "deletions": 0
      },
      {
        "path": "lib/data/coaches.ts",
        "additions": 118,
        "deletions": 0
      },
      {
        "path": "lib/data/competitions.ts",
        "additions": 278,
        "deletions": 0
      },
      {
        "path": "lib/data/legacy-athlete-records.ts",
        "additions": 686,
        "deletions": 0
      },
      {
        "path": "lib/data/sponsors.ts",
        "additions": 101,
        "deletions": 0
      },
      {
        "path": "lib/data/utils.ts",
        "additions": 14,
        "deletions": 0
      },
      {
        "path": "lib/data/validate.ts",
        "additions": 73,
        "deletions": 0
      },
      {
        "path": "lib/ui/emoji.tsx",
        "additions": 42,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 5,
        "deletions": 3
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 341,
        "deletions": 45
      }
    ]
  },
  {
    "hash": "7cb766f7c94adfe926e22d0d5a1ece904537c41a",
    "shortHash": "7cb766f",
    "subject": "feat: update athlete profiles and competitions",
    "author": "enzo-prism",
    "date": "2025-12-01T09:10:57-08:00",
    "stats": {
      "files": 18,
      "insertions": 2583,
      "deletions": 564,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Accounts",
      "Rankings",
      "Navigation",
      "Components",
      "Config"
    ],
    "summary": "Added General updates, Core screens, Shared interface.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency."
    ],
    "plainSummary": "Added athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Helps people trust rankings and compare performances. Makes competition results easier to find after a meet.",
    "files": [
      {
        "path": ".gitignore",
        "additions": 22,
        "deletions": 0
      },
      {
        "path": "AGENTS.md",
        "additions": 35,
        "deletions": 0
      },
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 303,
        "deletions": 190
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 1033,
        "deletions": 12
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 137,
        "deletions": 146
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 12,
        "deletions": 5
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 189,
        "deletions": 125
      },
      {
        "path": "app/coaches/page.tsx",
        "additions": 10,
        "deletions": 0
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 102,
        "deletions": 39
      },
      {
        "path": "app/how-it-works/page.tsx",
        "additions": 65,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 4,
        "deletions": 22
      },
      {
        "path": "app/profile/page.tsx",
        "additions": 341,
        "deletions": 0
      },
      {
        "path": "app/rankings/page.tsx",
        "additions": 154,
        "deletions": 0
      },
      {
        "path": "app/signup/page.tsx",
        "additions": 99,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 30,
        "deletions": 18
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 22,
        "deletions": 2
      },
      {
        "path": "next-env.d.ts",
        "additions": 6,
        "deletions": 0
      },
      {
        "path": "tsconfig.json",
        "additions": 19,
        "deletions": 5
      }
    ]
  },
  {
    "hash": "e4161885fa19b050a3c6a266812b9e57cc5294be",
    "shortHash": "e416188",
    "subject": "chore: sync main changes into project",
    "body": "Update project files and assets from main branch\n\n#VERCEL_SKIP\n\nCo-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-01T15:36:49Z",
    "stats": {
      "files": 4,
      "insertions": 4,
      "deletions": 4,
      "summary": ""
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "Updated General updates.",
    "notes": [],
    "plainSummary": "Updated app setup.",
    "plainNotes": [
      "Kept the app setup reliable and current."
    ],
    "plainImpact": "Keeps the app stable and reliable.",
    "files": [
      {
        "path": "README.md",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "next.config.mjs",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "package.json",
        "additions": 1,
        "deletions": 1
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 1,
        "deletions": 1
      }
    ]
  },
  {
    "hash": "bcc50bd1339e6a7c342abb03d57754fadd17c02b",
    "shortHash": "bcc50bd",
    "subject": "Initialized repository for chat Philippine Athletics design",
    "body": "Co-authored-by: enzo <215033440+enzo-prism@users.noreply.github.com>",
    "author": "v0",
    "date": "2025-12-01T15:36:24Z",
    "stats": {
      "files": 32,
      "insertions": 11620,
      "deletions": 0,
      "summary": ""
    },
    "areas": [
      "other",
      "app",
      "components",
      "lib",
      "public",
      "styles"
    ],
    "tags": [
      "Athletes",
      "Clubs",
      "App Pages",
      "Coaches",
      "Competitions",
      "Navigation",
      "Components",
      "Config",
      "Assets",
      "Styling"
    ],
    "summary": "Updated General updates, Core screens, Shared interface, Behind the scenes, Images & media, Look and feel.",
    "notes": [
      "Updated core screens and key flows.",
      "Refined shared UI pieces for consistency.",
      "Visual polish and layout refinements."
    ],
    "plainSummary": "Updated athlete profiles, club pages, and core screens.",
    "plainNotes": [
      "Made athlete profiles clearer and easier to browse.",
      "Improved club pages and roster visibility.",
      "Improved core screens and layouts.",
      "Made coaching details easier to understand."
    ],
    "plainImpact": "Makes competition results easier to find after a meet. Makes athlete profiles clearer and easier to share.",
    "files": [
      {
        "path": "README.md",
        "additions": 30,
        "deletions": 0
      },
      {
        "path": "app/athletes/[id]/page.tsx",
        "additions": 268,
        "deletions": 0
      },
      {
        "path": "app/athletes/page.tsx",
        "additions": 87,
        "deletions": 0
      },
      {
        "path": "app/clubs/[id]/page.tsx",
        "additions": 292,
        "deletions": 0
      },
      {
        "path": "app/clubs/page.tsx",
        "additions": 87,
        "deletions": 0
      },
      {
        "path": "app/coaches/[id]/page.tsx",
        "additions": 279,
        "deletions": 0
      },
      {
        "path": "app/coaches/page.tsx",
        "additions": 87,
        "deletions": 0
      },
      {
        "path": "app/competitions/[id]/page.tsx",
        "additions": 363,
        "deletions": 0
      },
      {
        "path": "app/competitions/page.tsx",
        "additions": 87,
        "deletions": 0
      },
      {
        "path": "app/globals.css",
        "additions": 126,
        "deletions": 0
      },
      {
        "path": "app/layout.tsx",
        "additions": 29,
        "deletions": 0
      },
      {
        "path": "app/page.tsx",
        "additions": 99,
        "deletions": 0
      },
      {
        "path": "components.json",
        "additions": 21,
        "deletions": 0
      },
      {
        "path": "components/navigation.tsx",
        "additions": 36,
        "deletions": 0
      },
      {
        "path": "components/profile-card.tsx",
        "additions": 37,
        "deletions": 0
      },
      {
        "path": "components/theme-provider.tsx",
        "additions": 11,
        "deletions": 0
      },
      {
        "path": "lib/utils.ts",
        "additions": 6,
        "deletions": 0
      },
      {
        "path": "next.config.mjs",
        "additions": 12,
        "deletions": 0
      },
      {
        "path": "package.json",
        "additions": 73,
        "deletions": 0
      },
      {
        "path": "pnpm-lock.yaml",
        "additions": 9402,
        "deletions": 0
      },
      {
        "path": "postcss.config.mjs",
        "additions": 8,
        "deletions": 0
      },
      {
        "path": "public/apple-icon.png",
        "additions": null,
        "deletions": null
      },
      {
        "path": "public/icon-dark-32x32.png",
        "additions": null,
        "deletions": null
      },
      {
        "path": "public/icon-light-32x32.png",
        "additions": null,
        "deletions": null
      },
      {
        "path": "public/icon.svg",
        "additions": 26,
        "deletions": 0
      },
      {
        "path": "public/placeholder-logo.png",
        "additions": null,
        "deletions": null
      },
      {
        "path": "public/placeholder-logo.svg",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "public/placeholder-user.jpg",
        "additions": null,
        "deletions": null
      },
      {
        "path": "public/placeholder.jpg",
        "additions": null,
        "deletions": null
      },
      {
        "path": "public/placeholder.svg",
        "additions": 1,
        "deletions": 0
      },
      {
        "path": "styles/globals.css",
        "additions": 125,
        "deletions": 0
      },
      {
        "path": "tsconfig.json",
        "additions": 27,
        "deletions": 0
      }
    ]
  }
]
