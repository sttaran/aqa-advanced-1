class Student {
	constructor(name) {
		this.name = name; // Публічна властивість
	}

	// Публічний метод
	introduce() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

// const student = new Student('Alice');
// console.log(student.name); // Alice
// student.introduce(); // Hello, my name is Alice
//
// class PrivateStudent {
// 	#name;
// 	age;
//
// 	constructor(name, age) {
// 		this.#name = name; // Приватна властивість
// 		this.age = age; // Публічна властивість
// 	}
//
// 	#introduce() {
// 		// Приватний метод метод
// 		console.log(`Hello, my name is ${this.#name}`);
// 	}
//
// 	print() {
// 		// Публічний метод
// 		this.#introduce();
// 	}
// }
//
// const privateStudent = new PrivateStudent('joe', 25);
// console.log(privateStudent.#name);
//
// console.log(privateStudent.name);
// console.log(privateStudent.#name);
// privateStudent.print();

class ProtectedStudent {
	_name;
	age;

	constructor(name, age) {
		this._name = name; // Приватна властивість
		this.age = age; // Публічна властивість
	}

	_introduce() {
		console.log(`Hello, my name is ${this._name}`);
	}

	introduce() {
		console.log(`Hello, my name is ${this._name}`);
	}

	print() {
		// Публічний метод
		this._introduce();
	}
}

// const protectedStudent = new ProtectedStudent('Alice', 25);
// protectedStudent.introduce();
// protectedStudent._introduce();
