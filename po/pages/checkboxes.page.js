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
    const checkboxes = await this.items;
    const checkbox = checkboxes[index];

    if (!(await checkbox.isSelected())) {
      await checkbox.click();
    }
  }

  async selectAllCheckboxes() {
    const checkboxes = await this.items;

    for (const checkbox of checkboxes) {
      if (!(await checkbox.isSelected())) {
        await checkbox.click();
      }
    }
  }
}

module.exports = CheckboxesPage;
