describe("Registration Negative", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not registration with already account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Alvaro");
    cy.get('[name="lastName"]').type("Escoto");
    cy.get('[name="email"]').type("alvaroescoto@icloud.com");
    cy.get('[name="password"]').type("123456");
    cy.get('[type="submit"]').click();
    cy.contains("Input data validation failed").should("be.visible");
    cy.wait(2000);
  });

  it("Should not register without filling in required fields", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[type="submit"]').click();
    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

})