
const description = document.querySelector('.information__description');
const button = document.querySelector('.information__button');
const classText = 'information__description--exposed';
const checkTextHeight = () => {
    const wholeHeight = description.scrollHeight - 5;
    const visibleHeight = description.offsetHeight;
    if (wholeHeight <= visibleHeight && !description.classList.contains(classText)) {
        button.style.display = 'none';
    } else {
        button.style.display = 'flex';
    }
}
const timer = (n) => new Promise(res => setTimeout(res, n));
button.addEventListener('click', async () => {
    description.classList.toggle(classText);
    await timer(500);
    checkTextHeight();
});
checkTextHeight()
window.addEventListener('resize', checkTextHeight);
