class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
	}

	drive() {
		console.log(`${this.make} ${this.model} is driving.`);
	}
}

const myCar = new Car('Toyota', 'Camry');
myCar.drive(); // Toyota Camry is driving.
