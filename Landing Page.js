const hamburger = document.getElementById("menu");
const mobileMenu = document.querySelector(".mobile-menu");

const navButton1 = document.querySelector(".nav-btn1");
const navButton2 = document.querySelector(".nav-btn2");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

navButton1.addEventListener("click", () => {
  window.location.href = `LocalConnect_Onboarding.html`;
});
navButton2.addEventListener("click", () => {
  window.location.href = `LocalConnect_Onboarding.html`;
});