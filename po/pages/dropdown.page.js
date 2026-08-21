const BasePage = require('./base.page');
const { Dropdown } = require('../components');

class DropdownPage extends BasePage {
  constructor() {
    super('/dropdown');
    this.dropdown = new Dropdown();
  }

  async selectOptionByIndex(index) {
    await this.dropdown.select.selectByIndex(index);
  }
}

module.exports = DropdownPage;
