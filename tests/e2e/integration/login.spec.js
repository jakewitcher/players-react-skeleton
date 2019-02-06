describe('Login Page', () => {
  it('Contains email and password labels', () => {
    cy.visit('/login');
    cy.contains('Email');
    cy.contains('Password');
  });

  it('Accepts valid email and password', () => {
    cy.login();
    cy.url().should('eq', 'http://localhost:3000/roster');
  });

  // it('Declines invalid email and password', () => {
  //   cy.visit('/roster', {
  //     onBeforeLoad: win => {
  //       win.sessionStorage.clear();
  //     },
  //   });
  //   cy.visit('/login');
  //   cy.invalidLogin();
  //   cy.url().should('eq', 'http://localhost:3000/login');
  //   cy.contains('Incorrect email or password, please try again or create a new account.');
  // });
});
