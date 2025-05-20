"use strict";
// 17:21 29.12.22
// class Hello {
//     constructor(public name: string) {
//     }
//     greet () : string {
//         return this.name;
//     }
// }
// console.log(new Hello("Jack"));
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
class NormalCar extends Car {
    constructor(name, year, owner) {
        super(name, year);
        this.name = name;
        this.owner = owner;
    }
    showInfo() {
        return `Car name - ${this.name}, car year - ${this.year}.`;
    }
    showOwner() {
        return `Owner of this beautiful car named ${this.owner}.`;
    }
}
class ElectroCar extends Car {
    constructor(name, year, keyLock) {
        super(name, year);
        this.name = name;
        this.keyLock = keyLock;
    }
    showInfo() {
        return `Car name - ${this.name}, car year - ${this.year}.`;
    }
    getKey() {
        return `Car password - ${this.keyLock}.`;
    }
}
class FlyingCar extends Car {
    constructor(name, year, flyTime) {
        super(name, year);
        this.name = name;
        this.flyTime = flyTime;
    }
    showInfo() {
        return `Car name: ${this.name}.
        Car year - ${this.year}. 
        Time of flying without charge: ${this.flyTime} hours.`;
    }
}
let tesla1 = new ElectroCar("Tesla X", 2017, 123);
console.log(tesla1.showInfo());
console.log(tesla1.getKey());
let tesla2 = new ElectroCar("Tesla X", 2017, 123);
console.log(tesla2.getKey());
console.log(tesla2.showInfo());
let nissan = new NormalCar("Nissan", 2003, 'John');
console.log(nissan.showInfo());
console.log(nissan.showOwner());
let geely = new NormalCar("Geely", 2011, 'Danil');
console.log(geely.showInfo());
console.log(geely.showOwner());
let xWing = new FlyingCar("X Wing", 3022, 30);
console.log(xWing.showInfo());
let falcon = new FlyingCar("Millennium Falcon", 3002, 80);
console.log(falcon.showInfo());
