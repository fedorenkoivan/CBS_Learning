class Base {
    private value1: string;
    public value2: string;
    protected value3: string;

    constructor() {
        this.value1 = "private value 1";
        this.value2 = "public value 2";
        this.value3 = "protected value 3";
    }

    private method1() {
        console.log("private method 1 call.");
    }

    public method2() {
        console.log("public method 2 call.");
    }

    protected method3() {
        console.log("protected method 3 call.");
    }
}

class Derived extends Base { // клас Derived успадковує клас Base, клас Derived розширює клас Base

    constructor() {
        
        super(); // Виклик конструктора базового класу. Обов'язкова операція при успадкуванні. 

        console.log("public property = " + this.value2);
        console.log("protected property = " + this.value3);

        // this.method1(); // метод private, прихований  
        this.method2();    // public - відкритий для всіх  
        this.method3();    // protected - доступний, оскільки даний клас є спадкоємцем
    }
}

let derived1: Derived = new Derived();

// доступний тільки метод method2, оскільки він public. Інші методи не доступні, оскільки даний код знаходиться за межами класу
derived1.method2(); 
console.log(derived1.value2);