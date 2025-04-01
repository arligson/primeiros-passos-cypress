class MyInfoPage {
    selectorList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
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
        return selectors
    }
    acessMyInfoPage() {
        cy.get(this.selectorList().myInfoButton).click({ force: true })

    }
    fillPersonalDetails(firstname, middleName, lastName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstname)
        cy.get(this.selectorList().middleName).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }
    fillEmployeeDetails(employeeId, otherId, driverLicenseNumber, driverLicenseDate) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driverLicenseDate)
        cy.get(this.selectorList().datacloseButton).click({ force: true })
    }
    fillStatus() {
        cy.get(this.selectorList().checkBoxButton).eq(0).click({ force: true })
        cy.get(this.selectorList().selectNationality).click({ force: true })
        cy.get(this.selectorList().checkBoxButton).eq(1).click({ force: true })
        cy.get(this.selectorList().selectMaritalStatus).click({ force: true })
    }
    saveForm() {
        cy.get(this.selectorList().submitButton).eq(1).click({ force: true })
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')
    }
}
export default MyInfoPage