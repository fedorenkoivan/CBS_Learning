// базовий тип даних
class Shape {
    public name: string;

    constructor(name) {
        this.name = name;
    }

    public getInfo(): string {
        return `This is ${this.name}.`;
    }
}

// похідний тип даних
class Rect extends Shape {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        super("Rectangle"); // запуск конструктора батьківського класу
        this.width = width;
        this.height = height;
    }

    public getInfo(): string {
        let baseInfo: string = super.getInfo(); // виклик методу батьківського класу
        return `${baseInfo} Height = ${this.height}, Width = ${this.width}`;
    }
}

// похідний тип даних
class Circle extends Shape {
    public radius: number;

    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }

    public getInfo(): string {
        let baseInfo: string = super.getInfo();
        return `${baseInfo} Radius = ${this.radius}`;
    }
}

let shapes: Shape[] = []; // створення масиву базового типу
shapes.push(new Rect(100, 200)); // заповнення масиву екземплярами похідного класу
shapes.push(new Circle(10));
shapes.push(new Circle(43));
shapes.push(new Rect(10, 30));

// в масив shapes можна додавати тільки об'єкти, що мають ідентичну з класом Shape структуру
shapes.push({
    name: "foo",
    getInfo: () => { return "bar"}
});

for(let i = 0; i < shapes.length; ++i) {
    let info: string = shapes[i].getInfo();
    console.log(info);
}