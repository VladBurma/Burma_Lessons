    /*

        Документація:
        
        https://developer.mozilla.org/ru/docs/HTML/HTML5/Constraint_validation
        
        form.checkValidity() > Перевірка всіх полів форми на валідність
        form.reportValidity() > Перевіряє всі поля на валідність та виводить повідомлення з помилкою

        formElement.validity > Об'єкт із параметрами валідності поля
        formElement.setCustomValidity(message) > Метод, який задасть validity.valid = false, і при спробі відправки
            повідомлення виведе message у браузерний потрапив

        Класи для стилізації стану елемента
        input:valid{} // hover
        input:invalid{} // firstchild
        
        Завдання:
        
        Використовуючи браузерне API для валідації форм, реалізувати валідацію наступної форми:

        - Ім'я користувача: type:text -> validation: required; minlength = 2;
            Якщо порожнє вивести повідомлення: "Як тебе звуть друже?!"
        - Email: type: email -> validation: required; minlength = 3; validEmail;
            Якщо емейл не валідний вивести повідомлення "Ну й дарма, не отримаєш бандероль із яблуками!"
        - Пароль: type: password -> validation: required; minlength = 8; maxlength=16;
            Якщо пусте вивести повідомлення: "Я нікому не скажу наш секрет";
        - Кількість з'їдених яблук: type: number -> validation: required; minlength = 1; validNumber;
            Якщо кількість 0 вивести ерор з повідомленням "Ну хоч поїсти трохи... Яблука смачні"
        - Дякуємо за яблука: type: text -> validation: required;
            Якщо текст !== "дякую" вивести ерор з повідомленням "Фу, невдячний(-а)!" використовуючи setCustomValidity();

        - згоден на навчання: type: checkbox -> validation: required;
            Якщо не вибрано вивести ерор з повідомлення: "Неосвічені живуть довше! Добре подумай!"

        Внизу дві кнопки:

        1) Звичайний submit який відправить форму, якщо вона валідна.
        2) Кнопка Validate(Перевірити) яка запускає методи:
            - yourForm.checkValidity: та виводить на сторінку повідомлення з результатом перевірки
            - yourForm.reportValidity: викликає перевірку всіх правил та виведення повідомлення з помилкою, якщо така є

    */

    /* Отримуємо доступи */
    var myForm = document.getElementById('myForm');
    var submitButton = document.getElementById('submitButton');
    var validateButton = document.getElementById('validateButton');
    var allInputs = document.querySelectorAll('input');

    /* Функція, що видаляє усі CustomValidity в інпутах */
    function deleteCustomValidity() {
        allInputs.forEach((item) => {
            item.setCustomValidity('');
        });
    }

    /* Вішаємо функцію на кнопку Submit */
    submitButton.addEventListener('click', function (e) {

        /* Скидаємо всі setCustomValidity коли натискаємо Submit */
        deleteCustomValidity();

        /* Перевіряємо "Імʼя користувача" на пусте поле */
        if (myForm.userName.value.length === 0) {
            myForm.userName.setCustomValidity('Як тебе звуть друже?!');
        }

        /* Перевіряємо "Email" на валідність */
        if (!myForm.userEmail.validity.valid) {
            myForm.userEmail.setCustomValidity('Ну й дарма, не отримаєш бандероль із яблуками!');
        }

        /* Перевіряємо "Пароль" на пусте поле */
        if (myForm.userPassword.value.length === 0) {
            myForm.userPassword.setCustomValidity('Я нікому не скажу наш секрет');
        }

        /* Перевіряємо "Кількість з'їдених яблук" на нерівність 0 */
        if (myForm.eatenApples.value === '0') {
            myForm.eatenApples.setCustomValidity('Ну хоч поїсти трохи... Яблука смачні');
        }

        /* Перевіряємо "Дякуємо" за яблука на відповідність тексту "Дякую" будь-яким регістром */
        if (myForm.thanksForApples.value.toLowerCase() !== 'дякую') {
            myForm.thanksForApples.setCustomValidity('Фу, невдячний(-а)!');
        }

        /* Перевіряємо "Згоден на навчання" на натиснутість */
        if (!myForm.agreeToStudy.validity.valid) {
            myForm.agreeToStudy.setCustomValidity('Неосвічені живуть довше! Добре подумай!');
        }
    });

    /* Вішаємо функції на кнопку Validate */
    validateButton.addEventListener('click', function (e) {

        /* Якщо всі поля валідні, то видаємо повідомлення */
        if (myForm.checkValidity()) {
            alert('Дякую! Всі поля заповнені правильно!');
        } else {
            /* Скидаємо всі setCustomValidity коли натискаємо Validate, щоб побачити стандартні повідомлення */
            deleteCustomValidity();
            myForm.reportValidity();
        }
    });