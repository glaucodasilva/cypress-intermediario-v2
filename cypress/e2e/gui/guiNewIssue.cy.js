import { faker } from '@faker-js/faker'

describe('Create New Issue', () => {
  const issue = {
    title: faker.random.words(3),
    description: faker.random.words(7),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.apiDeleteProjects()
    cy.login()
    cy.apiCreateNewProject(issue.project)
  })

    it('successfully', () => {
      
      cy.guiCreateNewIssue(issue)
      cy.get('.issue-details').should('contain', issue.title).and('contain', issue.description)

    })
  })