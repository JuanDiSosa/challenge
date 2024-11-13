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
      const now = new Date();
      const timestamp = `${now.getFullYear().toString().slice(2)}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
      cy.writeFile('cypress/downloads/openPullRequests_' +timestamp+'.csv' , csvContent)
    });
  });
});
