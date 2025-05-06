interface PointInterface {
    readonly x: number; // readonly властивість може бути встановлена тільки в момент створення об'єкта
    readonly y: number;
}

let point: PointInterface = {x: 10, y: 20};
//point.x = 100; // помилка