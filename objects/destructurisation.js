// const person = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     email: "grid@test.com"
// };
//
// // const name = person.name.toUpperCase()
// const { name : personName, age, gender, email = "test@test.com" } = person
//
// // console.log(name); // "John"
// console.log(personName); // "John"
// console.log(age); // 30
// console.log(gender); // "male"
// console.log(email); // "male"
//
// console.log(person)


// ARRAYS

// const numbers = [1, 2, 3];
//
// const [first, second] = numbers;
//
// console.log(first); // 1
// console.log(second); // 2

// const numbers = [1, 2, 3, 4, 5];
//
// const [first, , , third] = numbers;
//
// console.log(first); // 1
// console.log(third); // 3

const numbers = [1, 2];

const [first, second, third = 0] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(third); // 0 (значення за замовчуванням)