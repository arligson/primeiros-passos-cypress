import userData from "../fixtures/user-data.json"
import loginPage from "../pages/loginPage"
import dashBoardPage from "../pages/dashBoardPage"

const LoginPage = new loginPage()
const DashBoardPage = new dashBoardPage()

describe('Login Orange HRM Tests', () => {
  it('Login - Fail', () => {
    LoginPage.acessLoginPage()
    LoginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    LoginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    LoginPage.acessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    DashBoardPage.checkDashBoardPage()
  })
})