import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not register with an already account", () => {
    homePage.registrationBtn.click();
    registrationPage.registration('Alvaro', 'Escoto', 'alvaroescoto@icloud.com', '123456')
    cy.contains("Input data validation failed").should("be.visible")});

  it("Should not register without filling in required fields", () => {
    homePage.registrationBtn.click();
    registrationPage.registrationButton.click();
    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible")
  });
})