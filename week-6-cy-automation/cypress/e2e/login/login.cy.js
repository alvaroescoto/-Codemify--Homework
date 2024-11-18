describe("Login Tests", () => {
  beforeEach(() => {
    // Runs before each test
    cy.visit("/");
  });

  it("Login", () => {
    // Test case to navigate to the login page
    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type("admin@gmail.com");
    cy.get('[name="password"]').type("DontTestMe");
    cy.contains("Login").click();
    cy.get("a p").should("have.text", "role: admin");
    cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Admin  Adminuk");
    cy.get('button.MuiButtonBase-root.MuiIconButton-root').first().click();
    cy.contains('Logout').click();

  });
});
