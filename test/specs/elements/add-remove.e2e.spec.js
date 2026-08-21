const { pages } = require('../../../po');

const adderPage = pages('adder');

describe('Dynamic elements', () => {
  afterEach(async () => {
    await adderPage.deleteRest();
  });

  it('adds three elements and removes one', async () => {
    await adderPage.open();

    await expect(adderPage.adder.addButton).toBeDisplayed();

    await adderPage.add();
    await adderPage.add();
    await adderPage.add();

    await expect(adderPage.adder.deleteButtons)
      .toBeElementsArrayOfSize(3);

    await adderPage.deleteOne();

    await expect(adderPage.adder.deleteButtons)
      .toBeElementsArrayOfSize(2);
  });
});
