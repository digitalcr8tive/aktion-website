const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.classList.toggle('is-open', !open);
    navLinks.classList.toggle('is-open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.classList.remove('is-open');
      navLinks.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });
}

const bookingForm = document.querySelector('[data-booking-form]');
if (bookingForm) {
  const dateInput = bookingForm.querySelector('[name="preferred_date"]');
  const status = bookingForm.querySelector('[data-form-status]');
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
  dateInput.min = localToday;

  bookingForm.addEventListener('submit', (event) => {
    const endpoint = bookingForm.getAttribute('action');
    if (endpoint.includes('REPLACE_WITH_BUSINESS_EMAIL')) {
      event.preventDefault();
      status.textContent = 'Booking is ready to connect. Add the business email to the FormSubmit endpoint before launch.';
      status.className = 'form-status is-error';
      status.focus();
    }
  });
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});
