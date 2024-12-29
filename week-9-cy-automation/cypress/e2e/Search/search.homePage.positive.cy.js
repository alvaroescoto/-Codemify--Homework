import houseInfo from "../../fixtures/testData/listingsDetails.json"
import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";

describe("Search HomePage Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.switchLightBtn.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInput.first().type("scary");
    homePage.searchBtn.click();
    cy.contains(houseInfo.searchResult.houseName);
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsBtn.click();
    homePage.bedroomsInput.click();
    homePage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    feacturedListingPage.bedroomsLoc.should('be.at.least', 2)
    });
      
  it("Should search by city", () => {
    homePage.cityInput.type(houseInfo.searchResult.city);
    homePage.searchBtn.click();
    feacturedListingPage.cityUniqueLoc
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