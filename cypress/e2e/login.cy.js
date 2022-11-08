
/*
Background:
Given User is on the homepage of Testing Application
@login
Scenario: Login with the given credentials
When user is on the login function
And user enters in the username
And user enters the password
Then user successfully logged in
*/
describe('This homepage indicates whether the project is set up correctly', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    before(function () {

        cy.visit("http://localhost:3000/login/")
        cy.fixture('logincredentials').then(function (data) {
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
        cy.get('[href="/profile"]').should('be.visible')//Logged in successfully once the Profile function is visible



    })
})



