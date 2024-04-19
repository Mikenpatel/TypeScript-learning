//  Problem with the earlier approrch was for example How to add properties dynamically to object ?

// Solution to this is to add Index signatures

interface objSignature{
    [index: string] : string
}


const name2: objSignature = {
    firstName: 'Miken',
    // 1: 3  //Not happy
}

// Mixture 

interface myData{
    [index: string | number] : string | number
    name: string,
    age: number,
}

const mikenData: myData = {
    name: 'Miken',
    age: 25,
    job: 'Devops Engineer'
}


let property: string = 'name'
mikenData[property]    // Dynamically getting property name which is fine in this case


interface Student{
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number
    class?: number[]
}


const student: Student = {
    name: 'Miken Patel',
    GPA: 10,
    class: [1,2,3]
}

// Not allowed if we dont have index 
// console.log(student.test);   // Which is allowed althogh we dont have property called test becasue of the index sytax and we also have undefind value being set 


for(const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => console.log(student[key as keyof Student]))
Object.keys(student).map(key => console.log(student[key as keyof typeof student]))

//  Using different syntax:

type Streams = 'salary' | 'bonus' | 'sidehustle'

// type incomes=Record<Streams, number>
type incomes = Record<'salary' | 'bonus' | 'sidehustle', number>

const monthlyIncome: incomes = {
    salary: 500,                   
    bonus: 100,
    sidehustle: 250
}

console.log(monthlyIncome);