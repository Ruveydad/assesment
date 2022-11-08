/*Feature:Displays information about your account.
Displays notes you own. Allows creation of new notes.

Background:
Given User is on the homepage of Testing Application
When user login to the system
@profile
Scenario:Display notes and able to create new notes

Then user clicks on profile function
And displays the notes user owns
And user is able to send new notes
Then user is able to locate the created note
    */



describe('This homepage indicates whether the project is set up correctly', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

  before(function () {

    cy.visit("http://localhost:3000/login/")
    cy.fixture('example').then(function (data) {
      globalThis.data = data

    })
  })
  it('passes', () => {//test case
    cy.visit('http://localhost:3000')
    cy.url().should('eq', 'http://localhost:3000/')// url assertion
    cy.title().should('eq', 'Testing Application')

    cy.get('[href="/login"]').click()
    cy.get('#email').type(data.username).click()
    cy.get('[for="password"] > input').type(data.password).click()
    cy.get('[for="submit"] > input').click()
    cy.get('[href="/profile"]').click()
    cy.get('#noteText').type('The Best Note Ever for Hiring') //Note successfully submitted
    cy.get('[type="submit"]').click()
    cy.get('.Layout_main__c1pHS').should('contain', 'The Best Note Ever for Hiring') //if note successfuly added then it should be visible in the profile page 

  })
})



