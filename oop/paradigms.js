// Процедурний підхід
function calculateSum(a, b) {
	return a + b;
}

const result = calculateSum(5, 3);
console.log(result);

// Functional
console.log([5, 3].reduce((acc, item) => acc + item, 0));

// OOP
class Calculator {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}

	calculateSum() {
		return this.a + this.b;
	}
}

const calculator = new Calculator(5, 3);
const result2 = calculator.calculateSum();
console.log(result2); // 8
