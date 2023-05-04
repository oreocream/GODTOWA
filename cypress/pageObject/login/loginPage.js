class login {
    element = {
        navbarFunc : () => cy.get('.navbar-toggler'),
        emailInput : () => cy.get('#textLoginEmail'),
        passwordInput : () => cy.get('#textLoginPassword'),
        loginBtn : () => cy.get('#btnLogin'),
        logoutBtn : () => cy.get('#txtMemberLogoutonmenu'),
        textHeader : () => cy.get('.h3-hover'),
        errorMessage : () => cy.get('.serverResponse'),
    }

    login(email ,password) {
        this.element.emailInput().clear()
        this.element.emailInput().type(email)
        this.element.passwordInput().clear()
        this.element.passwordInput().type(password)
        this.element.loginBtn().click()
    }

    checkErrorMessage(error) {
        this.element.errorMessage().should('contain', error)
    }
}

module.exports = new login();