import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';


describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not registration with already account", () => {
    homePage.registrationButton.click();
    registrationPage.registration('Alvaro', 'Escoto', 'alvaroescoto@icloud.com', '123456')
    cy.contains("Input data validation failed").should("be.visible");
    cy.wait(2000);
  });

  it("Should not register without filling in required fields", () => {
    homePage.registrationButton.click();
    registrationPage.registrationButton.click();
    cy.contains("First name required").should("be.visible");
    cy.contains("Last name required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

})