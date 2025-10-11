/// <reference types="cypress"/>

describe("To check the file upload and download", () => {
  it("To upload the file", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    const fileUpload = `report_file_${Date.now()}.txt`;
    const filePath = `cypress/fixtures/${fileUpload}`;
    cy.writeFile(filePath, { name: "Jignesh", email: "test@test.com" });
    cy.get('input[type="file"]').attachFile(fileUpload);
    cy.task("deleteFile", filePath);
  });

  it.only("To download file", () => {
    cy.visit("https://the-internet.herokuapp.com/download");
    const fileUpload = `report_file_${Date.now()}.pdf`;
    const filePath = `cypress/fixtures/${fileUpload}`;
    const url = 'https://the-internet.herokuapp.com/download/random_data.txt'
    
    cy.downloadFile(url,'cypress/fixtures/',fileUpload).then(() =>{
        cy.wait(10000)
    })
   // cy.wait(10000)
    cy.task("deleteFile", filePath);
  });  
});
