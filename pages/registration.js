import FormValidator from '../components/FormValidator.js';
import {
  formSelectors,
  spinnerSelectors,
  popupInfoSelectors,
  registrationAlertPopupSelector,
  registrationFormSelector,
  formInputSelector,
} from '../utils/constants.js';
import { apiParams } from '../utils/api-params.js';
import Spinner from '../components/Spinner.js';
import PopupInfo from '../components/PopupInfo.js';
import Api from '../components/Api.js';

const formValidator = new FormValidator(formSelectors);
formValidator.enableValidation();

const loadingSpinner = new Spinner(spinnerSelectors);

const popupAlert = new PopupInfo({
  ...popupInfoSelectors,
  popupSelector: registrationAlertPopupSelector,
});

const api = new Api(apiParams);

const form = document.querySelector(registrationFormSelector);
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formInputs = Array.from(form.querySelectorAll(formInputSelector));
  const sendingData = formInputs.reduce((prevValue, input) => {
    prevValue[input.name] = input.value;
    return prevValue;
  }, {});
  sendingData.date = new Date().toLocaleString().slice(0, -3);

  loadingSpinner.open('отправка');
  api
    .sendMessage(sendingData)
    .then((res) => {
      if (res.ok) {
        popupAlert.open(`Ваши данные успешно отправлены.`, 'resolved');
        form.reset();
        formValidator.toggleButtonSubmitState();
      } else return Promise.reject(res.status);
    })
    .catch((err) => popupAlert.open(`Произошла ошибка ${err}.`, 'rejected'))
    .finally(() => {
      loadingSpinner.close();
    });
});
