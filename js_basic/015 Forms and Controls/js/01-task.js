/*
        Завдання:
        При кліку на кнопку "Відобразити значення", використовуючи цикл for, виведіть значення всіх елементів input (крім input type=button), у консоль.
        */
    const form = document.forms[0];
    const button = document.querySelector('input[type=button]');
    button.onclick = function () {
        for(let i = 0; i < form.length-1; i++) {
            console.log(form[i].value);
        }
    }