.PHONY: cypress-open cypress-run lint fmt

browser ?= firefox
filepath ?= cypress/e2e/**/*.js

cypress-open:
	npx cypress open --env configFile=mostlyai

cypress-run:
	npx cypress run --env configFile=mostlyai --browser $(browser) --spec "$(filepath)"

lint:
	npx prettier . --check

fmt:
	npx prettier . --write
