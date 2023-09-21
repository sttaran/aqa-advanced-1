// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
//
// 	walk() {
// 		console.log(`${this.name} is walking!`);
// 	}
// }
//
// const duck = new Animal('duck');
// const dog = new Animal('dog');
//
// duck.walk();
// dog.walk();

class SmartTV {
	constructor() {}

    turnOn(){
        console.log("Smart TV is turned on")
    }

    turnOff(){
        console.log("Smart TV is turned off")
    }
}

const smartTVInstance = new SmartTV()
smartTVInstance.turnOn()
smartTVInstance.turnOff()

//
class Animal {
    constructor(name) {
        this.name = name ?? "unknown";
    }

    walk() {
        console.log(`${this.name} is walking!`);
    }
}
