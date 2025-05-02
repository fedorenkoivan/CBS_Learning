/*
        Завдання:
        Внесіть зміни у код. Зробіть так, щоб за наявності помилки під час десеріалізації json рядка
        у консоль виводилося повідомлення "Помилка при читанні JSON"
        */

        let json = '{"name" : "Ivan", "age" = 20}';

        
        try {
            let obj = JSON.parse(json);
            console.log(obj.name);
            console.log(obj.age);
        } catch {
            console.warn('Помилка при читанні JSON');
        }