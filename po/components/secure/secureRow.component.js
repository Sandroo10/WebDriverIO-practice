const BaseComponent = require('../common/base.component');

class SecureRow extends BaseComponent {
  constructor() {
    super('#content');
  }

  get heading() {
    return this.root.$('h2');
  }
}
module.exports = SecureRow;
