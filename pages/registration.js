import "../utils/mobile-menu.js";
import "../vendor/email.min.js";
import FormValidator from "../components/FormValidator.js";
import { formSelectors, spinnerSelectors, popupInfoSelectors, registrationAlertPopupSelector } from "../utils/constants.js";
import Spinner from "../components/Spinner.js";
import PopupInfo from "../components/PopupInfo.js";

(function () {
  emailjs.init("user_dOgOzdD73w4Q1jEouOYa2");
})();

const formValidator = new FormValidator(formSelectors);
formValidator.enableValidation();

const formSpinner = new Spinner(spinnerSelectors);

const popupAlert = new PopupInfo({...popupInfoSelectors, popupSelector: registrationAlertPopupSelector});

window.onload = function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    formSpinner.open("отправка");
    // this.contact_number.value = (Math.random() * 100000) | 0;
    emailjs
      .sendForm("service_5vaqoms", "template_8n9hs3f", this)
      .then((res) => {
        console.log(res);
        if(res.ok)
          popupAlert.open({infoHtml: `Ваши данные успешно отправлены. Ждите звонка.`, resolved: true});
        else return Promise.reject(res.status);
      })
      .catch((err) => {
        popupAlert.open({infoHtml: `Произошла ошибка ${err}.`, rejected: true});
      })
      .finally(() => {
        formSpinner.close();
      });
  });
};
