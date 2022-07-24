// DOM-ELEMENTS
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.header__button');
const photoPopup = document.querySelector('#photo-popup');
const photoPopupImg = photoPopup.querySelector('.popup__photo');

// FUNCTIONS
function switchMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu_opened');
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
mobileMenuButton.addEventListener('click', switchMobileMenu);

document.addEventListener('click', openPhotoPopup);
document.addEventListener('click', closePhotoPopup);
