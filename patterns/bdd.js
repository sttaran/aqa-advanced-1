class HeaderComponent {
	constructor() {
		this.logoElement = document.getElementById('logo');
		this.menuButton = document.getElementById('menu-button');
	}

	clickMenuButton() {
		this.menuButton.click();
	}
}

class LoginPage {
	constructor() {
		this.header = new HeaderComponent();
		this.usernameField = document.getElementById('username');
		this.passwordField = document.getElementById('password');
		this.loginButton = document.getElementById('login-button');
	}

	setUsername(username) {
		this.usernameField.value = username;
	}

	// інші методи ...
}
