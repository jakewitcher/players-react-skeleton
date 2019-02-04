describe('Roster Page', () => {
  beforeEach(() => {
    cy.visit('/roster', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
    });
    cy.login();
    cy.server();
    cy.route('GET', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:getPlayers.json');
  });

  it('Contains players', () => {
    cy.visit('/roster');
    cy.contains('Harry');
    cy.contains('Hermione');
    cy.contains('Ron');
  });
});
