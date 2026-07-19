/* index.html — front page shows the two most recent weeks, equal weight.
   (Older weeks live in the Archive.) */
document.addEventListener("DOMContentLoaded", function () {
  const latest = WEEKS.slice(0, 2);          // up to the two newest
  const labels = ["This week", "Last week"];

  document.getElementById("twoup").innerHTML = latest.map(function (wk, i) {
    return (
      '<div class="twoup-col">' +
        '<div class="col-label">' + labels[i] + '</div>' +
        '<section class="report">' + renderWeek(wk) + '</section>' +
      '</div>'
    );
  }).join("");

  document.getElementById("updated").textContent =
    "Updated " + formatUpdated(latest[0].weekOf);

  initReportInteractions();
});

function formatUpdated(iso) {
  const parts = iso.split("-");
  const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return d.toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric"
  });
}
