document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

    var target = document.querySelector(this.getAttribute('href'));
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var offset = target.offsetTop - navbarHeight;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
    });
});

document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 992) {
        document.querySelector('.navbar-collapse').classList.remove('show');
      }
    });
  });