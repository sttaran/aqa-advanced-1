class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	speak() {
		console.log(`${this.name} says ${this.sound}`);
	}
}

// const dog = new Animal('Duke', 'Woof');
// dog.speak();

class Dog extends Animal {
	constructor(name) {
		super(name, 'Woof');
	}
}

// const dog2 = new Dog('Rex');
// dog2.speak();

class Cat extends Animal {
	constructor(name) {
		super(name, 'meow');
	}

	speak() {
		super.speak();
		console.log('------------');
		console.log(`${this.name} says ${this.sound} ${this.sound} ${this.sound}`);
	}

	jump() {
		this.speak();
		console.log(`${this.name} is jumping`);
	}
}

const cat = new Cat('Mira');
cat.speak();
// cat.jump();

class WildCat extends Cat {
	constructor(name) {
		super(name);
	}
}

// const wildCat = new WildCat('Bahira');
// wildCat.jump();
// wildCat.speak();
