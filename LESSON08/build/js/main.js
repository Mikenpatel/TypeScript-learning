"use strict";
//  Problem with the earlier approrch was for example How to add properties dynamically to object ?
const name2 = {
    firstName: 'Miken',
    // 1: 3  //Not happy
};
const mikenData = {
    name: 'Miken',
    age: 25,
    job: 'Devops Engineer'
};
let property = 'name';
mikenData[property]; // Dynamically getting property name which is fine in this case
const student = {
    name: 'Miken Patel',
    GPA: 10,
    class: [1, 2, 3]
};
// Not allowed if we dont have index 
// console.log(student.test);   // Which is allowed althogh we dont have property called test becasue of the index sytax and we also have undefind value being set 
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => console.log(student[key]));
Object.keys(student).map(key => console.log(student[key]));
const monthlyIncome = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
console.log(monthlyIncome);
