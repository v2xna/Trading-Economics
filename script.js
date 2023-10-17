const btnDropdown = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

btnDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  if (dropdownMenu.classList.contains("open")) {
    dropdownMenu.classList.remove("open");
  } else {
    dropdownMenu.classList.add("open");
  }
});

document.addEventListener("click", (e) => {
  if (e.target === btnDropdown) return;
  dropdownMenu.classList.remove("open");
});

dropdownMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
