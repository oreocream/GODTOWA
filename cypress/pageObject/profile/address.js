class address {
    element = {
        fullNameInput :() => cy.get('#textMemberName'),
        phoneInput :() => cy.get('#textPhoneNumber'),
        addressInput :() => cy.get('#textEditAddress'),
        countryDropdown :() => cy.get('#selectEditCountry'),
        postalInput :() => cy.get('#customerPostal'),
        regionsDropdown :() => cy.get('#customerRegionsID'),
        districtDropdown :() => cy.get('#customerDistrictID'),
        subDistrictDropdown :() => cy.get('#customerSubDistrictID'),
        addressBtn :() => cy.get('#member-editaddressbook > p'),
        addAddressBtn :() => cy.get('#btnPlusMemAdrrShipping'),
        editAddressBtn :() => cy.get(':nth-child(2) > :nth-child(4) > .editMemAdrrShipping'),
        saveAddressBtn :() => cy.get('#btnSaveAdress'),
        

    }

    addAddress(fullName, phoneNumber, address, postal) {
        this.element.fullNameInput().clear()
        this.element.fullNameInput().type(fullName)
        this.element.phoneInput().clear()
        this.element.phoneInput().type(phoneNumber)
        this.element.addressInput().clear()
        this.element.addressInput().type(address)
        this.element.postalInput().clear()
        this.element.postalInput().type(postal)
    }

    checkErrorMessage(error) {
        this.element.errorMessage().should('contain', error)
    }
}

module.exports = new address();