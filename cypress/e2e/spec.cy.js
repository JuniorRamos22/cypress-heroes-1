describe('Heroes', () => {
  it('New Hero - Sucess', () => {
    cy.visit('http://localhost:3000')
    cy.get('.max-w-6xl')
    cy.get('nav').click()
    cy.get('.relative')
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.bg-blue-700').click()
    cy.get('a > .undefined').click()
    cy.get('.px-8')
    cy.get('[data-cy="nameInput"]').type('Specter')



  })
})