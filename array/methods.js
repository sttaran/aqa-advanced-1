// const sentence = "Це речення має кілька слів";

// const words = sentence.split("е");
// console.log(words);
//
// const sentenceNew = words.join("фокус")
// console.log(sentenceNew)

// console.log(sentence.split())
// console.log(sentence.split(''))

// const searchString = "STANIS"
//
// const customers = [
//     {
//         id: 1,
//         name: "qwertyStanislav",
//         surName: "Taran",
//         companyName: "Hillel"
//     },
//     {
//         id: 2,
//         name: "John",
//         surName: "Taran",
//         companyName: "Stanwislavus LTD"
//     }
// ]
//
// for (const customer of customers) {
//     const userData = Object.values(customer)
//     // console.log(userData)
//
//     const result = userData.join(' ')
//     console.log(result)
//
//     if(result.toUpperCase().includes(searchString.toUpperCase())){
//         console.log("matched")
//     }else {
//         console.log("error, test failed")
//     }
// }



// indexOf
                //0 //1 //2 //3 //4
// const numbers = [10, 20, 30, 40, 50];
// const numbers = [10, 30, 20, 30, 40, 50];
// const index = numbers.indexOf(30);
// console.log(index); // 2
// console.log(numbers[-1]); // 2

// // includes
// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелений");
// console.log(hasGreen);

// push
// const stack = [1, 2];
// stack.push(true, 2);
// console.log(stack);

// pop
// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop();
// console.log(poppedValue); // 4
// console.log(stack); // [1, 2, 3]

// shift
// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift();
// console.log(shiftedValue); // "A"
// console.log(queue); // ["B", "C"]

// unshift
// const queue = ["B", "C"];
// queue.unshift("A", 2);
// console.log(queue); // ["A", "B", "C"]

// concat
// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4]

// copy array with concat
// const arr1 = [1,2,3]
// const arr2 = arr1.concat([])
// arr1.push("hello")
//
// console.log(arr1)
// console.log(arr2)

// slice
// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(2); // [3, 4, 5]
// console.log(slicedArray)
// const slicedArray2 = numbers.slice(2, 4);
// console.log(slicedArray2)

// splice
const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 0, "жовтий", "оранжевий");
// console.log(colors); //

colors.splice(1,1, "жовтий", "помаранчевий")
console.log(colors)

