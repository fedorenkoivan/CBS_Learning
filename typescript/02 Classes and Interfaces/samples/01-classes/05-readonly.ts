// за допомогою ключового слова readonly можна створити поля тільки для читання.
// Таке поле може бути ініціалізовано в момент його створення або в конструкторі 
class Dog {
    public readonly name: string;
    public readonly numberOfLegs: number = 4;

    constructor(name: string) {
        this.name = name;
    }
}

let dog: Dog = new Dog("Sharik");
console.log(dog.name);
console.log(dog.numberOfLegs);
//dog.numberOfLegs = 5; // [ts] неможливо присвоїти значення 'numberOfLegs', оскільки це константа або властивість тільки для читання
//dog.name = "";