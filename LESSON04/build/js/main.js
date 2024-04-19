"use strict";
// Type Aliases
// interface postId = stringOrNumber // Can't do that with interfaces
// Literal Types
let myName;
let userName;
userName = 'Miken';
// Functions 
const add = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage('Hello');
logMessage(add(2, 3));
let substract = function (c, d) {
    return c - d;
};
//  Interface
// interface mathFunction{
//     (a: number, b: number):  number
// }
const addition = function (a, b) {
    return a + b;
};
const multiplication = function (a, b) {
    return a * b;
};
// optional parameters for function 
// optional parameter needs to be last in the list
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b;
};
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4, 5));
// Never
const createError = (msg) => {
    throw new Error(msg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//  Custom typeguard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
