const btnDropDown = document.querySelectorAll(".dropdown-btn");
const menuDropdown = document.querySelectorAll(".dropdown-menu");
const btnAccordion = document.querySelectorAll(".accordion");
const panel = document.querySelectorAll(".panel");

// let openPanelIndex = null;

const closeAllDropdownMenus = function (el) {
  el.forEach(function (menu) {
    menu.classList.add("hidden");
  });
};

btnDropDown.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    closeAllDropdownMenus(menuDropdown);
    menuDropdown[i].classList.toggle("hidden");
  });
});

document.body.addEventListener("click", function (e) {
  const isDropdownButton = e.target.matches(".dropdown-btn");
  const isDropdownMenu = e.target.matches(".dropdown-menu");

  if (!isDropdownButton && !isDropdownMenu) {
    closeAllDropdownMenus(menuDropdown);
  }
});

// btnAccordion.forEach(function (btn, i) {
//   btn.addEventListener("click", function () {
//     // Check if there is an open panel
//     if (openPanelIndex !== null && openPanelIndex !== i) {
//       panel[openPanelIndex].classList.add("hidden"); // Close the currently open panel
//     }

//     // Toggle the clicked panel
//     panel[i].classList.toggle("hidden");

//     // Update the openPanelIndex
//     openPanelIndex = panel[i].classList.contains("hidden") ? null : i;
//   });
// });
