class DashboardPage{
    get DhBtn() {return cy.get('[src="/favicon/android-chrome-192x192.png"]')};
    get humanBtn () {return cy.get('[class*="MuiAvatar-colorDefault css-vanhy0"]', {timeout: 10000}).first().should('be.visible')}
    get logoutBtn() {return cy.contains('Logout')}

    logout(){
        this.humanBtn.click();
        this.logoutBtn.click();     
    }
}

export default new DashboardPage();