const BasePage = require('./base.page');
const { DynamicControls } = require('../components');

class DynamicControlsPage extends BasePage {
  constructor() { 
    super('/dynamic_controls'); 
    this.controls = new DynamicControls(); 
  }

  get checkbox() {
    return this.controls.checkbox;
  }

  get statusMessage() {
    return this.controls.message;
  }

  async removeCheckbox() {
    await this.controls.removeButton.click();
  }

  async restoreCheckbox() {
    await this.controls.addButton.click();
  }
}

module.exports = DynamicControlsPage;
