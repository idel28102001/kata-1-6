import './styles/fonts.css';
import './styles/style.css';

{
  const menu = document.querySelector('.mobile-menu');
  const burgerOpen = document.querySelector('.header__burger');
  const burgerClose = document.querySelector('.mobile-header__button');

  burgerOpen.addEventListener('click', () => {
    menu.classList.add('mobile-menu--active');
  });
  burgerClose.addEventListener('click', () => {
    menu.classList.remove('mobile-menu--active');
  });
}

{
  const readMore = document.querySelector('.brands__button');
  const bar = document.querySelector('.brands__swiper');
  readMore.addEventListener('click', () => {
    bar.classList.toggle('swiper--exposed');
  });
}

let init = false;
let swiper = null;

const swiperCard = () => {


  if (window.innerWidth < 500) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        spaceBetween: 16,
        slidesPerView: 1.18,
        allowTouchMove: true,
        speed: 400,
        height: 72,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          350: {
            slidesPerView: 1.38,
          },
          400: {
            slidesPerView: 1.59,
          },
          450: {
            slidesPerView: 1.79,
          },
        },
      });
    }
  } else {
    swiper && swiper.destroy();
    init = false;
  }
}

const checkExposeButton = (max) => {
  const wrapper = document.querySelector('.swiper-wrapper');
  const length = wrapper.children.length;
  const readMore = document.querySelector('.brands__button');
  if (length <= max || max === 0) {
    readMore.style.display = "none";
  } else {
    readMore.style.display = "flex";
  }
}

const buttonExposeAvailable = () => {
  const width = window.innerWidth;
  if (width < 500) return checkExposeButton(0);
  let max = 4;
  if (width >= 700) max = 6;
  if (width >= 1000) max = 8;
  checkExposeButton(max);
}

swiperCard();
buttonExposeAvailable();
window.addEventListener("resize", swiperCard);
window.addEventListener("resize", buttonExposeAvailable);