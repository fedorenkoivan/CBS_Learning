/*
        Завдання:
        Створіть параграфи під кожен елемент масиву days, значення елементів масиву повинні бути додані як текст в параграфі.
        Розмістіть всі створені параграфи в div з id output
        */
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let div = document.querySelector('#output')
        days.forEach(day => {
            div.insertAdjacentHTML('beforeend', `<p>${day}</p>`)
        })