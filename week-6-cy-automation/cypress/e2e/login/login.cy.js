describe("Login Tests", () => {
  beforeEach(() => {
    
    cy.visit("/");
  });

  it("Should Login", () => {
    
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("admin@gmail.com");
    cy.get('[name="password"]').type("DontTestMe");
    cy.contains("Login").click();
    cy.get("a p").should("have.text", "role: admin");
    cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Admin  Adminuk");
    cy.wait(3000);

  });

  it("Should Logout", () => {
    
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("admin@gmail.com");
    cy.get('[name="password"]').type("DontTestMe");
    cy.contains("Login").click();
    cy.get("a p").should("have.text", "role: admin");
    cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Admin  Adminuk");
    cy.get ('[type="button"]').first().click();
    cy.contains('Logout').click();

  });





});
