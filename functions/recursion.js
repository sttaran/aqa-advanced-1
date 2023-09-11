//
// const counter = (num) =>{
//     console.log(num)
//     if (num <= 0) {
//         return
//     }
//     counter(num - 1)
// }
//
// counter(3)

function checkIsVisible() {
    return Date.now() % 2 === 0
}


let isVisible = false
while (true){

    console.log(isVisible)
    if(isVisible){
        break
    }

    isVisible = checkIsVisible()
}

const waitForVisible = () =>{
    isVisible = checkIsVisible()
    console.log(isVisible)
    if(isVisible){
        return
    }
    waitForVisible()
}

waitForVisible()



