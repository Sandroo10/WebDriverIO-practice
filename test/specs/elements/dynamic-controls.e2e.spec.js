const { pages } = require('../../../po');

const dynamicControlsPage = pages('dynamicControls');

describe('Dynamic controls', () => {
  it('removes and restores an asynchronous checkbox', async () => {
    await dynamicControlsPage.open();

    await dynamicControlsPage.removeCheckbox();

    await expect(dynamicControlsPage.statusMessage)
      .toHaveText("It's gone!");
    await expect(dynamicControlsPage.checkbox)
      .not.toBeDisplayed();

    await dynamicControlsPage.restoreCheckbox();

    await expect(dynamicControlsPage.statusMessage)
      .toHaveText("It's back!");
    await expect(dynamicControlsPage.checkbox)
      .toBeDisplayed();
  });
});
