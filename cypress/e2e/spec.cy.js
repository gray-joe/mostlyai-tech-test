describe('Given I am on the homepage', () => {
  beforeEach(() => {
    cy.setMostlyaiCookie();
    cy.visit('/');
  });
  it('then all bookmarks should be visible', () => {
    cy.get('.oxy-mega-menu.main-menu').within(function () {
      cy.contains('Platform');
      cy.contains('Synthetic data');
      cy.contains('Resources');
      cy.contains('Company');
      cy.contains('Pricing');
    });
  });

  it('then I should be able to search for results via the search bar, after clicking the search icon', () => {
    cy.get('.oxy-header-search_form').should('not.be.visible');
    cy.get('.oxy-header-search_toggle.oxy-header-search_toggle-open').click();
    cy.get('.oxy-header-search_form')
      .should('be.visible')
      .within(() => {
        cy.get('.oxy-header-search_search-field').type('sythetic{enter}');
      });
    cy.get('.ct-headline').contains('Sorry, no results for:');
    cy.get('.ct-code-block').contains('sythetic');
    cy.get('.oxy-header-search_toggle.oxy-header-search_toggle-open').click();
    cy.get('.oxy-header-search_form')
      .should('be.visible')
      .within(() => {
        cy.get('.oxy-header-search_search-field')
          .clear()
          .type('synthetic {enter}');
      });
    cy.get('.ct-headline').contains('Search results for:');
    cy.get('.ct-code-block ').contains('synthetic');
  });

  it('and I navigate to the Contact page, then I should be able to fill out the form', () => {
    cy.get('.oxy-mega-dropdown_inner.oxy-header-container')
      .invoke(
        'attr',
        'class',
        'oxy-mega-dropdown_inner oxy-header-container oxy-mega-dropdown_inner-open',
      )
      .then(() => {
        cy.get('.ct-link.menu-item-area').contains('Contact').click();
      });
    cy.get('#firstname-27854f4c-b840-41f2-b7af-a3c9f512c9e8', {
      timeout: 15000,
    }).type('First Name');
    cy.get('#lastname-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type('First Name');
    cy.get('#email-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type('First Name');
    cy.get('#mobilephone-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type(
      'First Name',
    );
    cy.get('#company-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type('First Name');
    cy.get('#country-27854f4c-b840-41f2-b7af-a3c9f512c9e8').select(
      'United Kingdom',
    );
    cy.get(
      '#how_did_you_hear_about_mostly_ai___free_text-27854f4c-b840-41f2-b7af-a3c9f512c9e8',
    ).type('First Name');
    cy.get('#message-27854f4c-b840-41f2-b7af-a3c9f512c9e8').type('First Name');
    cy.contains('Marketing offers and updates').within(function () {
      cy.get('.hs-input').click();
    });
    cy.get('.btn-block.btn.btn-lime').trigger('mouseover');
  });
});
