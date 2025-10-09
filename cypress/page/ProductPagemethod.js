/// <reference types="cypress"/>

export class ProductPage {
  productList = '[data-test="inventory-list"]';
  productItem = '[data-test="inventory-item"]';
  productDesc = '[data-test="inventory-item-desc"]';
  productPrice = '[data-test="inventory-item-price"]';
  productImage = '.inventory_item_img img'
  addCardButton = '#add-to-cart-sauce-labs-backpack';
  shoppingCartCount = '[data-test="shopping-cart-badge"]';

  verifyProducts(products,size) {
    cy.get('[data-test="inventory-list"] .inventory_item', { timeout: 10000 }).should('have.length', size)
    cy.wrap(products).each((element) => {
      cy.get(this.productList).within(() => {
        cy.get(this.productItem).contains(element.name).should('be.visible');
        cy.get(this.productDesc).contains(element.desc).should('be.visible');
        cy.get(this.productPrice).contains(element.price.toFixed(2)).should('be.visible');
        cy.get(this.productImage).should('have.attr','src');
      });
    });
  }
  addItemToCart(addItems){
    cy.get(this.productItem).contains(addItems).closest(this.productItem).find('button').click()
  }
  verifyCartCount(count){
    cy.get(this.shoppingCartCount).should('have.text',count)
  }
}
