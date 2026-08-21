const { pages } = require('../po');

const loginPage = pages('login');
const securePage = pages('secure');
const { users } = require('../data/user.data');


describe('The Internet — login practice', () => {
  it('Task 1: logs in with valid credentials', async () => {
    await loginPage.open();
    await loginPage.login(users.standard);
    
    await expect(browser).toHaveUrl(expect.stringContaining('/secure'));
    await expect(securePage.row.heading).toHaveText('Secure Area');
    await expect(securePage.flash.root).toHaveText('You logged into a secure area!', {containing: true});
  });

  it('Task 2: shows an error for an invalid username', async () => {
    await loginPage.open();
    await loginPage.login(users.error);

    await expect(loginPage.error.root).toBeDisplayed();
    await expect(browser).toHaveUrl(expect.stringContaining('/login'));
    await expect(loginPage.error.root).toHaveText('Your username is invalid!', {containing: true});
  });
});
