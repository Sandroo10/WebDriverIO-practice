const BaseComponent = require('../common/base.component');

class LoginForm extends BaseComponent {
  constructor() {
    super('#login');
  }

  get usernameInput() {
    return this.root.$('#username');
  }

  get passwordInput() {
    return this.root.$('#password');
  }

  get loginButton() {
    return this.root.$('button[type="submit"]');
  }

  async login(user) {
    await this.usernameInput.setValue(user.username);
    await this.passwordInput.setValue(user.password);
    await this.loginButton.click();
  }
}

module.exports = LoginForm;
