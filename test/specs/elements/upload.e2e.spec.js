const { pages } = require('../../../po');

const uploadPage = pages('upload');

describe('File upload', () => {
  it('uploads a text fixture successfully', async () => {
    await uploadPage.open();

    await uploadPage.uploadFile('test/fixtures/upload-sample.txt');

    await expect(uploadPage.upload.uploadedFileName)
      .toHaveText('upload-sample.txt');
  });
});
