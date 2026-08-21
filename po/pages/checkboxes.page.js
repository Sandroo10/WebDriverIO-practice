const BasePage = require('./base.page');
const { Checkboxes } = require('../components');

class CheckboxesPage extends BasePage {
  constructor() { 
    super('/checkboxes'); 
    this.checkboxes = new Checkboxes(); 
  }

  get items() {
    return this.checkboxes.items;
  }

  async selectCheckbox(index) {
    const checkbox = this.items[index];

    if (!(await checkbox.isSelected())) {
      await checkbox.click();
    }
  }

  async selectAllCheckboxes() {
    for (let index = 0; index < this.items.length; index++) {
      await this.selectCheckbox(index);
    }
  }
}

module.exports = CheckboxesPage;
