import { faker } from '@faker-js/faker'

describe('Set label on issue', () => {
  const issue = {
    title: faker.random.words(3),
    description: faker.random.words(7),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  const label = {
    name: `label-${faker.random.word()}`,
    color: '#ffaabb'
  }

  beforeEach(() => {
    cy.apiDeleteProjects()
    cy.login()
    cy.apiCreateNewIssue(issue)
      .then(response => {
        cy.apiCreateLabel(response.body.project_id, label)
        cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)
      })
  })

  it('successfully', () => {
    cy.guiSetLabelOnIssue(label)

    cy.get('.qa-labels-block').should('contain', label.name)
    cy.get('.qa-labels-block span')
      .should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
  })
})
