/*
        Завдання:
        Використовуючи параграфи, виведіть всі робочі дні тижня в div, який знаходить після фрази "Робочі дні" 
		Виведіть всі вихідні дні тижня після фрази "Вихідні дні".
        Можна внести в розмітку відповідні зміни, щоб полегшити завдання пошуку відповідних div. 
        Параграфи створюйте за допомогою перебору масиву days. В параграф треба помістити значення властивості name.
        */

        let days = [{ name: "Sunday", isWorkDay: false },
        { name: "Monday", isWorkDay: true },
        { name: "Tuesday", isWorkDay: true },
        { name: "Wednesday", isWorkDay: true },
        { name: "Thursday", isWorkDay: true },
        { name: "Friday", isWorkDay: true },
        { name: "Saturday", isWorkDay: false }];

        let workDay = document.querySelector('div')
        let weekend = workDay.nextElementSibling
        days.forEach(day => {
        //    day.isWorkDay ? workDay.append(day.name) + '<br>' : weekend.append(day.name) + '<br>'
            if (day.isWorkDay) workDay.innerHTML += day.name + '<br>'
            else weekend.append(day.name)
        })