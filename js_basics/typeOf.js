// let age = 30;
// let name = "Alice";
// let isActive = true;
// let person = { firstName: "Bob", lastName: "Smith" };
// let greet = function() { console.log("Hello!"); };
// let numbers = [1, 2, 3, 4, 5];
//
// console.log(typeof age); // Виведе: number
// console.log(typeof name); // Виведе: string
// console.log(typeof isActive); // Виведе: boolean
// console.log(typeof person); // Виведе: object
// console.log(typeof greet); // Виведе: function
// console.log(typeof numbers); // Виведе: object
//
// let unknownVariable;
// console.log(typeof unknownVariable); // Виведе: undefined
//
// let nullValue = null;
// console.log(typeof nullValue); // Виведе: object


const age = "30"
const isNumber = typeof age === "number"

if(isNumber){
    console.log("This is a number")
}else{
    console.log("This is NOT a number. Value should be converted to number")
}

