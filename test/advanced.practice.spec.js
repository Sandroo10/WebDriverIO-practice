const { pages } = require('../po');

const checkboxesPage = pages('checkboxes');
const dropdownPage = pages('dropdown');
const dynamicControlsPage = pages('dynamicControls');


describe('The Internet — advanced practice tasks', () => {
  it('Task 4: selects and verifies checkboxes', async () => {
    await checkboxesPage.open();
    const checkboxes = await checkboxesPage.checkboxes.items;
    await expect(checkboxes)
      .toBeElementsArrayOfSize(2);

    for (let i = 0; i < checkboxes.length; i++) {
      if (!(await checkboxes[i].isSelected())) {
        await checkboxesPage.selectCheckbox(i);
      }
    }

    for (const checkbox of checkboxes) {
      await expect(checkbox).toBeSelected();
    }
  });

  it('Task 5: selects an option from the dropdown', async () => {
    await dropdownPage.open();

    await dropdownPage.selectOptionByIndex(2);
    await expect(dropdownPage.dropdown.options[2]).toBeSelected();
  });

  it('Task 6: handles dynamic controls', async () => {
    await dynamicControlsPage.open();

    await dynamicControlsPage.pressRemoveButton();
    await expect(dynamicControlsPage.controls.message).toHaveText('It\'s gone!');
    await expect(dynamicControlsPage.controls.checkbox).not.toBeDisplayed();
    
    await dynamicControlsPage.pressAddButton();
    await expect(dynamicControlsPage.controls.message).toHaveText('It\'s back!');
    await expect(dynamicControlsPage.controls.checkbox).toBeDisplayed();
  });

  it.skip('Task 7: handles JavaScript alerts and confirms', async () => {
    // TODO: accept an alert and dismiss a confirmation; verify #result each time.
  });

  it.skip('Task 8: uploads a file', async () => {
    // TODO: create/use a fixture file, upload it, and verify the displayed filename.
  });
});
