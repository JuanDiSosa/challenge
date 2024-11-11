describe('Test Case 4: Open Pull Requests', () => {
  it('PRs from GitHub and output to CSV', () => {
    cy.request('https://api.github.com/repos/appwrite/appwrite/pulls').then((response) => {
      expect(response.status).to.equal(200);
      const prData = response.body.map(pr => ({
        title: pr.title,
        created_at: pr.created_at,
        author: pr.user.login,
      }));
      const csvContent = 'Title,Created At,Author\n' +
        prData.map(pr => `${pr.title},${pr.created_at},${pr.author}`).join('\n');
      cy.writeFile('cypress/downloads/open_pull_requests.csv', csvContent)
    });
  });
});
