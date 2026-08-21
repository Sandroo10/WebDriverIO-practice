const BasePage = require('./base.page');
const { Upload } = require('../components');

class UploadPage extends BasePage {
  constructor() { super('/upload'); this.upload = new Upload(); }
}

module.exports = UploadPage;
