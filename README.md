# Lauren's Week — Relativity6 weekly update

A tiny, self-contained dashboard that gives the R6 team visibility into the
brand / content / product-strategy work happening in the background. One page
shows **this week**; the archive keeps every past week, numbered.

- **`index.html`** — the current week (always shows the newest entry).
- **`archive.html`** — numbered log of every week; deep-link with `?w=3`.
- **`js/data.js`** — the single source of truth. This is the only file you edit each week.

Everything renders from `data.js`, so there's nothing to rebuild — edit the data, refresh, done.

---

## The Monday ritual (30 seconds)

1. Open **`js/data.js`** and add ONE new object to the **top** of the `WEEKS` array
   (or just tell Claude "add this week: …" and it'll do it). Bump `number` by 1.
2. On the page, hit **Copy Slack update**, paste into your team channel, and drop the link in.
3. Commit + push (below). The old week auto-archives the moment the new one sits above it.

```bash
git add -A && git commit -m "Week N update" && git push
```

Each week object looks like this (statuses: `active` · `shipping` · `planning` · `done`):

```js
{
  number: 2,
  weekOf: "2026-07-27",
  dateRange: "Jul 27 – 31, 2026",
  headline: "One line that sums up the week.",
  tldr: "A sentence or two of context.",
  lanes: [
    { name: "Brand & Design System", emoji: "🎨", status: "In progress",
      statusType: "active", summary: "…", items: ["…", "…"] }
    // …more lanes
  ],
  shipped: [ { title: "…", note: "…" } ],
  onDeck:  [ "…", "…" ],
  slack:   "The ready-to-paste Slack message. Put [PASTE LINK] where the URL goes."
}
```

---

## One-time GitHub Pages setup (gets you the shareable link)

1. Create a new **empty** repo on GitHub, e.g. `lauren-weekly` (public or private —
   private repos can still use Pages on paid plans).
2. From this folder:
   ```bash
   git init
   git add -A
   git commit -m "Initial weekly dashboard"
   git branch -M main
   git remote add origin https://github.com/<your-username>/lauren-weekly.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   pick **`main`** / **`/ (root)`**, Save.
4. Wait ~1 minute. Your link is:
   `https://<your-username>.github.io/lauren-weekly/`
5. Share that link with the team — it always shows the current week. Bookmark it once; it never changes.

> The repo is already initialized locally with a first commit (see below), so you can skip
> straight to step 1 + `git remote add` + `git push`.

---

## Local preview

Just double-click `index.html` — it runs straight from the file system, no server needed.
(The **Copy** button falls back to a copy shim on `file://`; on the live Pages URL it uses the
native clipboard.)
