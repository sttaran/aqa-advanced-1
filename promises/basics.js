function printName() {
	console.log('Hello. My name is Joe!');
}

let order;

function makeOrder() {
	console.log('I AM SYNC');

	setTimeout(() => {
		console.log('I would like to have a pizza with pineapple!');
		order = 'accepted';
	}, 100);
}

function sayThanks() {
	console.log('Thanks! I got my pizza');
}

printName();
makeOrder();
console.log('order :', order);
sayThanks();
