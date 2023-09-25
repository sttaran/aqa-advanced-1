class BankAccount {
	#balance = 0;

	deposit(amount) {
		if (amount > 0) {
			this.#balance += amount;
		}
	}

	getBalance() {
		return this.#balance;
	}
}

const account = new BankAccount();

account.deposit(100);
console.log(account.getBalance()); // 100

//

class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}
}

//Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок та повертати екземпляр класу EBook
class EBook extends Book {
	constructor(title, author, fileFormat) {
		super(title, author);
		this.fileFormat = fileFormat;
	}

	static fromBook(book, fileFormat) {
		return new EBook(book.title, book.author, fileFormat);
	}
}
