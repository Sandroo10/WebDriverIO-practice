const BasePage = require('./base.page');
const { Alerts } = require('../components');

class AlertsPage extends BasePage {
  constructor() { super('/javascript_alerts'); this.alerts = new Alerts(); }
}

module.exports = AlertsPage;
