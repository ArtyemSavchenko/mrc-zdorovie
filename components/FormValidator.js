export default class FormValidator {
  constructor({
    formSelector,
    approvalSelector,
    inputSelector,
    inputErrorClass,
    submitBtnSelector,
  }) {
    this._formEl = document.querySelector(formSelector);
    this._approvalEl = document.querySelector(approvalSelector);
    this._inputsList = Array.from(this._formEl.querySelectorAll(inputSelector));
    this._inputErrorClass = inputErrorClass;
    this._submitButtonEl = this._formEl.querySelector(submitBtnSelector);
  }

  toggleButtonSubmitState() {
    if (
      this._inputsList.some((inputEl) => !inputEl.validity.valid) ||
      !this._approvalEl.checked
    )
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
    this._inputsList.forEach((inputEl) => {
      inputEl.addEventListener('blur', () => {
        inputEl.validity.valid
          ? this._hideInputError(inputEl)
          : this._showInputError(inputEl);
        this.toggleButtonSubmitState();
      });
      inputEl.addEventListener('input', () => {
        if (inputEl.validity.valid) this._hideInputError(inputEl);
        this.toggleButtonSubmitState();
      });
    });
    this._approvalEl.addEventListener('click', () => {
      this.toggleButtonSubmitState();
    });
  }

  enableValidation() {
    this._setEventListeners();
    this.toggleButtonSubmitState();
  }
}
