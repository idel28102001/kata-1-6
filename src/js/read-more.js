
const description = document.querySelector('.information__description');
const button = document.querySelector('.information__button');
const classText = 'information__description--exposed';
const func = () => {
    const wholeHeight = description.scrollHeight - 5;
    const visibleHeight = description.offsetHeight;
    if (wholeHeight <= visibleHeight && !description.classList.contains(classText)) {
        button.style.display = 'none';
    } else {
        button.style.display = 'flex';
    }
}
button.addEventListener('click', () => {
    description.classList.toggle(classText);
    func();
});
func()
window.addEventListener('resize', func);
