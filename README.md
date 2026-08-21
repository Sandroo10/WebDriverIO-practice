# WebdriverIO UI Automation Framework

[![WebdriverIO Tests](https://github.com/Sandroo10/WebDriverIO-practice/actions/workflows/ui-tests.yml/badge.svg)](https://github.com/Sandroo10/WebDriverIO-practice/actions/workflows/ui-tests.yml)

An end-to-end UI automation framework built with WebdriverIO and Mocha. It exercises representative user journeys on [The Internet](https://the-internet.herokuapp.com/), a public application created for automation practice.

The project focuses on maintainable test design: Page Objects, reusable components, behaviour-focused specifications, smoke and full-suite execution, reporting, and continuous integration.

## What this project demonstrates

- End-to-end browser testing with WebdriverIO and Mocha.
- Page Object Model (POM) with composition-based reusable components.
- Behaviour-focused specifications organised by feature.
- Positive and negative authentication coverage.
- Dynamic DOM interactions, native controls, browser dialogs, and file upload.
- State-based assertions and WebdriverIO waits instead of fixed delays.
- Smoke-test selection using `@smoke` tags.
- Allure results, HTML reports, and screenshots on test failure.
- ESLint 10 flat configuration, Prettier formatting, and EditorConfig consistency.
- GitHub Actions CI and Dependabot dependency updates.

## Test coverage

| Area               | Scenarios                                                |
| ------------------ | -------------------------------------------------------- |
| Authentication     | Valid login; invalid-login error handling                |
| Dynamic elements   | Add multiple elements; remove an element; clean up state |
| Form controls      | Select all checkboxes; select a dropdown option          |
| Dynamic controls   | Remove and restore asynchronously changing elements      |
| JavaScript dialogs | Alert, confirmation, and prompt acceptance               |
| File upload        | Upload and verify a local text fixture                   |

The smoke suite contains the valid login, add/remove elements, and file-upload journeys. All scenarios are included in the full regression suite.

## Framework architecture

```text
├── data/                         # External credentials and test data
├── po/
│   ├── components/               # Reusable, scoped UI components and selectors
│   └── pages/                    # Page actions and component composition
├── test/
│   ├── fixtures/                 # Upload files used by tests
│   └── specs/
│       ├── authentication/       # Authentication E2E tests
│       └── elements/             # UI interaction E2E tests
├── .github/
│   ├── workflows/                # GitHub Actions CI workflow
│   └── dependabot.yml            # Automated dependency-update configuration
├── artifacts/                    # Generated reports and screenshots (Git-ignored)
├── eslint.config.js              # ESLint flat configuration
├── wdio.conf.js                  # WebdriverIO configuration
└── package.json                  # Commands and project dependencies
```

Specifications describe user behaviour. Page Objects expose meaningful operations such as `login()`, `selectOption()` and `removeCheckbox()`. Components contain selector details. This keeps tests readable and limits maintenance when page structure changes.

## Prerequisites

- Node.js 20 or newer
- npm
- Google Chrome for local UI runs
- Network access to `https://the-internet.herokuapp.com`

## Getting started

```powershell
git clone https://github.com/Sandroo10/WebDriverIO-practice.git
cd WebDriverIO-practice
npm ci
```

## Test commands

```powershell
# Entire UI suite
npm test

# Fast smoke suite
npm run test:smoke

# Feature-focused suites
npm run test:auth
npm run test:elements

# Formatting, linting, then the full suite
npm run check
```

## Code quality

```powershell
# Check without changing files
npm run format:check
npm run lint

# Apply automatic fixes
npm run format
npm run lint:fix
```

ESLint detects common JavaScript issues and recognises WebdriverIO globals. Prettier and EditorConfig enforce a shared formatting baseline across the repository.

## Reporting and diagnostics

Allure collects test results during every run. To create and view the report locally:

```powershell
npm test
npm run allure:generate
npm run allure:open
```

- Allure HTML report: `artifacts/allure-report`
- Allure raw results: `artifacts/allure-results`
- Failure screenshots: `artifacts/screenshots`

Generated artifacts are excluded from Git and are available to download from CI runs.

## Continuous integration

GitHub Actions provides fast feedback while keeping the public demo site load modest.

| Trigger                                   | Browser coverage              | Test scope     |
| ----------------------------------------- | ----------------------------- | -------------- |
| Push or pull request to `main` / `master` | Chrome (headless)             | `@smoke` suite |
| Weekly schedule — Monday 06:00 UTC        | Chrome and Firefox (headless) | Full suite     |
| Manual workflow run                       | Chrome                        | Full suite     |

Every CI run installs dependencies cleanly, checks formatting and linting, executes the selected test scope, generates an Allure report, and uploads reports and failure screenshots as build artifacts. No automatic test retries are configured: failures should be investigated rather than hidden.

## Dependency maintenance

Dependabot checks npm dependencies and GitHub Actions versions every week. When updates are available, it creates a dedicated branch and pull request. Review the change and CI results, then merge it only if the suite remains healthy.

## Design principles

- Prefer stable, semantic selectors over layout-dependent selectors.
- Use state-based waits and assertions; do not use fixed `browser.pause()` calls.
- Keep tests independent and leave the application in a predictable state.
- Separate test data, test scenarios, page actions, and selectors.
- Assert observable user outcomes as well as relevant browser state.
- Keep smoke tests small, stable, and fast; reserve wider coverage for regression runs.

## Scope and limitations

This is a learning and portfolio framework, not a test suite for a system owned by this repository. It targets a third-party public demo application and intentionally avoids destructive actions, test retries, and unnecessary parallel load. Test stability can be affected by availability or changes in the external site.
