import Popup from './Popup.js';

export default class PopupInfo extends Popup {
  constructor({
    popupSelector,
    infoBoxSelector,
    resolvedAlertClass,
    rejectedAlertClass,
  }) {
    super(popupSelector);
    this._infoBoxEl = this._popupEl.querySelector(infoBoxSelector);
    this._resolvedAlertClass = resolvedAlertClass;
    this._rejectedAlertClass = rejectedAlertClass;
  }

  open(infoHtml, status = '') {
    this._infoBoxEl.innerHTML = infoHtml;
    if (status === 'resolved')
      this._infoBoxEl.classList.add(this._resolvedAlertClass);
    if (status === 'rejected')
      this._infoBoxEl.classList.add(this._rejectedAlertClass);
    super.open();
  }

  close() {
    super.close();
    this._infoBoxEl.classList.remove(this._resolvedAlertClass);
    this._infoBoxEl.classList.remove(this._rejectedAlertClass);
  }
}
