//
// const person = {
//     name: {
//         firstName: "John",
//         lastName: "Doe"
//     },
//     hobbies: ["golf"],
//     age: 22,
//     key: null
// }
//
//
// for (const key in person) {                     // "{"firstName":"John","lastName":"Doe"}"
//     console.log(`Key is ${key} and value is ${JSON.stringify(person[key])}`)
// }



const animal = {
    legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name);// 'Манго'
// console.log(dog.legs);// 4

const hasDogOwnLegs = dog.hasOwnProperty("legs")
const hasDogOwnName = dog.hasOwnProperty("name")

console.log(dog)

console.log("hasDogOwnLegs", hasDogOwnLegs)
console.log("hasDogOwnName", hasDogOwnName)