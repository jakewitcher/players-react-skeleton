describe('Roster Page', () => {
  beforeEach(() => {
    cy.login();
    cy.server();
    cy.route('GET', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:getPlayers.json');
  });

  afterEach(() => {
    cy.logout();
  });

  it('Contains players', () => {
    cy.visit('/roster');
    cy.contains('Harry');
    cy.contains('Hermione');
    cy.contains('Ron');
  });
});
