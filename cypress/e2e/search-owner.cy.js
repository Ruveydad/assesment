

describe('A form to search notes by text and owner email address. The search results displayed on the same page.', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
});



it('owner', () => {
  cy.visit('http://localhost:3000/search')
  cy.intercept('GET', '/').as('owner') 
  cy.get('[name="searchOwner"]').type('ruve')
  cy.get('.Layout_main__c1pHS').should('not.contain', 'Note') 


})
