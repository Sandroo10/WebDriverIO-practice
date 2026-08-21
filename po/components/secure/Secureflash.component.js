const BaseComponent = require('../common/base.component');

class LoginFlash extends BaseComponent {
    constructor() {
        super('//div[@id="flash"]');
    }
}

module.exports = LoginFlash;