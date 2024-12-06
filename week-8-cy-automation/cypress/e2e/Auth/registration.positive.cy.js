import { fakerDE as faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from "../../page_objects/dashboard.page";
const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration Positive", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register new account", () => {
    homePage.registrationBtn.click();
    registrationPage.registration("Alvaro", "Escoto", email, password);
    dashboardPage.nameUserAssert;
    dashboardPage.roleUserAssert;
  });
});
