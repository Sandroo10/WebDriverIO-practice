const BasePage = require('./base.page');
const { Checkboxes } = require('../components');

class CheckboxesPage extends BasePage {
  constructor() { super('/checkboxes'); this.checkboxes = new Checkboxes(); }
}

module.exports = CheckboxesPage;
