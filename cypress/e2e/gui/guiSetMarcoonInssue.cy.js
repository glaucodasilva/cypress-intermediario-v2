import { faker } from '@faker-js/faker'

describe('Set label on marco', () => {
  const issue = {
    title: faker.random.words(3),
    description: faker.random.words(7),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  const marco = {
    title: `marco-${faker.random.word()}`
  }

  beforeEach(() => {
    cy.apiDeleteProjects()
    cy.login()
    cy.apiCreateNewIssue(issue)
      .then(response => {
        cy.apiCreateMarco(response.body.project_id, marco)
        cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
      })
  })

  it('successfully', () => {
    cy.guiSetMarcoOnIssue(marco)

    cy.get('.milestone > .value > a')
      .should('contain', marco.title)
  })
})
