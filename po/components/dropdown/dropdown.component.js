const BaseComponent = require('../common/base.component');

class Dropdown extends BaseComponent {
  constructor() { super('#dropdown'); }
  get select() { return this.root; }
}

module.exports = Dropdown;
