class navbar {
    element = {
        navbarFunc : () => cy.get('.navbar-toggler'),
        login : () => cy.get(':nth-child(4) > .navbar-nav > :nth-child(1) > .nav-link'),
        logout : () => cy.get('#txtMemberLogoutonmenu'),
        register : () => cy.get(':nth-child(4) > .navbar-nav > :nth-child(2) > .nav-link'),
        Allproduct : () => cy.get('#navbarNavDropdown > :nth-child(2) > .navbar-nav > :nth-child(2) > #topmenuonpage'),
        cart : () => cy.get('.col-auto > .cart-nav'),
    }
}

module.exports = new navbar();