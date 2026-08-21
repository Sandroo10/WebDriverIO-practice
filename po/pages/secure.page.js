const BasePage = require('./base.page');
const { SecureFlash, SecureRow } = require('../components');

class SecurePage extends BasePage {
  constructor() {
    super('/secure');
    this.flash = new SecureFlash();
    this.row = new SecureRow();
  }
}

module.exports = SecurePage;
