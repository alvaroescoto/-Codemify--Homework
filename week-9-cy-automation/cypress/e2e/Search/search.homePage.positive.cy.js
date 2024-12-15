import house from "../../fixtures/testData/House.Details.Fixture.File.json"
import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.switchLightBtn.click();
  });

  it("Should search by keyword", () => {
    homePage.searchInput.first().type("scary");
    homePage.searchBtn.click();
    cy.contains(house.searchResult.houseName);
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsBtn.click();
    homePage.numBedroomsInput.click();
    homePage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    cy.contains(house.searchResult.numBedrooms);
  });

  it("Should search by city", () => {
    homePage.cityInput.type(house.searchResult.city);
    homePage.searchBtn.click();
    cy.get('[class*="MuiGrid-grid-xs-6"]')
      .filter(':contains("City: Rivera")')
      .should("have.length", 1);
  });

  it("Should search by city and check the listing and MoreInfo details", () => {
    homePage.cityInput.type(house.searchResult.city);
    homePage.searchBtn.click();
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
    cy.contains(house.searchResult.houseName);
  });
});
