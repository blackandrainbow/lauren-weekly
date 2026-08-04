/* =========================================================================
   THE SOURCE OF TRUTH
   -------------------------------------------------------------------------
   Every Monday, add ONE new object to the TOP of this array (newest first).
   Numbers only ever climb — never reuse or renumber. Front page shows the two
   newest weeks (This week + Last week); the rest live in the archive.

   STATUS TYPES (drive the colored pill): "active" | "shipping" | "planning" | "done"
   Optional per-week `preview: {title, note, href}` renders a live embedded peek.
   ========================================================================= */

const WEEKS = [
  {
    number: 5,
    weekOf: "2026-08-03",
    dateRange: "Aug 3 – 7, 2026",
    headline: "Polishing the launch surfaces — site, exports, and the design skill.",
    tldr:
      "A tightening week: matching the marketing-site tour to what's live, refreshing the PDFs with current screenshots, auditing every marketing link, and folding the fonts + logo SVGs into the r6-design skill.",
    lanes: [
      {
        name: "Marketing Site",
        emoji: "🌐",
        status: "In progress",
        statusType: "active",
        summary: "Getting the public site accurate and airtight.",
        items: [
          "Updating the tour on the marketing site to match what's live.",
          "Auditing every marketing page link-off so they all work and point to the right place."
        ]
      },
      {
        name: "Exports & PDFs",
        emoji: "📄",
        status: "In progress",
        statusType: "active",
        summary: "Refreshing the deliverables.",
        items: [
          "Updating the PDFs with the newest screenshots."
        ]
      },
      {
        name: "Design Skill",
        emoji: "🎨",
        status: "In progress",
        statusType: "active",
        summary: "Rounding out the r6-design skill.",
        items: [
          "Adding the fonts and logo SVGs to the r6-design skill."
        ]
      }
    ],
    shipped: [],
    onDeck: [],
    slack:
      "📅 *Week of Aug 3* — this week's focus:\n\n🌐 *Marketing site* — updating the tour to match what's live + auditing every page link-off\n📄 *PDFs* — refreshing the exports with the newest screenshots\n🎨 *Design skill* — adding the fonts + logo SVGs to the r6-design skill\n\n🏆 *Last week:* solidified the v0.6 brand messaging + pyramid, the animated site hero, and the 90-second demo — all live on the engagement site.\n\n👀 *Dashboard:* https://blackandrainbow.github.io/lauren-weekly/\n\nFresh update every week. 🙌"
  },
  {
    number: 4,
    weekOf: "2026-07-27",
    dateRange: "Jul 27 – 31, 2026",
    headline: "Solidified the messaging, the hero, and the demo.",
    tldr:
      "The launch story came together: the v0.6 brand messaging and pyramid solidified, the new animated site hero locked in, and the 90-second guided demo finalized — with the engagement site published so the team can see it all.",
    preview: {
      title: "The Marvin Minute · Launch Issue",
      note: "Refreshed",
      href: "marvin-minute/"
    },
    lanes: [
      {
        name: "Messaging & Brand",
        emoji: "🖋️",
        status: "Shipped",
        statusType: "shipping",
        summary: "The brand voice reached v0.6.",
        items: [
          "Solidified the v0.6 brand messaging and rewrote the brand pyramid + hook book.",
          "Added the Tagline Lab and a campaign index to the engagement site.",
          "Refreshed the Marvin Minute with the latest messaging."
        ]
      },
      {
        name: "Site Hero & Animation",
        emoji: "🎞️",
        status: "Shipped",
        statusType: "shipping",
        summary: "The new front door is locked in.",
        items: [
          "Solidified the new animated site hero and landing.",
          "Nav returns to the animated landing; dropped unvalidated stats."
        ]
      },
      {
        name: "Guided Demo",
        emoji: "🎬",
        status: "Shipped",
        statusType: "shipping",
        summary: "The walkthrough is final.",
        items: [
          "Solidified the 90-second guided demo — search → snapshot."
        ]
      }
    ],
    shipped: [
      { title: "Published the engagement site", note: "Analytics dashboard, North Star, guided demo, and Field Notes now live for the team." },
      { title: "Refreshed the usage dashboard + replays", note: "From real PostHog data and Clients.xlsx." }
    ],
    onDeck: [],
    slack:
      "👋 *Last week (Jul 27–31):*\n\n🖋️ *Messaging* — solidified the v0.6 brand messaging; rewrote the pyramid + hook book and added a Tagline Lab\n🎞️ *Site* — locked in the new animated hero + landing\n🎬 *Demo* — finalized the 90-second guided walkthrough\n🗂️ *Live* — published the engagement site: analytics dashboard, North Star, guided demo, and Field Notes now live for the team\n\nDashboard 👉 https://blackandrainbow.github.io/lauren-weekly/"
  },
  {
    number: 3,
    weekOf: "2026-07-20",
    dateRange: "Jul 20 – 24, 2026",
    headline: "Landed the brand, the messaging, and the launch assets.",
    tldr:
      "A big week heading into launch: the brand pyramid landed on \"Know your business,\" a new animated landing page and a 90-second guided demo went live, and the data + competitive groundwork came together.",
    lanes: [
      {
        name: "Brand & Messaging",
        emoji: "🎨",
        status: "Shipped",
        statusType: "shipping",
        summary: "The positioning finally clicked into place.",
        items: [
          "Landed the brand pyramid (v0.4) on \"Know your business\" as the tagline + promise.",
          "Wrote the campaign lines — \"Ten years of taking the hits so your book doesn't\" and \"we built this together.\"",
          "Built the brand book, adopted the real R6 logo, and synced the r6-design skill so the team's tooling matches."
        ]
      },
      {
        name: "Landing Page & Guided Demo",
        emoji: "🚀",
        status: "Shipped",
        statusType: "shipping",
        summary: "A new front door for launch.",
        items: [
          "Shipped a new landing page with the new messaging and an animated hero.",
          "Completed a full 90-second guided demo — walking from search all the way to snapshot."
        ]
      },
      {
        name: "Data & Analytics",
        emoji: "📊",
        status: "In progress",
        statusType: "active",
        summary: "Standing up how we measure the launch.",
        items: [
          "Data pipeline and analytics dashboard work underway.",
          "Defined the North Star metric and a simplified launch dashboard."
        ]
      },
      {
        name: "Competitive & Proof",
        emoji: "🔬",
        status: "In progress",
        statusType: "active",
        summary: "Sharpening where we stand and the proof behind it.",
        items: [
          "Opened the competitive file — Kalepa, Planck, and Sixfold — and mapped the stack.",
          "Published the book-audit case study and the M2 production analysis in the kit."
        ]
      }
    ],
    shipped: [
      { title: "New landing page", note: "New messaging + animated hero." },
      { title: "90-second guided demo", note: "Full walkthrough, search → snapshot." },
      { title: "Brand pyramid v0.4", note: "\"Know your business\" tagline + promise, brand book, real logo." },
      { title: "Competitive file + case studies", note: "Kalepa / Planck / Sixfold; book-audit + M2 analysis." }
    ],
    onDeck: [],
    slack:
      "👋 *Last week (Jul 20–24)* — a big one heading into launch:\n\n🎨 *Brand & messaging* — landed the pyramid on \"Know your business,\" wrote the campaign lines (\"Ten years of taking the hits so your book doesn't\"), built the brand book\n🚀 *Landing page* — a new page with the new messaging + an animated hero\n🎬 *Guided demo* — a full 90-second walkthrough, search → snapshot\n📊 *Data* — pipeline + analytics work, the North Star metric, a simplified launch dashboard\n🔬 *Competitive* — Kalepa, Planck, Sixfold mapped; book-audit + M2 case studies published\n\nDashboard 👉 https://blackandrainbow.github.io/lauren-weekly/"
  }
];
