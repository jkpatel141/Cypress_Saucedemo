/// <reference types="cypress"/>

describe("To check the api", () => {
  let getId
    it("Post and get the token", () => {
        cy.request({
          method : 'POST',
          url : 'https://dummyjson.com/auth/login',
          body : {
              "username" : "michaelw",
              "password" : "michaelwpass",
              "email" : "michael.williams@x.dummyjson.com"
          }}).then((response) => {
            expect(response.status).to.eq(200)            
           // const jsonData = JSON.stringify(response.body)
            //cy.log("Response Body : ", jsonData)
            const token = JSON.stringify(response.body.accessToken)
            cy.log("Token is : ", token)
            cy.request({
              method : 'GET',
              url : 'https://dummyjson.com/auth/me',
              header : {
                Authorization : `Bearer ${token}`
              }
          }).then((responseData) => {
            expect(responseData.status).to.eq(200)
            const stringData = JSON.stringify(responseData.body)
            cy.log("Check : ", stringData)
            expect(responseData.duration).to.below(1000)
            expect(responseData.body).to.have.property("username")
            expect(responseData.body.username).to.eq("michaelw")
            expect(responseData.body.company).to.have.property("department","Support")

            getId = responseData.body.id
            cy.log(getId)
          })
         })
    })
    it('Update user details using PUT', () => {
    cy.request({
      method: 'PUT',
      url: `https://dummyjson.com/users/${getId}`, // ✅ use stored ID
      body: {
        firstName: 'JigneshUpdated',
        lastName: 'Patel',
        age: 38
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log('User updated successfully')
      cy.log(JSON.stringify(response.body))
      expect(response.body.firstName).to.eq('JigneshUpdated')
      expect(response.body.age).to.eq(38)
    })
  })
})