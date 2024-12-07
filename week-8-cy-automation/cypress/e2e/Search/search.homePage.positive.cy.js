import homePage from "../../page_objects/home.page";
import listingPage from "../../page_objects/listing.page";

describe("Search Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should search by keyword", () => {
    homePage.switchLightBtn.click();
    homePage.searchInput.first().type("scary");
    homePage.searchBtn.click();
    listingPage.houseTitleAssert;
  });

  it("Should search by bedrooms", () => {
    homePage.switchLightBtn.click();
    homePage.bedroomsBtn.click();
    homePage.numBedroomsInput.click();
    homePage.searchBtn.click();
    listingPage.moreInfoBtn.click();
    listingPage.NumBedroomsAssert.should("exist");
  });

  it("Should search by city", () => {
    homePage.switchLightBtn.click();
    homePage.cityInput.type("Rivera");
    homePage.searchBtn.click();
    listingPage.cityUniqueAssert;
  });

  it("Should search by city and check the listing details", () => {
    homePage.switchLightBtn.click();
    homePage.cityInput.type("Rivera");
    homePage.searchBtn.click();
    listingPage.listingAssertion();
    listingPage.cityUniqueAssert;
    listingPage.moreInfoBtn.click();
    listingPage.moreDetailsAssert();
  });

  it("Should search by price", () => {
    homePage.switchLightBtn.click();
    cy.visit("/featured-listings?price=1000000-1000000");
    listingPage.houseTitleListingAssert;
  });
});