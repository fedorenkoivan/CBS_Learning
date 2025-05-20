abstract class Car {
    constructor(public name:string, public year?:number) {}

    abstract showInfo():string;
}

class NormalCar extends Car {
    constructor(public name:string, year:number, private owner: string) {
        super(name, year);
    }

    showInfo() :string {
        return  `Car name - ${this.name}, car year - ${this.year}.`
    }

    showOwner() :string {
        return `Owner of this beautiful car named ${this.owner}.`
    }
}
class ElectroCar extends Car {
    constructor(public name:string, year: number, private keyLock: (number | string)) {
        super(name, year);
    }

    showInfo() :string {
        return  `Car name - ${this.name}, car year - ${this.year}.`
    }

     getKey() :(number | string) {
        return `Car password - ${this.keyLock}.`
    }
}

class FlyingCar extends Car {
    constructor(public name:string, year: number, private flyTime: number) {
        super(name, year);
    }

    showInfo() :string {
        return `Car name: ${this.name}.
        Car year - ${this.year}. 
        Time of flying without charge: ${this.flyTime} hours.`
    }
}


let tesla1: ElectroCar = new ElectroCar("Tesla X", 2017, 123);
console.log(tesla1.showInfo());
console.log(tesla1.getKey());

let tesla2: ElectroCar = new ElectroCar("Tesla X", 2017, 123);
console.log(tesla2.getKey());
console.log(tesla2.showInfo());

let nissan: NormalCar = new NormalCar("Nissan", 2003, 'John');
console.log(nissan.showInfo());
console.log(nissan.showOwner());

let geely: NormalCar = new NormalCar("Geely", 2011, 'Danil');
console.log(geely.showInfo());
console.log(geely.showOwner());

let xWing: FlyingCar = new FlyingCar("X Wing", 3022, 30);
console.log(xWing.showInfo());

let falcon: FlyingCar = new FlyingCar("Millennium Falcon", 3002, 80);
console.log(falcon.showInfo());