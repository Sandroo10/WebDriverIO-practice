const BaseComponent = require('../common/base.component');

class Checkboxes extends BaseComponent {
  constructor() {
    super('#checkboxes');
  }
  get items() {
    return this.root.$$('input[type="checkbox"]');
  }
}

module.exports = Checkboxes;
