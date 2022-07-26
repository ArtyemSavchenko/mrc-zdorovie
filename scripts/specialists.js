import PopupImg from '../components/PopupImage.js';

import {
  popupImgSelectors,
  documentPhotoSelector,
} from '../utils/constants.js';

const popupImg = new PopupImg(popupImgSelectors);

const imgsArr = Array.from(document.querySelectorAll(documentPhotoSelector));
imgsArr.forEach((img) => {
  img.addEventListener('click', () => {
    popupImg.open(img.src, img.alt);
  });
});
