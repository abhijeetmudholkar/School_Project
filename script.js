document.addEventListener("DOMContentLoaded", function () {

  const menuTrigger = document.querySelector(".menu-trigger");
  const nav = document.querySelector(".nav");
  const dropdownLink = document.querySelector(".has-sub > a");
  const header = document.querySelector(".header-area");

  /* Mobile menu toggle */
  menuTrigger.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  /* Mobile dropdown toggle */
  dropdownLink.addEventListener("click", function (e) {
    if (window.innerWidth <= 991) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    }
  });

  /* Header background on scroll */
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

});

