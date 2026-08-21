const BasePage = require('./base.page');
const { LoginForm, LoginError } = require('../components');

class LoginPage extends BasePage {
  constructor() {
    super('/login');
    this.form = new LoginForm();
    this.error = new LoginError();
  }

  async login(user) {
    await this.form.login(user);
  }
}

module.exports = LoginPage;
