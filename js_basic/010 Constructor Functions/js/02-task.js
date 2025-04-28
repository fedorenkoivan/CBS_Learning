/*
        Завдання:
        Виконайте рефакторинг коду. Замініть фабричний метод createUser на функцію конструктор.
        */

        // function createUser(login, email) {
        //     return {
        //         login: login,
        //         email: email,

        //         showContactInfo: function () {
        //             console.log("Мой логин " + this.login + ", мой email " + this.email);
        //         }
        //     }
        // }

        function createUser (login, email) {
            this.login = login,
            this.email = email,
            
            this.showContactInfo = function () {
                console.log(`My login is ${this.login}, my email is ${this.email}`)
            }
        }

        let user1 = new createUser("admin", "admin@example.com");
        let user2 = new createUser("user", "user@example.com");

        user1.showContactInfo();
        user2.showContactInfo();