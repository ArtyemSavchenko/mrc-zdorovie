export default class Spinner {
  constructor({
    id = '',
    textSelector = '.spinner__text',
    activeClass = 'spinner_active',
  }) {
    if (id) {
      this._spinnerEl = document.querySelector(id);
      this._textEl = this._spinnerEl.querySelector(textSelector);
    } else {
      console.error('Не передал id спинера');
    }
    this._activeClass = activeClass;
  }

  open(text) {
    this._textEl.textContent = text;
    this._spinnerEl.classList.add(this._activeClass);
  }

  close() {
    this._spinnerEl.classList.remove(this._activeClass);
  }
}
