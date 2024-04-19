"use strict";
//  Convert to more or less specific type
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world'; // cant be used with React
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//  Be Careful! Ts sees no Problem  - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10; // Force casting or double casting 
// The DOM 
const img = document.querySelector('img');
const myImg = document.getElementById('#img'); // Non null assertion   
const myImg2 = document.getElementById('#img'); // Non null assertion   
img.src;
myImg.src;
