const person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    hobbies: ["golf"],
    age: 22
}

// console.log(Object.keys(person))
// console.log("\n")
// console.log(Object.values(person))
// console.log("\n")
// console.log(Object.entries(person))

for (const keyValuePair of Object.entries(person)) {
        console.log(keyValuePair[0])
        console.log(keyValuePair[1])
    console.log("----------------------------------------")
}