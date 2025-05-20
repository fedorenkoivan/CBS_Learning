"use strict";
class Cat {
    constructor(name, age, sounds) {
        this.name = name;
        this.age = age;
        this.sounds = sounds;
    }
    sound() {
        return this.sounds;
    }
    eat() {
        return this.name + ' is eating.';
    }
}
class Bird {
    constructor(name, age, sounds, speakable) {
        this.name = name;
        this.age = age;
        this.sounds = sounds;
        this.speakable = speakable;
    }
    sound() {
        return this.sounds;
    }
    canSpeak() {
        if (this.speakable)
            return `${this.name} can speak!`;
        return `${this.name} can't speak yet :(`;
    }
}
class Fish {
    constructor(name, age, sounds, liveArea) {
        this.name = name;
        this.age = age;
        this.sounds = sounds;
        this.liveArea = liveArea;
    }
    sound() {
        if (typeof this.sounds != 'string')
            return `${this.name} is silent.`;
        return this.sounds;
    }
    whereLive() {
        if (!this.liveArea)
            return 'Live area: unknown.';
        return 'Live area: ' + this.liveArea;
    }
}
let mycat = new Cat('barsik', 3, 'miau');
console.log(mycat.sound());
console.log(mycat.eat());
let malfoy = new Bird("Malfoy", 0.5, 'Trying for the ballerina, Potter?', true);
console.log(malfoy.canSpeak());
console.log(malfoy.sound());
let jerri = new Bird("Jerri", 0.5, 'Car car', false);
console.log(jerri.canSpeak());
console.log(jerri.sound());
let dori = new Fish("Dori", 2, 'uu');
console.log(dori.sound());
console.log(dori.whereLive());
let bob = new Fish("Bob", 1, false, 'Carribean');
console.log(bob.sound());
console.log(bob.whereLive());
