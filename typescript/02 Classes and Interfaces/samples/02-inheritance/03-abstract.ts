// abstract - ключове слово, яке дозволяє створювати абстрактні методи та абстрактні класи.
// абстрактний клас - це клас, який може виступати лише у ролі базового класу. Створити екземпляр абстрактного класу не вдасться.
// абстрактний метод - це метод, який не має реалізації в поточному класі, але обов'язково повинен бути реалізований у похідному класі.
// абстрактні методи можуть створюватися тільки в абстрактних класах.

abstract class Animal { // абстрактний клас
    constructor(public name: string) { }

    abstract makeSound(); // абстрактний метод

    public move(): void {
        console.log(this.name + " пересувається")
    }
}

class Cat extends Animal {
    constructor() {
        super("Кіт");
    }

    makeSound() { // обов'язкова реалізація абстрактного методу з базового класу. Спробуйте видалити цей метод з класу Cat
        console.log("Мяу-Мяу");
    }
}

class Cow extends Animal {
    constructor() {
        super("Корова");
    }

    makeSound() {
        console.log("Му-у-у-у");
    }
}

let murzik: Cat = new Cat();
murzik.makeSound();
murzik.move();

let burenka: Cow = new Cow();
burenka.makeSound();
burenka.move();