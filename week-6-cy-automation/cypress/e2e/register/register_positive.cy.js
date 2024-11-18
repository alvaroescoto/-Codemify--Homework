import { fakerDE as faker } from '@faker-js/faker';
const email = faker.internet.email()


describe("Registration", () => {
    beforeEach(() => {
      
      cy.visit("/");
    });
  
    it("Registration", () => {
        cy.get('[href="/auth/register"]').click();
        cy.get('[name="firstName"]').type('Alvaro');
        cy.get('[name="lastName"]').type('Escoto');
        cy.get('[name="email"]').type(email);
        cy.get('[name="password"]').type('123456');
        cy.get('[type="submit"]').click();
        cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Alvaro  Escoto");        
  
    });
  });
  