class HomePage {
    get switchLightBtn() {return cy.get('[type="checkbox"]')}
    get loginBtn() {return cy.get('[href="/auth/login"]')}  
    get registrationBtn() {return cy.get('[href="/auth/register"]')}
    get searchBtn() {return cy.get('[type="button"]', { timeout: 10000 }).should('be.visible')}
    get searchInput() {return cy.get('[type="text"]')}
    get bedroomsBtn() {return cy.get('[role="button"]', { timeout: 10000 }).eq(0).should('be.visible')}
    get numBedroomsInput() {return cy.contains('2')}
    get cityInput() {return cy.get('[type="text"]').eq(1)}
    get listingsBtn() {return cy.get('[href="/featured-listings"]')}
}

export default new HomePage();