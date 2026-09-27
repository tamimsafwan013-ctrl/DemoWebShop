# DemoWebShop Playwright Automation

## Project Overview

This project contains automated test scenarios for the Tricentis Demo Web Shop using Playwright.

The project demonstrates UI automation using the Page Object Model (POM), test validation, reusable page classes, and Git/GitHub workflow practices.

## Test Scenarios

### Q1 — Invalid Login

- Attempt login using invalid credentials.
- Verify that the appropriate error message is displayed.

### Q2 — Register, Login and Add Laptop to Cart

- Register a new user.
- Verify successful registration.
- Log out.
- Log in using the registered credentials.
- Navigate to Computers → Notebooks.
- Select the 14.1-inch Laptop.
- Add the laptop to the shopping cart.
- Verify that the correct product is displayed in the cart.
- Verify the product quantity.

## Tech Stack

- JavaScript
- Playwright
- Node.js
- Git
- GitHub
- GitHub Actions
- Page Object Model (POM)

## Project Structure

```text
DemoWebShop/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── Pages/
│   ├── BasePage.js
│   ├── CartPage.js
│   ├── LoginPage.js
│   ├── ProductPage.js
│   └── RegisterPage.js
├── tests/
│   ├── invalid-login.spec.js
│   └── register-cart.spec.js
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

