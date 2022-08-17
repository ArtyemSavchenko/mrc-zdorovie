import Popup from './Popup.js';

export default class PopupInfo extends Popup {
  constructor(popupSelector, infoBoxSelector) {
    super(popupSelector)
    this._infoBoxEl = this._popupEl.querySelector(infoBoxSelector);
  }

  open(infoHtml) {
    this._infoBoxEl.innerHTML = infoHtml;
    super.open();
  }
}