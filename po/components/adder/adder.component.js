const BaseComponent = require('../common/base.component');

class Adder extends BaseComponent {
  constructor() {
    super('//div[@id="content"]');
  }

  get addButton() {
    return this.root.$('.//button[normalize-space()="Add Element"]');
  }

  get deleteButtons() {
    return this.root.$$('.//button[normalize-space()="Delete"]');
  }
}

module.exports = Adder;
