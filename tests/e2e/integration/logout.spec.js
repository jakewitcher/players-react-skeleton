describe('Logout', () => {
  it('Logs out the user', () => {
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/roster');
    cy.logout();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

