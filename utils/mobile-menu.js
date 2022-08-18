const menuBtn = document.querySelector('.header__menu-button');
const headerEl = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
  if (menuBtn.classList.contains('header__menu-button_opened')) {
    menuBtn.classList.remove('header__menu-button_opened');
    headerEl.classList.remove('header_mobile-opened');
  } else {
    menuBtn.classList.add('header__menu-button_opened');
    headerEl.classList.add('header_mobile-opened');
  }
});
