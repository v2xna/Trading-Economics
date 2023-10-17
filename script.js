const btnDropdown = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

btnDropdown.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.add("open");
});

document.addEventListener("click", (e) => {
  if (e.target === btnDropdown) return;
  dropdownMenu.classList.remove("open");
});

dropdownMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});
