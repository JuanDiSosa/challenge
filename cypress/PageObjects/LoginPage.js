class Login 
{
    URL='/login.html';
    inputUserName='#username';
    inputPassword='#password';
    loginButton='[type="submit"]';
    logoutButton='logout-button';
    messageH2='h2';
    setUserName(username)
    {
        cy.get(this.inputUserName).type(username);
    }
    setPassword(password)
    {
        cy.get(this.inputPassword).type(password);

    }
    ClickSumbmit(message)
    {
        cy.get(this.loginButton).click().then(() => {
            this.VerifyLogin();
            this.VerifyWelcome(message);
        });
    }
    VerifyLogin()
    {
        cy.get(this.logoutButton).should('exist');
    }
    VerifyWelcome(message)
    {
        cy.get(this.messageH2).contains(message).should('exist');
    }
}

export default Login;