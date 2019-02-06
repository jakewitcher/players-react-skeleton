describe('Add player page', () => {
  beforeEach(() => {
    cy.visit('/roster', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
    });
    cy.login();
    cy.server();
    // Cypress routes are one time use
    cy.route('POST', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:createPlayer.json');
    cy.route('GET', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:getPlayers.json');
  });

  it('Contains player field labels', () => {
    cy.visit('/player/new');
    cy.contains('First Name');
    cy.contains('Last Name');
    cy.contains('Rating');
    cy.contains('Handedness');
  });

  it('Accepts valid player information', () => {
    cy.visit('/player/new');
    cy.get('#firstName').type('Tom');
    cy.get('#lastName').type('Riddle');
    cy.get('#rating').type('10');
    cy.get('#handedness').select('Right');
    cy.get('#create').click();
    cy.url().should('eq', 'http://localhost:3000/roster');
    cy.contains('Tom');
  });

  it('Requires a first and last name', () => {
    cy.visit('/player/new');
    cy.get('#rating').type('10');
    cy.get('#handedness').select('Right');
    cy.get('#create').click();
    cy.contains('Please enter both a first and last name');
  });

  it('Requires a rating', () => {
    cy.visit('/player/new');
    cy.get('#firstName').type('Tom');
    cy.get('#lastName').type('Riddle');
    cy.get('#handedness').select('Right');
    cy.get('#create').click();
    cy.contains('Please enter a rating');
  });
});
