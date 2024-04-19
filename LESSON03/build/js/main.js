"use strict";
// Array and objects
let stringArr = ['one', 'hey', 'Miken'];
let guitars = ['strat', 'les paul', 1000];
let mixedData = ['EVH', 1984, true];
// stringArr[0] = 1 // Not happy
stringArr[0] = 'John';
guitars[0] = 1984;
let test = [];
let bands = [];
bands.push('Van halen');
// bands.push(true)  // Not happy
// Tuple
let myTuple = ['Miken', 42, true];
let mixed = ['Miken', 1, false];
// myTuple[3] = 'Patel'   // Cant assign 
mixed = myTuple;
// myTuple = mixed  Not happy
let arr;
arr = ['1', '2', false];
//  Objects
let myObj;
myObj = []; // Since Array is also object in js
console.log(typeof myObj);
const exampleObj = {
    name: 'Miken',
    lastName: 'Patel'
};
let miken = {
    name: 'Miken',
    active: false,
    albums: [1984, 'ou182']
};
//  What if name is optional here ?
// const greetGuitarist = (miken: Guitarist) => {
//     console.log(`My name is ${miken.name?.toLocaleUpperCase()}`);
// }
const greetGuitarist = (miken) => {
    var _a;
    if (miken.name) {
        return console.log(`My name is ${(_a = miken.name) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()}`);
    }
    return 'Hello';
};
//  Enums
//  Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 10] = "U";
    Grade[Grade["D"] = 11] = "D";
    Grade[Grade["C"] = 12] = "C";
})(Grade || (Grade = {}));
console.log(Grade.U);
console.log(Grade.C);
