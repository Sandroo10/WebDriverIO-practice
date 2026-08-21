const BasePage = require('./base.page');
const { DynamicControls } = require('../components');

class DynamicControlsPage extends BasePage {
  constructor() { super('/dynamic_controls'); this.controls = new DynamicControls(); }
}

module.exports = DynamicControlsPage;
