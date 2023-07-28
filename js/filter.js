document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".main-btn");
  const portfolioItems = document.querySelectorAll(".main-item");

  function filterPortfolioItems(filterValue) {
    portfolioItems.forEach((item) => {
      switch (filterValue) {
        case "all":
          item.style.display = "block";
          break;
        case "web site":
          item.style.display = item.classList.contains("web-site")
            ? "block"
            : "none";
          break;
        case "app":
          item.style.display = item.classList.contains("app")
            ? "block"
            : "none";
          break;
        case "design":
          item.style.display = item.classList.contains("design")
            ? "block"
            : "none";
          break;
        case "marketing":
          item.style.display = item.classList.contains("marketing")
            ? "block"
            : "none";
          break;
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.textContent.toLowerCase();
      filterPortfolioItems(filterValue);
    });
  });
});
