type One = string
type Two = string | number
type Three = 'hello'

//  Convert to more or less specific type
let a: One = 'hello'
let b = a as Two   // less specific
let c = a as Three  // more specific

let d = <One>'world'
let e = <String | number>'world'    // cant be used with React


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if( c === 'add') return a + b
    return '' + a + b
}


let myVal: string = addOrConcat(2, 2, 'concat') as string

//  Be Careful! Ts sees no Problem  - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string
(10 as unknown) as string   // Force casting or double casting 

// The DOM 
const img = document.querySelector('img')! as HTMLImageElement
const myImg = document.getElementById('#img')  as HTMLImageElement// Non null assertion   
const myImg2  = <HTMLImageElement> document.getElementById('#img') // Non null assertion   


img.src
myImg.src