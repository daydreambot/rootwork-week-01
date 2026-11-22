const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-menu');
const navLinks = document.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open');

    const isOpen = nav.classList.contains('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen)
});

//To close the menu when any navigation link is clicked
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    });
});



