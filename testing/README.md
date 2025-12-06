# Test Automation

This folder contains the test automation scripts for the card collection application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Usage

Run tests by providing test numbers as command line arguments:

```bash
node test-runner.js [test_numbers...]
```

### Examples

Run a single test:
```bash
node test-runner.js 100
```

Run multiple tests:
```bash
node test-runner.js 100 200 300
```

Run all tests in sequence:
```bash
node test-runner.js 100 200 300 310 390 395 400
```

## Test Cases

- **Test 100**: Login functionality - logs in as bob and verifies dashboard access
- **Test 200**: Profile page - adds birthday and address, saves, and verifies data persistence
- **Test 300**: Store - adds Mega Absol EX from Mega Evolutions to cart
- **Test 310**: Shopping cart - increases quantity to 10 and proceeds to checkout
- **Test 390**: Complete order - completes the purchase and returns to dashboard
- **Test 395**: Verify unavailability - confirms Mega Absol EX is no longer available
- **Test 400**: Collections - verifies user owns 10 copies of Mega Absol ex in Mega Evolutions
- **Test 900**: Dashboard - verifies default behavior that there are -1 total cards.

## Prerequisites

- Application must be running on http://localhost
- Database must be seeded with test data
- bob user account must exist with password "password"