// obj: { name: string } - параметр obj має бути об'єктом із властивістю name строкового типу
function printValue1(obj: { name: string }) {
    console.log(obj.name);
}

let myObj1 = { value: 10, name: "Hello" };
printValue1(myObj1); // myObj1 має властивість name

let myObj2 = { data: 10, param: "Hello" };
//printValue1(myObj2); // myObj2 не може використовуватись в якості параметра, бо не має властивості name

// визначаємо інтерфейс NamedValue
// Даний інтерфейс можна розглядати як вимоги до об'єктів мати властивість з ім'ям name типу string
interface NamedValue {
    name: string;
}

// функція printValue2 приймає параметр типу NamedValue
// в якості параметра можна передати екземпляр класу, який реалізував інтерфейс
// або об'єкт, який за своєю структурою підходить під вказаний інтерфейс. Використовувати приведення типів як у більшості інших мов не потрібно
function printValue2(obj: NamedValue) {
    console.log(obj.name);
}

let myObj3 = { value: 10, name: "World" };
printValue2(myObj3); // myObj1 має властивість name

let myObj4 = { data: 10, param: "Hello" };
//printValue2(myObj4); // myObj2 не може використовуватись в якості параметра, бо не має властивості name