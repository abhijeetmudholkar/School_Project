/* =========================
   SCROLL REVEAL SCRIPT
========================= */


document.addEventListener("DOMContentLoaded", function () {

  const revealItems = document.querySelectorAll(".scroll-reveal");

  const revealOnScroll = new IntersectionObserver(
    function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  revealItems.forEach(item => {
    revealOnScroll.observe(item);
  });

});
// scroll badge
let lastScrollTop = 0;
const badge = document.getElementById('scrollBadge');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 50) {
    // Scrolling down → show badge
    badge.classList.add('show');
    badge.classList.remove('hide');
  } else {
    // Scrolling up → hide badge
    badge.classList.add('hide');
    badge.classList.remove('show');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


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

const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 800);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}
// news
 function showImage(src) {
    document.getElementById("modalImage").src = src;
  }


  // msges
//  const whgsCards = document.querySelectorAll('.whgs-message-card');
//   let whgsIndex = 0;

//   setInterval(() => {
//     whgsCards[whgsIndex].classList.remove('active');
//     whgsIndex = (whgsIndex + 1) % whgsCards.length;
//     whgsCards[whgsIndex].classList.add('active');
//   }, 5000); // change every 5 sec
