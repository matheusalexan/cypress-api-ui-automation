describe('Testes API + UI', () => {
  it('Valida uma API pública', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts/1')
      .its('status')
      .should('equal', 200);
  });

  it('Valida título de exemplo.com', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
  });
});
