import navbar from "../pageObject/navbar/navbar"
import register from "../pageObject/register/register"

describe('Register In Function Test ', () => 
{
    beforeEach(() => {
        cy.visit('https://www.godtowathailand.com/')
        navbar.element.navbarFunc().click()
        navbar.element.register().click()
    })

    /*it('สมัครสมาชิก', () => {
        register.register('emailname345@kmitl.ac.th','Paman44879')
        cy.get('.h3-hover').should('contain','ข้อมูลของฉัน')
        navbar.element.navbarFunc().click()
        navbar.element.register().click()
    })*/

    it('ไม่กรอกอีเมล', () => {
        register.element.emailInput().clear()
        register.element.privacyBtn().click()
        register.element.registerBtn().click() 
        register.element.alertemail().should('contain','กรุณากรอกข้อมูล Email')
    })

    it('ไม่กรอกรหัสผ่าน', () => {
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.privacyBtn().click()
        register.element.registerBtn().click() 
        register.element.alertpass().should('contain','กรุณากรอกข้อมูล Password')
    
    })

    it('ไม่กรอกยืนยันรหัสผ่าน', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('Paman44879')
        register.element.confirmPasswordInput().clear()
        register.element.privacyBtn().click()
        register.element.registerBtn().click({force:true})
        register.element.alertconfirm().should('contain','Confirm Password จะต้องเหมือนกับ Password')
    })

    it(' กรอกยืนยันรหัสผ่านไม่ตรงกับรหัสผ่าน', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('Paman44879')
        register.element.confirmPasswordInput().clear()
        register.element.confirmPasswordInput().type('Pasdsdsa457')
        register.element.privacyBtn().click()
        register.element.registerBtn().click({force:true})
        register.element.alertconfirm().should('contain','Confirm Password จะต้องเหมือนกับ Password')
    })

    it('กรอกอีเมลในรูปแบบที่ไม่ถูกต้อง', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('Paman44879')
        register.element.confirmPasswordInput().clear()
        register.element.confirmPasswordInput().type('Paman44879')
        register.element.privacyBtn().click()
        register.element.registerBtn().click({force:true})
        register.element.alertemail2().should('contain','รูปแบบ Email ไม่ถูกต้อง')
    })

    it('กรอกรหัสผ่านที่ไม่มีตัวอักษรพิมพ์เล็ก', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('PAMAN44879')
        register.element.privacyBtn().click()
        register.element.registerBtn().click() 
        register.element.alertpass2().should('contain','รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('กรอกรหัสผ่านที่ไม่มีตัวอักษรพิมพ์ใหญ่', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('paman44879')
        register.element.privacyBtn().click()
        register.element.registerBtn().click() 
        register.element.alertpass2().should('contain','รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('กรอกรหัสผ่านที่ไม่มีตัวเลข', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('Pamaneiei')
        register.element.privacyBtn().click()
        register.element.registerBtn().click() 
        register.element.alertpass2().should('contain','รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('กรอกรหัสผ่านที่มีน้อยกว่า 8 ตัว', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('Paman69')
        register.element.privacyBtn().click()
        register.element.registerBtn().click() 
        register.element.alertpass2().should('contain','รหัสผ่านจะต้องมีตัวอักษรพิมพ์เล็ก, พิมพ์ใหญ่ และ ตัวเลข.')
    })

    it('นโยบายความเป็นส่วนตัว - ไม่เลือกยอมรับ', () => {
        register.element.emailInput().clear()
        register.element.emailInput().type('email@gmail.com')
        register.element.passwordInput().clear()
        register.element.passwordInput().type('Paman44879')
        register.element.registerBtn().click() 
        cy.get('.card-title').should('contain','สมัครสมาชิก')
    
    })
    

})

