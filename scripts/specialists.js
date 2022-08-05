const photoPopup = document.querySelector('#photo-popup');
const photoPopupImg = photoPopup.querySelector('.popup__photo');

const menuBtn = document.querySelector('.header__menu-button');
const headerEl = document.querySelector('.header');

const switchMobileMenu = () => {
  if(menuBtn.classList.contains('header__menu-button_opened')) {
    menuBtn.classList.remove('header__menu-button_opened');
    headerEl.classList.remove('header_mobile-opened');
  }
  else {
    menuBtn.classList.add('header__menu-button_opened');
    headerEl.classList.add('header_mobile-opened');
  }
}

function openPhotoPopup(evt) {
  if (evt.target.classList.contains('documents__photo')) {
    photoPopup.classList.add('popup_opened');
    photoPopupImg.src = evt.target.src;
    photoPopupImg.alt = evt.target.alt;
  }
}

function closePhotoPopup(evt) {
  const isPopup = evt.target.classList.contains('popup');
  const isPopupClose = evt.target.classList.contains('popup__close');

  if (isPopup || isPopupClose) {
    photoPopup.classList.remove('popup_opened');
  }
}

// LISTENERS
menuBtn.addEventListener('click', switchMobileMenu);

document.addEventListener('click', openPhotoPopup);
document.addEventListener('click', closePhotoPopup);
