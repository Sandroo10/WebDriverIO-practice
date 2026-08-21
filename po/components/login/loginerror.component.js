const BaseComponent = require('../common/base.component');

class LoginError extends BaseComponent {
  constructor() {
    super('#flash.error');
  }
}

module.exports = LoginError;
