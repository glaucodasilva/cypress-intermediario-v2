const accessToken = `Bearer ${Cypress.env('gitlab_access_token')}`

Cypress.Commands.add('apiCreateNewProject', project => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/`,
    body: {
      name: project.name,
      description: project.description,
      initialize_with_readme: true
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('apiListProjects', () => {
  cy.request({
    method: 'GET',
    url: `/api/v4/projects/`,
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('apiDeleteProjects', () => {

  cy.apiListProjects().then(listaProjects => {
    listaProjects.body.forEach(project => {
      cy.request({
        method: 'DELETE',
        url: `/api/v4/projects/${project.id}`,
        headers: { Authorization: accessToken },
      })
    });       
  })
})

Cypress.Commands.add('apiCreateNewIssue', issue => {
  cy.apiCreateNewProject(issue.project).then(project => {
    cy.request({
      method: 'POST',
      url: `/api/v4/projects/${project.body.id}/issues`,
      body: {
        title: issue.title,
        description: issue.description,
        initialize_with_readme: true
      },
      headers: { Authorization: accessToken },
    })
  })
})

Cypress.Commands.add('apiCreateLabel', (projectId, label) => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/${projectId}/labels`,
    body: {
      name: label.name,
      color: label.color
    },
    headers: { Authorization: accessToken },
  })
})

Cypress.Commands.add('apiCreateMarco', (projectId, marco) => {
  cy.request({
    method: 'POST',
    url: `/api/v4/projects/${projectId}/milestones`,
    body: {
      title: marco.title
    },
    headers: { Authorization: accessToken },
  })
})
