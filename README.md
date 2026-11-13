# Assignment 1: Verify Checkbox Selection

Automated testing using Playwright and TypeScript, with a Page
Object Model and a custom test fixture.

Application:
https://the-internet.herokuapp.com/checkboxes

## Prerequisites

- A Node.js version supported by Playwright
- npm
- Internet access

## Setup

Clone this repository and open a terminal in the project folder.

Install dependencies and Chromium:

```bash
npm ci
npx playwright install chromium
```

## Run tests

Check TypeScript types:

```bash
npm run typecheck
```

Run tests in headless mode:

```bash
npm test
```

Run tests with the browser visible:

```bash
npm run test:headed
```

Run tests in interactive UI mode:

```bash
npm run test:ui
```

View the HTML report after a test run:

```bash
npm run report
```

## Project structure

- pages/CheckboxesPage.ts: Typed locators and checkbox actions.
- fixtures/test.ts: Custom fixture that prepares the page object.
- tests/checkboxes.spec.ts: Test steps and assertions.
- playwright.config.ts: Browser and reporting configuration.
- tsconfig.json: TypeScript configuration.

## Test coverage

One test verifies this sequence:

1. Exactly two checkboxes are present and visible.
2. Both checkboxes are cleared and unchecked.
3. The first is selected while the second remains unchecked.
4. The second is selected so both are checked.
5. The first is cleared so only the second remains checked.
6. The second is cleared so both are unchecked.