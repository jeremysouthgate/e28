// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

    it('Visits home', () => {

        cy.visit('/')

        cy.contains('h1', 'Jeremy C. Southgate')

        cy.contains('a', 'Home')

        cy.contains('a', 'Discover')

        cy.contains('a', 'Play')

        cy.contains('a', 'Contact')
    })

})
