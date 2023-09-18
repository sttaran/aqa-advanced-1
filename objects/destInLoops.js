// const people = [
//     ["John", 30],
//     ["Jane", 25]
// ];
//
// for (const [name, age] of people) {
//     console.log(`${name} is ${age} years old`);
// }

const students = [
    {
        name: "John",
        age: 19
    },
    {
        name: "Jane",
        age: 22
    }
]

for (const {name, age} of students) {
    console.log(`${name} is ${age} years old`);
}