export default class ProcedureCard {
  constructor(card, descriptionSelector, handlerClick) {
    this._cardEl = card;
    this._descriptionHtml = card.querySelector(descriptionSelector).innerHTML;
    this._handlerClick = handlerClick;
    this._setEventListener();
  }

  _setEventListener() {
    this._cardEl.addEventListener('click', () => {
      this._handlerClick(this._descriptionHtml);
    });
  }
}
