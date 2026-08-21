const BaseComponent = require('../common/base.component');

class Upload extends BaseComponent {
  constructor() { super('#content'); }
  get fileInput() { return this.root.$('#file-upload'); }
  get submitButton() { return this.root.$('#file-submit'); }
  get uploadedFileName() { return this.root.$('#uploaded-files'); }
}

module.exports = Upload;
