class DashboardPage{
    get humanBtn () {return cy.get('[class*="MuiAvatar-colorDefault css-vanhy0"]', {timeout: 10000}).first().should('be.visible')}
    get logoutBtn() {return cy.contains('Logout')}
    get userNameLoc() {return cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]')}
    get userRoleLoc() {return cy.get("a p")}
    getFakeUser (firstName, lastName) {return cy.contains(`${firstName} ${lastName}`)};

    logout(){
        this.humanBtn.click();
        this.logoutBtn.click();     
    }
}

export default new DashboardPage();