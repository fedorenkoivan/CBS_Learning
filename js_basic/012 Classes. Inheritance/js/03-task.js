/*
        Завдання:
        Знайдіть і виправте помилку 
        */

        class Car {
            model;

            constructor(model) {
                this.model = model;
            }

            move() {
                console.log(`Машина ${this.model} рухається зі швидкістю 80 км/год`);
            }
        }

        class Truck extends Car {
            weight;
            maxCargo;
            model;

            constructor(model, maxCargo) {
                super()
                this.model = model;
                this.maxCargo = maxCargo;
            }

            loadCargo(weight) {
                if (weight > this.maxCargo) {
                    console.log("Ця вантажівка не може перевозити понад 1000кг вантажу");
                }
                else {
                    this.weight = weight;
                    console.log(`У вантажівку завантажено ${this.weight}кг.`);
                }
            }
        }

        let v1 = new Car("Mazda");
        v1.move();

        let v2 = new Truck();
        v2.loadCargo(1500);
        v2.move();