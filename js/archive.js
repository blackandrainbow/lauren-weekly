/* archive.html — numbered log of every week; open any one. */
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("week-nav");

  // Which week to show: ?w=N, else the most recent.
  const wanted = Number(new URLSearchParams(window.location.search).get("w"));
  let current = WEEKS.find((w) => w.number === wanted) || WEEKS[0];

  // Build the sidebar list (newest first).
  nav.innerHTML = WEEKS.map(function (w) {
    const active = w.number === current.number ? " is-active" : "";
    const tag = w.number === WEEKS[0].number ? '<span class="nav-now">current</span>' : "";
    return `
      <a class="nav-week${active}" href="?w=${w.number}">
        <span class="nav-num">Week ${w.number}</span>
        <span class="nav-range">${w.dateRange}</span>
        ${tag}
      </a>`;
  }).join("");

  document.getElementById("report").innerHTML = renderWeek(current);
  initReportInteractions();
});
