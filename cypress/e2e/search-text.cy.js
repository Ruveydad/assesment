/*Feature: A form to search notes by text

  Background:
    Given User is on the homepage of Testing Application
@searchText
  Scenario: Search by text
    Given user is on Search function
    Then user should be able to search by text
    */






describe('A form to search notes by text and owner email address. The search results displayed on the same page.', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
}); 


it('passes', () => {//test case
    cy.visit('http://localhost:3000')
    cy.get('[href="/search"]').click()
    cy.get('#searchText').type('The best note')
    cy.wait(3000)
    cy.get('.Search_card__6y8CF', { timeout: 60000 })
        .should('be.visible')
        .each(($el) => {
            cy.request($el.prop("href")).as("link");
        });

    cy.get("@link").should((response) => {
        expect(response.status).to.eq(200);
    });


})