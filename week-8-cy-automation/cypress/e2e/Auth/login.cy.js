import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should Login", () => {
    homePage.loginBtn.click();
    loginPage.login("admin@gmail.com", "DontTestMe");
    dashboardPage.roleAdminAssert;
    dashboardPage.nameAdminAssert;
  });

  it("Should Logout", () => {
    homePage.loginBtn.click();
    loginPage.login("admin@gmail.com", "DontTestMe");
    dashboardPage.roleAdminAssert;
    dashboardPage.nameAdminAssert;
    dashboardPage.logout();
    loginPage.logoutAssert;
  });
});
