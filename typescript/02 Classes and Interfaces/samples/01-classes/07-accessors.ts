class Rectangle {
    private _width: number;
    private _height: number;

    // метод для отримання значення закритої властивості
    public getWidth(): number {
        return this._width;
    }

    // метод для встановлення значення закритій властивості
    public setWidth(value: number): void {
        if(value <= 0) {
            this._width = 1;
        } 
        else {
            this._width = value;
        }
    }

    // accessors - механізм, який дозволяє перехопити звернення до члену об'єкта на запис або читання.
    
    // getter 
    get height(): number {
        return this._height;
    }

    // setter
    set height(value: number) {
        if(value <= 0) {
            this._height = 1;
        } 
        else {
            this._height = value;
        }
    }

    public calculateArea() : number {
        return this._width * this._height;
    }
}

let rect1: Rectangle = new Rectangle();
rect1.setWidth(100); // встановлення ширини за допомогою методу
rect1.height = (-20); // встановлення висоти за допомогою setter. Запускається метод set на рядку 28, значення 20 передається як параметр

console.log(rect1.getWidth()); // читання значення закритої властивості за допомогою методу
console.log(rect1.height); // читання значення закритої властивості за допомогою аксесора. Тут викликається метод get з рядка 23

let rectArea: number = rect1.calculateArea();
console.log(rectArea);