export default class ProcedureCard {
  constructor(card, handlerClick) {
    this._cardEl = card;
    this._handlerClick = handlerClick.bind(this);
    this._setEventListener();
  }

  _setEventListener() {
    this._cardEl.addEventListener('click', this._handlerClick); 
  }
}