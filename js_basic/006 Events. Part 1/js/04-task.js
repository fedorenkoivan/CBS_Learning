/*
        Завдання:
        Перепишіть сценарій. Зробіть так, щоб сортування елементів у #list відбувалося при натисненні
        на кнопку (кнопку потрібно додати), а не при загрузці елементів сторінки
        */
        let list = document.querySelector("#list");
        let sortBtn = document.querySelector('#sort')
        let items = document.querySelectorAll("li"); // отримуємо об'єкт NodeList (це не масив)
        let itemsArray = Array.from(items); // на основі NodeList створюємо масив
        
        // виконуємо сортування за допомогою стандартного методу масиву
        // оскільки ми сортуємо вузли DOM, то потрібно визначити критерії, згідно яких вузли будуть порівнюватися
        // функція, вказана в параментрі методу sort визначає логіку порівнння двох елементів у масиві. Вона повинна повертати значення:
        // якщо a < b повертати значення менше 0
        // якщо a > b повертати значення більше 0
        // якщо a == b повертати 0

        sortBtn.addEventListener('click', function() {
            itemsArray.sort(function (a, b) {
                if (a.textContent < b.textContent)
                return -1;
                if (a.textContent > b.textContent)
                return 1;

                return 0;
        });

        // додавання елементів в алфавітному порядку
        // оскільки елементи вже є у DOM дереві, то при додаванні, елемент видаляється зі своєї попередньої позиції 
        itemsArray.forEach(item => {
            list.append(item);
        });
        })