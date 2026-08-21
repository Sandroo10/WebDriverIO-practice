const BaseComponent = require('../common/base.component');

class Alerts extends BaseComponent {
  constructor() { super('#content'); }
  get alertButton() { return this.root.$('button=Click for JS Alert'); }
  get confirmButton() { return this.root.$('button=Click for JS Confirm'); }
  get result() { return this.root.$('#result'); }
}

module.exports = Alerts;
