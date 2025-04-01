import userData from "../fixtures/user-data.json"
import loginPage from "../pages/loginPage"
import dashBoardPage from "../pages/dashBoardPage"
import menuPage from "../pages/menuPage"
import myInfoPage from "../pages/myInfoPage"

const Chance = require('chance')
const chance = new Chance()

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
    MyInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    MyInfoPage.fillEmployeeDetails(chance.integer({ min: 1000000, max: 9999999 }), chance.integer({ min: 1000000, max: 9999999 }), chance.integer({ min: 1000000, max: 9999999 }), chance.date({ string: true, american: true }))
    MyInfoPage.fillStatus()
    MyInfoPage.saveForm()
  })
})