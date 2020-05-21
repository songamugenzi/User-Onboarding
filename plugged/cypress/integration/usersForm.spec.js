describe('Form inputs', () => {
  it('Can navigate to the site', () => {
    cy.visit('http://localhost:3000/')
      .url().should('include', 'localhost')
  })

  it('button is disabled', () => {
    cy.get('button.submit')
      .should('be.disabled')
  })
})