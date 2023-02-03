describe('Logout', () => {
    beforeEach(() => {
        cy.login()
        cy.visit('/')
      })

    it('successfully', () => {
        cy.logout()
      
        cy.title().should('eq', 'Sign in · GitLab')
    })
  })