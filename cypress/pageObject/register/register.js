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

    xxx() {
        
    }
}

module.exports = new login();