
// function validate(age){
//     if(age >= 18){
//         console.log("okay")
//         return
//     }
//
//     console.log("not okay")
// }
//
// validate(15)

// function validate(age, onSuccess, onFailure){
//     if(age >= 18){
//         console.log("PERSON IS ADULT")
//         onSuccess()
//         return
//     }
//
//     onFailure()
// }
//
// function handleAdult(){
//     console.log("Person is adult")
// }
//
// function handleYoung(){
//     console.log("Person is too young")
// }
//
//
// validate(18, handleAdult, handleYoung)

//
// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }

function multiplier(factor) {
    return x => x * factor;
}


const double = multiplier(2)
console.log(double(4))
console.log(double(5))
console.log(double(6))
console.log(double(12))