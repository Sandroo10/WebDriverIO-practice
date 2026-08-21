# WebdriverIO UI Automation Practice

## Overview

This repository is a maintainable WebdriverIO/Mocha automation framework built for practicing UI automation against [The Internet](https://the-internet.herokuapp.com/), a public demo application designed for automated-testing exercises.

It demonstrates Page Object Model, reusable components, external test data, explicit waits, failure screenshots, Allure reporting, and linting. The application is intentionally small; the framework design is the main learning objective.

## Coverage

Implemented scenarios cover successful form authentication, invalid credentials, and adding/removing dynamic elements. Additional starter exercises are in `test/advanced.practice.spec.js`:

- Checkbox state management
- Native dropdown selection
- Dynamic controls and asynchronous UI state changes
- JavaScript alerts and confirmations
- File upload

The advanced scenarios are deliberately marked `it.skip`; implement them in the existing Page Objects and components.

## Architecture

```text
data/                       # Credentials and test data
po/components/              # Reusable UI components and selectors
po/pages/                   # Page-level actions and composition
test/                       # Mocha specifications
artifacts/                  # Generated screenshots and Allure files
wdio.conf.js                # WebdriverIO runner configuration
.eslintrc.json              # JavaScript quality rules
```

Tests describe user behaviour. Page Objects expose actions such as `login()` and `deleteRest()`. Components own selectors and scoped element access, keeping specifications readable and reducing maintenance when the UI changes.

## Requirements

- Node.js 20 or newer
- npm
- Google Chrome
- Network access to `the-internet.herokuapp.com`

## Installation and execution

```powershell
cd C:\Users\user\Desktop\Epam\webdriverio-the-internet-practice
npm install
npm test
```

Focused suites:

```powershell
npm run test:login
npm run test:elements
```

## Code quality

```powershell
npm run lint
npm run lint:fix
```

The ESLint configuration recognises WebdriverIO globals (`browser`, `$`, `$$`, and `expect`) while detecting undefined and unused variables.

## Reporting and diagnostics

Allure collects results during every test run. Generate and open its HTML report separately:

```powershell
npm test
npm run allure:generate
npm run allure:open
```

Reports are generated under `artifacts/allure-report`. Failed tests also produce screenshots under `artifacts/screenshots`. These generated artifacts are ignored by Git.

## Test design principles

- Prefer stable selectors over brittle layout-based selectors.
- Use WebdriverIO wait assertions instead of `browser.pause()`.
- Keep test data outside test logic.
- Keep tests independent and repeatable.
- Use page-level actions instead of duplicating selectors in specs.
- Verify both user-visible outcomes and important navigation/state changes.

## Public application notice

This suite targets a third-party public demo application for educational use. It intentionally runs a small, sequential set of tests and does not stress or modify the service beyond normal browser interactions. It is a framework demonstration, not a production-system test suite.

## Next steps

Implement the five advanced exercises, add CI execution with one Chrome worker, introduce smoke/regression scripts, and add an Allure screenshot and CI badge after publishing the repository.
