const { pages } = require('../../../po');

const dropdownPage = pages('dropdown');

describe('Dropdown', () => {
  it('selects Option 2', async () => {
    await dropdownPage.open();

    await dropdownPage.selectOption('Option 2');

    await expect(dropdownPage.selectElement).toHaveValue('2');
  });
});
