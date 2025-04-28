/*
        Завдання:
        Замініть функцію конструктор на клас. 
        Всі властивості класу Car змініть на закриті поля і для кожного поля додайте getter і setter за необхідністю.
        Для поля html продумайте можливість тільки отримання значення, організуйте код таким чином, щоб не допустити редактування значення напряму.
        */

        // function Car(image, manufacturer) {
        //     this.image = image;
        //     this.manufacturer = manufacturer;
        //     this.html = `<img src="images/${this.image}" /><br />Производитель: ${this.manufacturer}<br />`;
        // }


            class Car {
                #image;
                #manufacture;
                #html;

                constructor(img, manufac) {
                    this.#image = img;
                    this.#manufacture = manufac;
                }
                get image () {
                    return this.#image;
                }
                set image(value) {
                    this.#image = value;
                }
                get manufacture () {
                    return this.#manufacture;
                }
                set manufacture (value) {
                    this.#manufacture = value
                }
                get html () {
                    return `<img src="images/${this.#image}" /><br /> Виробник: ${this.#manufacture}<br />`;
                }
            }

        let car1 = new Car("audi-a6-250.jpg", "Audi");
        let car2 = new Car("jaguar-x-type-250.jpg", "Jaguar");
        let car3 = new Car("porsche-carrera-911-250.jpg", "Porsce");

        let placeholder1 = document.querySelector("#placeholder1");
        let placeholder2 = document.querySelector("#placeholder2");
        let placeholder3 = document.querySelector("#placeholder3");

        placeholder1.innerHTML = car1.html;
        placeholder2.innerHTML = car2.html;
        placeholder3.innerHTML = car3.html;