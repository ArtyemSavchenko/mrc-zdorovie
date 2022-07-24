// DOM-ELEMENTS
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.header__button');

// FUNCTIONS
function switchMobileMenu() {
  mobileMenu.classList.toggle('mobile-menu_opened');
}

function openPopup(evt) {
  const clickedCard = evt.target.parentElement;
  const clickedCardPopup = clickedCard.lastElementChild;

  const isProcPhoto = evt.target.classList.contains('procedures__card-photo_type_description');
  const isProcTitle = evt.target.classList.contains('procedures__card-title');

  if (isProcPhoto || isProcTitle) {
    clickedCardPopup.classList.add('popup_opened');
  }
}

function closePopup(evt) {
  if (evt.target.classList.contains('popup')) {
    evt.target.classList.remove('popup_opened');
  }

  if (evt.target.classList.contains('popup__close')) {
    const popupContainer = evt.target.parentElement;
    const clickedCardPopup = popupContainer.parentElement;

    clickedCardPopup.classList.remove('popup_opened');
  }

  if (evt.target.classList.contains('popup__hack-wrap')) {
    const clickedCardPopup = evt.target.parentElement;

    clickedCardPopup.classList.remove('popup_opened');
  }
}

// LISTENERS
mobileMenuButton.addEventListener('click', switchMobileMenu);

document.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);
