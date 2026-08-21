const BaseComponent = require('../common/base.component');

class DynamicControls extends BaseComponent {
  constructor() { super('#content'); }
  get checkbox() { return this.root.$('#checkbox input'); }
  get removeButton() { return this.root.$('button=Remove'); }
  get addButton() { return this.root.$('button=Add'); }
  get message() { return this.root.$('#message'); }
}

module.exports = DynamicControls;
