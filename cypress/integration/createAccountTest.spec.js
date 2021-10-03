/// <reference types="cypress" />
import CreateAccountPage from '../support/pages/CreateAccountPage';
import HomePage from '../support/pages/HomePage';

context('Automation Test Suite ', function () {

  it('Register user', () => {
    

    const createAccountPage = new CreateAccountPage()
    const homePage = new HomePage()


    cy.fixture('accountInfo').then(accountInfo => {
      cy.wrap(accountInfo).each(data => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')

        createAccountPage.fillAccountEmail(data.Email).click()
        createAccountPage.isSuccessfulyRedirect()
        createAccountPage.fillAccountInfo(data).click()
        createAccountPage.verifyTheAccount(data.firstName)
        homePage.getLoginoutButton().click()



      })

    })
  })

})

