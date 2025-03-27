class MenuPage{
    selectorList(){
        const selectors ={
            clickToMenuPage: "[href='/web/index.php/pim/viewMyDetails']",
            adminPage: "[href='/web/index.php/admin/viewAdminModule']"
        }
        return selectors
    }
    acessAdminPage(){
        cy.get(this.selectorList().adminPage).click({force: true})
    }
    acessMyInfo(){
        cy.get(this.selectorList().clickToMenuPage).click({force: true})
    }
}
export default MenuPage
