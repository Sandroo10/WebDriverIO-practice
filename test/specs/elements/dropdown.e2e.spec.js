const { pages } = require('../../../po');

const dropdownPage = pages('dropdown');

describe('Dropdown', () => {
  it('selects Option 2', async () => {
    await dropdownPage.open();

    await dropdownPage.selectOptionByIndex(2);

    await expect(dropdownPage.dropdown.options[2]).toBeSelected();
  });
});
