import userData from "../fixtures/user-data.json"
import loginPage from "../pages/loginPage"
import dashBoardPage from "../pages/dashBoardPage"
import menuPage from "../pages/menuPage"
import myInfoPage from "../pages/myInfoPage"

const LoginPage = new loginPage()
const DashBoardPage = new dashBoardPage()
const MenuPage = new menuPage()
const MyInfoPage = new myInfoPage()


describe('Orange HRM Tests', () => {
  it('Login - Success', () => {
    LoginPage.acessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    DashBoardPage.checkDashBoardPage()
    MenuPage.acessAdminPage()
    MenuPage.acessMyInfo()
    MyInfoPage.acessMyInfoPage()
    MyInfoPage.fillPersonalDetails('firstNameTest', 'middleName', 'lastName')
    MyInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driverLicense', '2025-03-25')
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm()
  })
})