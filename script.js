const btnDropDown = document.querySelectorAll(".dropdown-btn");
const menuDropdown = document.querySelectorAll(".dropdown-menu");
const overlay = document.querySelector(".overlay");

btnDropDown.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    menuDropdown[i].classList.toggle("hidden");
    overlay.classList.toggle("hidden");
  });
});
