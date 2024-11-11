describe('Test Case 2: Status Code Check', () => {
  it('Should check status codes of links and visit the links on the page', () => {
    cy.visit('/');
    cy.get('a').each(link => {
      const href = link.prop('href');
      if (href) {
        cy.request(href).then((response) => {
          expect(response.status).to.be.oneOf([200, 301, 302]);
          cy.visit(href);
        });
      }
    });
  });
});