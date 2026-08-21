const { pages } = require('../../../po');

const alertsPage = pages('alerts');

describe('JavaScript dialogs', () => {
  it('accepts alerts, confirmations, and prompts', async () => {
    const text = 'I just entered text';

    await alertsPage.open();
    alertsPage.startAcceptingDialogs(text);

    try {
      await alertsPage.clickAlertButton();
      await expect(alertsPage.alerts.result).toHaveText('You successfully clicked an alert');

      await alertsPage.clickConfirmButton();
      await expect(alertsPage.alerts.result).toHaveText('You clicked: Ok');

      await alertsPage.clickPromptButton();
      await expect(alertsPage.alerts.result).toHaveText(`You entered: ${text}`);
    } finally {
      alertsPage.stopAcceptingDialogs();
    }
  });
});
