const BaseComponent = require('../common/base.component');

class LoginFlash extends BaseComponent {
    constructor() {
        super('//div[@class="row"]');
    }

    get heading () {
        return this.root.$('.//h2[normalize-space() = "Secure Area"]');
    }
}

module.exports = LoginFlash;