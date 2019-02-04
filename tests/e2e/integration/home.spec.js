describe('Home Page', () => {
  it('Visits the landing page', () => {
    cy.visit('/', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
    });
    cy.contains('Login');
    cy.contains('Register');
  });
});

