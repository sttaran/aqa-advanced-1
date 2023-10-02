import {HeaderComponent} from "./components/Header.mjs";

class LoginPage {
	_usernameLocator = '#username'
	_passwordLocator = '#password'
	_loginBtnLocator = '#login-button'

	constructor() {
		this.header = new HeaderComponent();
		this.usernameField = document.getElementById(this._usernameLocator);
		this.passwordField = document.getElementById(this._passwordLocator);
		this.loginButton = document.getElementById(this._loginBtnLocator);
	}

	setUsername(username) {
		this.usernameField.type(username);
	}

}
