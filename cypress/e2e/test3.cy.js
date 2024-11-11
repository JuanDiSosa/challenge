import Login from "../PageObjects/LoginPage";

describe('Test Case 3: Login Verification', () => {
  it('Should log in with valid credentials', () => {
    const ln = new Login();
    cy.visit(ln.URL);
    ln.setUserName(Cypress.env('MY_USER'));
    ln.setPassword(Cypress.env('MY_PASSWORD'));
    ln.ClickSumbmit('Welcome, testUser!');
  })
});
