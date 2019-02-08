describe('Logout', () => {
  it('Logs out the user', () => {
    cy.clearSession();
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/roster');
    cy.logout();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

