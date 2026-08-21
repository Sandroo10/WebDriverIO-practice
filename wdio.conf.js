const { existsSync, mkdirSync } = require('fs');

const chromeArguments = ['--window-size=1440,900'];

if (process.env.CI) {
  chromeArguments.push('--headless=new', '--no-sandbox', '--disable-dev-shm-usage');
}

exports.config = {
  runner: 'local',
  specs: ['./test/**/*.spec.js'],
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    webSocketUrl: true,
    'goog:chromeOptions': {
      args: chromeArguments,
    },
  }],
  logLevel: 'warn',
  baseUrl: process.env.BASE_URL || 'https://the-internet.herokuapp.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 2,
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'artifacts/allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
    }],
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  afterTest: async function (test, context, { error }) {
    if (!error) {
      return;
    }

    const directory = './artifacts/screenshots';

    if (!existsSync(directory)) {
      mkdirSync(directory, { recursive: true });
    }

    const fileName = test.title.replace(/[^a-z0-9]/gi, '_');
    await browser.saveScreenshot(`${directory}/${fileName}.png`);
  },
};
