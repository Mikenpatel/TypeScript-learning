"use strict";
// class Coder{
//     name: string
//     music: string
//     age: number
//     lang: string
//     constructor(name: string, music: string, age: number, lang: string){
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     }
// }
//  Visibility Modifier
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hi, I am ${this.age}`;
    }
}
const Miken = new Coder('Dave', 'Rock', 42);
console.log(Miken.getAge());
// console.log(Miken.age);  // Not happy
console.log(Miken.name);
class DevOps extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getAge() {
        return `I write ${this.lang}`;
    }
}
const miken = new DevOps('Asus', 'Miken', 'Lofi', 30);
console.log(miken.getAge());
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myIntro(action) {
        return `I am learning ${action}`;
    }
}
const myname = new Person('Miken', 25);
console.log(myname.myIntro('TypeScript'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const a = new Peeps('Miken1');
const b = new Peeps('Miken2');
const c = new Peeps('Miken3');
console.log(Peeps.getCount());
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(e => { typeof e === 'string'; })) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['a', 'b'];
console.log(myBands.data);
