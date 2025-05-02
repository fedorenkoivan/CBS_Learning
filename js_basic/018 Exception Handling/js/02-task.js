/*
        Завдання:
        Внесіть зміни у функцію sum. Зробіть так, щоб за відсутності одного з параметрів, функція викидала помилку.        
        */

        function sum(a, b) {
            if(a === undefined || b === undefined) throw new Error('ви забули якийсь із аргументів')
            
            return a + b;
        }

        try {
            let result = sum(7, 35);
            console.log(result);

            result = sum(10);
            console.log(result);
        } catch (error) {
            console.log(error.message);
        }