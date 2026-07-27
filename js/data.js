/* =========================================================================
   THE SOURCE OF TRUTH
   -------------------------------------------------------------------------
   Every Monday, add ONE new object to the TOP of this array (newest first).
   - index.html front page shows the two newest weeks (This week + Last week).
   - archive.html lists every week and can open any of them.
   The previous weeks roll into the archive as newer ones stack on top.

   STATUS TYPES (drive the colored pill): "active" | "shipping" | "planning" | "done"
   Optional per-week `preview: {title, note, href}` renders a live embedded peek.
   ========================================================================= */

const WEEKS = [
  {
    number: 4,
    weekOf: "2026-07-27",
    dateRange: "Jul 27 – 31, 2026",
    headline: "Getting everything launch-ready.",
    tldr:
      "Launch-prep week — QA'ing the workbench, updating the marketing-site tour to match, refreshing the Marvin Minute with the latest messaging, and shoring up docs, admin, and the analytics dashboard.",
    preview: {
      title: "The Marvin Minute · Launch Issue",
      note: "Refreshing this week",
      href: "marvin-minute/"
    },
    lanes: [
      {
        name: "Launch Prep",
        emoji: "🚀",
        status: "In progress",
        statusType: "active",
        summary: "Getting the product and the site ready for launch.",
        items: [
          "QA'ing the workbench before launch.",
          "Updating the marketing-site \"tour\" so it matches the latest product."
        ]
      },
      {
        name: "Data & Analytics",
        emoji: "📊",
        status: "In progress",
        statusType: "active",
        summary: "Making the launch measurable.",
        items: [
          "Shoring up the analytics dashboard — North Star + the simplified launch view.",
          "Syncing with James on the data plan; bringing in Josh and Alan once we're aligned."
        ]
      },
      {
        name: "Marvin Minute & Messaging",
        emoji: "🎬",
        status: "In progress",
        statusType: "active",
        summary: "Landing the launch story.",
        items: [
          "Updating the Marvin Minute with the latest round of messaging.",
          "New landing page review — meeting Tuesday."
        ]
      },
      {
        name: "Docs & Admin",
        emoji: "📄",
        status: "In progress",
        statusType: "active",
        summary: "Tightening the edges before launch.",
        items: [
          "Shoring up documentation and admin."
        ]
      }
    ],
    shipped: [
      { title: "Brought the engagement site current", note: "The analytics dashboard, North Star, and 90-second guided demo are now live for the team — plus all of last week's brand & messaging work." }
    ],
    onDeck: [],
    slack:
      "👋 Starting something new — a weekly snapshot of what I'm working on, so you all have visibility into the brand / messaging / product-strategy work that usually happens in the background.\n\n📅 *This week (Jul 27–31):*\n🚀 *Launch prep* — QA'ing the workbench + updating the marketing-site tour to match\n📊 *Data & analytics* — shoring up the launch dashboard (North Star); syncing w/ James, then Josh & Alan\n🎬 *Marvin Minute* — refreshing with the latest messaging → https://blackandrainbow.github.io/lauren-weekly/marvin-minute/\n📄 *Docs & admin* — tightening the edges before launch\n🗂️ *Engagement site* — brought current: the analytics dashboard + guided demo are now live for the team (ping me for the link)\n\n🏆 *Last week* we landed the brand (\"Know your business\"), a new animated landing page, a 90-second guided demo, and the competitive analysis — it's all on the dashboard.\n\n👀 *Dashboard:* https://blackandrainbow.github.io/lauren-weekly/\n📎 *Deep dive:* I've attached a zip to this post with the full strategy docs.\n\nFresh update every Monday. 🙌"
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
