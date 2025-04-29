/*
        Завдання:
        Використовуючи IIFE позбудьтеся глобальних ідентифікаторів у коді.
        Переконайтеся в тому, что глобальних ідентифікаторів нема, виконавши код після 17 рядка
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

        // код для перевірки глобальних ідентифікаторів, виконайте за межами IIFE
        // якщо глобальних ідентифікаторів нема - буде повернено значення undefind
        // якщо функція testFunc не глобальна - буде помилка на етапі виклику
        console.log(globalThis.exampleName1); // undefined
        console.log(globalThis.exampleName2); // undefined
        console.log(exampleName2); // Uncaught ReferenceError: exampleName2 is not defined

        globalThis.testFunc(); // Uncaught TypeError: globalThis.testFunc is not a function
        testFunc(); // Uncaught ReferenceError: testFunc is not defined