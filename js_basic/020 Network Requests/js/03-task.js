/*
        Завдання:
        Напишіть сценарій, який виконає GET запит на https://jsonplaceholder.typicode.com/photos
        і виведе на сторінку усі зображення у вигляді <img>, які будуть отримані у відповіді.
        */
       const url = 'https://jsonplaceholder.typicode.com/photos';
       fetch(url)
       .then(response => response.json())
       .then(array => {
            array.forEach(elem => {
                let img = new Image();
                img.src = elem.thumbnailUrl;
                document.body.append(img);
            });
            console.log('Ваші картинки успішно завантажені');
       })
       .catch(error => alert(error.message));