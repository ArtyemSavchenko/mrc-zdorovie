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

menuBtn.addEventListener('click', switchMobileMenu);

document.addEventListener('click', openPopup);
document.addEventListener('click', closePopup);
