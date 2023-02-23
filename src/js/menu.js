const modals = document.querySelector('.modals');
{
    const burgerOpen = document.querySelector('.header__burger');
    const burgerClose = document.querySelector('.menu-header__button');

    burgerOpen.addEventListener('click', () => {
        modals.classList.toggle('modals--mobile-menu');
    });
    burgerClose.addEventListener('click', () => {
        modals.classList.toggle('modals--mobile-menu');
    });

    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        if (width >= 1000) {
            modals.classList.remove('modals--mobile-menu');
        }
    });

}

const words = [{ modal: ".modals__modal--feedback", active: 'modals--feedback', button: '.button--chat' },
{ modal: ".modals__modal--call", active: 'modals--call', button: '.button--call' }];
words.forEach(word => {
    const feedbackModal = modals.querySelector(word.modal);
    const cross = feedbackModal.querySelector('.modal__cross');
    const func = () => {
        modals.classList.toggle(word.active);
    };
    cross.addEventListener('click', func);

    const buttons = document.querySelectorAll(word.button);
    buttons.forEach(e => {
        e.addEventListener('click', func);
    });

});

const back = modals.querySelector('.modals__back');
back.addEventListener('click', (e) => {
    modals.className = 'modals';
});