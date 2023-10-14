const btnDropdown = document.querySelector("#dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu");

btnDropdown.addEventListener("click", () => {
  dropdownMenu.classList.add("open");
});
