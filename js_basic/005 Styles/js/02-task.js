/*
        Завдання:
        Не використовуючи CSS класи, змініть за допомогою JavaScript коду оформлення елементу DIV, який розміщенний на даній сторінці.
        
        Додайте:
        >> шрифт - 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        >> суцільну червону рамку товщиною 1 px червоного кольору
        >> внутршній відступ в 16px
        >> заокруглення рамки в 8 px
        */
        let div = document.querySelector('div')
        div.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
        div.style.border = '2px solid red';
        div.style.padding = '16px';
        div.style.borderRadius = '8px';