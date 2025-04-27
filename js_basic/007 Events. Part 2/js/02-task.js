/*
        Завдання:
        Не змінюючи положення тегу script, виправте помилку сценарію.
        При загрузці даного сценарію на сторінці повинне відобразитися повідомлення Hello world
        */
       document.addEventListener('DOMContentLoaded', function() {
        document.querySelector("#output").textContent = "Hello world";            
        })