/*
        Завдання:
        Визначете клас циліндр, який буде об'ємним геометричним тілом.
        Клас повинен мати конструктор.
        Конструктор повинен приймати два параметра - висоту та радіус та ініціалізувати відповідні змінні.
        В класі повинен бути метод getVolume, який повертатиме об'єм цього циліндру.
        Створіть два екземпляри класу, передавши довільні значення в якості параметрів конструктора
        також виведіть у консоль значення об'єму обох циліндрів.
        */

        class Cylinder {
            constructor(radius, height) {
                this.radius = radius,
                this.height = height;
            }

            getVolume() {
                return Math.PI * Math.pow(this.radius, 2) * this.height;
            }
        }

        let cylinder1 = new Cylinder(5, 15)
        let cylinder2 = new Cylinder(2, 14)
       console.log(cylinder1.getVolume());
       console.log(cylinder2.getVolume());