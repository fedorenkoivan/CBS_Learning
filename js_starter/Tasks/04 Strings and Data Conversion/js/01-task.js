let name = "Iван";
        let age = 25;
        let company = "ITVDN";
        let position = "Frontend Developer";

        // ініціалізуйте змінну message
        // значення повинне бути створене за допомогою шаблонного рядка і за допомогою конкатенації.
        // рядкове значення має бути створене на основі значень змінних name, age, company, position
        // значення має виглядати приблизно так:
        // Привіт, мене звуть Іван. Мені 25 років старості. Я працюю на посаді Frontend Developer в компанії ITVDN. 

        let message = `Привіт, мене звати ${name}. Мені ${age} років. Я займаю посаду ${position} в компанії ${company}.`
        //let message = "Привіт, мене звати " + name + "." + " Мені " + age + " років." + " Я займаю посаду " + position + " в компанії " + company + ".";
        console.log(message);