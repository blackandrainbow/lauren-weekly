/* =========================================================================
   THE SOURCE OF TRUTH
   -------------------------------------------------------------------------
   Every Monday, add ONE new object to the TOP of this array (newest first).
   - index.html always shows WEEKS[0] (the current week).
   - archive.html lists every week and can open any of them.
   The previous week auto-archives the moment a newer one sits above it.

   STATUS TYPES (drive the colored pill): "active" | "shipping" | "planning" | "done"
   ========================================================================= */

const WEEKS = [
  {
    number: 2,
    weekOf: "2026-07-20",
    dateRange: "Jul 20 – 24, 2026",
    headline: "Turning launch strategy into shipped systems.",
    tldr:
      "The Marvin Minute launch edition goes out this week. Coming out of Monday's messaging session with Alan and Jon, the rest of the week is about locking the launch narrative and getting the systems around it production-ready — the tour, the PDF export, the design system, and the product-strategy dashboard.",
    lanes: [
      {
        name: "Messaging & Launch Strategy",
        emoji: "🎯",
        status: "In progress",
        statusType: "active",
        summary: "Locking how we talk about Marvin at launch.",
        items: [
          "Marvin Minute — launch edition going out this week.",
          "Turning Monday's messaging-strategy session with Alan and Jon into a clear, shared launch narrative.",
          "Aligning the segment pitch playbook with the final messaging."
        ]
      },
      {
        name: "Snapshot & Workbench",
        emoji: "🛠️",
        status: "In progress",
        statusType: "active",
        summary: "Bringing the surrounding experience up to match last week's product ships.",
        items: [
          "Updating the product tour to reflect the new search, Core+ chips, Marvin's Analysis, and monitoring.",
          "Updating the PDF export."
        ]
      },
      {
        name: "Brand & Design System",
        emoji: "🎨",
        status: "In progress",
        statusType: "active",
        summary: "Making the design system official.",
        items: [
          "Formally establishing the design system so everything we build draws from one source."
        ]
      },
      {
        name: "Product Vision & Strategy",
        emoji: "🧭",
        status: "In progress",
        statusType: "active",
        summary: "Getting the strategy work in front of the team.",
        items: [
          "Getting the product-strategy dashboard live."
        ]
      }
    ],
    shipped: [],
    onDeck: [],
    slack:
      "👋 *Week 2* — here's where my focus is this week:\n\n🎬 *Marvin Minute* — the launch edition goes out this week\n🎯 *Messaging & launch* — turning Monday's session with Alan & Jon into our launch narrative\n🛠️ *Product* — updating the tour + PDF export to match last week's snapshot/workbench upgrades\n🎨 *Design system* — making it official, one source for everything we build\n🧭 *Strategy* — getting the product-strategy dashboard live\n\n👀 *Peek:* the dashboard → https://blackandrainbow.github.io/lauren-weekly/\n📎 *Deep dive:* strategy docs are attached as a zip — open index.html and poke around when you have time.\n\nMore as it ships this week. 🙌"
  },
  {
    number: 1,
    weekOf: "2026-07-13",
    dateRange: "Jul 13 – 17, 2026",
    headline: "Launch prep in high gear — strategy, product, and story all moving at once.",
    tldr:
      "A heavy pre-launch week: refreshed the core strategy canvases and client segmentation, shipped a wave of snapshot & workbench upgrades, and got launch content and messaging rolling. Also stood up this dashboard so you can follow the background work from here on.",
    lanes: [
      {
        name: "Product Vision & Strategy",
        emoji: "🧭",
        status: "In progress",
        statusType: "active",
        summary:
          "Sharpening who Marvin is for and how we take it to market at launch.",
        items: [
          "Updated the value proposition canvas and the business value canvas.",
          "Built out the client-segmentation strategy — including the segment pitch playbook for how we go after each segment.",
          "Started a metrics & tracking strategy for launch, plus a first look at the usage dashboard."
        ]
      },
      {
        name: "Snapshot & Workbench",
        emoji: "🛠️",
        status: "Shipped",
        statusType: "shipping",
        summary:
          "A wave of product improvements landed in the snapshot and workbench.",
        items: [
          "New search interface + premium Core+ chips.",
          "New Marvin's Analysis view.",
          "Monitoring interface built for two different scenarios."
        ]
      },
      {
        name: "Content & Launch",
        emoji: "🎬",
        status: "In progress",
        statusType: "active",
        summary: "Getting the launch story and content ready to go.",
        items: [
          "Brainstormed and built a new Marvin Minute for launch — ready Monday.",
          "Prepping for a messaging-strategy meeting Monday with Alan and Jon."
        ]
      },
      {
        name: "Brand & Design System",
        emoji: "🎨",
        status: "In progress",
        statusType: "active",
        summary: "Tightening the system everything else is built on.",
        items: [
          "Updated the design skill.",
          "Laying groundwork to formally establish the design system (landing next week)."
        ]
      }
    ],
    shipped: [
      { title: "Snapshot & workbench improvements", note: "New search interface, premium Core+ chips, new Marvin's Analysis, dual-scenario monitoring." },
      { title: "This weekly-update dashboard", note: "Live on GitHub Pages — a standing window into what I'm working on, updated every Monday." },
      { title: "Updated the design skill", note: "Keeping our build system current." },
      { title: "Invoices prepped", note: "Ready to hand off Monday." }
    ],
    onDeck: [
      "Land the messaging & launch strategy out of Monday's meeting with Alan and Jon.",
      "Update the product tour to match the new snapshot/workbench changes.",
      "Update the PDF export.",
      "Formally establish the design system.",
      "Get the product-strategy dashboard live."
    ],
    slack:
      "👋 Starting something new — a weekly snapshot of what I'm working on, so you all have visibility into the strategy / product / brand work that usually happens in the background.\n\nIt was a big pre-launch week:\n\n🧭 *Strategy* — refreshed the value-prop + business-value canvases, built out client segmentation, and started a metrics/tracking plan for launch\n🛠️ *Product* — shipped a bunch to the snapshot & workbench: new search, premium Core+ chips, new Marvin's Analysis, and dual-scenario monitoring\n🎬 *Launch* — new Marvin Minute ready for Monday + prepping our messaging strategy (w/ Alan & Jon)\n🚀 *New* — built this dashboard so you can follow along\n\n👀 *Peek:* the dashboard → https://blackandrainbow.github.io/lauren-weekly/\n📎 *Deep dive:* I've attached a zip with the full strategy docs — open index.html and explore whenever you have time.\n\nFresh update every Monday. 🙌"
  }
];
