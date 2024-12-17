class DashboardPage{
    get roleAdminAssert() {return cy.get("a p").should("have.text", "role: admin")};
    get nameAdminAssert() {return cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]').should("have.text", "Admin  Adminuk")};
    get roleUserAssert() {return cy.get("a p").should("have.text", "role: user")};
    get nameUserAssert() {return cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]').should("have.text", "Alvaro  Escoto")};
    get DhBtn() {return cy.get('[src="/favicon/android-chrome-192x192.png"]')};
    get humanButton () {return cy.get('[class="MuiAvatar-img css-1hy9t21"]', {timeout: 10000}).eq(0).should('be.visible')}
    get logoutButton() {return cy.contains('Logout')}

    logout(){
        this.humanButton.click();
        this.logoutButton.click();     
    }

    userAdminAssert(){
        this.nameAdminAssert;
        this.roleAdminAssert;
    }
}

export default new DashboardPage();