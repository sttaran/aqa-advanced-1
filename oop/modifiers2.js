class PrivateStudent {
	#name;
	_age;

	constructor(name, age) {
		this.#name = name; // Приватна властивість
		this._age = age; // Публічна властивість
	}

	#introduce() {
		// Приватний метод метод
		console.log(`Hello, my name is ${this.#name}`);
	}

	print() {
		// Публічний метод
		this.#introduce();
	}
}

class StudentAlice extends PrivateStudent {
	constructor(name, age) {
		super(name, age);
	}

	sayHi() {
		console.log(`Hi! I am ${this._age} y.o.`);
	}
}

const student = new StudentAlice('Alice', 23);
// student.sayHi();
console.log(student._age);
