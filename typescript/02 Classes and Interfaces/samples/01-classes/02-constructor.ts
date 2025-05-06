class MyClass1 {
    value: string;

    // визначення конструктора для ініціалізації класу
    constructor() {
        console.log("Працює конструктор класу MyClass1");
        this.value = "Hello world";
    }
}

console.log("Створення екземпляра класу MyClass1")
let temp = new MyClass1(); // виклик конструктора, визначеного на рядку 5
console.log(temp.value);