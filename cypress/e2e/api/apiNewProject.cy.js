import { faker } from '@faker-js/faker'

describe('Create New Project', () => {
  beforeEach(() => {
    cy.apiDeleteProjects()
  });
  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.apiCreateNewProject(project)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(project.name)
        expect(response.body.description).to.equal(project.description)
      })
  })
})