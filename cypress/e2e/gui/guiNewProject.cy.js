import { faker } from '@faker-js/faker'

describe('Create New Project', () => {
  beforeEach(() => {
    cy.apiDeleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.guiCreateNewProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
  })
})