import loginPage from '../../page_objects/login.page';
import userCredent from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import dashboardPage from "../../page_objects/dashboard.page";

describe("Logout Tests", () => {
  it("Should Logout", () => {
    cy.login();
    cy.visit("/dashboard/user/profile")
    dashboardPage.userNameLoc.should("have.text", userCredent.fullName);
    dashboardPage.userRoleLoc.should("have.text", userCredent.usersRole.user);
    dashboardPage.logout();
    loginPage.logOutLoc.should('include', '/auth/login');
  });
});