import homePage from "../../page_objects/home.page";
import listingPage from "../../page_objects/listing.page";

describe("Search Listings Page Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should search by keyword", () => {
    homePage.switchLightBtn.click();
    homePage.listingsBtn.click();
    listingPage.searchInput.type("Scary");
    listingPage.searchBtn.click();
    listingPage.houseTitleAssert;
  });

  it("Should search by bedrooms", () => {
    homePage.switchLightBtn.click();
    homePage.listingsBtn.click();
    listingPage.bedroomsBtn.click();
    listingPage.numBedroomsInput.click();
    listingPage.searchBtn.click();
    listingPage.moreInfoBtn.click();
    listingPage.NumBedroomsAssert;
  });

  it("Should search by city", () => {
    homePage.switchLightBtn.click();
    homePage.listingsBtn.click();
    listingPage.searchInput.type("Rivera");
    listingPage.searchBtn.click();
    listingPage.cityUniqueAssert;
  });

  it("Should search by city and check the listing details", () => {
    homePage.switchLightBtn.click();
    homePage.listingsBtn.click();
    listingPage.searchInput.type("Rivera");
    listingPage.searchBtn.click();
    listingPage.cityUniqueAssert;
    listingPage.listingAssertion();
    listingPage.cityUniqueAssert;
    listingPage.moreInfoBtn.click();
    listingPage.moreDetailsAssert();
  });

  it.only("Should search by price", () => {
    homePage.switchLightBtn.click();
    homePage.listingsBtn.click();
    cy.visit("/featured-listings?price=1000000-1000000");
    listingPage.houseTitleListingAssert;
  });
});
