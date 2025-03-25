import { first } from "lodash"
import userData from "../fixtures/user-data.json"
import { equal } from "assert-plus"


describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    sectionTitleTopBar: ".oxd-topbar",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCrendentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    middleName: "[name='middleName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    datacloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('Login - Success', () => {
    cy.visit("/auth/login")
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorsList.middleName).clear().type('middleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('nickNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('otherTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('driverLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-25')
    cy.get(selectorsList.datacloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')

  })
  it('Login - Fail', () => {
    cy.visit("/auth/login")
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)

  })
})