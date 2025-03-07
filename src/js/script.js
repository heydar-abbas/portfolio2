// const toggle_menu = document.querySelector(".toggle-menu");
const icon = document.querySelector(".mdi--hamburger-menu");
const nav_list = document.querySelector(".nav-list");

document.querySelector(".toggle-menu").addEventListener("click", function () {
  if (icon.classList.contains("mdi--hamburger-menu")) {
    icon.classList.replace("mdi--hamburger-menu", "mdi--window-close");
    nav_list.classList.add("open-menu");
  } else {
    icon.classList.replace("mdi--window-close", "mdi--hamburger-menu");
    nav_list.classList.remove("open-menu");
  }
});

console.log(import.meta.env);
