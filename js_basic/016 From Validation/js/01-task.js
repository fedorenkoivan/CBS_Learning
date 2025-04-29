/*
        Завдання:
        1. При натисненні на кнопку "Зареєструватися" (не використовуючи події click) виведіть за допомогою alert
        інформацію, яку ввів користувач в поля login і password.
        2. В момент, коли поле вводу login отримує фокус, покажіть підказку, яка знаходиться в span#loginHint
           В момент, коли фокус отримує поле вводу password - підказку span#passwordHint
        */
       const form = document.forms[0];
       const submitBtn = document.querySelector('input[type=submit]');
       const login = document.querySelector('span#loginHint');
       const password = document.querySelector('span#passwordHint');

       form.addEventListener('submit', function (e) {
        for(let i = 0; i < form.length-1; i++) {
            alert(form[i].value);
        }
       })
       form.login.addEventListener('focus', function() {
            login.style.display = 'block'
            login.style.color = 'red'
       })
       form.login.addEventListener('blur', function() {
            login.style.display = 'none'
       })
       form.password.addEventListener('focus', function() {
            password.style.cdisplay = 'block'
            password.style.color = 'red'
       })
       form.password.addEventListener('blur', function() {
            password.style.display = 'none'
       })