// let impression;
//
// function makeOrder() {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => resolve('done'), 1000);
// 	});
// }
//
// function eatPizza(pizza) {
// 	console.log(`I am eating pizza with status ${pizza}`);
// 	impression = 'tasty';
// }
//
// function provideTips() {
// 	if (impression === 'tasty') {
// 		console.log('I give you 10$');
// 	} else {
// 		console.log('I give you no tips');
// 	}
// }
//
// makeOrder()
// 	.then((pizza) => eatPizza(pizza))
// 	.then(provideTips)
// 	.catch((e) => console.log(e));

//  API
// let data;
//
// const getJSONFromResponse = (response) => response.json();
// const printData = (todo) => console.log('Received todo item', todo);
//
// fetch('https://jsonplaceholder.typicode.com/todos/1').then(getJSONFromResponse).then(printData);

// const promise = new Promise((resolve, reject) => reject('Error'));
// promise.catch((err) => console.log(err));
// console.log(promise);

// STATIC METHODS

// function getTodoById(id) {
// 	return Date.now() % 2 === 0
// 		? new Promise((resolve, reject) => reject('Error has happened'))
// 		: fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => response.json());
// }

function getTodoById(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then((response) => response.json());
}

// const start = Date.now();
// getTodoById(1).then((value) => console.log(value));
// getTodoById(2).then((value) => console.log(value));
// getTodoById(3).then((value) => console.log(value));
// getTodoById(4).then((value) => console.log(value));
// getTodoById(5).then((value) => console.log(value));
// console.log(`Request has finished in ${Date.now() - start}`);

// const start = Date.now();

// const promise = Promise.all([getTodoById(1), getTodoById(2), getTodoById(3), getTodoById(4), getTodoById(5)]);

// promise.then((results) => console.log(results));
// console.log(`Request has finished in ${Date.now() - start}`);

// const promise = Promise.race([getTodoById(1), getTodoById(2), getTodoById(3), getTodoById(4), getTodoById(5)]);
// promise.then((value) => console.log(value));

const promise = Promise.allSettled([getTodoById(1), getTodoById(2), getTodoById(3), getTodoById(4), getTodoById(5)]);
promise.then((results) => console.log(results)).finally(() => console.log('Finish'));
