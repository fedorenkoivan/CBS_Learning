/*
        Завдання:
        Створіть клас Cone (конус), який буде розширювати клас Circle (наслідуватися від класу Circle), конструктор класу Cone повинен приймати радіус і висоту конусу.
        В класі Cone додайте метод getVolume, який буде повертати об'єм конуса і перепишіть метод getArea таким чином, щоб він рахував площу повної пооверхні конусу.
        За можливістю використайте логіку базового класу через ключове слово супер()
        */
        class Circle {
            constructor(radius) {
                this.radius = radius;
            }

            getArea() {
                return Math.PI * Math.pow(this.radius, 2);
            }
        }

        class Cone extends Circle {
            constructor(radius, height) {
                super();
                this.radius = radius,
                this.height = height;
            }
            
            getVolume () {
                return (Math.PI * Math.pow(this.radius, 2) * this.height) / 3
            }

            getArea () {
                const s = Math.sqrt(Math.pow(this.radius, 2) + Math.pow(this.height, 2))
                const so = Math.PI * Math.pow(this.radius, 2)
                const sb = Math.PI * this.radius * s;
                const S = so + sb;
                return S;
            }
        }

        let cone1 = new Cone(4, 6)
        console.log(cone1.getVolume());
        console.log(cone1.getArea());