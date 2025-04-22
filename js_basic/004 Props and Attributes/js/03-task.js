/*
        Завдання:
        Напишить сценарій, який видалить на сторінці елементи з атрибутом data-remove
        */
        let removes = document.querySelectorAll('[data-remove]')
        removes.forEach(el => el.remove())