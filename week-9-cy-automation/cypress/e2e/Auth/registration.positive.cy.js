import userCredent from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import { fakerDE as faker } from "@faker-js/faker";
import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import dashboardPage from '../../page_objects/dashboard.page';

const fakeUser = {
  lastName: faker.name.lastName(), 
  firstName: faker.name.firstName(), 
  email: faker.internet.email(),
  password: faker.internet.password()
};

describe("Registration Positive", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register new account", () => {
    homePage.registrationBtn.click();
    registrationPage.registration(
      fakeUser.firstName,
      fakeUser.lastName,
      fakeUser.email,
      fakeUser.password
    );
    registrationPage.registrationButton;
    dashboardPage.getFakeUser(fakeUser.firstName, fakeUser.lastName).should("be.visible")
    dashboardPage.userRoleLoc.should("have.text", userCredent.usersRole.user);
  });
});