const BasePage = require('./base.page');
const { Dropdown } = require('../components');

class DropdownPage extends BasePage {
  constructor() {
    super('/dropdown');
    this.dropdown = new Dropdown();
  }

  get selectElement() {
    return this.dropdown.select;
  }

  async selectOption(optionText) {
    await this.selectElement.selectByVisibleText(optionText);
  }
}

module.exports = DropdownPage;
