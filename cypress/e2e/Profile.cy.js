import navbar from "../pageObject/navbar/navbar"
import personal from "../pageObject/profile/personal"

describe('Manage Personal Profile', () => {

    beforeEach(() => {
        cy.visit('https://www.godtowathailand.com/member')
        personal.login('62050127@kmitl.ac.th', '123456789Kmitl')
    })

    it('กรอกชื่อและนามสกุลเป็นภาษาไทย', () => {
        personal.element.editProfileBtn().click()
        personal.fillName('สมชาย สายชล')
        personal.checkName('สมชาย สายชล')
    })

    it('กรอกชื่อและนามสกุลเป็นภาษาอังกฤษ', () => {
        personal.element.editProfileBtn().click()
        personal.fillName('Somchai Saichon')
        personal.checkName('Somchai Saichon')
    })

    it('กรอกชื่อและนามสกุลเป็นอักขระพิเศษ', () => {
        personal.element.editProfileBtn().click()
        personal.fillName('!@#$% ^&*;')
        personal.checkName('!@#$% ^&*;')
    })

    it('ไม่กรอกชื่อและนามสกุล', () => {
        personal.element.editProfileBtn().click()
        personal.element.nameInput().clear()
        personal.element.nameError().should('contain', 'กรุณากรอกข้อมูล')
    })

    it('กรอกหมายเลขโทรศัพท์', () => {
        personal.element.editProfileBtn().click()
        personal.element.phoneInput().clear()
        personal.element.phoneInput().type('0624611456')
        personal.element.saveBtn().click()
        personal.checkPhoneNumber('0624611456')
    })

    it('กรอกหมายเลขโทรศัพท์ไม่ครบ 10 หลัก', () => {
        personal.element.editProfileBtn().click()
        personal.element.phoneInput().clear()
        personal.element.phoneInput().type('0624')
        personal.element.phoneError().should('contain', 'รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง')
    })

    it('กรอกหมายเลขโทรศัพท์เป็นภาษาไทย', () => {
        personal.element.editProfileBtn().click()
        personal.element.phoneInput().clear()
        personal.element.phoneInput().type('หมายเลข')
        personal.element.phoneError().should('contain', 'รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง')
    })

    it('กรอกหมายเลขโทรศัพท์เป็นภาษาอังกฤษ', () => {
        personal.element.editProfileBtn().click()
        personal.element.phoneInput().clear()
        personal.element.phoneInput().type('Number')
        personal.element.phoneError().should('contain', 'รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง')
    })

    it('เลือกเพศชาย', () => {
        personal.element.editProfileBtn().click()
        personal.element.maleCheckBox().click()
        personal.element.saveBtn().click()
        personal.element.genderDisplay().should('contain', 'ชาย')
    })

    it('เลือกเพศหญิง', () => {
        personal.element.editProfileBtn().click()
        personal.element.femaleCheckBox().click()
        personal.element.saveBtn().click()
        personal.element.genderDisplay().should('contain', 'หญิง')
    })

    it('กรอกวันเกิดตามรูปแบบ dd/mm/yyyy', () => {
        personal.element.editProfileBtn().click()
        personal.element.birthDateInput().clear()
        personal.element.birthDateInput().type('17/04/2023')
        personal.element.saveBtn().click()
        personal.checkBirthDate('17 เม.ย 2566')
    })

    it('กรอกวันเกิดที่ไม่ใช่รูปแบบ dd/mm/yyyy', () => { //Output ไม่ตรงกับ expect
        personal.element.editProfileBtn().click()
        personal.element.birthDateInput().clear()
        personal.element.birthDateInput().type('04/18/2023')
        personal.element.saveBtn().click()
        personal.checkBirthDate('18 เม.ย 2566')
    })

    it('กรอกวันเกิดด้วยปฎิทิน', () => {
        personal.element.editProfileBtn().click()
        personal.element.calendarBtn().click()
        personal.element.calendarDateSelectBtn().click()
        personal.element.saveBtn().click()
        personal.checkBirthDate('14 พ.ค. 2566')
    })

})

