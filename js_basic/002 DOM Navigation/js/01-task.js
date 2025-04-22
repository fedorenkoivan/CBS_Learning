/*
        Завдання:
        Виведіть значенння змінної input в span
        */
        let input = prompt("Введіть повідомлення")
        let span = document.querySelector('span')
        console.dir(span)
        span.innerHTML = input