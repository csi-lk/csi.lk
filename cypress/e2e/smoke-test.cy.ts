const capitalise = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1)

describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.config().baseUrl)
    cy.get('h2.logo').should('contain', 'Callum')
    const sections = ['talks', 'timeline', 'articles', 'bookshelf']
    sections.forEach((section: string) => {
      cy.get(`[href="/${section}"]`).click()
      cy.get('h1').should('contain', capitalise(section))
    })
  })
})
