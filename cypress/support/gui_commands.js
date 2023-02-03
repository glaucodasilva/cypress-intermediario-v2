Cypress.Commands.add('login', (
    cacheSession = true,
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password')
) => {
    cy.session([cacheSession, user, password], () => {
        cy.visit('/users/sign_in')
        cy.get("[data-qa-selector='login_field']").type(user)
        cy.get("[data-qa-selector='password_field']").type(password, {log: false})
        cy.get("[data-qa-selector='sign_in_button']").click()
    },
    {
      validate() {
        if (cacheSession) {
            cy.visit(`${Cypress.config('baseUrl')}/dashboard/projects`)
            cy.url().should('be.equal', `${Cypress.config('baseUrl')}/dashboard/projects`)
        } else {
            cy.get('[data-qa-selector="user_menu"]').should('be.visible')
        }
      },
      cacheAcrossSpecs: true,
    })
})

Cypress.Commands.add('logout', () => {
    cy.get('[data-qa-selector="user_menu"]').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
})

Cypress.Commands.add('guiCreateNewProject', project => {
    cy.visit('/projects/new')
  
    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.get('#blank-project-pane > #new_project > .btn-success').click()
  })

Cypress.Commands.add('guiCreateNewIssue', issue => {
    cy.visit(`${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)
    cy.get('#issue_title').type(issue.title)
    cy.get('#issue_description').type(issue.description)
    cy.get('.append-right-10 > .btn').click()
  })

Cypress.Commands.add('guiSetLabelOnIssue', label => {
  cy.get('.labels > .title > .js-sidebar-dropdown-toggle').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})

Cypress.Commands.add('guiSetMarcoOnIssue', marco => {
  cy.get('.milestone > .title > .js-sidebar-dropdown-toggle').click()
  cy.contains(marco.title).click()
  cy.get('body').click()
})