# Velvetclap Playwright Automation Framework

POM + fixtures Playwright JavaScript framework for [Velvetclap](https://velvetclap25.onrender.com) — a streetwear store for Dehradun.

## App under test
- **URL:** `https://velvetclap25.onrender.com`
- **Auth:** No password login. Browsing is open; vault profile is created from name + mobile at checkout.
- **Key features:** product catalog, category tabs/pills, size & fit filters, sort, search, cart drawer, shipping details form, checkout (UPI/COD), pincode delivery checker, wishlist, newsletter.

## Folder structure
```
velvetclap/
├── config/            # environment, test runtime config
├── pages/             # Page Object Model (BasePage, HomePage, CartPage)
├── components/        # Shared widgets (Header, SearchBar, CartDrawer)
├── flows/             # Multi-step journeys (search & add to cart, checkout)
├── fixtures/          # Playwright fixtures wiring pages
├── tests/             # Thin specs (*.spec.js) tagged @smoke / @regression
├── test-data/staging/ # JSON datasets
├── auth/setup.js      # Auth setup project (no login needed)
├── utils/             # logger, dataLoader, waitHelpers
├── reports/           # HTML, JUnit, JSON reports (gitignored)
├── playwright.config.js
├── package.json
├── jsconfig.json
├── .env.example
└── .gitignore
```

## Prerequisites
- Node.js 18+
- `npm install`
- `npx playwright install` (install browsers)

## Scripts
| Script | Description |
|--------|-------------|
| `npm test` | Run all tests |
| `npm run test:smoke` | Run smoke-tagged tests |
| `npm run test:regression` | Run regression-tagged tests |
| `npm run test:shard1..4` | CI shard execution |
| `npm run report` | Open HTML report |
| `npm run install:browsers` | Install Playwright browsers |

## Environment
Copy `.env.example` to `.env` and adjust `BASE_URL` if needed.

## Locator strategy
Prefer `getByRole`, `getByLabel`, `getByPlaceholder`, `getByTestId`, then data attributes (`data-cat`, `data-size`, `data-fit`, `id`). Avoid brittle XPath/nth-child. Update `pages/` and `components/` when the site markup changes.

## Running against a fresh Render instance
Render free-tier services spin down after inactivity. The first request may return 503 while the instance spins up. Retry or warm the URL before running tests.

## Example run
```powershell
npm install
npx playwright install
npm run test:smoke
npm run report
```
