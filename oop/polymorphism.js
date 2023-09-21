class Animal {
	makeSound() {
		console.log('Some generic sound');
	}
}

class Dog extends Animal {
	makeSound() {
		console.log('Woof woof!');
	}
}

class Cat extends Animal {
	makeSound() {
		console.log('Meow!');
	}
}

const animals = [new Dog(), new Cat()];

animals.forEach((animal) => animal.makeSound());
