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
// testimonial
 document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector('.testimonial-track');
  const items = document.querySelectorAll('.testimonial-item');
  const dotsContainer = document.querySelector('.dots');

  if (!track || items.length === 0) return;

  let index = 0;

  // CREATE DOTS
  items.forEach((item, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      index = i;
      updateSlider();
    });
  });

  const dots = dotsContainer.querySelectorAll('span');

  function updateSlider() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');
  }

  // AUTO SLIDE (NOW WORKING)
  setInterval(() => {
    index++;
    if (index >= items.length) index = 0;
    updateSlider();
  }, 4000);

});

// news
//  function showImage(src){
//   document.getElementById("modalImage").src = src;
// }

function openNews(img){
  const modalImg = document.getElementById("modalImage");
  modalImg.src = img.src;

  const modal = new bootstrap.Modal(
    document.getElementById("imageModal")
  );
  modal.show();
}
