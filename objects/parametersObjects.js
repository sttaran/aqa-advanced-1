// function printUserInfo(name, age, gender, occupation) {
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Gender: ${gender}`);
//     console.log(`Occupation: ${occupation}`);
}
//
// // Використання функції з багатьма параметрами
// printUserInfo("John", 30, "male", "developer");

// // Функція приймає один об'єкт параметрів
// function printUserInfo(user) {
//     console.log(`Name: ${user.name}`);
//     console.log(`Age: ${user.age}`);
//     console.log(`Gender: ${user.gender}`);
//     console.log(`Occupation: ${user.occupation}`);
// }

function printUserInfo({name, age, gender, occupation}) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender: ${gender}`);
    console.log(`Occupation: ${occupation}`);
}


// Використання функції з об'єктом параметрів
const user = {
    gender: "male",
    age: 30,
    name: "John",
    occupation: "developer"
};
printUserInfo(user);