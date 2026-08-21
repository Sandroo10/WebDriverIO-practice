const { pages } = require('../po');

const adderPage = pages('adder');


describe('The Internet — dynamic element practice', () => {
  afterEach(async () => {
    await adderPage.deleteRest();
  });
  it('Task 3: adds and removes dynamic elements', async () => {
    await adderPage.open();

    await expect(adderPage.adder.addButton).toBeDisplayed();

    await adderPage.add();
    await adderPage.add();
    await adderPage.add();

    await expect(adderPage.adder.deleteButtons).toBeElementsArrayOfSize(3);

    await adderPage.deleteOne();

    await expect(adderPage.adder.deleteButtons).toBeElementsArrayOfSize(2);
  });
});