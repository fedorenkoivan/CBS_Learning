/*
        Завдання:
        Внесіть зміни у код:
        не змінюючи послідовність інструкцій operation, зробіть так
        щоб рядок "Звільнення ресурсів" виводився на екран кожен раз, коли запускалася функція.
        */

        // function operation() {
        //     console.log("Выделение ресурсов");
        //     return "Результат операции";
        //     console.log("Освобождение ресурсов");
        // }
        function operation () {
            try {
                console.log('Виділення ресурсів');
                return 'Результат операції'
            } finally {
                console.log('Звільнення ресурсів');
            }
        }

        operation();
        operation();
        operation();