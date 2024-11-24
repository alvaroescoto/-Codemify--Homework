class DashboardPage{
    get roleAdmin() {return cy.get("a p").should("have.text", "role: admin")};
    get nameAdmin() {return cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Admin  Adminuk")};
    get roleUser() {return cy.get("a p").should("have.text", "role: user")};
    get nameUser() {return cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Alvaro  Escoto")}
};
    



export default new DashboardPage();