class Person {
    // Якщо при визначенні параметрів у конструкторі вказати для них модифікатори доступу
    // Ці параметри автоматично стануть полями класу з відповідним рівнем доступу
    // та значеннями, які будуть встановлені при виклику конструктора.
    constructor(public name: string, private age: number) {
        
    }

    print() {
        console.log(this.name + " " + this.age);
    }
}

let person: Person = new Person("Jhon", 25);
person.print();

person.name = "111"; // поле public
//person.age = 111; // поле private