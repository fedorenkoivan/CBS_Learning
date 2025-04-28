/*
        Завдання:
        Зробіть так, щоб клас Truck наслідував клас Car.
        Перепишіть метод move, щоб в екземплярі він виводив повідомлення "Вантажівка рухається зі швидкістю 50 км/год".
        */

        class Car {
            start() {
                console.log("Двигун запущений.");
            }

            move() {
                console.log("Машина рухається зі швидкістю 80 км/год");
            }
        }

        class Truck extends Car {
            weight;
            loadCargo(weight) {
                if (weight > 1000) {
                    console.log("Ця вантажівка не може перевозити понад 1000кг вантажу.");
                }
                else {
                    this.weight = weight;
                    console.log(`У вантажівку завантажено ${this.weight}кг.`);
                }
            }
           move() {
            console.log('Вантажівка рухається зі швидкістю 50 км/год.');
           } 
        }

        let v1 = new Car();
        v1.start();
        v1.move();

        let v2 = new Truck();
        v2.loadCargo(1500);
        v2.loadCargo(990);
        v2.start();
        v2.move();