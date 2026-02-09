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

export const commitLogUpdatedAt = "2026-02-05T09:30:00.000Z"

export const commitLog: CommitLogEntry[] = [
  {
    "hash": "b7a1c9f24e9d4f5f9a8d1d4c6c7b8e9f0a1b2c3d",
    "shortHash": "b7a1c9f",
    "subject": "feat: membership & sponsor refresh",
    "author": "codex",
    "date": "2026-02-05T09:22:00-08:00",
    "stats": {
      "files": 9,
      "insertions": 220,
      "deletions": 70,
      "summary": ""
    },
    "areas": [
      "app",
      "components",
      "data",
      "docs"
    ],
    "tags": [
      "App Pages",
      "Navigation",
      "Components",
      "Demo Data",
      "Changelog",
      "Styling"
    ],
    "summary": "Added membership, sponsor, and sanctioned events updates across core pages.",
    "notes": [
      "Refreshed the homepage branding, sponsor banner, and membership section.",
      "Added a sanctioned events calendar preview plus a dedicated events page.",
      "Extended badges and sample data to cover member and member club status."
    ],
    "plainSummary": "Updated the homepage with membership, sponsors, and sanctioned events.",
    "plainNotes": [
      "Added membership tiers and new badges for members and clubs.",
      "Added a sanctioned events calendar preview and events page."
    ],
    "plainImpact": "Gives the demo a clearer membership story and shows sanctioned events at a glance.",
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
        "path": "app/membership/page.tsx",
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
