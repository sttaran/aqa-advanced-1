// const users = [
//     {
//         email: "test1@test.com",
//         address: {
//             city: "New York",
//             zipcode: "10001"
//         }
//     },
//     {
//         name: "Alice",
//         email: "test2@test.com",
//         address: {
//             city: "New York",
//             zipcode: "10001"
//         }
//     },
// ]
//
// for (const user of users) {
//     const name = user.name ?? "Anon"
//     console.log(name)
// }

const person =  {
    name: null,
    email: "test1@test.com",
    address: {
        city: "New York",
        zipcode: "10001"
    }
}
                         // ??
const name1 = person.name || "Name 1"

const name2 = person.name ?? "Name 2"
console.log("name1 =", name1)
console.log("name2 =", name2)