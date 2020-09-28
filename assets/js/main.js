const mobileToggleBtn = document.querySelector('.main-nav__mobile-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileToggleBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-nav-visible');
    mobileToggleBtn.classList.toggle('fa-times');
})