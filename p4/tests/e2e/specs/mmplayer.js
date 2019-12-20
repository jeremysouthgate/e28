// https://docs.cypress.io/api/introduction/api.html

describe('MmPlayer', () => {

    it('Visits play', () => {

        cy.visit('/play')

        cy.contains('audio')

        cy.contains('img')

        cy.contains('button', 'play')

    })

})
