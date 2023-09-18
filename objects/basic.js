const person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    hobbies: ["golf"],
    age: 22,
    "another key": "value"
}

console.log(person)
delete person["another key"]
console.log(person)

const student = {}
student.some = 123

// console.log(person.age)
// console.log(person.name.firstName)
// console.log(person.hobbies[0])

// const property = "age"
// console.log(person[property])
// console.log(person.age)
//
// console.log(person["another key"])

// person.name.lastName = "Taran"
// console.log(person)