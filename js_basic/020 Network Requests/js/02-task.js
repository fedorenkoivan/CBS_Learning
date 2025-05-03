const form = document.forms[0]
        const title = form.title;
        const body = form.body;
        let url = 'https://jsonplaceholder.typicode.com/posts/1';
        
        fetch(url)
            .then(response => response.json())
            .then(json => {
                title.value = json.title;
                body.value = json.body
            })
            .catch(error => alert(error.message))

        form.update.addEventListener('click', function () {
            let myObj = {
                id: 1,
                title: title.value,
                body: body.value,
                userId: 1,
            };
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(myObj)
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error('Виникла помилка :(');
                }
                alert('Ваші дані були успішно оновлені');
            })
            .catch(error => alert(error.message));
        })
        /*
        Завдання:
        Напишіть сценарій, який буде оновлювати сутність post з властивостями
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,

        Створіть форму з полем вводу для значень властивості title і полем вводу для значень властивості body

        Значення для властивостей title і body отримайте від користувача
        Значення id і userId повинні залишатися 1 і виводити їх у формі непотрібно.
        При завантаженню сценарію заповність форму даними, отриманими при обробці GET запиту на https://jsonplaceholder.typicode.com/posts/1

        адреса для відправки запиту:
        https://jsonplaceholder.typicode.com/posts/1

        для оновлення сутності скористайтеся PUT запитом https://jsonplaceholder.typicode.com/posts/1. Обробіть відповідь
        і виведіть інформацію про помилку або про успішно завершену операцію.
        */