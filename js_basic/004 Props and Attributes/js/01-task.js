/*
        Завдання:
        Напишіть сценарій, який змінить колір тексту елементів div, на той, який вказаний в якості значень атрибуту data-color
        */
       const body = document.querySelector('body')
       for(let elem of body.children){
          elem.style.color = elem.dataset.color
       }