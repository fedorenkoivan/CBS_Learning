const form = document.forms[0];

        form.addEventListener("submit", function (e) {
            alert("Форма отправлена");
        });

        form.passwordConfirmInput.addEventListener("input", function () {
            if (form.passwordConfirmInput.value != form.passwordInput.value) {
                form.passwordConfirmInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
                form.passwordInput.setCustomValidity("Пароль и подтверждение пароля не совпадают.");
            }
            else {
                form.passwordConfirmInput.setCustomValidity(""); 
                form.passwordInput.setCustomValidity("");
            }
        });

        /*
        Завдання:
        Допрацюйте валідацію форми. Поле вводу Email не повинно мати значення
        admin@example.com, superuser@example.com і user@example.com
        Коли юзер вводить імейл у поле вводу email виконуйте перевірку ввведеного значення, і якщо
        значенння співпадає із забороненим, виводьте сповіщення про це поруч з рядком вводу.
        Перевірку виконуйте на подію input
        */
       const prohibitedValues = ['admin@example.com', 'superuser@example.com', 'user@example.com']
       form.emailInput.addEventListener('input', function () {
                if(prohibitedValues.includes(form.emailInput.value)) {
                    form.emailInput.setCustomValidity('Імейл заборонений. Введіть інший')
                } else {
                    form.emailInput.setCustomValidity('')
                }
       })