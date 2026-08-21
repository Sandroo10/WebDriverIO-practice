const BasePage = require('./base.page');
const { Dropdown } = require('../components');

class DropdownPage extends BasePage {
  constructor() { super('/dropdown'); this.dropdown = new Dropdown(); }
}

module.exports = DropdownPage;
