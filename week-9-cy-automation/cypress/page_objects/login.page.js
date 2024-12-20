class LoginPage {
    get emailInput() {return cy.get('[name="email"]')}
    get passwordInput() {return cy.get('[name="password"]')} 
    get loginBtn() {return cy.contains("Login")}
    get logOutLoc(){return cy.url()}

    login(email= "alvaroescoto@icloud.com", password="123456"){
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginBtn.click();
    }
}

export default new LoginPage();