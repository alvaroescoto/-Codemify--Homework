import homePage from "../../page_objects/home.page";
import listingFeacturedPage from "../../page_objects/listingFeactured.page";

describe("Search Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.switchLightBtn.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInput.first().type("scary");
    homePage.searchBtn.click();
    cy.contains('Adams House')
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsBtn.click();
    homePage.numBedroomsInput.click();
    homePage.searchBtn.click();
    listingFeacturedPage.moreInfoBtn.click();
    cy.contains('Bedrooms: 2').should("exist");
  });

  it("Should search by city", () => {
    homePage.cityInput.type("Rivera");
    homePage.searchBtn.click();
    cy.get('[class*="MuiGrid-grid-xs-6"]').filter(':contains("City: Rivera")').should('have.length', 1);
  });

  it("Should search by city and check the listing details", () => {
    homePage.cityInput.type("Rivera");
    homePage.searchBtn.click();
    cy.contains('Adams House');
    cy.contains('8985 S Durango dr')
    cy.contains('Zip/Code: 90111');
    cy.contains('Garage: 1');
    cy.contains('Bathrooms: 2');
    cy.contains('AL');
    cy.get('[class*="MuiGrid-grid-xs-6"]').filter(':contains("City: Rivera")').should('have.length', 1);
    listingFeacturedPage.moreInfoBtn.click();
    cy.contains('Adams House');
    cy.contains('Bedrooms: 2');
    cy.contains('Square Feet: 2493');
    cy.contains('Asking Price: $ 1,000,000');
    cy.contains('Lot Size: 500');
    cy.contains('Listing Date: 03 December 2024');
    cy.contains('Garage: 1');
    cy.contains('Bathrooms: 2');
    cy.contains('Realtor: Admin Adminuk');
    cy.contains('Scary');
    cy.contains('8985 S Durango dr')
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=1000000-1000000");
    cy.contains('Adams House');
  });
});