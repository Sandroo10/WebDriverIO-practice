const { pages } = require('../../../po');

const dynamicControlsPage = pages('dynamicControls');

describe('Dynamic controls', () => {
  it('removes and restores an asynchronous checkbox', async () => {
    await dynamicControlsPage.open();

    await dynamicControlsPage.pressRemoveButton();

    await expect(dynamicControlsPage.controls.message)
      .toHaveText("It's gone!");
    await expect(dynamicControlsPage.controls.checkbox)
      .not.toBeDisplayed();

    await dynamicControlsPage.pressAddButton();

    await expect(dynamicControlsPage.controls.message)
      .toHaveText("It's back!");
    await expect(dynamicControlsPage.controls.checkbox)
      .toBeDisplayed();
  });
});
