/*
        Завдання:
        Внесіть зміни у функцію asyncOperation. Ця функції представляє абстрактну асинхронну операцію, виконання якої
        займає дві секунди. Результатом функції є випадкове число від нуля до п'яти тисяч включно (записується у 
        result).
        Необхідно внести зміни у функцію asyncOperation і реалізувати використання Promise для того
        щоб код, який викликав asyncOperation, міг отримати результат роботи функції. Додайте слухача на подію клік
        по кнопці Запустити, викличте асинхронну операцію і, використовуючи Promise, обробіть результат, відобразивши його 
        через alert.
        */

        function asyncOperation() {
            return new Promise(function (res, rej) {
                setTimeout(function () {
                    let randomValue = Math.floor(Math.random() * 5001)
                    res(randomValue)
            }, 2000)
            })
            
        }
        let btn = document.querySelector('button');
        btn.addEventListener('click', function () {
            asyncOperation()
            .then(res => alert(res))
        })