import test from 'node:test';
import assert from 'assert';

function calculateSum(num1, num2) {
	return num1 + num2;
}

// test('should calculate sum of 1 and 2', async () => {
// 	const num1 = 1;
// 	const num2 = 2;
//
// 	const result = calculateSum(num1, num2);
// 	assert.equal(result, 3, `should calculate sum of 1 and 2`);
// });
//
// test('should calculate sum of 2 and 3', async () => {
// 	const num1 = 2;
// 	const num2 = 3;
//
// 	const result = calculateSum(num1, num2);
// 	assert.equal(result, 5, `should calculate sum of 2 and 3`);
// });


const positiveFixtures = [
	{
		input: {
			num1: 1,
			num2: 2,
		},
		expectedResult: 3
	},
	{
		input: {
			num1: 2,
			num2: 3,
		},
		expectedResult: 5
	},
	{
		input: {
			num1: 4,
			num2: 8,
		},
		expectedResult: 12
	}
]

const negativeFixtures = [
	{
		title: "Number and string should be concatenated",
		input: {
			num1: 4,
			num2: "8",
		},
		expectedResult: "48"
	},
	{
		title: "Boolean should casted to number",
		input: {
			num1: 4,
			num2: true,
		},
		expectedResult: 5
	}
]

positiveFixtures.forEach(({input, expectedResult})=>{
	test(`Positive case : should calculate sum of ${input.num1} and ${input.num2}`, async () => {
	const {num1, num2} = input
	const result = calculateSum(num1, num2);
	assert.equal(result, expectedResult, `should calculate sum of ${num1} and ${num2}`);
});
})

negativeFixtures.forEach(({input, expectedResult, title})=>{
	test(`Negative case: ${title}`, async () => {
		const {num1, num2} = input
		const result = calculateSum(num1, num2);
		assert.equal(result, expectedResult, `should calculate sum of ${num1} and ${num2}`);
	});
})

//

const positive = [
	{
		input: {
			email: "test@gmail.com",
			password: "LK:HLIUgsaygdfisd;lugfo78c67"
		}
	},
	{
		input: {
			email: "1234@gmail.com",
			password: "LK:asasd;lugfo78c67"
		}
	}
]

const positive = [
	{
		input: {
			email: "",
			password: "LK:HLIUgsaygdfisd;lugfo78c67"
		},
		expectedResult: {
			statusCode: 400,
			body: {
				status: "error",
				messages: ["email should be valid email"]
			}
		}
	},
	{
		input: {
			email: "1234.gmail.com",
			password: "1"
		},
		expectedResult: {
			statusCode: 400,
			body: {
				status: "error",
				message: ["email should be valid email", "password should have at least 8 symbols"]
			}
		}
	}
]