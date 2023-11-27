const btnDropDown = document.querySelectorAll(".dropdown-btn");
const divDropdown = document.querySelectorAll(".dropdown-menu");

for (let i = 0; i < btnDropDown.length; i++) {
  btnDropDown[i].addEventListener("click", function () {
    if (divDropdown[i].classList.contains("hidden")) {
      divDropdown[i].classList.remove("hidden");
    } else {
      divDropdown[i].classList.add("hidden");
    }
  });
}
