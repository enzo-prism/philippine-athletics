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
  files: CommitFile[]
}

export const commitLogUpdatedAt = "2026-02-03T19:12:21.366Z"

export const commitLog: CommitLogEntry[] = [
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
      "summary": "6 files changed, 1034 insertions(+), 54 deletions(-)"
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
    "summary": "Update changelog documentation. Updated Other files, App pages, Documentation, Data modules, Scripts. 6 files changed, 1034 insertions(+), 54 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Adjusted demo data or data relationships.",
      "Documentation updated for clarity and onboarding.",
      "Key files touched: lib/data/commit-log.ts, scripts/generate-commit-log.mjs, scripts/generate-commit-log.ts, app/changelog/page.tsx."
    ],
    "plainSummary": "Updated changelog viewer, app pages, and documentation.",
    "plainNotes": [
      "Updated the demo changelog experience.",
      "Updated app pages or layouts.",
      "Updated documentation to keep everyone aligned.",
      "Refreshed demo data used across the app."
    ],
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
      "summary": "10 files changed, 3487 insertions(+), 2 deletions(-)"
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
    "summary": "Add commit-history changelog menu. Updated Other files, App pages, Components, Documentation, Data modules, Scripts. 10 files changed, 3487 insertions(+), 2 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Adjusted demo data or data relationships.",
      "Documentation updated for clarity and onboarding.",
      "Key files touched: lib/data/commit-log.ts, app/changelog/page.tsx, scripts/generate-commit-log.ts, scripts/generate-commit-log.mjs."
    ],
    "plainSummary": "Added changelog viewer, app pages, and navigation.",
    "plainNotes": [
      "Updated the demo changelog experience.",
      "Updated app pages or layouts.",
      "Adjusted navigation to improve discovery.",
      "Updated documentation to keep everyone aligned."
    ],
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
      "summary": "9 files changed, 2058 insertions(+), 9 deletions(-)"
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
    "summary": "Add detailed docs for preview flow. Updated Other files, App pages, Components, Documentation. 9 files changed, 2058 insertions(+), 9 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Documentation updated for clarity and onboarding.",
      "Key files touched: app/data-portal/page.tsx, docs/research/results-intake.md, docs/STATUS.md, components/navigation.tsx."
    ],
    "plainSummary": "Added results intake workflow, app pages, and search and discovery.",
    "plainNotes": [
      "Improved the results intake workflow or previews.",
      "Updated app pages or layouts.",
      "Improved how people search and discover profiles.",
      "Refined shared UI building blocks."
    ],
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
      "summary": "11 files changed, 712 insertions(+), 684 deletions(-)"
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
    "summary": "Add results pending callout. Updated Other files, App pages, Data modules. 11 files changed, 712 insertions(+), 684 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Adjusted demo data or data relationships.",
      "Key files touched: app/athletes/page.tsx, app/search/page.tsx, app/search/search-client.tsx, app/rankings/page.tsx."
    ],
    "plainSummary": "Added athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated competition listings or results displays."
    ],
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
      "summary": "3 files changed, 248 insertions(+), 231 deletions(-)"
    },
    "areas": [
      "other",
      "app"
    ],
    "tags": [
      "Search",
      "App Pages"
    ],
    "summary": "fix: wrap search page in suspense. Updated Other files, App pages. 3 files changed, 248 insertions(+), 231 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/search/page.tsx, app/search/search-client.tsx, Changelog.md."
    ],
    "plainSummary": "Fixed search and discovery and app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Improved how people search and discover profiles.",
      "Updated app pages or layouts."
    ],
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
      "summary": "24 files changed, 1957 insertions(+), 230 deletions(-)"
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
    "summary": "feat: enhance demo flows and changelog. Updated Other files, App pages, Components, Data modules. 24 files changed, 1957 insertions(+), 230 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Adjusted demo data or data relationships.",
      "Key files touched: lib/data/athletes.ts, app/rankings/page.tsx, app/search/page.tsx, lib/data/rankings.ts."
    ],
    "plainSummary": "Added athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated coach profiles or coaching details."
    ],
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
      "summary": "1 file changed, 788 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "feat: enrich athlete sample data. Updated Data modules. 1 file changed, 788 insertions(+), 0 deletions(-).",
    "notes": [
      "Adjusted demo data or data relationships.",
      "Key files touched: lib/data/athletes.ts."
    ],
    "plainSummary": "Added demo data.",
    "plainNotes": [
      "Refreshed demo data used across the app."
    ],
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
      "summary": "1 file changed, 65 insertions(+), 20 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Accounts",
      "App Pages"
    ],
    "summary": "fix: make profile preview switcher usable on mobile. Updated App pages. 1 file changed, 65 insertions(+), 20 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/profile/page.tsx."
    ],
    "plainSummary": "Fixed signup and profile pages and app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated signup or profile experiences.",
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 102 insertions(+), 160 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Athletes"
    ],
    "summary": "refactor: simplify athletes page filters. Updated App pages. 1 file changed, 102 insertions(+), 160 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/athletes/page.tsx."
    ],
    "plainSummary": "Improved athlete pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views."
    ],
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
      "summary": "1 file changed, 13 insertions(+), 11 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "refactor: use lucide icons in mobile nav. Updated Components. 1 file changed, 13 insertions(+), 11 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Improved navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 18 insertions(+), 3 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Components"
    ],
    "summary": "fix: use Google logo on signup. Updated Components. 1 file changed, 18 insertions(+), 3 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/signup/SignupPanel.tsx."
    ],
    "plainSummary": "Fixed shared UI components.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Refined shared UI building blocks."
    ],
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
      "summary": "2 files changed, 11 insertions(+), 2 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Components"
    ],
    "summary": "fix: prevent badge overflow in cards. Updated Components. 2 files changed, 11 insertions(+), 2 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/badge.tsx, components/profile-card.tsx."
    ],
    "plainSummary": "Fixed shared UI components.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Refined shared UI building blocks."
    ],
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
      "summary": "4 files changed, 98 insertions(+), 8 deletions(-)"
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
    "summary": "feat: add profile avatar placeholders. Updated App pages, Components. 4 files changed, 98 insertions(+), 8 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: components/ui/avatar.tsx, components/ProfileAvatar.tsx, app/athletes/[id]/page.tsx, app/coaches/[id]/page.tsx."
    ],
    "plainSummary": "Added athlete pages, coach profiles, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated coach profiles or coaching details.",
      "Updated app pages or layouts.",
      "Refined shared UI building blocks."
    ],
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
      "summary": "1 file changed, 31 insertions(+), 27 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "fix: make how-to cards clickable. Updated App pages. 1 file changed, 31 insertions(+), 27 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Fixed app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 6 insertions(+), 6 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "fix: reorder homepage category cards. Updated App pages. 1 file changed, 6 insertions(+), 6 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Fixed app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated app pages or layouts."
    ],
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
      "summary": "25 files changed, 1667 insertions(+), 709 deletions(-)"
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
    "summary": "refactor: migrate UI to shadcn components. Updated App pages, Components. 25 files changed, 1667 insertions(+), 709 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: app/athletes/page.tsx, components/ui/dropdown-menu.tsx, app/profile/page.tsx, components/navigation.tsx."
    ],
    "plainSummary": "Improved athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated coach profiles or coaching details."
    ],
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
      "summary": "6 files changed, 375 insertions(+), 104 deletions(-)"
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
    "summary": "feat: add social signup UI and simplify pages. Updated App pages, Components. 6 files changed, 375 insertions(+), 104 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: components/signup/SignupPanel.tsx, app/signup/page.tsx, app/page.tsx, app/coaches/page.tsx."
    ],
    "plainSummary": "Added athlete pages, coach profiles, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated coach profiles or coaching details.",
      "Updated app pages or layouts.",
      "Updated signup or profile experiences."
    ],
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
      "summary": "1 file changed, 12 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add Gemini generated image to homepage bottom section. Updated App pages. 1 file changed, 12 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "2 files changed, 29 insertions(+), 6 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add fade-in and slide-up animations to hero section. Updated App pages. 2 files changed, 29 insertions(+), 6 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/globals.css, app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 32 insertions(+), 18 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Components"
    ],
    "summary": "style: replace emojis with flat modern lucide icons in badges. Updated Components. 1 file changed, 32 insertions(+), 18 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/badge.tsx."
    ],
    "plainSummary": "Polished shared UI components.",
    "plainNotes": [
      "Refined shared UI building blocks."
    ],
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
      "summary": "4 files changed, 58 insertions(+), 17 deletions(-)"
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
    "summary": "feat: implement badge system with custom icons for coaches and sponsors. Updated App pages, Components. 4 files changed, 58 insertions(+), 17 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: components/badge.tsx, app/sponsors/[id]/page.tsx, components/profile-card.tsx, app/coaches/[id]/page.tsx."
    ],
    "plainSummary": "Added coach profiles, app pages, and shared UI components.",
    "plainNotes": [
      "Updated coach profiles or coaching details.",
      "Updated app pages or layouts.",
      "Refined shared UI building blocks."
    ],
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
      "summary": "6 files changed, 287 insertions(+), 20 deletions(-)"
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
    "summary": "feat: add avatar headshots and weekly schedule to club pages. Updated Other files, App pages, Components, Data modules. 6 files changed, 287 insertions(+), 20 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Adjusted demo data or data relationships.",
      "Key files touched: components/weekly-schedule.tsx, CLAUDE.md, components/avatar.tsx, app/clubs/[id]/page.tsx."
    ],
    "plainSummary": "Added club pages, app pages, and shared UI components.",
    "plainNotes": [
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Refined shared UI building blocks.",
      "Refreshed demo data used across the app."
    ],
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
      "summary": "1 file changed, 4 insertions(+), 4 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "style: align how-it-works buttons. Updated App pages. 1 file changed, 4 insertions(+), 4 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Polished app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 1 insertion(+), 1 deletion(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "style: add hover motion to hero badge. Updated App pages. 1 file changed, 1 insertion(+), 1 deletion(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 2 insertions(+), 2 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "chore: enlarge hero badge to larger minimum size. Updated App pages. 1 file changed, 2 insertions(+), 2 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Updated app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 2 insertions(+), 3 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "chore: enlarge hero partner badge and remove label. Updated App pages. 1 file changed, 2 insertions(+), 3 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Updated app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 9 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add POC partner badge to hero. Updated App pages. 1 file changed, 9 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 15 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add coach and club links to how it works search step. Updated App pages. 1 file changed, 15 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 9 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add signup link to how it works step. Updated App pages. 1 file changed, 9 insertions(+), 1 deletion(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 6 insertions(+), 3 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: show live counts in home category tiles. Updated App pages. 1 file changed, 6 insertions(+), 3 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 6 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add learn more link to how it works section. Updated App pages. 1 file changed, 6 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 0 insertions(+), 6 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "chore: remove how it works hero button. Updated App pages. 1 file changed, 0 insertions(+), 6 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Updated app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 29 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "feat: add how it works steps to homepage. Updated App pages. 1 file changed, 29 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Added app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "2 files changed, 2 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Navigation"
    ],
    "summary": "chore: add home nav link and update coach CTA copy. Updated App pages, Components. 2 files changed, 2 insertions(+), 1 deletion(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: app/page.tsx, components/navigation.tsx."
    ],
    "plainSummary": "Added app pages and navigation.",
    "plainNotes": [
      "Updated app pages or layouts.",
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 25 insertions(+), 5 deletions(-)"
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "fix: avoid toSummary ref error in athlete data. Updated Data modules. 1 file changed, 25 insertions(+), 5 deletions(-).",
    "notes": [
      "Adjusted demo data or data relationships.",
      "Key files touched: lib/data/athletes.ts."
    ],
    "plainSummary": "Fixed demo data.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Refreshed demo data used across the app."
    ],
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
      "summary": "8 files changed, 23 insertions(+), 22 deletions(-)"
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
    "summary": "fix: unwrap params and simplify nav. Updated App pages, Components, Data modules. 8 files changed, 23 insertions(+), 22 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Adjusted demo data or data relationships.",
      "Key files touched: app/page.tsx, app/athletes/[id]/page.tsx, app/clubs/[id]/page.tsx, app/coaches/[id]/page.tsx."
    ],
    "plainSummary": "Fixed athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts."
    ],
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
      "summary": "4 files changed, 456 insertions(+), 1197 deletions(-)"
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "chore: replace sample data with new club/coach/athlete JSON. Updated Data modules. 4 files changed, 456 insertions(+), 1197 deletions(-).",
    "notes": [
      "Adjusted demo data or data relationships.",
      "Key files touched: lib/data/legacy-athlete-records.ts, lib/data/athletes.ts, lib/data/clubs.ts, lib/data/coaches.ts."
    ],
    "plainSummary": "Updated demo data.",
    "plainNotes": [
      "Refreshed demo data used across the app."
    ],
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
      "summary": "1 file changed, 34 insertions(+), 17 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Coaches",
      "App Pages"
    ],
    "summary": "fix: render full coach profiles and correct athlete links. Updated App pages. 1 file changed, 34 insertions(+), 17 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/coaches/[id]/page.tsx."
    ],
    "plainSummary": "Fixed coach profiles and app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated coach profiles or coaching details.",
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 1 insertion(+), 28 deletions(-)"
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "chore: remove legacy stub athletes and rely on rich sample profiles. Updated Data modules. 1 file changed, 1 insertion(+), 28 deletions(-).",
    "notes": [
      "Adjusted demo data or data relationships.",
      "Key files touched: lib/data/athletes.ts."
    ],
    "plainSummary": "Updated demo data.",
    "plainNotes": [
      "Refreshed demo data used across the app."
    ],
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
      "summary": "2 files changed, 127 insertions(+), 8 deletions(-)"
    },
    "areas": [
      "data"
    ],
    "tags": [
      "Demo Data"
    ],
    "summary": "feat: enrich sample athlete and coach data with full profiles. Updated Data modules. 2 files changed, 127 insertions(+), 8 deletions(-).",
    "notes": [
      "Adjusted demo data or data relationships.",
      "Key files touched: lib/data/athletes.ts, lib/data/coaches.ts."
    ],
    "plainSummary": "Added demo data.",
    "plainNotes": [
      "Refreshed demo data used across the app."
    ],
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
      "summary": "1 file changed, 3 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Clubs",
      "App Pages"
    ],
    "summary": "fix: make clubs page client for search state. Updated App pages. 1 file changed, 3 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/clubs/page.tsx."
    ],
    "plainSummary": "Fixed club pages and app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 36 insertions(+), 5 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Clubs",
      "App Pages"
    ],
    "summary": "feat: add minimal club search bar. Updated App pages. 1 file changed, 36 insertions(+), 5 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/clubs/page.tsx."
    ],
    "plainSummary": "Added club pages and app pages.",
    "plainNotes": [
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 0 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: trim mobile bottom nav to home/clubs/coaches. Updated Components. 1 file changed, 0 insertions(+), 1 deletion(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 2 insertions(+), 4 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: simplify mobile bottom nav to home/clubs/coaches/athletes. Updated Components. 1 file changed, 2 insertions(+), 4 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 1 insertion(+), 1 deletion(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: ensure mobile nav uses emoji-only tabs. Updated Components. 1 file changed, 1 insertion(+), 1 deletion(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 9 insertions(+), 8 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: update mobile bottom nav emojis. Updated Components. 1 file changed, 9 insertions(+), 8 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "2 files changed, 16 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app",
      "components"
    ],
    "tags": [
      "App Pages",
      "Components"
    ],
    "summary": "chore: ensure pages reset scroll to top on navigation. Updated App pages, Components. 2 files changed, 16 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: components/scroll-reset.tsx, app/layout.tsx."
    ],
    "plainSummary": "Updated app pages and shared UI components.",
    "plainNotes": [
      "Updated app pages or layouts.",
      "Refined shared UI building blocks."
    ],
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
      "summary": "1 file changed, 4 insertions(+), 4 deletions(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: update mobile bottom nav to clubs/coaches/athletes. Updated Components. 1 file changed, 4 insertions(+), 4 deletions(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 13 insertions(+), 13 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "Clubs",
      "App Pages"
    ],
    "summary": "feat: show athlete events in club roster. Updated App pages. 1 file changed, 13 insertions(+), 13 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/clubs/[id]/page.tsx."
    ],
    "plainSummary": "Added club pages and app pages.",
    "plainNotes": [
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts."
    ],
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
      "summary": "3 files changed, 108 insertions(+), 0 deletions(-)"
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
    "summary": "feat: add practice location map section to club pages. Updated App pages, Components, Data modules. 3 files changed, 108 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Adjusted demo data or data relationships.",
      "Key files touched: components/map-embed.tsx, lib/data/clubs.ts, app/clubs/[id]/page.tsx."
    ],
    "plainSummary": "Added club pages, app pages, and shared UI components.",
    "plainNotes": [
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Refined shared UI building blocks.",
      "Refreshed demo data used across the app."
    ],
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
      "summary": "2 files changed, 120 insertions(+), 7 deletions(-)"
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
    "summary": "feat: add structured contact section to club pages. Updated App pages, Data modules. 2 files changed, 120 insertions(+), 7 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Adjusted demo data or data relationships.",
      "Key files touched: app/clubs/[id]/page.tsx, lib/data/clubs.ts."
    ],
    "plainSummary": "Added club pages, app pages, and demo data.",
    "plainNotes": [
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Refreshed demo data used across the app."
    ],
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
      "summary": "1 file changed, 1 insertion(+), 1 deletion(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "chore: tweak hero headline. Updated App pages. 1 file changed, 1 insertion(+), 1 deletion(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Updated app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 1 insertion(+), 4 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "chore: update hero messaging. Updated App pages. 1 file changed, 1 insertion(+), 4 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Updated app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 3 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "chore: update hero eyebrow text. Updated App pages. 1 file changed, 3 insertions(+), 1 deletion(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/page.tsx."
    ],
    "plainSummary": "Updated app pages.",
    "plainNotes": [
      "Updated app pages or layouts."
    ],
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
      "summary": "1 file changed, 0 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: remove emoji from profile nav button. Updated Components. 1 file changed, 0 insertions(+), 1 deletion(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 0 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "components"
    ],
    "tags": [
      "Navigation"
    ],
    "summary": "chore: remove emoji from signup nav button. Updated Components. 1 file changed, 0 insertions(+), 1 deletion(-).",
    "notes": [
      "Refined shared UI components.",
      "Key files touched: components/navigation.tsx."
    ],
    "plainSummary": "Updated navigation.",
    "plainNotes": [
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "3 files changed, 201 insertions(+), 170 deletions(-)"
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
    "summary": "feat: simplify athletes filters and refine hero/video layout. Updated App pages, Components. 3 files changed, 201 insertions(+), 170 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: app/athletes/page.tsx, app/page.tsx, components/navigation.tsx."
    ],
    "plainSummary": "Added athlete pages, app pages, and navigation.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated app pages or layouts.",
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "2 files changed, 6863 insertions(+), 890 deletions(-)"
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "chore: bump next/react to patched RSC versions. Updated Other files. 2 files changed, 6863 insertions(+), 890 deletions(-).",
    "notes": [
      "Key files touched: pnpm-lock.yaml, package.json."
    ],
    "plainSummary": "Updated project configuration.",
    "plainNotes": [
      "Adjusted project configuration or dependencies."
    ],
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
      "summary": "2 files changed, 337 insertions(+), 6310 deletions(-)"
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "chore: sync main changes to project. Updated Other files. 2 files changed, 337 insertions(+), 6310 deletions(-).",
    "notes": [
      "Key files touched: pnpm-lock.yaml, package.json."
    ],
    "plainSummary": "Updated project configuration.",
    "plainNotes": [
      "Adjusted project configuration or dependencies."
    ],
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
      "summary": "1 file changed, 6 insertions(+), 1 deletion(-)"
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "chore: whitelist esbuild build script for pnpm. Updated Other files. 1 file changed, 6 insertions(+), 1 deletion(-).",
    "notes": [
      "Key files touched: package.json."
    ],
    "plainSummary": "Updated project configuration.",
    "plainNotes": [
      "Adjusted project configuration or dependencies."
    ],
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
      "summary": "2 files changed, 60 insertions(+), 60 deletions(-)"
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "chore: bump typescript to 5.9.3. Updated Other files. 2 files changed, 60 insertions(+), 60 deletions(-).",
    "notes": [
      "Key files touched: pnpm-lock.yaml, package.json."
    ],
    "plainSummary": "Updated project configuration.",
    "plainNotes": [
      "Adjusted project configuration or dependencies."
    ],
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
      "summary": "5 files changed, 83 insertions(+), 26 deletions(-)"
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
    "summary": "feat: add hero background video and nav emoji mapping. Updated App pages, Components, Utilities, Other files. 5 files changed, 83 insertions(+), 26 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: app/page.tsx, components/background-video.tsx, components/navigation.tsx, lib/ui/emoji.tsx."
    ],
    "plainSummary": "Added app pages, shared UI components, and navigation.",
    "plainNotes": [
      "Updated app pages or layouts.",
      "Refined shared UI building blocks.",
      "Adjusted navigation to improve discovery."
    ],
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
      "summary": "1 file changed, 29 insertions(+), 0 deletions(-)"
    },
    "areas": [
      "app"
    ],
    "tags": [
      "App Pages"
    ],
    "summary": "fix: restore global styles by removing invalid shadow apply. Updated App pages. 1 file changed, 29 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Key files touched: app/globals.css."
    ],
    "plainSummary": "Fixed app pages.",
    "plainNotes": [
      "Focused on reliability and reducing friction.",
      "Updated app pages or layouts."
    ],
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
      "summary": "0 files changed, 0 insertions(+), 0 deletions(-)"
    },
    "areas": [],
    "tags": [],
    "summary": "chore: sync main changes into project. Updated General updates. 0 files changed, 0 insertions(+), 0 deletions(-).",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
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
      "summary": "9 files changed, 378 insertions(+), 129 deletions(-)"
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
    "summary": "feat: improve mobile navigation and search headings. Updated App pages, Components, Other files. 9 files changed, 378 insertions(+), 129 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: app/athletes/page.tsx, components/navigation.tsx, app/globals.css, components/profile-card.tsx."
    ],
    "plainSummary": "Added athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated coach profiles or coaching details."
    ],
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
      "summary": "0 files changed, 0 insertions(+), 0 deletions(-)"
    },
    "areas": [],
    "tags": [],
    "summary": "chore: sync main changes into project. Updated General updates. 0 files changed, 0 insertions(+), 0 deletions(-).",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
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
      "summary": "0 files changed, 0 insertions(+), 0 deletions(-)"
    },
    "areas": [],
    "tags": [],
    "summary": "chore: sync main changes into project. Updated General updates. 0 files changed, 0 insertions(+), 0 deletions(-).",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
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
      "summary": "0 files changed, 0 insertions(+), 0 deletions(-)"
    },
    "areas": [],
    "tags": [],
    "summary": "chore: sync main changes into project. Updated General updates. 0 files changed, 0 insertions(+), 0 deletions(-).",
    "notes": [],
    "plainSummary": "Updated the app.",
    "plainNotes": [],
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
      "summary": "1 file changed, 5 insertions(+), 5 deletions(-)"
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "chore: sync main changes into project. Updated Other files. 1 file changed, 5 insertions(+), 5 deletions(-).",
    "notes": [
      "Key files touched: package.json."
    ],
    "plainSummary": "Updated project configuration.",
    "plainNotes": [
      "Adjusted project configuration or dependencies."
    ],
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
      "summary": "27 files changed, 3698 insertions(+), 2232 deletions(-)"
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
    "summary": "feat: add structured athletics data and pages. Updated Other files, App pages, Components, Data modules, Utilities. 27 files changed, 3698 insertions(+), 2232 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Adjusted demo data or data relationships.",
      "Key files touched: app/athletes/page.tsx, lib/data/legacy-athlete-records.ts, app/profile/page.tsx, lib/data/athletes.ts."
    ],
    "plainSummary": "Added athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated coach profiles or coaching details."
    ],
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
      "summary": "18 files changed, 2583 insertions(+), 564 deletions(-)"
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
    "summary": "feat: update athlete profiles and competitions. Updated Other files, App pages, Components. 18 files changed, 2583 insertions(+), 564 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Key files touched: app/athletes/page.tsx, app/athletes/[id]/page.tsx, app/profile/page.tsx, app/coaches/[id]/page.tsx."
    ],
    "plainSummary": "Added athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated coach profiles or coaching details."
    ],
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
      "summary": "4 files changed, 4 insertions(+), 4 deletions(-)"
    },
    "areas": [
      "other"
    ],
    "tags": [
      "Config"
    ],
    "summary": "chore: sync main changes into project. Updated Other files. 4 files changed, 4 insertions(+), 4 deletions(-).",
    "notes": [
      "Key files touched: README.md, next.config.mjs, package.json, pnpm-lock.yaml."
    ],
    "plainSummary": "Updated project configuration.",
    "plainNotes": [
      "Adjusted project configuration or dependencies."
    ],
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
      "summary": "32 files changed, 11620 insertions(+), 0 deletions(-)"
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
    "summary": "Initialized repository for chat Philippine Athletics design. Updated Other files, App pages, Components, Utilities, Public assets, Styling. 32 files changed, 11620 insertions(+), 0 deletions(-).",
    "notes": [
      "Updated app routes or page layouts.",
      "Refined shared UI components.",
      "Styling changes and visual polish tweaks.",
      "Key files touched: pnpm-lock.yaml, app/competitions/[id]/page.tsx, app/clubs/[id]/page.tsx, app/coaches/[id]/page.tsx."
    ],
    "plainSummary": "Updated athlete pages, club pages, and app pages.",
    "plainNotes": [
      "Updated athlete profiles or athlete-facing views.",
      "Updated club pages, rosters, or contact details.",
      "Updated app pages or layouts.",
      "Updated coach profiles or coaching details."
    ],
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
