describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/roster', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
    });
    cy.server();
    cy.route('POST', 'https://players-api.developer.alchemy.codes/api/user', 'fixture:createUser.json');
  });

  it('Contains email and password labels', () => {
    cy.visit('/register');
    cy.contains('First Name');
    cy.contains('Last Name');
    cy.contains('Email');
    cy.contains('Password');
    cy.contains('Confirm Password');
    cy.contains('Register');
  });

  it('Accepts valid email and password', () => {
    cy.visit('/register');
    cy.get('#firstName').type('Billy');
    cy.get('#lastName').type('Bob');
    cy.get('#email').type('billybob@example.com');
    cy.get('#password').type('Billybob1@example.com');
    cy.get('#confirmPassword').type('Billybob1@example.com');
    cy.get('#register').click();
    cy.url().should('eq', 'http://localhost:3000/roster');
    cy.contains('Roster');
  });

  it('Requires a first and last name', () => {
    cy.visit('/register');
    cy.get('#email').type('billybob@example.com');
    cy.get('#password').type('Billybob1@example.com');
    cy.get('#confirmPassword').type('Billybob1@example.com');
    cy.get('#register').click();
    cy.url().should('eq', 'http://localhost:3000/register');
    cy.contains('Please enter both a first and last name');
  });

  it('Requires a valid email address', () => {
    cy.visit('/register');
    cy.get('#firstName').type('Billy');
    cy.get('#lastName').type('Bob');
    cy.get('#email').type('billybob');
    cy.get('#password').type('Billybob1@example.com');
    cy.get('#confirmPassword').type('Billybob1@example.com');
    cy.get('#register').click();
    cy.url().should('eq', 'http://localhost:3000/register');
    cy.contains('Please enter a vaild email address');
  });

  it('Requires a valid password', () => {
    cy.visit('/register');
    cy.get('#firstName').type('Billy');
    cy.get('#lastName').type('Bob');
    cy.get('#email').type('billybob@example.com');
    cy.get('#password').type('billybob@example.com');
    cy.get('#confirmPassword').type('billybob@example.com');
    cy.get('#register').click();
    cy.url().should('eq', 'http://localhost:3000/register');
    cy.contains('Passwords must be at least 8 characters in length and contain at least one uppercase letter, one lowercase letter, one number, and one symbol.');
  });

  it('Requires password confirmation to match password', () => {
    cy.visit('/register');
    cy.get('#firstName').type('Billy');
    cy.get('#lastName').type('Bob');
    cy.get('#email').type('billybob@example.com');
    cy.get('#password').type('Billybob1@example.com');
    cy.get('#confirmPassword').type('Billybob1@example');
    cy.get('#register').click();
    cy.url().should('eq', 'http://localhost:3000/register');
    cy.contains('Passwords do not match, please confirm your password.');
  });
});
