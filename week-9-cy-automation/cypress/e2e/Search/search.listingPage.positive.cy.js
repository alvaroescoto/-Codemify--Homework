import houseInfo from "../../fixtures/testData/listingsDetails.json";
import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";

describe("Search Feactured Listings Tests", () => {
  before(() => {
    cy.visit("/");
    homePage.listingsBtn.click();
  });

  beforeEach(() => {
    cy.visit("/featured-listings");
    homePage.switchLightBtn.click();

  });

  it("Should search by keyword", () => {
    feacturedListingPage.searchInput.type("Scary");
    feacturedListingPage.searchBtn.click();
    cy.contains(houseInfo.searchResult.houseName);
  });

  it("Should search by bedrooms", () => {
    feacturedListingPage.bedroomsBtn.click();
    feacturedListingPage.bedroomsInput.click();
    feacturedListingPage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    feacturedListingPage.bedroomsLoc.should('be.at.least', 2);
  });

  it("Should search by city", () => {
    feacturedListingPage.cityInput.type(houseInfo.searchResult.city);
    feacturedListingPage.searchBtn.click();
    cy.get('[class*="MuiGrid-grid-xs-6"]')
      .filter(':contains("City: Rivera")')
      .should("have.length", 1);
    feacturedListingPage.moreInfoBtn.click();
    houseInfo.moreInfo.forEach((text) => {
      feacturedListingPage.moreInfoDetail.contains(text).should("be.visible");
    });
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=900000-1100000");
    cy.contains(houseInfo.searchResult.houseName);
    feacturedListingPage.housePriceLoc.contains('$ 1,000,000')
  });
});