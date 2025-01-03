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
    cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]').should("have.text", "Admin  Adminuk")
    cy.get("a p").should("have.text", "role: realtor")
  });

  it("Should Logout", () => {
    homePage.loginBtn.click();
    loginPage.login("admin@gmail.com", "DontTestMe");
    cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]').should("have.text", "Admin  Adminuk")
    cy.get("a p").should("have.text", "role: realtor")
    dashboardPage.logout();
    cy.get('[src="/favicon/android-chrome-192x192.png"]')
  });
});