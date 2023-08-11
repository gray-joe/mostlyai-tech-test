Cypress.Commands.add('setMostlyaiCookie', () => {
  cy.setCookie(
    'borlabs-cookie',
    '%7B%22consents%22%3A%7B%22essential%22%3A%5B%22borlabs-cookie%22%2C%22google-tag-manager%22%2C%22mixpanel%22%5D%7D%2C%22domainPath%22%3A%22mostly.ai%2F%22%2C%22expires%22%3A%22Tue%2C%2006%20Feb%202024%2015%3A29%3A23%20GMT%22%2C%22uid%22%3A%22anonymous%22%2C%22version%22%3A%227%22%7D',
  );
});
