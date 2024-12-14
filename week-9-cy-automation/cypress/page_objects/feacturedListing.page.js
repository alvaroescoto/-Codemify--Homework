class ListingPage {
  get moreInfoBtn() {return cy.contains('More Info', {timeout:1000}).eq(0)};
  get searchInput() {return cy.get('[type="text"]').eq(0)}
  get searchBtn() {return cy.get('[type="button"]').eq(0)}
  get bedroomsBtn() {return cy.get('[role="button"]', { timeout: 10000 }).eq(0).should('be.visible')}
  get numBedroomsInput() {return cy.contains('2+')}
  get cityInput() {return cy.get('[type="text"]').eq(1)}
}

export default new ListingPage();
