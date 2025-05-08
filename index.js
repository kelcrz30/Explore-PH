document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('animate', entry.isIntersecting);
        });
    }, { 
        threshold: 0.25,
        rootMargin: '0px' 
    });

    cards.forEach(card => observer.observe(card));
});

document.querySelector('.travel-btn').addEventListener('click', function () {
    const target = document.querySelector('#featured');
    const offset = -700; // Change this number for more/less scroll adjustment
    const position = target.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  });