/*
        Завдання:
        Перепишіть код нижче, використовуючи класи, замість функцій конструкторів. 
        */

        // function Car(model, yaer) {
        //     this.yaer = yaer;
        //     this.model = model;
        // }

        // Car.prototype.showInfo = function () {
        //     console.log(this.model + " " + this.yaer);
        // }

        // let car1 = new Car("Audi", 2018);
        // car1.showInfo();

        class Car {
            constructor(year, model) {
                this.year = year,
                this.model = model;
            }

            showInfo() {
                console.log(this.model + ' ' + this.year);
            }
        }

        let car1 = new Car(2017, 'tesla x')
        car1.showInfo()