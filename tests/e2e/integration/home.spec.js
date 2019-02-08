describe('Home Page', () => {
  it('Visits the landing page', () => {
    cy.clearSession();
    cy.contains('Login');
    cy.contains('Register');
  });
});

