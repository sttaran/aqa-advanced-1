class Temperature {
	constructor(celsius) {
		this._celsius = celsius;
	}

	get celsius() {
		return this._celsius;
	}

	set celsius(value) {
		if (typeof value !== 'number') {
			console.log('passed value is not a number');
			return;
		}

		if (value > 100 || value < -50) {
			console.log('passed value is invalid');
			return;
		}
		this._celsius = value;
	}

	get fahrenheit() {
		return (this._celsius * 9) / 5 + 32;
	}
}
const temp = new Temperature(25);

// НЕ МОЖНА
// console.log(temp);
// temp._celsius = 40;
// console.log(temp);

// ЯК ТРЕБА
// console.log(temp.celsius);
// temp.celsius = 34;
// console.log(temp.celsius);

// console.log(temp.celsius);
// temp.celsius = 134;
// console.log(temp.celsius);

console.log(temp.celsius);
console.log(temp.fahrenheit);
