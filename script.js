// Navbar effect while scrolling
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Smooth scrolling function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const ease = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, ease);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Easing function
  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }

  requestAnimationFrame(animation);
}

const navLinks = document.querySelectorAll(['.navbar-nav .nav-link', '.contact-btn .nav-link', '.my-projects a', '.hire-me a', '.lets-talk a']);

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    const duration = 500;
    smoothScroll(target, duration);
  });
});

// Hide navbar toggler when clicked 
document.querySelectorAll(['.navbar-nav .nav-link', '.contact-btn .nav-link']).forEach(function(link) {
  link.addEventListener('click', function() {
    if (window.innerWidth < 992) {
      document.querySelector('.navbar-collapse').classList.remove('show');
    }
  });
});

// textare auto resize height
function adjustTextareaHeight() {
  const textarea = document.getElementById('text-area');
  textarea.style.height = 'auto';

  textarea.style.height = textarea.scrollHeight + 'px';
}

// Remove the inputted data in form after the submit button is clicked
document.getElementById("myForm").addEventListener("submit", function(event) {

  setTimeout(function() {
    document.getElementById("myForm").reset();
  }, 2000);
});

// Get the current year
const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;