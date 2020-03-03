window.addEventListener("load", () => {
  const tabs = document.querySelector(".tabs-wrapper .tabs");
  tabs.addEventListener("click", e => {
    if (e.target.classList.contains("tab")) {
      const tabId = e.target.getAttribute("data-tab-id");
      tabs
        .querySelectorAll(".tab.active")
        .forEach(tab => tab.classList.remove("active"));
      e.target.classList.add("active");

      const tabsContainer = document.querySelector(".tabs-container");
      tabsContainer.querySelector(".active").classList.remove("active");
      tabsContainer
        .querySelector(`[data-tab-id='${tabId}']`)
        .classList.add("active");
    }
  });
});
