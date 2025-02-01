function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".overlay");
  
    navMenu.classList.toggle("active"); // Show/hide menu
    overlay.classList.toggle("active"); // Show/hide overlay
  }
  
  // Close menu when clicking on the overlay
  document.querySelector(".overlay").addEventListener("click", function () {
    const navMenu = document.querySelector(".nav-menu");
    const overlay = document.querySelector(".overlay");
  
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  const scrollContainer = document.querySelector(".scroll-container");

function scrollLeft() {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
}

function scrollRight() {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
}