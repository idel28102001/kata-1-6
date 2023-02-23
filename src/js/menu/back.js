const modals = document.querySelector('.modals');
const back = modals.querySelector('.modals__back');
back.addEventListener('click', (e) => {
    modals.className = 'modals';
});