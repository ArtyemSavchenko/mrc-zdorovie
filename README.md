# <a href="https://artyemsavchenko.github.io/mrc-zdorovie/index.html" target="_blank">Центр Здоровья</a>

## Сайт для Таганрогского социального предприятия "Центр Здоровья"
`HTML5` `CSS3` `JS ES6`  
`UI/UX` `API` `Лайв-валидация` `ООП` `БЭМ`  

**Настройка:**
---
Отправка формы записи на лечение происходит на тестовую почту.
Для изменения параметров необходимо создать и настроить учетную запись на [`email.js`](https://www.emailjs.com/) и внести новые данные в параметры API в utils/apiParams.js -> apiParams:
* `userId` — находится в разделе Account -> API keys -> Public Key; 
* `serviсeIid` — ID вашего сервиса, с которого будет производится отправка сообщения. Его необходимо создать. Находится в разделе Email Services -> Service ID;
* `templateId` — ID вашего шаблона текста сообщения. Его необходимо создать. Находится в Email Templates -> Template ID.
Шаблон может включать параметры: `name`, `phone`, `email`, `pacientInfo`, `pacientMessage`, `date`;
* `apiUrl` — изменять не требуется.

**Пример шаблона:**

Subject:
```
ЗАПИСЬ {{name}} от {{date}}  
```
Content:
```
Контактное лицо: {{name}}  
Телефон: {{phone}}  
Электронная почта: {{email}}  
Данные пациента: {{pacientInfo}}  
Сообщение: {{pacientMessage}}
```

<a href="https://artyemsavchenko.github.io/mrc-zdorovie/index.html" target="_blank">`Демо`</a> — dev-версия, записи на лечение идут на тестовый e-mail
