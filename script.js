// Navbar effect while scrolling
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Smooth scroll animation with overshoot effect
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;
  const container = document.documentElement;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    // Modify the easing function here for the desired effect
    if (timeElapsed < duration) {
      const progress = timeElapsed / duration;
      const overshoot = Math.sin(progress * (Math.PI / 2)); // Adjust overshoot strength
      const ease = startPosition + distance * overshoot;
      container.scrollTo(0, ease);
      requestAnimationFrame(animation);
    } else {
      container.scrollTo(0, targetPosition);
    }
  }

  requestAnimationFrame(animation);
}

const navLinks = document.querySelectorAll(['.navbar-nav .nav-link', '.contact-btn .nav-link', '.my-projects a']);

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
  textarea.style.height = 'auto'; // Reset the height to auto to recalculate

  // Set the new height to fit the content
  textarea.style.height = textarea.scrollHeight + 'px';
}

// Get the current year
const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;