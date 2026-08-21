const { pages } = require('../../../po');

const checkboxesPage = pages('checkboxes');

describe('Checkboxes', () => {
  it('selects all available checkboxes', async () => {
    await checkboxesPage.open();

    await expect(checkboxesPage.items).toBeElementsArrayOfSize(2);

    await checkboxesPage.selectAllCheckboxes();

    for (const checkbox of checkboxesPage.items) {
      await expect(checkbox).toBeSelected();
    }
  });
});
