/* Only local appearance preference and a user-requested feed-link copy. */
(() => {
  const root = document.documentElement;
  const button = document.getElementById("appearance");
  const label = document.getElementById("appearance-label");
  const themes = ["system", "light", "dark"];
  let theme = "system";
  try {
    const saved = localStorage.getItem("autoaudio-appearance");
    if (themes.includes(saved)) theme = saved;
  } catch { /* System appearance remains available without storage. */ }
  function applyTheme() {
    if (theme === "system") delete root.dataset.theme;
    else root.dataset.theme = theme;
    if (label) label.textContent = theme[0].toUpperCase() + theme.slice(1);
    if (button) button.setAttribute("aria-label", `Appearance: ${theme}. Change appearance.`);
  }
  applyTheme();
  if (button) {
    button.hidden = false;
    button.addEventListener("click", () => {
      theme = themes[(themes.indexOf(theme) + 1) % themes.length];
      applyTheme();
      try { localStorage.setItem("autoaudio-appearance", theme); } catch { /* Optional. */ }
    });
  }
  const copy = document.getElementById("copy-feed");
  const status = document.getElementById("copy-status");
  const feed = "https://msitarzewski.github.io/AutoAudio/feed.xml";
  if (copy && status && navigator.clipboard?.writeText) {
    copy.hidden = false;
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(feed);
        status.textContent = "Feed link copied. Add it to your RSS reader.";
      } catch {
        status.textContent = `Feed link: ${feed}`;
      }
    });
  }
})();
