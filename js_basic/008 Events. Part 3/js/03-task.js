/*
        Завдання:
        Перепишіть сценарій таким чином, щоб в коді працював один слухач для всіх трьох кнопок, при цьому 
        результат роботи сценарію не повинен змінитися.
        */
        // let buttons = document.querySelectorAll("button");
        // buttons.forEach(btn => {
        //     btn.addEventListener("click", clickHandler);
        // });

        function clickHandler(event) {
            // alert(this.innerText);
            const maybeButton = event.target;
            if(maybeButton.nodeName === 'BUTTON') alert(maybeButton.innerText)       
        }
        const body = document.body;
        body.addEventListener('click', clickHandler)