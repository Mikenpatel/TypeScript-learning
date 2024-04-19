// Array and objects

let stringArr = ['one', 'hey', 'Miken']
let guitars = ['strat', 'les paul', 1000]
let mixedData = ['EVH', 1984, true]

// stringArr[0] = 1 // Not happy
stringArr[0] = 'John'

guitars[0] = 1984

let test = []
let bands: string[] = []
bands.push('Van halen')
// bands.push(true)  // Not happy

// Tuple

let myTuple: [string, number, boolean] = ['Miken', 42, true]
let mixed = ['Miken', 1, false]

// myTuple[3] = 'Patel'   // Cant assign 
mixed = myTuple  
// myTuple = mixed  Not happy

let arr: (string | boolean)[] 
arr = ['1', '2', false]

//  Objects
let myObj: Object 
myObj = []    // Since Array is also object in js
console.log(typeof myObj);


const exampleObj = {
    name: 'Miken',
    lastName: 'Patel'
}

// exampleObj.name = 43 // Not Happy 


// By Default every property defined is required in TS
//  Instead of the type we can also use the interface keyword
type Guitarist = {
    name?: string,
    // How to make property optional
    active?: boolean,    // This property is optional
    albums: (string | number)[]
}

//  Not required = 
interface Guitarist2{
    name: string,
    // How to make property optional
    active?: boolean,    // This property is optional
    albums: (string | number)[]
}

let miken: Guitarist = {
    name: 'Miken',
    active: false,
    albums: [1984, 'ou182']
}

//  What if name is optional here ?
// const greetGuitarist = (miken: Guitarist) => {
//     console.log(`My name is ${miken.name?.toLocaleUpperCase()}`);
// }

const greetGuitarist = (miken: Guitarist) => {
    if(miken.name){
        return console.log(`My name is ${miken.name?.toLocaleUpperCase()}`);
    }
   return 'Hello'
}

//  Enums
//  Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime

enum Grade {
    U = 10, 
    D, 
    C, 
}

console.log(Grade.U);
console.log(Grade.C);



