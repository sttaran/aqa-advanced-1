const person = {
    name: {
        firstName: "John",
        lastName: "Doe"
    },
    hobbies: ["golf"],
    age: 22,
    printName: function (greeting) {
        console.log(`${greeting} My name is ${this.name.firstName} ${this.name.lastName}`)
    }
}

person.printName("Hello!")