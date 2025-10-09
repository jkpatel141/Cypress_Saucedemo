/// <reference types="cypress"/>
import file from "../fixtures/userData.json";
import { FilterPage } from "../page/FilterPageMethods";

const filter = new FilterPage();
describe("Verify the functionality of filter", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(file.validUser.userName, file.validUser.password);
  });
  it("Verify the product by name from A - Z", () => {
    filter.filterProducts('az')
    filter.verifyFilterProductsByName('asc')
  });
  it("Verify the product by name from Z - A", () => {
    filter.filterProducts('za')
    filter.verifyFilterProductsByName('desc')
  });
   it("Verify the product by price low to high", () => {
    filter.filterProducts('lohi')
    filter.verifyFilterProductsByPrice('asc')
  });
   it("Verify the product by price high to low", () => {
    filter.filterProducts('hilo')
    filter.verifyFilterProductsByPrice('desc')
  });
});
