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
          "Built out the client-segmentation strategy — including a framework for how we pitch to each segment.",
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
      "👋 Starting something new — a weekly snapshot of what I'm working on, so you all have visibility into the strategy / product / brand work that usually happens in the background.\n\nIt was a big pre-launch week:\n\n🧭 *Strategy* — refreshed the value-prop + business-value canvases, built out client segmentation, and started a metrics/tracking plan for launch\n🛠️ *Product* — shipped a bunch to the snapshot & workbench: new search, premium Core+ chips, new Marvin's Analysis, and dual-scenario monitoring\n🎬 *Launch* — new Marvin Minute ready for Monday + prepping our messaging strategy (w/ Alan & Jon)\n🚀 *New* — built this dashboard so you can follow along\n\nCheck it out 👉 https://blackandrainbow.github.io/lauren-weekly/\nI'll drop a fresh one every Monday. 🙌"
  }
];
