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

class Coder{
    
    secondLang!: string   // Assertion not recommended

    constructor(public readonly name: string, public music: string, private age: number, protected lang: string = 'Typescript'){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

 
    public getAge(){
        return `Hi, I am ${this.age}`
    }

}


const Miken = new Coder('Dave', 'Rock', 42,)
console.log(Miken.getAge())
// console.log(Miken.age);  // Not happy
console.log(Miken.name);


class DevOps extends Coder {
    constructor(public computer: string, name: string, music: string, age: number){
        super(name, music, age)
        this.computer = computer
    }

    public getAge(){
        return `I write ${this.lang}`
    }
}


const miken = new DevOps('Asus', 'Miken', 'Lofi', 30)
console.log(miken.getAge());
// console.log(miken.age); // Not happy
// console.log(miken.lang); // Not happpy


//  Creating interface

interface Person{
    name: string,
    age: number,
    myIntro(action: string): string
}


class Person implements Person{
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    myIntro(action: string): string {
        return `I am learning ${action}`
    }
}


const myname = new Person('Miken', 25)
console.log(myname.myIntro('TypeScript'));



class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}


const a = new Peeps('Miken1')
const b = new Peeps('Miken2')
const c = new Peeps('Miken3')

console.log(Peeps.getCount());


// Getters and Setters

class Bands {
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }


    public set data(value: string[]){
        if(Array.isArray(value) && value.every(e => { typeof e === 'string' })){
            this.dataState = value
            return
        }else throw new Error('Param is not an array of strings')
    }
}


const myBands = new Bands()
myBands.data = ['a', 'b']
console.log(myBands.data);