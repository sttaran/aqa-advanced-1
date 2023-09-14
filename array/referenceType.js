// let personName = "John"
// const personName2 = personName // "John"
//
// console.log(personName)
// console.log(personName2)
//
// personName = "Derick"
//
// console.log('----------------------------------------')
// console.log(personName)
// console.log(personName2)

// const studentsList = ["John", "Doreen", "Peter"]

// const studentsList2 = studentsList
//
// console.log(studentsList)
// console.log(studentsList2)
//
// studentsList[0] = "Stanislav"
// // studentsList = [1,2,3]
//
// console.log('----------------------------------------')
// console.log(studentsList)
// console.log(studentsList2)

// const studentsList = ["John", "Doreen", "Peter"]
//
// function printNames (namesList){
//     namesList[0] = true
//     // for (const name of namesList) {
//     //     console.log(name)
//     // }
// }
// printNames(studentsList)
//
// console.log(studentsList)

const age = 12

function foo(value){
    const innerValue = value
    console.log('In the function', innerValue)
}

foo(age)
console.log(age)
