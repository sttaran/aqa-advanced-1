

const ADULT_AGE = 18
let age = 18

// if (age > ADULT_AGE){
//     console.log("Please go inside")
// }else if (age === ADULT_AGE){
//     console.log("Please show your passport")
// }else if (age === 10){
//     console.log("go to school")
// }else {
//     console.log("go home")
// }

const isLogged = false;
// const message = isLogged ? "Ви увійшли в систему" : "Будь ласка, увійдіть";
// console.log(message)
isLogged ? console.log("Ви увійшли в систему") : console.log("Будь ласка, увійдіть")

if(isLogged){
    console.log("Ви увійшли в систему")
    console.log("Ви увійшли в систему")
    console.log("Ви увійшли в систему")
    console.log("Ви увійшли в систему")
    console.log("Ви увійшли в систему")
    console.log("Ви увійшли в систему")
    console.log("Ви увійшли в систему")
}else {
    console.log("Будь ласка, увійдіть")
    console.log("Будь ласка, увійдіть")
    console.log("Будь ласка, увійдіть")
    console.log("Будь ласка, увійдіть")
    console.log("Будь ласка, увійдіть")
    console.log("Будь ласка, увійдіть")
    console.log("Будь ласка, увійдіть")
}

// console.log(age >= ADULT_AGE ? "Please go inside" : "go home")


age = 108

// switch (age) {
//     case ADULT_AGE:
//         console.log("Please go inside")
//         break
//     case 10:
//         console.log("go to school")
//         break
//     default:
//         console.log("go home")
// }

age = 12

if (age > ADULT_AGE){
    console.log("Please go inside")
}else if (age === ADULT_AGE){
    console.log("Please show your passport")
}else if (age === 10){
    console.log("go to school")
}else {
    console.log("go home")
}

switch (true) {
    case age > ADULT_AGE:
        console.log("Please go inside")
        break
    case age === ADULT_AGE:
        console.log("Please show your passport")
        break
    case age === 10:
        console.log("go to school")
        break
    default:
        console.log("go home")
}

///
