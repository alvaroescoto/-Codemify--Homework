import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";
import listingDetails from "../../fixtures/testData/listingsDetailsUi.json";

let houseId;

describe("Search thruogh Feactured Listings Page", () => {
  before(() => {
    cy.login();
    cy.createLisitng().then((id) => {houseId = id;});
  });

  beforeEach(() => {
    cy.visit("/featured-listings");
    homePage.switchLightBtn.click();
  });

  after(() => {
    cy.deleteLisitngById(houseId);
  });

  it("Should search by keyword", () => {
    feacturedListingPage.searchInput.type(listingDetails.newListingPage.description);
    feacturedListingPage.searchBtn.click();
    cy.contains(listingDetails.newListingPage.houseName);
  });

  it("Should search by bedrooms", () => {
    feacturedListingPage.bedroomsBtn.click();
    feacturedListingPage.bedroomsInput.click();
    feacturedListingPage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    feacturedListingPage.bedroomsLoc.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    feacturedListingPage.cityInput.type(listingDetails.newListingPage.city);
    feacturedListingPage.searchBtn.click();
    feacturedListingPage.cityUniqueLoc.should("have.length", 1);
    feacturedListingPage.moreInfoBtn.click();
    listingDetails.newListingDetails.forEach((text) => 
      {feacturedListingPage.moreInfoDetail.contains(text).should('be.visible');});
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=6000000-8000000");
    feacturedListingPage.housePriceLoc.invoke("text")
      .should("include", "$ 7,000,000")
      .and("include", listingDetails.newListingPage.houseName);
  });
});
