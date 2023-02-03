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

  });
  it('successfully', () => {

    cy.apiCreateNewIssue(issue)
      .then(response => {
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(issue.title)
        expect(response.body.description).to.equal(issue.description)
      })
  })
})
