describe('User can search articles', () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&<api-key>',
      response: "fixture:biden.json"
    });
    cy.visit("/")
  });

  it('User can see title', (() => {
    cy.get("input").type("biden")
    cy.get('#btn').click()
    cy.get('.article').should('contain','Rasheed Sobowale')
    cy.get('.article').should('contain', 'US: Harris under scrutiny for tough-on-crime prosecutor past')
}))

})