const { pages } = require('../../../po');
const { users } = require('../../../data/user.data');

const loginPage = pages('login');
const securePage = pages('secure');

describe('Authentication', () => {
  it('logs in with valid credentials @smoke', async () => {
    await loginPage.open();
    await loginPage.login(users.standard);

    await expect(browser).toHaveUrl(expect.stringContaining('/secure'));
    await expect(securePage.row.heading).toHaveText('Secure Area');
    await expect(securePage.flash.root).toHaveText('You logged into a secure area!', {
      containing: true,
    });
  });

  it('shows an error for invalid credentials', async () => {
    await loginPage.open();
    await loginPage.login(users.error);

    await expect(loginPage.error.root).toBeDisplayed();
    await expect(browser).toHaveUrl(expect.stringContaining('/login'));
    await expect(loginPage.error.root).toHaveText('Your username is invalid!', {
      containing: true,
    });
  });
});
