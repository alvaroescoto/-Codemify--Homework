class RegistrationPage {
    get firstNameInput() {return cy.get('[name="firstName"]')}
    get lastNameInput() {return cy.get('[name="lastName"]')}
    get emailInput() {return cy.get('[name="email"]')}
    get passwordInput() {return cy.get('[name="password"]')} 
    get registrationButton() {return cy.get('[type="submit"]')}
    get alreadyAccountAssert() {return cy.contains("Input data validation failed").should("be.visible")}
    get firstNameRequiredAssert() {return cy.contains("First name required").should("be.visible")};
    get lastNameRequiredAssert() {return cy.contains("Last name required").should("be.visible")};
    get emailRequiredAssert() {return cy.contains("Email is required").should("be.visible")};
    get passwordRequiredAssert() {return cy.contains("Password is required").should("be.visible")};
    

    registration(name, lastName, email, password){
        this.firstNameInput.type(name);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.registrationButton.click();
    }

    registNegativAssert(){
        this.firstNameRequiredAssert;
        this.lastNameRequiredAssert;
        this.emailRequiredAssert;
        this.passwordRequiredAssert;
    }
}

 

export default new RegistrationPage();
