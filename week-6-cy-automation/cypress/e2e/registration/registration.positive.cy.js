import { fakerDE as faker } from '@faker-js/faker';
const email = faker.internet.email()
const password = faker.internet.password()


describe("Registration Positive", () => {
    beforeEach(() => {
      
      cy.visit("/");
    });
  
    it("Should register new account", () => {
        cy.get('[href="/auth/register"]').click();
        cy.get('[name="firstName"]').type('Alvaro');
        cy.get('[name="lastName"]').type('Escoto');
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type(password);
        cy.get('[type="submit"]').click();
        cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Alvaro  Escoto"); 
        cy.get("a p").should("have.text", "role: user");
       
  
    });
  });
  