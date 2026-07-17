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
    weekOf: "2026-07-20",
    dateRange: "Jul 20 – 24, 2026",
    headline: "Turning the background strategy work into shared, visible assets.",
    tldr:
      "Kicking off weekly visibility into the brand, content, and product-strategy work that usually happens off-screen. This week is about consolidating foundations so everything we ship looks and sounds like one Relativity6.",
    lanes: [
      {
        name: "Brand & Design System",
        emoji: "🎨",
        status: "In progress",
        statusType: "active",
        summary:
          "Consolidating a drifting brand into one coherent system so every surface reads as Relativity6.",
        items: [
          "Reconciling three token systems that had drifted apart into one canonical set — Onest / SUSE Mono type, Indigo Marvin, OKLCH color ramps.",
          "Shipped the component library + Storybook clone so the team has a single source of truth for UI.",
          "Packaged the design-system handoff (HANDOFF.md) as the entry point for James."
        ]
      },
      {
        name: "Content & Marketing Strategy",
        emoji: "✍️",
        status: "In progress",
        statusType: "active",
        summary:
          "Translating the product story into assets a non-technical buyer actually gets.",
        items: [
          "CS asset suite for Blake: four audience one-pager cuts (exec / technical / QBR / originations) plus an interactive Guided Demo.",
          "Landing page + snapshot-features updates (green track) shipped.",
          "Source taxonomy + Core+ badge system so messaging stays consistent across every page."
        ]
      },
      {
        name: "Product Vision & Strategy",
        emoji: "🧭",
        status: "Shaping",
        statusType: "planning",
        summary:
          "Sharpening who Marvin is for and the narrative that carries it.",
        items: [
          "Expanded the value-proposition canvas to four buyer profiles — Underwriter, Portfolio Owner, Broker / MGA, SMB Lender.",
          "Client Success hub concept: Customer Canvas + Client Book + Usage Dashboard, all off one shared data source.",
          "Snapshot renewals lifecycle + a hotel-style renewal calendar concept."
        ]
      },
      {
        name: "Client Delivery",
        emoji: "🚢",
        status: "Shipping",
        statusType: "shipping",
        summary: "The concrete things going out the door this cycle.",
        items: [
          "Snapshot renewals — demo and production versions both done.",
          "Tupelo renewal PDF delivered.",
          "marvin-asset-pack gallery assembled for Blake with live previews."
        ]
      }
    ],
    shipped: [
      { title: "Component library + Storybook clone", note: "Live Controls, Canvas / Code views, canonical tokens." },
      { title: "Design-system handoff (HANDOFF.md)", note: "Entry point packaged for James." },
      { title: "Snapshot renewals", note: "Demo + production both live." }
    ],
    onDeck: [
      "Sync with James on the red track (mocks, Tupelo shots, Core+ one-pager).",
      "Fold the 4 buyer profiles into the landing narrative.",
      "Design-system audit follow-ups from the token reconciliation."
    ],
    slack:
      "👋 Starting something new — a weekly snapshot of what I'm working on, so you all have visibility into the brand / content / product-strategy work that usually happens in the background.\n\n*This week (Week 1):*\n🎨 *Brand* — consolidating our design tokens into one system + shipped the component library\n✍️ *Content* — CS asset suite for Blake (4 audience cuts + guided demo) & landing page updates\n🧭 *Product* — expanded the value-prop canvas to 4 buyer profiles\n🚢 *Shipping* — snapshot renewals (demo + prod) now live\n\nFull dashboard 👉 https://blackandrainbow.github.io/lauren-weekly/\nI'll drop one of these every Monday. 🙌"
  }
];
