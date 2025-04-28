/*
        Завдання:
        Виконайте рефакторинг коду. Зробіть так, щоб об'єкти створювалися не через літерали, а через функцію конструктор.
        */

        // let user1 = {
        //     firstName: "Ivan",
        //     lastName: "Ivanov",
            
        //     show: function () {
        //         console.log(this.firstName + " " + this.lastName);
        //     }
        // }

        // let user2 = {
        //     firstName: "Olga",
        //     lastName: "Petrova",
            
        //     show: function () {
        //         console.log(this.firstName + " " + this.lastName);
        //     }
        // }

        function User (firstName, lastName) {
            this.firstName = firstName,
            this.lastName = lastName,
            this.show = function () {
                return `My name is ${this.firstName} and surname - ${this.lastName}.`
            }
        }

        let user1 = new User('Stepan', 'Bandera')
        let user2 = new User('Reigan', 'Roosevelt')
        console.log(user1.show())
        console.log(user2.show())