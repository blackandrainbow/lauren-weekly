/* =========================================================================
   Shared rendering — used by BOTH index (current week) and archive (any week)
   so the report always looks identical wherever it appears.
   ========================================================================= */

const STATUS = {
  active:   { label: "In progress", cls: "st-active" },
  shipping: { label: "Shipping",    cls: "st-shipping" },
  planning: { label: "Shaping",     cls: "st-planning" },
  done:     { label: "Done",        cls: "st-done" }
};

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function laneCard(lane) {
  const st = STATUS[lane.statusType] || STATUS.active;
  const items = lane.items.map((i) => `<li>${esc(i)}</li>`).join("");
  return `
    <article class="lane">
      <header class="lane-head">
        <span class="lane-emoji" aria-hidden="true">${esc(lane.emoji || "•")}</span>
        <h3 class="lane-name">${esc(lane.name)}</h3>
        <span class="pill ${st.cls}">${esc(lane.status || st.label)}</span>
      </header>
      <p class="lane-summary">${esc(lane.summary)}</p>
      <ul class="lane-items">${items}</ul>
    </article>`;
}

function shippedList(shipped) {
  if (!shipped || !shipped.length) return "";
  const rows = shipped
    .map(
      (s) => `
      <li class="ship-row">
        <span class="ship-check" aria-hidden="true">✓</span>
        <span><strong>${esc(s.title)}</strong>${s.note ? ` — <span class="muted">${esc(s.note)}</span>` : ""}</span>
      </li>`
    )
    .join("");
  return `
    <section class="block">
      <h2 class="block-title">Shipped</h2>
      <ul class="ship-list">${rows}</ul>
    </section>`;
}

function onDeckList(onDeck) {
  if (!onDeck || !onDeck.length) return "";
  const rows = onDeck.map((i) => `<li>${esc(i)}</li>`).join("");
  return `
    <section class="block">
      <h2 class="block-title">On deck</h2>
      <ul class="deck-list">${rows}</ul>
    </section>`;
}

/* Renders one whole week report as an HTML string. */
function renderWeek(week) {
  const lanes = week.lanes.map(laneCard).join("");
  const slackAttr = esc(week.slack || "");
  return `
    <div class="report-inner">
      <div class="report-head">
        <div class="wk-tag">Week ${esc(week.number)}</div>
        <div class="wk-dates">${esc(week.dateRange)}</div>
      </div>

      <h1 class="report-headline">${esc(week.headline)}</h1>
      ${week.tldr ? `<p class="report-tldr">${esc(week.tldr)}</p>` : ""}

      <div class="slack-bar">
        <button class="btn-copy js-copy-slack" type="button" data-slack="${slackAttr}">
          <span class="js-copy-label">Copy Slack update</span>
        </button>
        <button class="btn-ghost js-toggle-slack" type="button">Preview text</button>
      </div>
      <pre class="slack-preview js-slack-preview" hidden>${esc(week.slack || "")}</pre>

      <div class="lanes">${lanes}</div>

      <div class="two-col">
        ${shippedList(week.shipped)}
        ${onDeckList(week.onDeck)}
      </div>
    </div>`;
}

/* One delegated handler powers the copy + preview buttons on any page. */
function initReportInteractions() {
  document.addEventListener("click", function (e) {
    const copyBtn = e.target.closest(".js-copy-slack");
    if (copyBtn) {
      const text = copyBtn.getAttribute("data-slack") || "";
      copyText(text, copyBtn);
      return;
    }
    const toggle = e.target.closest(".js-toggle-slack");
    if (toggle) {
      // Scope to this week's report so multiple reports on a page don't collide.
      const scope = toggle.closest(".report") || document;
      const pre = scope.querySelector(".js-slack-preview");
      if (pre) pre.hidden = !pre.hidden;
      toggle.textContent = pre && !pre.hidden ? "Hide text" : "Preview text";
    }
  });
}

function copyText(text, btn) {
  const label = btn.querySelector(".js-copy-label");
  const done = () => {
    if (label) label.textContent = "Copied ✓";
    setTimeout(() => { if (label) label.textContent = "Copy Slack update"; }, 1800);
  };
  // Secure-context path (GitHub Pages / https)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

/* Works on file:// where the async clipboard API is blocked. */
function fallbackCopy(text, done) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand("copy"); } catch (err) { /* no-op */ }
  document.body.removeChild(ta);
  done();
}
