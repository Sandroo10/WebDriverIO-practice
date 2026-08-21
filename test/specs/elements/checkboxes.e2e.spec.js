const { pages } = require('../../../po');

const checkboxesPage = pages('checkboxes');

describe('Checkboxes', () => {
  it('selects all available checkboxes', async () => {
    await checkboxesPage.open();

    const checkboxes = checkboxesPage.checkboxes.items;

    await expect(checkboxes).toBeElementsArrayOfSize(2);

    for (let index = 0; index < checkboxes.length; index++) {
      if (!(await checkboxes[index].isSelected())) {
        await checkboxesPage.selectCheckbox(index);
      }
    }

    for (const checkbox of checkboxes) {
      await expect(checkbox).toBeSelected();
    }
  });
});
