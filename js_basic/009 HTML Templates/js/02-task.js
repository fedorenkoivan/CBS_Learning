/*
        Задание:
        Используя библиотеку mustache.js выведите содержимое массива books на экран используя шаблон #template
        Выполните рефакторинг (изменения структуры кода без изменения результата) шаблона #template таким образом, чтобы
        название книги и имя автора выводились без использования span с уникальными id, а через инструменты mustache.js
        */
        let books = [
            {
                title: "JavaScript. Полное руководство 7-е издание",
                author: "Дэвид Флэнаган"
            },
            {
                title: "JavaScript. Шаблоны",
                author: "Стоян Стефанов"
            },
            {
                title: "Секреты JavaScript ниндзя",
                author: "Секреты JavaScript ниндзя"
            }
        ];