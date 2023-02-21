const description = document.querySelector('.information__description');
const button = document.querySelector('.information__button');
button.addEventListener('click', () => {
    description.classList.toggle('information__description--exposed');
});