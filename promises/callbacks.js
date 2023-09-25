let order;
let pizza;
let impression;

function makeOrder(onPizzaReady) {
	order = 'accepted';
	// setTimeout(() => {
	// 	pizza = 'done';
	// 	onPizzaReady();
	// });

	// API request
}

function eatPizza(onFinishDinner) {
	console.log(`I am eating pizza with status ${pizza}`);
	impression = 'tasty';
	onFinishDinner();
}

function provideTips() {
	if (impression === 'tasty') {
		console.log('I give you 10$');
	} else {
		console.log('I give you no tips');
	}
}

makeOrder(() => eatPizza(provideTips));
