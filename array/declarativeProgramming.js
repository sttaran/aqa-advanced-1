
// foreach

// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2)
// }

// const cb = (number) => {
//     console.log(number * 2);
// }
// numbers.forEach(cb)


// numbers.forEach((number, index, array) => {
//     console.log(number * index);
// })

//filter*
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
//
// console.log(numbers)
// console.log(evenNumbers)

// const names = ["Alice", "Peter", "John"]
// const filteredNames = names.filter((name)=> name.includes("e"))
// console.log(names)
// console.log(filteredNames)

// find*
// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// const bigNumber = numbers.find((number) => number > 10);
//
// console.log(numbers)
// console.log(firstEvenNumber)
// console.log(bigNumber)

// findIndex
// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(numbers)
// console.log(firstEvenNumberIndex)

// // map*
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number, index) => `Idx ${index}, value ${number}`);
// console.log(numbers)
// console.log(doubledNumbers)
//
// console.log(numbers.forEach((number, index) => `Idx ${index}, value ${number}`))

// sort*
// const fruits = ['banana', 'apple', 'orange', 'grape'];
// fruits.sort();
// fruits.sort((a, b) => b.localeCompare(a));
// fruits.sort().reverse()
// console.log(fruits)

// some and every
// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// const allEvenNumbers = numbers.every((number) => number % 2 === 0);
// console.log(hasEvenNumber)
// console.log(allEvenNumbers)

// reduce*
// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((acc, currentValue)=>{
//     // acc = acc + currentValue
//     acc += currentValue
//     return acc
// }, 0)
//
// console.log(numbers)
// console.log(sum)

///

const arr1 = [1,23]
const arr2 = arr1.slice()
console.log(arr2)