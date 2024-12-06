class ListingPage {
  get houseTitleListingAssert() {return cy.contains('Adams House')}
  get moreInfoBtn() {return cy.get('[href="/featured-listings/12364"]', {timeout:1000})};
  get NumBedroomsAssert() {return cy.contains('Bedrooms: 2')}
  get SqftAssert() {return cy.contains('Square Feet: 2493')}
  get priceAssert() {return cy.contains('Asking Price: $ 1,000,000')}
  get lotSizeAssert() {return cy.contains('Lot Size: 500')}
  get listDateAssert() {return cy.contains('Listing Date: 03 December 2024')}
  get garageAssert() {return cy.contains('Garage: 1')}
  get bathroomsAssert() {return cy.contains('Bathrooms: 2')}
  get realtoInfoAssert() {return cy.contains('Realtor: Admin Adminuk')}
  get descriptionAssert() {return cy.contains('Scary')}
  get addressAssert() {return cy.contains('8985 S Durango dr')}
  get cityUniqueAssert() {return cy.get('[class*="MuiGrid-grid-xs-6"]').filter(':contains("City: Rivera")').should('have.length', 1)};
  get zipCodeAssert() {return cy.contains('Zip/Code: 90111')}
  get stateAssert() {return cy.contains('AL')}
  get searchInput() {return cy.get('[type="text"]').eq(1)}
  get searchBtn() {return cy.get('[class*="MuiButton-startIcon"]')}
  get bedroomsBtn() {return cy.get('[role="button"]', { timeout: 10000 }).eq(0).should('be.visible')}
  get numBedroomsInput() {return cy.contains('2+')}
  get cityInput() {return cy.get('[type="text"]').eq(1)}
  
  listingAssertion(){
    this.houseTitleListingAssert
    this.addressAssert;
    this.zipCodeAssert;
    this.garageAssert;
    this.bathroomsAssert;
    this.stateAssert;
  }

  moreDetailsAssert(){
    this.houseTitleListingAssert
    this.NumBedroomsAssert;
    this.SqftAssert;
    this.priceAssert;
    this.lotSizeAssert;
    this.listDateAssert;
    this.garageAssert;
    this.bathroomsAssert;
    this.realtoInfoAssert;
    this.descriptionAssert;
    this.addressAssert;
  }
}
export default new ListingPage();
