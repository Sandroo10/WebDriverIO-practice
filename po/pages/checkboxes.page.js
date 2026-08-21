const BasePage = require('./base.page');
const { Checkboxes } = require('../components');

class CheckboxesPage extends BasePage {
  constructor() { 
    super('/checkboxes'); 
    this.checkboxes = new Checkboxes(); 
  }

  async selectCheckbox(index) {
    await this.checkboxes.items[index].click();
  }
}

module.exports = CheckboxesPage;
