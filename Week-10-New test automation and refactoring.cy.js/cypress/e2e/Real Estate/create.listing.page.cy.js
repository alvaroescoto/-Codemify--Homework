



describe("Should create listing Page", () => {
    it("Should Logout", () => {
      cy.login();
      cy.visit("/dashboard/user/profile")
      dashboardPage.userNameLoc.should("have.text", userCredent.fullName);
      dashboardPage.userRoleLoc.should("have.text", userCredent.usersRole.user);
      dashboardPage.logout();
      loginPage.logOutLoc.should('include', '/auth/login');
    });








    
  });