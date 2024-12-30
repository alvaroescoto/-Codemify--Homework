import homePage from '../../page_objects/home.page';
import userCredentials from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import loginPage from "../../page_objects/login.page";
import dashboardPage from '../../page_objects/dashboard.page';

describe("Login Tests", () => {
  it("Should Login", () => {
    cy.visit("/");
    homePage.loginBtn.click();
    loginPage.login();
    dashboardPage.userNameLoc.should('be.visible', userCredentials.admin.fullName)
    dashboardPage.userRoleLoc.should("be.visible", userCredentials.usersRole.admin);
  });
});
