// Type Aliases

type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

// type Swimmer = {
//     name?: string,
//     active: boolean,
//     classes: (string| number )[]
// }

// OR

type Swimmer = {
    name?: string,
    active: boolean,
    classes: stringOrNumberArray
}

type userId = stringOrNumber

// interface postId = stringOrNumber // Can't do that with interfaces

// Literal Types
let myName: 'Miken'

let userName: 'Dave' | 'John' | 'Miken'
userName = 'Miken'

// Functions 
const add = (a: number, b: number): number => {
    return a + b
}

const logMessage = (message: any): void => {
    console.log(message);
}

logMessage('Hello')
logMessage(add(2,3))

let substract = function(c: number, d: number): number {
    return c-d 
}

//  Created function type
type mathFunction = (a: number, b: number) => number

//  Interface
// interface mathFunction{
//     (a: number, b: number):  number
// }

const addition: mathFunction = function(a,b){
    return a + b
}

const multiplication: mathFunction = function(a, b){
    return a * b
}

// optional parameters for function 
// optional parameter needs to be last in the list
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}


const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b
}


// Rest Parameters

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}


logMessage(total(1, 2, 3, 4, 5))


// Never
const createError = (msg: string): never => {
    throw new Error(msg)
}

const infinite = (): void => {
    let i: number = 1
    while(true){
        i++
        if (i > 100) break
    }
}

//  Custom typeguard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true: false
}

const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'

    return createError('This should never happen')
}