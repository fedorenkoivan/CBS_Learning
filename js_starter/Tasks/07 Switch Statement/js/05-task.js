let age = +prompt("Введіть ваш вік");
        let technology = prompt("Ведіть 1 або 2. 1 - JavaScript. 2 - C#");
        let expirience = prompt("Похваліться своїм досвідом роботи в роках).");

        let adult, specialization, position;

        adult = age > 18 ? "повнолітній" : "неповнолітній" 
        // if (age > 18){
        //     adult = "повнолітній";
        // } else{
        //     adult = "неповнолітній"
        // }

        specialization = technology == 1 ? "Front-end developer" : "Back-end developer"
        // if (technology == 1){
        //     specialization = "Frontend";
        // } else{
        //     specialization = "Backend";
        // }

        if (expirience == 0){
            position = "Без досвіду работи";
        } else if (expirience > 0 && expirience < 1.5){
            position = "Junior";
        } else if (expirience > 1.5 && expirience < 3){
            position = "Middle";
        } else if(expirience > 3){
            position = "Senior";
        } else{
            position = "error";
        }

        let result = `Вік: ${adult}\r\nСпеціалізація: ${specialization}\r\nПозиція: ${position}`;
        alert(result);