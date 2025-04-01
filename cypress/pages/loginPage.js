class LoginPage {
    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".oxd-button",
            wrongCrendentialAlert: "[role='alert']",
        }
        return selectors
    }
    acessLoginPage() {
        cy.visit("/auth/login")
    }
    loginWithAnyUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click({ force: true })
    }
    checkAccessInvalid() {
        cy.get(this.selectorList().wrongCrendentialAlert)
    }
}
export default LoginPage