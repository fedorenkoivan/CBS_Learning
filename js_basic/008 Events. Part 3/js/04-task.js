/*
        Завдання:
        Перепишіть сценарій таким чином, щоб в коді був лише один обробник на подію click (замість чотирьох).
        Результат роботи сценарію не повинен змінитися.
        */
        let input1 = document.querySelector("#input1");
        let input2 = document.querySelector("#input2");

        btns.addEventListener('click', compare);
        function compare(event) {
            const id = event.target.id;
            if(id in myFunctions) {
                let res = myFunctions[id](+input1.value, +input2.value);
                alert(res)
            } 
        };

        let myFunctions = {
            add(a, b) {
                return a + b;
            },
            rem(a, b) {
                return a - b;
            },
            div(a, b) {
                return a / b;
            },
            mul(a, b) {
                return a * b;
            }
        }