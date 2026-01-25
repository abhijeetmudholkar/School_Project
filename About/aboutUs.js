// LOAD NAVBAR
fetch("../navbar/navBar.html")
  .then(res => res.text())
  .then(data => document.getElementById("navbar").innerHTML = data);

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{ threshold:0.15 });

reveals.forEach(el => observer.observe(el));
