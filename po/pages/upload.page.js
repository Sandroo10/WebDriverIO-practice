const BasePage = require('./base.page');
const { Upload } = require('../components');

class UploadPage extends BasePage {
  constructor() { 
    super('/upload'); 
    this.upload = new Upload(); 
  }

  async uploadFile(filePath) {
    const remoteFilePath = await browser.uploadFile(filePath);
    await this.upload.fileInput.setValue(remoteFilePath);
    await this.upload.submitButton.click();
  }
}

module.exports = UploadPage;
