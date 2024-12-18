import user from "../../cypress/fixtures/testData/User.Credentials.Fixture.File.json";

Cypress.Commands.add(
  "login",
  (email = user.email, password = user.password) => {
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
  }
);
