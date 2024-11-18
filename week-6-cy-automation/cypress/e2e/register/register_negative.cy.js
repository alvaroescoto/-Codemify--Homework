describe("Registration", () => {
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
    cy.wait(2000);
  });

  it("should not registration without Name", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="lastName"]').type("Escoto");
    cy.get('[name="email"]').type("alvaroescoto@icloud.com");
    cy.get('[name="password"]').type("123456");
    cy.get('[type="submit"]').click();
  });

  it("should not registration without Surname", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Alvaro");
    cy.get('[name="email"]').type("alvaroescoto@icloud.com");
    cy.get('[name="password"]').type("123456");
    cy.get('[type="submit"]').click();
  });

  it("should not registration without Email", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Alvaro");
    cy.get('[name="lastName"]').type("Escoto");
    cy.get('[name="password"]').type("123456");
    cy.get('[type="submit"]').click();
  });

  it("should not registration without Password", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Alvaro");
    cy.get('[name="lastName"]').type("Escoto");
    cy.get('[name="email"]').type("alvaroescoto@icloud.com");
    cy.get('[type="submit"]').click();
  });
});
