import Popup from "./Popup.js";

export default class PopupImage extends Popup {
  constructor({ popupSelector, imgElSelector }) {
    super(popupSelector);
    this._popupImgEl = this._popupEl.querySelector(imgElSelector);
  }

  open(src, alt) {
    this._popupImgEl.src = src;
    this._popupImgEl.alt = alt;
    super.open();
  }

  close() {
    super.close();
    setTimeout(() => {
      this._popupImgEl.src = "./";
      this._popupImgEl.alt = "";
    }, 300);
  }
}
