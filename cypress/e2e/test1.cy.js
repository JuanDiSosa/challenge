describe('Test Case 1: Console Errors', () => {
  it.only('Should have no console errors on About page if site is available', () => {
    cy.request({
      url: Cypress.config('baseUrl') + '/about',
      failOnStatusCode: false  
    }).then((response) => {
      if (response.status === 200) {
        cy.on('window:console', (msg) => {
          expect(msg.type).not.to.equal('error');
        });
      } else {
        cy.log('El sitio no está disponible. Status code:', response.status);
        throw new Error('El sitio no está disponible');
      }
    });
  });
  it('Forcing error 404', () => {
    cy.request({
      url: Cypress.config('baseUrl') + '/abou',
      failOnStatusCode: false  
    }).then((response) => {
      if (response.status === 200) {
        cy.on('window:console', (msg) => {
          expect(msg.type).not.to.equal('error');
        });
      } else {
        throw new Error('The site is not available. Status code: ' + response.status);
      }
    });
  });
});