/*
        Завдання:
        Зробіть користувацький клас виключень DivideByZeroError
        Зробіть так, щоб функція divide при спробі ділення на 0 викидувала цю помилку.
        Додайте код, який обробляє це виключення.
        */

        function divide(operand1, operand2) {
            if(operand1 === 0 || operand2 === 0) throw new DivideByZeroError()
            return operand1 / operand2;
        }

        class DivideByZeroError extends Error {
            constructor() {
                super('Один з операндів дорівнює нулю'); 
                this.name = 'DivideByZeroError';
            }
        }
        
        try {
            console.log(divide(10, 5));
            console.log(divide(100, 0));
            console.log(divide(1000, 50));
        } catch (error) {
            console.warn(error.name);
            console.warn(error.message);
        }