/*
        Завдання:
        Додайте обробку статус кодів помилок на стороні сервера та стороні клієнта
        для мережевого запиту, який виконується при натисненні на кнопку "Запит" 
        */
        let button1 = document.querySelector("#button1");
        let output = document.querySelector("#output");
        let url = "https://jsonplaceholder.typicode.com/todos/100000";

        button1.addEventListener("click", function () {
            fetch(url)
                .then(response => {
                    const status = Math.floor(response.status/100)
                    if(status === 4) {
                        throw new Error('Виникла помилка на стороні клієнта.')
                    }
                    if(status === 5) {
                        throw new Error('Виникла помилка на стороні серверу. Якщо це не ваш сервер, ви можете розслабитися.')
                    }
                    response.json()
                })  
                .then(json => {
                    output.innerHTML = "";
                    output.innerHTML += "<br>id: " + json.id;
                    output.innerHTML += "<br>user id: " + json.userId;
                    output.innerHTML += "<br>title: " + json.title;
                    output.innerHTML += "<br>completed: " + json.completed;
                })
                .catch(error => console.log(error.message))
        });