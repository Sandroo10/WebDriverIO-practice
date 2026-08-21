const BaseComponent = require('../common/base.component');

class SecureFlash extends BaseComponent {
    constructor() {
        super('//div[@id="flash"]');
    }
}

module.exports = SecureFlash;