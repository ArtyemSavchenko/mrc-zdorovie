# [Центр Здоровья](https://artyemsavchenko.github.io/mrc-zdorovie/index.html)

## Благотворительный проект для Таганрогского социального предприятия "Центр Здоровья"

Отправка формы записи на лечение происходит на тестовую почту.
Для изменения параметров необходимо создать и настроить учетную запись на [`email.js`](https://www.emailjs.com/) и внести новые данные в параметры API в utils/constants -> apiParams:
* `userId` — находится в разделе Account -> API keys -> Public Key; 
* `serviсeIid` — ID вашего сервиса, с которого будет производится отправка сообщения. Его необходимо создать. Находится в разделе Email Services -> Service ID;
* `templateId` — ID вашего шаблона письматекста сообщения. Его необходимо создать. Находится в Email Templates -> Template ID.
Шаблон может включать параметры: `name`, `phone`, `email`, `pacientInfo`, `pacientMessage`, `date`;
* `apiUrl` — изменять не требуется.

__Пример шаблона:__
```
Subject:
ЗАПИСЬ {{name}} от {{date}}  
Content:
Контактное лицо: {{name}}  
Телефон: {{phone}}  
Электронная почта: {{email}}  
Данные пациента: {{pacientInfo}}  
Сообщение: {{pacientMessage}}
```

[Ссылка на проект](https://artyemsavchenko.github.io/mrc-zdorovie/index.html)
