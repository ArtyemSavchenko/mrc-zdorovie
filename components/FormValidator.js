export default class FormValidator {
  constructor({ formSelector, approvalSelector, inputSelector, inputErrorClass, submitBtnSelector }) {
    this._formEl = document.querySelector(formSelector);
    this._approvalEl = document.querySelector(approvalSelector);
    this._inputsList = Array.from(this._formEl.querySelectorAll(inputSelector));
    this._inputErrorClass = inputErrorClass;
    this._submitButtonEl = this._formEl.querySelector(submitBtnSelector);
    // this._errorTimeout;
  }

  _toggleButtonSubmitState() {
    if(this._inputsList.some(inputEl => !inputEl.validity.valid) || !this._approvalEl.checked)
      this._submitButtonEl.disabled = true;
    else this._submitButtonEl.disabled = false;
  }

  _hideInputError(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    errorEl.textContent = '';
    inputEl.classList.remove(this._inputErrorClass);
  }

  _showInputError(inputEl) {
    const errorEl = this._formEl.querySelector(`#${inputEl.id}-error`);
    errorEl.textContent = inputEl.validationMessage;
    inputEl.classList.add(this._inputErrorClass);
  }

  _setEventListeners() {
    this._inputsList.forEach(inputEl => {
      inputEl.addEventListener('input', () => {
        // clearTimeout(this._errorTimeout);
        // this._errorTimeout = setTimeout(() => {
        //   inputEl.validity.valid
        //     ? this._hideInputError(inputEl)
        //     : this._showInputError(inputEl);
        //   }, 3000);
        inputEl.validity.valid
          ? this._hideInputError(inputEl)
          : this._showInputError(inputEl);

        this._toggleButtonSubmitState();
      });
    });
    this._approvalEl.addEventListener('click', () => {
      this._toggleButtonSubmitState();
    })
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonSubmitState();
  }
}