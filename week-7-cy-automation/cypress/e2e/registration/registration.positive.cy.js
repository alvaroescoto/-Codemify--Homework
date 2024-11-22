import { fakerDE as faker } from '@faker-js/faker';
import homePage from '../../page_objects/home.page';
import registrationPage from '../../page_objects/registration.page';
const email = faker.internet.email()
const password = faker.internet.password()


describe("Registration Positive", () => {
    beforeEach(() => {
      
      cy.visit("/");
    });
  
    it("Should register new account", () => {
        homePage.registrationButton.click();
        registrationPage.firstNameInput.type('Alvaro');
        registrationPage.lastNameInput.type('Escoto');
        registrationPage.emailInput.type(email);
        registrationPage.passwordInput.type(password);
        registrationPage.registrationButton.click();
        cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Alvaro  Escoto"); 
        cy.get("a p").should("have.text", "role: user");
  
    });
  });
  