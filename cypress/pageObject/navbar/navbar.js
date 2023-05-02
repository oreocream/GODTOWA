class navbar {
    element = {
        navbarFunc : () => cy.get('.navbar-toggler'),
        login : () => cy.get(':nth-child(4) > .navbar-nav > :nth-child(1) > .nav-link'),
    }
}

module.exports = new navbar();