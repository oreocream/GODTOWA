class register {
    element = {
        emailInput :() => cy.get('#textRegisterEmail'),
        passwordInput :() => cy.get('#textRegisterPassword'),
        confirmPasswordInput :() => cy.get('#textRegisterConfirmPassword'),
        registerBtn :() => cy.get('#btnRegister'),
        privacyBtn :() => cy.get('#privacyterms'),
        checkRegister:()=>cy.get('.card-body > :nth-child(1) > .col-md-9'),
        alertconfirm:()=>cy.get('[data-fv-validator="callback"]'),
        alertpass:()=>cy.get(':nth-child(4) > [data-fv-validator="notEmpty"]'),
        alertemail:()=>cy.get(':nth-child(3) > [data-fv-validator="notEmpty"]'),
        alertemail2:()=>cy.get(':nth-child(3) > [data-fv-validator="regexp"]'),
        alertpass2:()=>cy.get(':nth-child(4) > [data-fv-validator="regexp"]'),
       

    }

    register(email,password) {
        this.element.emailInput().clear()
        this.element.emailInput().type(email)
        this.element.passwordInput().clear()
        this.element.passwordInput().type(password)
        this.element.confirmPasswordInput().clear()
        this.element.confirmPasswordInput().type(password)
        this.element.privacyBtn().click()
        this.element.registerBtn().click()
    }
    checkErrorMessage(error) {
        this.element.errorMessage().should('contain', error)
    }
}

module.exports = new register();
