describe('API ReqRes', () => {
  
  it('Valida usuário específico', () => {
    cy.request('https://reqres.in/api/users/2')
      .its('status')
      .should('equal', 200);
  });

  it('Valida usuário inexistente', () => {
    cy.request({
      url: 'https://reqres.in/api/users/23',
      failOnStatusCode: false // Para o Cypress não quebrar no 404
    })
      .its('status')
      .should('equal', 401);
  });

});
