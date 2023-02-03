describe('Login', () => {
  it('successfully', () => {
    cy.login(false)
    cy.visit(`${Cypress.config('baseUrl')}/dashboard/projects`)
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/dashboard/projects`)
  })
})