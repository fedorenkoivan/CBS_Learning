/*
        Завдання:
        Напишіть сценарій, який виконує GET запит на адресу https://jsonplaceholder.typicode.com/todos
        І виводить вміст відповіді у вигляді таблиці.
        */
       const url = 'https://jsonplaceholder.typicode.com/todos';
       let output = document.querySelector('.output')
       fetch(url)
       .then(response => response.json())
       .then(array => {
        let counter = 1;
            array.forEach(elem => {
                let tr = document.createElement('tr');
                tr.insertAdjacentHTML('beforeend', `<td>${counter}</td>`);
                tr.insertAdjacentHTML('beforeend', `<td>${elem.completed}</td>`);
                tr.insertAdjacentHTML('beforeend', `<td>${elem.title}</td>`);

                tr.classList.add(`${elem.completed ? 'completed' : 'incompleted'}`);

                counter++
                output.append(tr);
            })
            console.log('Ваші завдання успішно виведені');
       })
       .catch(error => alert(error.message));