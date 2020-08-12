describe('User can search articles', () => {
  before(() => {
    cy.server();
    cy.route({
      method: 'Get',
      url: 'http://newsapi.org/v2/everything?q=biden&from=2020-07-12&sortBy=publishedAt&apiKey=<API_KEY>',
      response: "fixture:biden.json"
    });
    cy.visit("/")
  });

  it('User can see title', ( () => {
    cy.get('#article').should('contain', 'Rasheed Sobowale')
}))

})