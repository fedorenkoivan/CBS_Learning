/*
        Завдання:
        Перепишіть код таким чином, щоб counter1 і counter2 працювали зі своїм значенням лічильнику.
        Скористайтеся замиканням.
        */
        //let counter = 0;

        function makeCounter() {
            let counter = 0
            return function () {
                return counter++;
            }
        }

        let counter1 = makeCounter();
        let counter2 = makeCounter();

        console.log("counter1");

        console.log(counter1());
        console.log(counter1());
        console.log(counter1());
        console.log(counter1());

        console.log("counter2");

        console.log(counter2());
        console.log(counter2());
        console.log(counter2());
        console.log(counter2());