// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

    it('Visits home', () => {

        cy.visit('/')

        cy.contains('h1', 'Welcome to Your Vue.js App')
        
    })

})
