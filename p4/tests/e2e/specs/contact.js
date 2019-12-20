// https://docs.cypress.io/api/introduction/api.html

describe('Contact', () => {

    it('Visits Contact', () => {

        cy.visit('/contact')

        cy.contains('h1', 'Contact')

    })

})
