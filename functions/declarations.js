// function greet(name){
//     console.log(`Hello ${name}`)
// }
//
// greet("Stas")


/*
*  Adds two numbers and prints result to console
* */
// function add(num1, num2){
//     console.log(num1+num2) // inline comment
// }
// add(2,3)

// const yearOfBirth = 1996
//
// function calculateAge(birthYear){
//     const currentYear = new Date().getFullYear()
//     return currentYear - birthYear
// }

// const age = calculateAge(yearOfBirth)
// console.log(calculateAge(yearOfBirth))




// console.log(add(2,4))
// console.log(add(1,2))
// console.log(add(7,4))
// console.log(add(9,1))

// function greet(name="Guest"){
//     console.log(`Hello ${name}`)
// }
//
// greet("Stas")
// greet()

// function add(num1, num2){
//     const num3 = num1 + num2
//     return num3
// }
// function addAndPrint(num1, num2){
//     const num3 = num1 + num2
//     console.log(num3)
// }
//
//             // num3
// const res = add(2,4)
// // console.log("Root",res)
//
// addAndPrint(2,5)


// function greet(name){
//     console.log(`Hello ${name}`)
// }
//
// greet("Stas")

function printValues(){
    console.log(Array.from(arguments))
}

printValues(121,3,"Hello", true,65)