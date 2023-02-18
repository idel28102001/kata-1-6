
const menu = document.querySelector('.mobile-menu');
const burgerOpen = document.querySelector('.header__burger');
const burgerClose = document.querySelector('.menu-header__button');

burgerOpen.addEventListener('click', () => {
    menu.classList.add('mobile-menu--active');
});
burgerClose.addEventListener('click', () => {
    menu.classList.remove('mobile-menu--active');
});
