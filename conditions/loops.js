

// for (let i = 0; i < 10; i++){
//     if(i === 0){
//         console.log("i === 0")
//         continue
//     }
//     if(i === 4){
//         console.log("i === 4")
//         console.log("I do break")
//         break
//     }
//     console.log(`Ітерація ${i}`)
// }
// console.log('loop has finished')

// for (let i = 0; i <= 10; i++){
//     // if(i === 0) {
//     //     continue
//     // }
//     if(i % 2 !== 0 || i === 0){
//         continue
//     }
//     console.log(i)
// }

// let i = 0
// while (i < 10){
//     console.log("Inside the loop ",i)
//     i++
// }
// console.log("Out of loop ",i)

// const str = "Hello world"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// let isVisible = false
// while (true){
//     console.log(isVisible)
//     if(isVisible){
//         break
//     }
//
//     isVisible = checkIsVisible()
// }
//
// function checkIsVisible() {
//     return Date.now() % 2 === 0
// }

let i = 5
while (i !== 0){
    console.log("While ", i)
    i--
}

let j = 5
do {
    console.log("DO While ", j)
    j--
} while (j !== 0)