/// <reference types="cypress"/>

describe("Testing the javascrips", () => {
 it("Find the reverse string", () => {
    function reverseTest(str){
        let check = '';
        for(let i = str.length-1 ; i >= 0 ; i--){
            check += str[i]
        }
        return check;
    }
    const testing = "This is my cypress testing";
    const fun = reverseTest(testing)
    cy.log(fun)
 })
  
  it("Find the duplicate value", () => {
    function duplicateStr(str, index){
       return str.split('').filter(a => a = index).length;
    }
    const testing = "tetetsdtsregswewsrbsdb";
    const fun = duplicateStr(testing,'e')
    cy.log(fun)
 })
  it("Check palindrome", () => {
    function palin(str){
       const char = str.split('').reverse().join('');
       return char == str;
    }
    const testing = "madam";
    const fun = palin(testing)
    cy.log(fun)
 })
   it("find duplicates", () => {
    function duplicate(str){
       return str.filter((test,index) => str.indexOf(test) !== index);
    }
  //  const testing = [0,4,8,4,2,0,7,6,9,8,9,9,9,7,7,4,5,6,0];
  //  const fun = duplicate([testing])
    cy.log(duplicate([1,4,8,4,2,0,7,6,9,8,9,9,9,7,7,4,5,6,0]))  
    cy.log(duplicate([1, 2, 3, 2, 4, 1])); // [2, 1] 
 })
});