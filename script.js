// Navbar effect while scrolling
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > navbarHeight + navbarHeight) {
    navbar.classList.add('navbar-scrolled');
    navbar.style.top = '0';
    navbar.style.transition = '0.5s ease-in-out';
  } else {
    navbar.style.top = '-3.5rem';
    navbar.classList.remove('navbar-scrolled');
  }
  if (scrollPosition === 0) {
    navbar.style.top = '0';
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

const navLinks = document.querySelectorAll(['.navbar-nav .nav-link', '.contact-btn .nav-link', '.my-projects', '.hire-me a', '.lets-talk']);

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    const duration = 500;
    smoothScroll(target, duration);
  });
});

// Hide navbar toggler when clicked 
document.querySelectorAll(['.navbar-nav .nav-link', '.contact-btn .nav-link']).forEach(
  function (link) {
    link.addEventListener('click', function () {
      if (window.innerWidth < 992) {
        document.querySelector('.navbar-collapse').classList.remove('show');
      }
    });
  });

// typing animation in hero section
function typeWriter(sentence, containerId, callback) {
  document.getElementById(containerId);
  const textElement = document.getElementById('text');
  const cursorElement = document.getElementById('cursor');

  let charIndex = 0;
  textElement.textContent = '';
  cursorElement.style.display = 'block';

  const typingInterval = setInterval(() => {
    if (charIndex < sentence.length) {
      textElement.textContent += sentence[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);
      cursorElement.style.display = 'none';
      setTimeout(() => {
        textElement.textContent = '';
        callback();
      }, 2000);
    }
  }, 70);
}

const sentences = [
  'Front-end web developer',
  'UI/UX designer',
  'Freelancer',
];

let index = 0;

function typeSentences() {
  if (index < sentences.length) {
    typeWriter(sentences[index], 'text-container', typeSentences);
    index++;
  } else {
    index = 0;
    typeSentences();
  }
}

typeSentences();

// textare auto resize height
function adjustTextareaHeight() {
  const textarea = document.getElementById('text-area');
  textarea.style.height = 'auto';

  textarea.style.height = textarea.scrollHeight + 'px';
}

// Remove the inputted data in form after the submit button is clicked
document.getElementById("myForm").addEventListener("submit", function (event) {

  setTimeout(function () {
    document.getElementById("myForm").reset();
  }, 2000);
});


function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScrollAnimation(containers) {
  containers.forEach(container => {
    const elements = document.querySelectorAll(container);
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('show');
      }
    });
  });
}

function scrollAnimationOnce(containers) {
  handleScrollAnimation(containers);
  window.removeEventListener('scroll', scrollAnimationOnce);
}

window.addEventListener('scroll', () => {
  scrollAnimationOnce(['.animated-element']);
  scrollAnimationOnce(['.animated-name']);
});

scrollAnimationOnce(['.animated-element']);
scrollAnimationOnce(['.animated-name']);

const skillContent = document.querySelectorAll('.skills-content')

skillContent.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'rotate(10deg)'
    box.style.transition = '0.1s ease-in'
  })
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'rotate(-10deg)'
    box.style.transition = '0.3s ease-out'
    setTimeout(() => box.style.transform = 'rotate(0deg)', 200)
  })
})

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;