// import { first } from "lodash"
// import userData from "../fixtures/user-data.json"
// import { equal } from "assert-plus"
// import { select } from "async"
import userData from "../fixtures/user-data.json"
import loginPage from "../pages/loginPage"
import dashBoardPage from "../pages/dashBoardPage"
import menuPage from "../pages/menuPage"

const LoginPage = new loginPage()
const DashBoardPage = new dashBoardPage()
const MenuPage = new menuPage()


describe('Orange HRM Tests', () => {
  const selectorsList = {

    // myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    middleName: "[name='middleName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    datacloseButton: ".--close",
    submitButton: "[type='submit']",
    checkBoxButton: ".oxd-select-text--arrow",
    selectNationality: ".oxd-select-dropdown > :nth-child(27)",
    selectMaritalStatus: ":nth-child(4) > span"
   
  }

  it.only('Login - Success', () => {
    LoginPage.acessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    DashBoardPage.checkDashBoardPage()
    MenuPage.acessAdminPage()
    MenuPage.acessMyInfo()



    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    // cy.get(selectorsList.middleName).clear().type('middleNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('nickNameTest')
    // cy.get(selectorsList.genericField).eq(4).clear().type('otherTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('driverLicenseTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-25')
    // cy.get(selectorsList.datacloseButton).click()
    // cy.get(selectorsList.checkBoxButton).eq(0).click()
    // cy.get(selectorsList.selectNationality).click()
    // cy.get(selectorsList.checkBoxButton).eq(1).click()
    // cy.get(selectorsList.selectMaritalStatus).click()
    // cy.get(selectorsList.submitButton).eq(1).click({force:true})
    // cy.get('body').should('contain', 'Successfully Saved')

  })
  it('Login - Fail', () => {
    cy.visit("/auth/login")
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCrendentialAlert)

  })
})