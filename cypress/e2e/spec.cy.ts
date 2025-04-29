describe('Heroes', () => {
  it('Login - Sucess', () => {
    cy.visit('http://localhost:3000')
    cy.get('.max-w-6xl')
    cy.get('nav').click()
    cy.get('.relative')
    cy.get('[data-cy="email"]').type('admin@test.com')
    cy.get('[data-cy="password"]').type('test123')
    cy.get('.text-white').click()
    cy.get('.bg-blue-700')
  })

  it('Login - Fail', () => {
    cy.visit('http://localhost:3000')
    cy.get('.max-w-6xl')
    cy.get('nav').click()
    cy.get('.relative')
    cy.get('[data-cy="email"]').type('admin@tete.com')
    cy.get('[data-cy="password"]').type('test123456')
    cy.get('.text-white').click()
    cy.get('.text-red-500')
  })
})