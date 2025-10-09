export class FilterPage{
  elements = {
    productName: () => cy.get('[data-test="inventory-item-name"]'),
    filterProducts: () => cy.get('[data-test="product-sort-container"]'),
    filterPrice: () => cy.get('[data-test="inventory-item-price"]'),
  };

  filterProducts(filter) {
    this.elements.filterProducts().select(filter);
  }
  verifyFilterProductsByName(order = "asc") {
    const sortedNames = [];
    this.elements.productName().each(($el) => {
      sortedNames.push($el.text())}).then(() => {
        const sortedCopy = [...sortedNames].sort();
        if(order == 'desc') sortedCopy.reverse();
        expect(sortedNames).to.deep.equal(sortedCopy);      
    });
  }

  verifyFilterProductsByPrice(order = "asc") {
    const prices = [];
    this.elements.filterPrice().each(($el) => {
      prices.push(parseFloat($el.text().replace('$','')))}).then(() => {
        const sortedCopyPrice = [...prices].sort((a,b) => a - b);
        if(order == 'desc') sortedCopyPrice.reverse();
        expect(prices).to.deep.equal(sortedCopyPrice);      
    });
  }
}

export default new FilterPage();
