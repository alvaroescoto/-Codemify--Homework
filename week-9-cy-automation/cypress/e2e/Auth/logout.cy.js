import user from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login Tests", () => {
  beforeEach(() => {
      cy.login();
      cy.visit("/dashboard/user/profile")
  });

  it("Should Logout", () => {
    cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]').should("have.text", user.name);
    cy.get("a p").should("have.text", user.userRole);
    dashboardPage.logout();
    cy.url().should('include', '/');
  });
});