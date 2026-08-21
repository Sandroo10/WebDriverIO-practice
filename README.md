# WebdriverIO UI Automation Practice

[![Weekly WebdriverIO Tests](https://github.com/Sandroo10/WebDriverIO-practice/actions/workflows/ui-tests.yml/badge.svg)](https://github.com/Sandroo10/WebDriverIO-practice/actions/workflows/ui-tests.yml)

## Overview

This repository is a maintainable WebdriverIO/Mocha automation framework built for practicing UI automation against [The Internet](https://the-internet.herokuapp.com/), a public demo application designed for automated-testing exercises.

It demonstrates Page Object Model, reusable components, external test data, explicit waits, failure screenshots, Allure reporting, and linting. The application is intentionally small; the framework design is the main learning objective.

## Coverage

The suite currently covers:

- Successful and invalid login.
- Adding and removing dynamic elements.
- Checkbox state management.
- Native dropdown selection.
- Dynamic controls and asynchronous UI state changes.
- JavaScript alerts, confirmations, and prompts.
- File upload.

## Architecture

```text
data/                       # Credentials and test data
po/components/              # Reusable UI components and selectors
po/pages/                   # Page-level actions and composition
test/fixtures/              # Files used by upload tests
test/specs/authentication/  # Authentication E2E specifications
test/specs/elements/        # Element-interaction E2E specifications
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
npm run test:auth
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

## Continuous integration

The GitHub Actions workflow performs a clean dependency installation, runs ESLint, executes Chrome in headless mode, and uploads screenshots and Allure results as build artifacts. It runs:

- On pushes and pull requests targeting `main`.
- Every Monday at 06:00 UTC.
- Manually through GitHub's **Run workflow** action.

The workflow keeps one browser instance and has a 15-minute timeout to avoid placing unnecessary load on the public demo application. CI artifacts are retained for 14 days.

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

Introduce smoke/regression tags, improve Page Object encapsulation, and add an example Allure report screenshot after a successful CI run.
