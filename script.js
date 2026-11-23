const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-menu');
const navLinks = document.querySelectorAll('#main-menu a');
const contactForm =document.getElementById('contact-form');
const contactName = document.getElementById('user-name');
const contactMail = document.getElementById('user-email');
const contactMessage = document.getElementById('user-message');

if (menuToggle && nav) {



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
};

if (contactForm && contactName && contactMail && contactMessage) {

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const trimmedName = contactName.value.trim();
    const trimmedMail = contactMail.value.trim();
    const trimmedMessage = contactMessage.value.trim();

    const nameError = document.getElementById('name-error');
    const mailError = document.getElementById('email-error');
    const msgError = document.getElementById('message-error');
    const submitStatus = document.querySelector('[role="status"]');

    let isValid = true;

    if (trimmedName === '') {
        if (nameError) {
        nameError.textContent = 'Please enter your name.';
        };
        contactName.setAttribute('aria-invalid', 'true');
        isValid = false;
    }

    else {
        if (nameError) {
        nameError.textContent = "";
        };
        contactName.removeAttribute("aria-invalid")
    };
    

    if (trimmedMail === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedMail)) {
        if (mailError) {
        mailError.textContent = 'Enter a valid email address!';
        };
        contactMail.setAttribute('aria-invalid', 'true');
        isValid =false;
    }

    else {
        if (mailError) {
        mailError.textContent = "";
        };
        contactMail.removeAttribute("aria-invalid")
    };

    if (trimmedMessage === '') {
        if (msgError) {
        msgError.textContent = 'Please enter a message.';
        };
        contactMessage.setAttribute('aria-invalid', 'true');
        isValid = false;
    }

    else {
        if (msgError) {
        msgError.textContent = "";
        };
        contactMessage.removeAttribute("aria-invalid")
    }

    

    if (!isValid) {
        if (submitStatus) {
        submitStatus.textContent ="";
        };
        const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
        
        if (firstInvalid) {
            firstInvalid.focus();
        }
    } 
    else {
        if (nameError) {    
        nameError.textContent = "";
        };
        if (mailError) {
        mailError.textContent = "";
        };
        if (msgError) {
        msgError.textContent = "";
        };
        if (submitStatus) {
        submitStatus.textContent = `Thank you ${trimmedName}! Your message has passed validation demo. No email was sent`;
        contactForm.reset();
        };
    };

});

}


