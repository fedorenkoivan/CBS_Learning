/*
        Завдання:
        Фуункція download імітує асинхронну операцію, яка скачує дані з сервера. На виконання асинхронної  
        операціїї витрачається до п'яти секунд часу.  
        При натисненні на кнопку "Скачати" запустіть метод download 5 разів і зробіть так, щоб в той момент, 
        коли всі проміси перейдуть у стан fulfilled, виведіть повідомлення "Всі файли скачані"
        */
        function download() {
            return new Promise(function (resolve, reject) {
                let random = Math.floor(Math.random() * 5001);
                setTimeout(() => resolve("downloaded data"), random);
            });
        }

        const btn = document.querySelector('button');
        btn.addEventListener('click', function () {
            let promisesArray = []; 
            for(let i = 0; i < 5; i++) {
                promisesArray.push(download());
            }

            Promise.all(promisesArray)
            .then(() => console.log('Всі файли скачані'))
        })