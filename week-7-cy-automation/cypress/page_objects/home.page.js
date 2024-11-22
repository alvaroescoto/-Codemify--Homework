class HomePage {
    get loginButton() {return cy.get('[href="/auth/login"]')}  
    get registrationButton() {return cy.get('[href="/auth/register"]')}
}
export default new HomePage();









