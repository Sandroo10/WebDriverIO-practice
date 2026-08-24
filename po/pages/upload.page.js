const path = require('node:path');
const BasePage = require('./base.page');
const { Upload } = require('../components');

class UploadPage extends BasePage {
  constructor() {
    super('/upload');
    this.upload = new Upload();
  }

  async uploadFile(filePath) {
    const absoluteFilePath = path.resolve(filePath);

    await this.upload.fileInput.setValue(absoluteFilePath);
    await this.upload.submitButton.click();
  }
}

module.exports = UploadPage;
