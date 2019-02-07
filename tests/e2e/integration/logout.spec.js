describe('Logout', () => {
  it('Logs out the user', () => {
    cy.visit('/roster', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
    });
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/roster');
    cy.logout();
    cy.url().should('eq', 'http://localhost:3000/');
  });
});

