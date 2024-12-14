import homePage from '../../page_objects/home.page';
import user from '../../fixtures/testData/User.Credentials.Fixture.File.json'
import loginPage from "../../page_objects/login.page";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.loginBtn.click();
  });

  it("Should Login", () => {
    loginPage.login(user.email, user.password);
    cy.get('[class*="MuiTypography-noWrap css-1k96qjc"]').should("have.text", user.name);
    cy.get("a p").should("have.text", user.userRole);
  });
});