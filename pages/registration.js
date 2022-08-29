import "../utils/mobile-menu.js";
import "../vendor/email.min.js";
import FormValidator from "../components/FormValidator.js";
import { formSelectors, spinnerSelectors } from "../utils/constants.js";
import Spinner from "../components/Spinner.js";

(function () {
  emailjs.init("user_dOgOzdD73w4Q1jEouOYa2");
})();

const formValidator = new FormValidator(formSelectors);
formValidator.enableValidation();

const formSpinner = new Spinner(spinnerSelectors);

window.onload = function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    formSpinner.open("отправка");
    // this.contact_number.value = (Math.random() * 100000) | 0;
    emailjs
      .sendForm("service_5vaqoms", "template_8n9hs3f", this)
      .then(() => {
        alert("Запрос выполнен успешно.");
        console.log("SUCCESS!");
        form.reset();
      })
      .catch((err) => {
        alert("Что-то пошло не так.");
        console.log("FAILED...", err);
      })
      .finally(() => {
        formSpinner.close();
      });
  });
};
