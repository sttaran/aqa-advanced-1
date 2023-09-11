
function Person(){
    return {
        age: 19,
        name: "Stas",
        sayHello:()=>{
            console.log(`Hello! I'm ${this.name}`)
        }
    }
}

const person  = new Person()
person.sayHello()