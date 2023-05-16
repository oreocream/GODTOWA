class personal {
    element = {
        emailInput : () => cy.get('#textLoginEmail'),
        passwordInput : () => cy.get('#textLoginPassword'),
        loginBtn : () => cy.get('#btnLogin'),
        editProfileBtn : () => cy.get('#btnEditProfile'),
        nameInput : () => cy.get(':nth-child(2) > .form-group > .form-control'),
        phoneInput : () => cy.get('#textPhoneNumber'),
        maleCheckBox : () => cy.get('.form-group > div > :nth-child(1) > input'),
        femaleCheckBox : () => cy.get('.form-group > div > :nth-child(2) > input'),
        birthDateInput : () => cy.get('#textMemberBirthdate'),
        calendarBtn : () => cy.get('.input-group-text'),
        calendarDateSelectBtn : () => cy.get('[data-day="05/14/2023"]'),
        saveBtn : () => cy.get('#buttonSaveEdit'),
        nameDisplay : () => cy.get(':nth-child(2) > .col-md-9'),
        nameError : () => cy.get(':nth-child(2) > .form-group > .invalid-feedback'),
        phoneDisplay : () => cy.get(':nth-child(3) > .col-md-9'),
        phoneError : () => cy.get('[data-fv-validator="regexp"]'),
        birthDateDisplay : () => cy.get(':nth-child(5) > .col-md-9'),
        genderDisplay : () => cy.get(':nth-child(4) > .col-md-9'),
    }

    login(email ,password) {
        this.element.emailInput().clear()
        this.element.emailInput().type(email)
        this.element.passwordInput().clear()
        this.element.passwordInput().type(password)
        this.element.loginBtn().click()
    }

    fillName(firstnameAndSurname){
        this.element.nameInput().clear()
        this.element.nameInput().type(firstnameAndSurname)
        this.element.saveBtn().click()
    }

    fillPhoneNumber(phoneNumber){
        this.element.phoneInput().clear()
        this.element.phoneInput().type(phoneNumber)
        this.element.saveBtn().click()
    }

    checkName(firstnameAndSurname){
        this.element.nameDisplay().should('contain', firstnameAndSurname)
    }

    checkPhoneNumber(phoneNumber){
        this.element.phoneDisplay().should('contain', phoneNumber)
    }

    checkBirthDate(birthDate){
        this.element.birthDateDisplay().should('contain', birthDate)
    }

    checkGender(gender){
        this.element.genderDisplay().should('contain', gender)
    }

}

module.exports = new personal();