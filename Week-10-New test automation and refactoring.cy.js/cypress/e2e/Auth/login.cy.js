import homePage from '../../page_objects/home.page';
import userCredent from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import loginPage from "../../page_objects/login.page";
import dashboardPage from '../../page_objects/dashboard.page';

describe("Login Tests", () => {
  it("Should Login", () => {
    cy.visit("/");
    homePage.loginBtn.click()
    loginPage.login();
    dashboardPage.userNameLoc.should("have.text", userCredent.fullName);
    dashboardPage.userRoleLoc.should("have.text", userCredent.usersRole.user);
  });
});
