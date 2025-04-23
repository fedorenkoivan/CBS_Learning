let throwCount = +prompt("Скільки разів ви хочете кинути шестигранний кубик?");

        function random(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        for (let i = 0; i < throwCount; i++) {
            const result = random(1, 6);
            console.log(result);
        }