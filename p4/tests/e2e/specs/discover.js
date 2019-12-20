// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {

    it('Visits discover', () => {

        cy.visit('/discover')

        cy.contains('a', 'Creativity')

        cy.contains('a', 'Summer')

        cy.contains('a', 'Freedom')

    })

})
