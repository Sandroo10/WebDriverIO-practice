const BasePage = require('./base.page');
const { DynamicControls } = require('../components');

class DynamicControlsPage extends BasePage {
  constructor() { 
    super('/dynamic_controls'); 
    this.controls = new DynamicControls(); 
  }

  async pressRemoveButton() {
    await this.controls.removeButton.click();
  }

  async pressAddButton() {
    await this.controls.addButton.click();
  }
}

module.exports = DynamicControlsPage;
