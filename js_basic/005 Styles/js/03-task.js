/*
        Завдання:
        Застосунок створює для кожного дня тижня div і, в залежності від типу дня, поставить йому колір.

        Створіть div для кожного елементу масиву days, значення елементів мають бути додані як текст div. Якщо текст створеного div знаходиться в масиві
        busyDays додайте для такого div клас .busy-day
        Розмістіть всі створені елменти в кінці тіла документа.
        */

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let busyDays = ["Monday", "Thursday", "Friday"];

        const body = document.querySelector('body')

        days.forEach(day => {
            let div = document.createElement('div')
            if(busyDays.includes(day)){
                div.classList.add('busy-day')
            }
            div.innerHTML = day
            body.append(div)
        })