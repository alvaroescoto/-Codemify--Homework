import homePage from "../../page_objects/home.page";
import FeacturedListingPage from "../../page_objects/test.page";
import listingDetails from "../../fixtures/testData/listingsDetailsUi.json";

let houseId;

describe("Search thruogh Home Page", () => {
  before(() => {
    cy.login();
    cy.createLisitng().then((id) => {
      houseId = id;
    });
  });

  beforeEach(() => {
    cy.visit("/");
    homePage.switchLightBtn.click();
  });

  after(() => {
    cy.deleteLisitngById(houseId);
  });

  it("Should search by keyword", () => {
    homePage.searchInput.type(listingDetails.newListingPage.houseName);
    homePage.searchBtn.click();
    cy.contains(listingDetails.newListingPage.houseName).should("be.visible");
  });

  it("Should search by bedrooms", () => {
    homePage.bedroomsBtn.click();
    homePage.bedroomsInput.click();
    homePage.searchBtn.click();
    FeacturedListingPage.moreInfoBtn.click();
    FeacturedListingPage.bedroomsLoc.should("be.at.least", 2);
  });

  it("Should search by city", () => {
    homePage.cityInput.type(listingDetails.newListingPage.city);
    homePage.searchBtn.click();
    FeacturedListingPage.cityUniqueLoc.should("have.length", 1);
    FeacturedListingPage.moreInfoBtn.click();
    listingDetails.newListingDetails.forEach((text) => {
      FeacturedListingPage.moreInfoDetail.contains(text).should("be.visible");
    });
  });

  it("Should search by price", () => {
    cy.visit("/featured-listings?price=6000000-8000000");
    FeacturedListingPage.housePriceLoc
      .invoke("text")
      .should("include", "$ 7,000,000")
      .and("include", listingDetails.newListingPage.houseName);
  });
});
