const BasePage = require('./base.page');
const { Adder } = require('../components');

class AdderPage extends BasePage {
  constructor() {
    super('/add_remove_elements/');
    this.adder = new Adder();
  }

  async add() {
    await this.adder.addButton.click();
  }

  async deleteOne() {
    await this.adder.deleteButtons[0].click();
  }

  async deleteRest() {
    while (this.adder.deleteButtons.length > 0) {
      await this.adder.deleteButtons[0].click();
    }
  }
}

module.exports = AdderPage;