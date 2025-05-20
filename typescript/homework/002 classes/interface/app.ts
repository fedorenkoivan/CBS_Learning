interface Animal {
    name: string;
    age: number;
    sound: () => string;
}

class Cat implements Animal {
    constructor(public name: string, public age: number, public sounds: string) {}

    sound() :string{
        return this.sounds;
    }

    eat() : string {
        return this.name + ' is eating.'
    }
}
class Bird implements Animal {
    constructor(public name: string, public age: number, public sounds: string, public speakable?: boolean) {}

    sound() :string{
        return this.sounds;
    }
    
    canSpeak() : string {
        if(this.speakable) return `${this.name} can speak!`
        return `${this.name} can't speak yet :(`
    }
}
class Fish implements Animal {
    constructor(public name: string, public age: number, public sounds: (string | boolean), public liveArea?: string) {}

    sound() :string{
        if(typeof this.sounds != 'string') return `${this.name} is silent.`
        return this.sounds;
    }
    whereLive() : (string) {
        if(!this.liveArea) return 'Live area: unknown.'
        return 'Live area: ' + this.liveArea;
    }
}

let mycat: Cat = new Cat('barsik', 3, 'miau');
console.log(mycat.sound());
console.log(mycat.eat());

let malfoy: Bird = new Bird("Malfoy", 0.5, 'Trying for the ballerina, Potter?', true);
console.log(malfoy.canSpeak());
console.log(malfoy.sound());
let jerri: Bird = new Bird("Jerri", 0.5, 'Car car', false);
console.log(jerri.canSpeak());
console.log(jerri.sound());


let dori: Fish = new Fish("Dori", 2, 'uu');
console.log(dori.sound());
console.log(dori.whereLive());

let bob: Fish = new Fish("Bob", 1, false, 'Carribean');
console.log(bob.sound());
console.log(bob.whereLive());

