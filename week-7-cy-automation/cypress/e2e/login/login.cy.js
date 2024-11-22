import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";

describe("Login Tests", () => {
  beforeEach(() => {
    
    cy.visit("/");
  });

  it("Login", () => {
    homePage.loginButton.click();
    loginPage.login("admin@gmail.com", "DontTestMe")
    cy.get("a p").should("have.text", "role: admin");
    cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Admin  Adminuk");
    cy.wait(2000);
      
  });

  it("Should Logout", () => {
    homePage.loginButton.click();
    loginPage.login("admin@gmail.com", "DontTestMe")
    cy.get("a p").should("have.text", "role: admin");
    cy.get('a[href="/dashboard/user/account"] h6.MuiTypography-subtitle2').should("have.text", "Admin  Adminuk");
    loginPage.humanButton.first().click();
    loginPage.logoutButton.click();

  });

});
   
  
  
  
  
  
  
  
  
   













  
