import "../utils/mobile-menu.js";
import "../vendor/email.min.js";
import FormValidator from "../components/FormValidator.js";
import { formSelectors } from "../utils/constants.js";

(function () {
  emailjs.init("user_dOgOzdD73w4Q1jEouOYa2");
})();

// const acceptCB = document.querySelector(".form__cb");
// const submitBtn = document.querySelector(".form__submit");

// acceptCB.addEventListener("click", () => {
//   if (acceptCB.checked) submitBtn.disabled = false;
//   else submitBtn.disabled = true;
// })

const formValidator = new FormValidator(formSelectors);
formValidator.enableValidation();

window.onload = function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (evt) {
    evt.preventDefault();

    this.contact_number.value = (Math.random() * 100000) | 0;

    emailjs
      .sendForm("service_5vaqoms", "template_8n9hs3f", this)
      .then(() => {
        alert("Запрос выполнен успешно.");
        console.log("SUCCESS!");
      })

      .catch((err) => {
        alert("Что-то пошло не так.");
        console.log("FAILED...", err);
      });

    form.reset();
  });
};
