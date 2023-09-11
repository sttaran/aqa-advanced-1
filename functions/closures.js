
const makeCounter = (value) => {
    let startValue = value

    return () => startValue++
}

const count = makeCounter(1)

console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())
console.log(count())

// const count2 = makeCounter(9)
//
// console.log(count2())
// console.log(count2())
// console.log(count2())
// console.log(count2())


