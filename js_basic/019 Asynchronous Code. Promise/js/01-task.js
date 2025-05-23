/*
        Завдання:
        Використовуючи функцію downloadImage і створивши необхідні callback-функції, реалізуйте завантаження
        картинки з таким шляхом https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg 
        при натисненні на кнопку Завантажити, виводьте картинку у елемент #output
        */
       
        function downloadImage(url, success, error) {
            let image = new Image(500);
            image.src = url;

            image.onload = function () {
                // Запускаємо callback функцію success, якщо картинка скачалася
                if (typeof success == "function")
                    success(image);
            };

            image.onerror = function (e) {
                // Запускаємо callback функцію error, якщо картинка не завантажилася
                if (typeof error == "function")
                    error(new Error("Не удалось загрузить изображение " + this.src));
            }
        }

        let btn = document.querySelector('button');
        let output = document.querySelector('#output')
        btn.addEventListener('click', function () {
            downloadImage('https://images-assets.nasa.gov/image/PIA16239/PIA16239~orig.jpg',
            image => output.append(image),
            error => console.log(error.message))
        })