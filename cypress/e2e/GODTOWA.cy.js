import navbar from "../pageObject/navbar/navbar"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.godtowathailand.com/')
    navbar.element.navbarFunc().click()
    navbar.element.login().click()
    cy.get('#textLoginEmail').type('62050194@kmitl.ac.thth')
    cy.get('#textLoginPassword').type('022859Oreoxxx')
    cy.get('#btnLogin').click()
  })
})

