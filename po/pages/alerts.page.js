const BasePage = require('./base.page');
const { Alerts } = require('../components');

class AlertsPage extends BasePage {
  constructor() {
    super('/javascript_alerts');
    this.alerts = new Alerts();
  }

  async clickAlertButton() {
    await this.alerts.alertButton.click();
  }

  async clickConfirmButton() {
    await this.alerts.confirmButton.click();
  }

  async clickPromptButton() {
    await this.alerts.promptButton.click();
  }

  startAcceptingDialogs(promptText) {
    this.stopAcceptingDialogs();

    this.dialogHandler = async (dialog) => {
      await dialog.accept(dialog.type() === 'prompt' ? promptText : undefined);
    };

    browser.on('dialog', this.dialogHandler);
  }

  stopAcceptingDialogs() {
    if (!this.dialogHandler) {
      return;
    }

    browser.off('dialog', this.dialogHandler);
    this.dialogHandler = undefined;
  }
}

module.exports = AlertsPage;
