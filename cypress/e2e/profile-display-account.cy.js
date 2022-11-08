
describe('Displays information about your account', () => {
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

    
      cy.get('[href="/login"]').click()
      cy.get('#email').type(data.username).click()
      cy.get('[for="password"] > input').type(data.password).click()
      cy.get('[for="submit"] > input').click()
      cy.get('[href="/profile"]').click()
      cy.get('.Layout_main__c1pHS').should('contain', 'John') 
      //The account owner name is John, but not displayed on the profile page.

      //PARAMETERS: ["cc2d5790-dd0d-4257-b3e9-b80507c26b34","John","Doe",30,"tester@shair.co","$2b$10$LZ0c00ju1rc.F63mkGt/A.wzV1F5hNb3Hl887juVGyp/rZV.OW9ka","7df78755-3930-477c-91f3-bdda4c0bb515","2022-11-07T10:48:02.000Z"]
     
  })
  })
  
  
  
  