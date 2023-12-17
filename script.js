const btnDropDown = document.querySelectorAll(".dropdown-btn");
const menuDropdown = document.querySelectorAll(".dropdown-menu");

const closeAllDropdownMenus = function () {
  menuDropdown.forEach(function (menu) {
    menu.classList.add("hidden");
  });
};

btnDropDown.forEach(function (btn, i) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    closeAllDropdownMenus();
    menuDropdown[i].classList.toggle("hidden");
  });
});

document.body.addEventListener("click", function (e) {
  const isDropdownButton = e.target.matches(".dropdown-btn");
  const isDropdownMenu = e.target.matches(".dropdown-menu");

  if (!isDropdownButton && !isDropdownMenu) {
    closeAllDropdownMenus();
  }
});

// if dropdown menu is open and user clicks another dropdown close the previous automatically
