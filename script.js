document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navlinks');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});
window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
});
