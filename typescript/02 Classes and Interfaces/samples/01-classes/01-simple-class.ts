class User {
    firstName: string; // властивість 
    lastName: string;  // властивість

    print() : void {   // метод
        console.log(this.firstName + " " + this.lastName);
    }
}

let user1: User = new User(); // створюємо екземпляр класу User викликаючи конструктор та ініціалізуємо змінну user1
user1.firstName = "Ivan";     // присвоєння значення властивості firstName екземпляру user1
user1.lastName = "Ivanov"; 

let user2: User = new User(); // створюємо екземпляр класу User викликаючи конструктор та ініціалізуємо змінну user2
user2.firstName = "John";     // присвоєння значення властивості firstName екземпляру user2
user2.lastName = "Doe"; 

user1.print(); // виклик методу print на екземплярі user1
user2.print(); // виклик методу print на екземплярі user2