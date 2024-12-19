class DashboardPage{
    get DhBtn() {return cy.get('[src="/favicon/android-chrome-192x192.png"]')};
    get humanButton () {return cy.get('[class="MuiAvatar-img css-1hy9t21"]', {timeout: 10000}).eq(0).should('be.visible')}
    get logoutButton() {return cy.contains('Logout')}

    logout(){
        this.humanButton.click();
        this.logoutButton.click();     
    }
}

export default new DashboardPage();