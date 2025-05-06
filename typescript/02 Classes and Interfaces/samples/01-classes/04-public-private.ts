class Employee {
    public name: string; // модифікатор доступу public - вказує що поле є видимим за межами даного класу 
    position: string; // за замовчуванням public
    private company: string; // модифікатор доступу private - вказує що дане поле закрите і не доступне за межами класу

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
        this.company = "ITVDN";
    }

    printToConsole() {
        console.log(`Employee ${this.name}, position - ${this.position}, company - ${this.company}`);
    }
}

let emp1: Employee = new Employee("Ivan", "Developer");
emp1.name = "John";
emp1.position = "Team Lead";
//emp1.company = "..."; // [ts] Властивість 'company' є приватною і доступна тільки всередині класу 'Employee'

emp1.printToConsole();