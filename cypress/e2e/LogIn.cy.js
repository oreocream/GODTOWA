import navbar from "../pageObject/navbar/navbar"
import login from "../pageObject/login/loginPage"

describe('Log In Function Test', () => {

    beforeEach(() => {
        cy.visit('https://www.godtowathailand.com/')
        navbar.element.navbarFunc().click()
        navbar.element.login().click()
    })

    it('เข้าสู่ระบบ', () => {
        login.login('62050194@kmitl.ac.th', '123456789Kmitl')
        login.element.textHeader().should('contain', 'ข้อมูลของฉัน')
        navbar.element.navbarFunc().click()
        navbar.element.logout().click()
    })

    it('ไม่กรอกข้อมูลอีเมล และรหัสผ่าน', () => {
        login.element.loginBtn().click()
        login.checkErrorMessage('Email หรือ Password ไม่ถูกต้อง')
    })

    it('ไม่กรอกอีเมล', () => {
        login.element.emailInput().clear()
        login.element.loginBtn().click()
        cy.get('[data-fv-validator="notEmpty"]').should('contain', 'กรุณากรอกข้อมูล Email')
    })

    it('ไม่กรอกรหัสผ่าน', () => {
        login.element.emailInput().type('62050194@kmitl.ac.th')
        login.element.passwordInput().clear()
        login.element.loginBtn().click()
        cy.get('[data-fv-validator="notEmpty"]').should('contain', 'กรุณากรอกข้อมูล Password')
    })

    it('กรอกอีเมลที่ไม่ได้ทำการสมัครสมาชิก', () => {
        login.login('7777777@kmitl.ac.th', '987654321Kmitl')
        login.checkErrorMessage('Email หรือ Password ไม่ถูกต้อง')
    })

    it('กรอกรหัสผ่านไม่ถูกต้อง', () => {
        login.login('62050194@kmitl.ac.th', '987654321Kmitl')
        login.checkErrorMessage('Email หรือ Password ไม่ถูกต้อง')
    })

    it('กรอกอีเมลในรูปแบบที่ไม่ถูกต้อง', () => {
        login.element.emailInput().type('62050194')
        login.element.loginBtn().click()
        cy.get('[data-fv-validator="regexp"]').should('contain', 'รูปแบบ Email ไม่ถูกต้อง')
    })

    it('กรอกรหัสผ่านที่ไม่มีตัวอักษรพิมพ์เล็ก', () => {
        login.login('62050194@kmitl.ac.th', '987654321KMITL')
        cy.get('.has-error > [data-fv-validator="regexp"]').should('contain', 'รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('กรอกรหัสผ่านที่ไม่มีตัวอักษรพิมพ์ใหญ่', () => {
        login.login('62050194@kmitl.ac.th', '987654321kmitl')
        cy.get('.has-error > [data-fv-validator="regexp"]').should('contain', 'รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('กรอกรหัสผ่านที่ไม่มีตัวเลข', () => {
        login.login('62050194@kmitl.ac.th', 'Kmitl')
        cy.get('.has-error > [data-fv-validator="regexp"]').should('contain', 'รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('กรอกรหัสผ่านที่มีน้อยกว่า 8 ตัว', () => {
        login.login('62050194@kmitl.ac.th', 'Kmitl')
        cy.get('.has-error > [data-fv-validator="regexp"]').should('contain', 'รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })
})

