/*
        Завдання:
        Напишіть сценарій, який властивості об'єкта user виведе в елементи на сторінці, які помічені атрибутом data-bind.
        При цьому значення атрибуту це ім'я властивості , значення якого повинне відобразитися в елементі.
        Наприклад, в <div data-bind="firstName"></div> повинно відобразитися значення властивості firstName об'єкта user
        Спробуйте написати універссальну функцію, яка зможе виводити будь-який об'єкт з будь якими властивостями в розмітку в відповідні елементи, помічені атрибутом.
        Для огляду властивостей об'єкта, використовуйте цикл for in
        */

        let user = {
            firstName: "Jhon",
            lastName: "Doe",
            age: "25"
        }
        const body = document.querySelector('body')

        for(let elem of body.children){
            const attributes = elem.attributes
            for(let key in user){
                for(let att in attributes){
                if(attributes[att].textContent == key){
                    elem.textContent += user[key] + ' ' 
                    // якщо атрибутів двоє, то воно дописується 
                }}}}