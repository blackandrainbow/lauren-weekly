/* index.html — always renders the current (latest) week. */
document.addEventListener("DOMContentLoaded", function () {
  const week = WEEKS[0];
  document.getElementById("report").innerHTML = renderWeek(week);
  document.getElementById("updated").textContent =
    "Updated " + formatUpdated(week.weekOf);
  initReportInteractions();
});

function formatUpdated(iso) {
  const parts = iso.split("-");
  const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return d.toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric"
  });
}
