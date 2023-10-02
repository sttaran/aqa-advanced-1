import test from 'node:test';
import assert from 'assert';

const positiveFixtures = [
	{
		input: {
			num1: 1,
			num2: 2
		},
		expectedResult: 3
	},
	{
		input: {
			num1: 2,
			num2: 3
		},
		expectedResult: 5
	},
	{
		input: {
			num1: 4,
			num2: 8
		},
		expectedResult: 12
	},
	{
		input: {
			num1: 4,
			num2: 8,
			num3: 1,
			num4: 6,
		},
		expectedResult: 19
	},
];

const negativeFixtures = [
	{
		title: 'Number and string should be concatenated',
		input: {
			num1: 4,
			num2: '8'
		},
		expectedResult: '48'
	},
	{
		title: 'Boolean should casted to number',
		input: {
			num1: 4,
			num2: true
		},
		expectedResult: 5
	}
];

positiveFixtures.forEach(({input, expectedResult}) => {
	test(`Positive case : should calculate sum of provided numbers`, async () => {
		const result = calculateSum(...Object.values(input));
		assert.equal(result, expectedResult, `should calculate sum`);
	});
});

negativeFixtures.forEach(({input, expectedResult, title}) => {
	test(`Negative case: ${title}`, async () => {
		const {num1, num2} = input;
		const result = calculateSum(num1, num2);
		assert.equal(result, expectedResult, `should calculate sum`);
	});
});

function calculateSum(...args){
	return args.reduce((acc, item)=> acc + item, 0)
}