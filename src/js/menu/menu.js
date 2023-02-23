import modalsInfo from "./info.json";
const modals = document.querySelector('.modals');
const changeModalVisibility = (modals, word) => {
    modals.classList.toggle(word.active);
};

modalsInfo.forEach(word => {
    if (word.active === "modals--mobile-menu") {
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            if (width >= 1000) {
                modals.classList.remove('modals--mobile-menu');
            }
        });
    }

    const currModal = modals.querySelector(word.modal);
    const cross = currModal.querySelector(word.cross);
    cross.addEventListener('click', changeModalVisibility.bind(null, modals, word));
    const buttons = document.querySelectorAll(word.button);
    buttons.forEach(e => {
        e.addEventListener('click', changeModalVisibility.bind(null, modals, word));
    });

});
