describe('Form inputs', () => {
    it('Can navigate to the site', () => {
        cy.visit('http://localhost:3000/')
            .url().should('include', 'localhost')
    })

    it('button is disabled', () => {
        cy.get('button.submit')
            .should('be.disabled')
    })

    it('can type a name', () => {
        cy.get('input[name="name"]')
            .type('Lady Gaga')
            .should('have.value', 'Lady Gaga')
    })

    it('can type an email', () => {
        cy.get('input[name="email"]')
            .type('lady@gaga.com')
            .should('have.value', 'lady@gaga.com')
    })

    it('can type a password', () => {
        cy.get('input[name="password"]')
            .type('iamplugged')
            .should('have.value', 'iamplugged')
    })

    it('can check terms and conditions', () => {
        cy.get('[type="checkbox"]')
            .check()
    })

    it('submit button not disabled any more', () => {
        cy.get('button.submit')
            .should('not.be.disabled')
    })
})