const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 40 }
];

people.push({ name: "Anna", age: 28 });

people[people.length -1].name = "Joel"
console.log(people)
