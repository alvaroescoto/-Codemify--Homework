import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should not register with an already account", () => {
    homePage.registrationBtn.click();
    registrationPage.registration('Alvaro', 'Escoto', 'alvaroescoto@icloud.com', '123456')
    registrationPage.alreadyAccountAssert
  });

  it("Should not register without filling in required fields", () => {
    homePage.registrationBtn.click();
    registrationPage.registrationButton.click();
    registrationPage.registNegativAssert();
  });
})