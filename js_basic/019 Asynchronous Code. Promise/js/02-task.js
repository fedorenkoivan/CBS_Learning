/*
        Завдання:
        Відредагуйте функцію asyncOperation. Ця функції представляє абстрактну асинхронну операцію, виконання якої
        займає 2 секунди. Результатом асинхронної операції є число від 0 до 5000 (записується у змінну 
        result).
        Необміхдно змінити код функції asyncOperation і використати функції зворотнього виклику для того, 
        щоб код, який викликав asyncOperation, міг отримати результат її роботи. Додайте обробник кліку на 
        кнопку "Клацни на мене", викличте асинхронну операцію і використовуючи функціїю зворотнього виклику обробіть результат, 
        відобразивши його через alert
        */

        function asyncOperation(success) {
            setTimeout(function () {
                let result = Math.floor(Math.random() * 5001);
                if(typeof success === 'function') success(result)
            }, 2000)
        }

        let btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            asyncOperation(randomValue => alert(randomValue))
        })