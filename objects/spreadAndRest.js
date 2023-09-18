// const numbers = [1, 2, 3];
// const newNumbers = [...numbers];
//
// console.log(newNumbers); // [1, 2, 3]

// const person =  {
//     name: {
//         first: "Joe",
//         last: "Doe"
//     },
//     age: 30
// }
//
// const personExtended = {
//     name: {
//         ...person.name
//     },
//     email: "test@test.com"
// }
// console.log(person)
// console.log(personExtended)


function foo(age, ...args){
    console.log(Array.from(arguments))
    console.log(age)
    console.log(args)
}
foo(1,2,3)

const bar = (age, ...args) => {
    console.log(age)
    console.log(args)
}

bar(1,[2,3, true])


/*
* Accepts: age : number
* Returns : boolean
* The function check if person is adult by passed age as argument
* */
function getIsAdult(age){
    return age >=18
}