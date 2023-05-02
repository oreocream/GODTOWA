import navbar from "../pageObject/navbar/navbar"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.godtowathailand.com/')
    navbar.element.navbarFunc().click()
    navbar.element.login().click()
    cy.get('#textLoginEmail').type('777777777@kmitl.ac.th')
    cy.get('#textLoginPassword').type('022859Oreo')
    cy.get('#btnLogin').click()
  })
})

