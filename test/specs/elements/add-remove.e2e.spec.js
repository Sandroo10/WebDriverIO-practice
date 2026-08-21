const { pages } = require('../../../po');

const adderPage = pages('adder');

describe('Dynamic elements', () => {
  afterEach(async () => {
    await adderPage.deleteRest();
  });

  it('adds three elements and removes one', async () => {
    await adderPage.open();

    await expect(adderPage.addButton).toBeDisplayed();

    await adderPage.add();
    await adderPage.add();
    await adderPage.add();

    await expect(adderPage.deleteButtons)
      .toBeElementsArrayOfSize(3);

    await adderPage.deleteOne();

    await expect(adderPage.deleteButtons)
      .toBeElementsArrayOfSize(2);
  });
});
