# MostlyAI tech test

Cypress tests to validate basic functionality of `https://mostly.ai`

## Prerequisites

### Software Requirements

- **Node.js**: Required for running Cypress and Prettier. Install Node.js from
  [the official website](https://nodejs.org/).
- **Cypress**: For running end-to-end tests. Will be installed via npm (see
  Installation section).
- **GNU Make**: (Optional) Required to utilize the project's Makefile.
  Installation instructions can be found
  [here](https://www.gnu.org/software/make/).

## Installation

1. **Clone the Repository**: Clone this repository to your local machine:

```bash
git clone git@github.com:gray-joe/mostlyai-tech-test.git
```

2. **Navigate to the Project Directory:**

```bash
cd mostlyai-tech-test
```

3. **Install Node Dependencies:** This will also install Cypress for testing and
   Prettier for linting:

```bash
npm install
```

For any other installation details, see docs
[here](https://docs.cypress.io/guides/getting-started/installing-cypress).

## Running the Project

### Starting the Project

Run the following command to run the tests headlessly:

```bash
make cypress-run
```

Or to run with a specific browser, e.g chrome:

```bash
make cypress-run browser=chrome
```

To run via the Cypress GUI:

```bash
make cypress-open
```

To run linting:

```bash
make lint
```

And to automatically fix linting issues:

```bash
make fmt
```
