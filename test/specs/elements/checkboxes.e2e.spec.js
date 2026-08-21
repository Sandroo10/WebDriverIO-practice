const { pages } = require('../../../po');

const checkboxesPage = pages('checkboxes');

describe('Checkboxes', () => {
  it('selects all available checkboxes', async () => {
    await checkboxesPage.open();

    const initialCheckboxes = await checkboxesPage.items;
    await expect(initialCheckboxes).toBeElementsArrayOfSize(2);

    await checkboxesPage.selectAllCheckboxes();

    const selectedCheckboxes = await checkboxesPage.items;

    for (const checkbox of selectedCheckboxes) {
      await expect(checkbox).toBeSelected();
    }
  });
});
