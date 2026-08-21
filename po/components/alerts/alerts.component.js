const BaseComponent = require('../common/base.component');

class Alerts extends BaseComponent {
  constructor() {
    super('#content');
  }
  get alertButton() {
    return this.root.$('[onclick="jsAlert()"]');
  }

  get confirmButton() {
    return this.root.$('[onclick="jsConfirm()"]');
  }

  get promptButton() {
    return this.root.$('[onclick="jsPrompt()"]');
  }

  get result() {
    return this.root.$('#result');
  }
}

module.exports = Alerts;
