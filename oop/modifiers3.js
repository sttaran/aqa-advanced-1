class Calculator {
	constructor(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	calculateSum() {
		return this.num1 + this.num2;
	}
}

class ModernCalculator {
	static madeIn = 'China';
	releaseYear = 2023;

	static calculateSum(num1, num2) {
		return num1 + num2;
	}
}

const calc = new ModernCalculator();
console.log(ModernCalculator.releaseYear);
// console.log(calc);
// calc.calculateSum(1, 8);
// console.log(calc.madeIn);
// console.log(ModernCalculator.calculateSum(1, 8));
// console.log(ModernCalculator.madeIn);
