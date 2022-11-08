
/*
  Scenario: Homepage/Title verification
  Given User is on the Testing Application homepage
  Then user should see title is Testing Application
  */
describe('This homepage indicates whether the project is set up correctly', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
});



it('passes', () => {//test case
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')// url assertion
    cy.title().should('eq', 'Testing Application')
})