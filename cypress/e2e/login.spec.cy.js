const { equal } = require("assert-plus")

describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passworldField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar",
    wrongCrendentialAlert: "[role='alert']"
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("Admin")
    cy.get(selectorsList.passworldField).type("admin123")
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(selectorsList.sectionTitleTopBar).contains("Dashboard")
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type("Test")
    cy.get(selectorsList.passworldField).type("test123")
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)

  })
})