// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
  navMenu.classList.toggle("active");
};

// MOBILE SUBMENU
document.querySelectorAll(".dropdown > a").forEach(item => {
  item.addEventListener("click", e => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      item.parentElement.classList.toggle("active");
    }
  });
});

// SCROLL EFFECT
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
