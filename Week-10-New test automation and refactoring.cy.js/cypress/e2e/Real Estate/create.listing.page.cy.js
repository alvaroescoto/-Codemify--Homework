import dashboardPage from "../../page_objects/dashboard.page";
import listingsDetails from "../../fixtures/testData/listingsDetails.json";
import homePage from "../../page_objects/home.page";
import feacturedListingPage from "../../page_objects/feacturedListing.page";

let houseId;

describe("Create a new Listing Page", () => {

  before(() => {
    cy.login();
    cy.visit("/dashboard/user/profile");
  });

  after(() => {
    cy.deleteNewList(houseId)
  });

  it("should create a new listing Page", () => {
    dashboardPage.realEstateBtn.click();
    dashboardPage.realEstCreateBtn.click();
    dashboardPage.dropImage;
    dashboardPage.listingPageInputs();
    dashboardPage.publishBtn.click();
    dashboardPage.postBtn.click();
    cy.contains(listingsDetails.newListingPage.houseName, { timeout: 10000 }).should("be.visible");  
  });

  it("should search for the new listing page", () => {
    cy.visit("/", { timeout: 10000 });
    homePage.searchInput.type(listingsDetails.newListingPage.houseName);
    homePage.searchBtn.click();
    feacturedListingPage.moreInfoBtn.click();
    listingsDetails.newListingDetails.forEach((text) => 
      {feacturedListingPage.moreInfoDetail.contains(text).should('be.visible')})
    cy.url().then((url) => {houseId = url.split("/").pop(); });
  });
});
