if(document.cookie) {
            let myCookie = decodeURIComponent(document.cookie);
            let start = myCookie.indexOf('#');
            document.body.style.backgroundColor = myCookie.substring(start)
        }
        /*
            Завдання:
            Додайте можливість зберігти вибраний колір сторінки в cookies терміном на 1 тиждень.
            Додайте відновлення вибраного кольору з cookies, якщо він є, після загрузки документа.
        */
       saveButton.addEventListener('click', () => {
            let selectedColor = document.forms[0].color.value;
            document.body.style.backgroundColor = selectedColor;
            document.cookie = encodeURIComponent(selectedColor);
       })