export class HeaderComponent {
    constructor() {
        this.logoElement = document.getElementById('logo');
        this.menuButton = document.getElementById('menu-button');
    }

    clickMenuButton() {
        this.menuButton.click();
    }
}