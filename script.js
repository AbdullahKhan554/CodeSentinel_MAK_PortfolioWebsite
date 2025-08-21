// Navbar toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => navLinks.classList.toggle("active"));

// Scroll animations
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);

// Typing effect
const typingText = document.querySelector(".typing-text");
const roles = ["Web Developer","Frontend Developer","Backend Developer","MERN Stack Developer","Freelancer","Tech Enthusiast"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  let current = roles[roleIndex];
  if (!isDeleting) {
    typingText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) { isDeleting = true; setTimeout(typeEffect, 1500); return; }
  } else {
    typingText.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) { isDeleting = false; roleIndex = (roleIndex+1)%roles.length; }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 120);
}
typeEffect();
