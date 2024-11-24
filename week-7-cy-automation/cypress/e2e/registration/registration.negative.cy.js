import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';


describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not registration with already account", () => {
    homePage.registrationButton.click();
    registrationPage.registration('Alvaro', 'Escoto', 'alvaroescoto@icloud.com', '123456')
    registrationPage.alreadyAccountAssert
    
  });

  it("Should not register without filling in required fields", () => {
    homePage.registrationButton.click();
    registrationPage.registrationButton.click();
    registrationPage.firstNameRequiredAssert;
    registrationPage.lastNameRequiredAssert;
    registrationPage.emailRequiredAssert;
    registrationPage.passwordRequiredAssert;
  });

})