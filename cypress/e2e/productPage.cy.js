/// <reference types="cypress"/>
import file from "../fixtures/userData.json";
import { ProductPage } from "../page/ProductPagemethod";

const productTest = new ProductPage();
describe("Verify the products functionality", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(file.validUser.userName, file.validUser.password); 
   });
  
  it("To verify all the products are displayed", () => {
    cy.fixture("products.json").then((data) => {
     productTest.verifyProducts(data.products,6)
    })
  });

  it("To add and verify the product cart", () => {
    cy.fixture("products.json").then((data) => {
     productTest.addItemToCart(data.products[0].name)
     productTest.verifyCartCount(1)
     productTest.addItemToCart(data.products[1].name)
     productTest.verifyCartCount(2)
    })
  }); 
  
  it.only("To add and verify the product cart", () => {
    cy.fixture("products.json").then((data) => {
     productTest.addItemToCart(data.products[0].name)
     productTest.verifyCartCount(1)
     productTest.addItemToCart(data.products[1].name)
     productTest.verifyCartCount(2)
    }) 
  }); 
}); 
