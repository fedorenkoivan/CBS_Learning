/*
        Завдання:
        Зробіть так, щоб клас Truck наслідувався від класу Car.
        Перепишіть метод move, в класі Truck - 
        Якщо у вантажівку закладено менш ніж 500 кг вантажу, повинна спрацьовувати реалізація методу з Car
        Якщо у вантажівку завантажено понад 500 кг, повинно виводитися повідомлення "Вантажівка рухається зі швидкістю 50км/год"
        */

        class Car {
            move() {
                console.log("Машина двигается со скоростью 80 км/час");
            }
        }

        class Truck extends Car {
            constructor(weight) {
                super()
                this.weight = weight
            }
            loadCargo(weight) {
                if (weight > 1000) {
                    console.log("Этот грузовик не может перевозить более 1000кг груза");
                }
                else {
                    this.weight = weight;
                    console.log(`В грузовик загружено ${this.weight}кг.`);
                }
            }
            move (weight) {
                if(this.weight > 500) {
                    console.log('Вантажівка рухається зі швидкістю 50км/год');
                } else {
                    super.move()
                }
            }
            
        }

        let v1 = new Car();
        v1.move();

        let v2 = new Truck();
        v2.loadCargo(1500);
        v2.loadCargo(990);
        v2.move();

        let v3 = new Truck();
        v3.loadCargo(100);
        v3.move();