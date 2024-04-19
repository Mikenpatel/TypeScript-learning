let myName = 'Miken'
let meaningOfLife: number
let isLoading: boolean
let album: any  
let digit: string | number    // Called union type
// myName = 50 // TypeScript do not like this

myName = 'Miken Patel'
meaningOfLife = 51
isLoading = true
album = 1998
album = 'My album'
album = true
digit = 10
digit = 'Hello'
// digit = true // Not happy 

const sum = (a: number, b: number) =>  a + b
const sum2 = (a: number, b: string) =>  a + b

//  Union Type
let postId: string | number
let isActive: number | boolean | string

let re: RegExp = /\w+/g


