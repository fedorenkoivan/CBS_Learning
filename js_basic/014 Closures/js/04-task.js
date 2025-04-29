/*
        Задание:
        Используя IIFE избавьтесь от глобальных идентификаторов в коде.
        Убедитесь в том, что глобальных идентификаторов нет, выполнив код после 25 строки
        */
        let test = (function(){
        var exampleName1 = "Test1";
        let exampleName2 = "Test2";
        
        return {
            testFunc: function () {
                console.log('This is a test function');
            }
    }
       }())

        // код для проверки глобальных идентификаторов, выполните за пределами IIFE
        // если глобальных переменных нет - будет возвращено значение undefind
        // если функция testFunc не глобальная - будет ошибка на этапе выполнения
        console.log(globalThis.exampleName1); // undefined
        console.log(globalThis.exampleName2); // undefined
        console.log(exampleName2); // Uncaught ReferenceError: exampleName2 is not defined

        globalThis.testFunc(); // Uncaught TypeError: globalThis.testFunc is not a function
        testFunc(); // Uncaught ReferenceError: testFunc is not defined