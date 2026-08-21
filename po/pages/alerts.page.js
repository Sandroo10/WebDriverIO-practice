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

  acceptNextDialog(promptText) {
    return new Promise((resolve, reject) => {
      browser.once('dialog', async (dialog) => {
        try {
          const message = dialog.message();

          await dialog.accept(promptText);

          resolve(message);
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}

module.exports = AlertsPage;
