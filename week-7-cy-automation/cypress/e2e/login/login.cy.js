import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import dashboardPage from "../../page_objects/dashboard.page";

describe("Login Tests", () => {
  beforeEach(() => {
    
    cy.visit("/");
  });

  it("Should Login", () => {
    homePage.loginButton.click();
    loginPage.login("admin@gmail.com", "DontTestMe")
    dashboardPage.roleAdmin
    dashboardPage.nameAdmin
      
  });

  it("Should Logout", () => {
    homePage.loginButton.click();
    loginPage.login("admin@gmail.com", "DontTestMe")
    dashboardPage.roleAdmin
    dashboardPage.nameAdmin
    loginPage.humanButton.first().click();
    loginPage.logoutButton.click();
    loginPage.logoutAssert


  });

});
   
  
  
  
  
  
  
  
  
   













  
