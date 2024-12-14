import house from "../../fixtures/testData/House.Credentials.Fixture.File.json";
import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";

describe("Search Listings Page Tests", () => {
  before(() => {
    cy.visit("/");
    homePage.switchLightBtn.click();
    homePage.listingsBtn.click();
  });

  beforeEach(() => {
    cy.visit("/featured-listings");
  });

  it("Should search by keyword", () => {
    feacturedListingPage.searchInput.type("Scary");
    feacturedListingPage.searchBtn.click();
    cy.contains("Adams House");
  });

  it("Should search by bedrooms", () => {
    feacturedListingPage.bedroomsBtn.click();
    feacturedListingPage.numBedroomsInput.click();
    feacturedListingPage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    cy.contains("Bedrooms: 2");
  });

  it("Should search by city", () => {
    feacturedListingPage.cityInput.type("Rivera");
    feacturedListingPage.searchBtn.click();
    cy.get('[class*="MuiGrid-grid-xs-6"]')
      .filter(':contains("City: Rivera")')
      .should("have.length", 1);
  });

  it("Should search by city and check the listing details", () => {
    feacturedListingPage.cityInput.type("Rivera");
    feacturedListingPage.searchBtn.click();
    cy.get('[class*="MuiGrid-grid-xs-6"]')
      .filter(':contains("City: Rivera")')
      .should("have.length", 1);
    house.searchResult.houseDetails.forEach((text) => {
      cy.contains(text).should("be.visible");
    });
    cy.get('[class*="MuiGrid-grid-xs-6"]')
      .filter(':contains("City: Rivera")')
      .should("have.length", 1);
    feacturedListingPage.moreInfoBtn.click();
    house.moreInfo.forEach((text) => {
      cy.contains(text).should("be.visible");
    });
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=1000000-1000000");
    cy.contains("Adams House");
  });
});
