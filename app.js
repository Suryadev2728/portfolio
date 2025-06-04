const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const moonToggle = document.querySelector("#moonToggle");
const body = document.querySelector("body");
const hlinks = document.querySelectorAll("#hlink");

// Toggle menu when hamburger is clicked
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Hide menu when any link is clicked
hlinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

// Toggle dark mode when moon icon is clicked
moonToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
