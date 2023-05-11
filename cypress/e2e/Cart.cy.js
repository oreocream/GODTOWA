import cart from "../pageObject/cart/cart"

describe('Add to Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.godtowathailand.com/alphardvellfireaudio')
    })

    it('เพิ่มสินค้าลงตะกร้าจากหน้าสินค้าทั้งหมด', () => {
        cart.addToCartFromPageAllProduct()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(2000)
        cart.element.cartIcon().click()
        cart.checkProductName('กล้องบันทึกติดรถยนต์ DECAR DVR-V8')
        cart.checkPricePerPiece('฿9,900.00')
        cart.checkAllPricePerProduct('฿9,900.00')
    })

    it('เพิ่มสินค้าลงตะกร้าจากหน้ารายละเอียดสินค้า', () => {
        cart.addToCartFromPageProduct()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(2000)
        cart.element.cartIcon().click()
        cart.checkProductName('กล้องบันทึกติดรถยนต์ DECAR DVR-V8')
        cart.checkPricePerPiece('฿9,900.00')
        cart.checkAllPricePerProduct('฿19,800.00')
    })

    it('ตรวจสอบการเพิ่มสินค้าตามจำนวนที่ต้องการ', () => {
        cart.addToCartFromPageAllProduct()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(2000)
        cart.element.cartIcon().click()
        cart.checkAllPricePerProduct('฿9,900.00')
        cart.element.addAmount().click()
        cart.element.addAmount().click()
        cart.checkAllPricePerProduct('฿29,700.00')
        cart.element.minusAmount().click()
        cart.checkAllPricePerProduct('฿19,800.00')
    })
})

describe('Remove from Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.godtowathailand.com/alphardvellfireaudio')
    })

    it('ลบสินค้ารายการเดียว', () => {
        cart.addToCartFromPageAllProduct()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(2000)
        cart.element.cartIcon().click()
        cart.checkProductName('กล้องบันทึกติดรถยนต์ DECAR DVR-V8')
        cart.checkPricePerPiece('฿9,900.00')
        cart.checkAllPricePerProduct('฿9,900.00')
        cart.element.binIcon().click()
        cart.element.OkBtn().click()
        cart.shoulShowWhenNotHaveProductInCart()
    })

    it('ลบสินค้าแบบลบทั้งหมด', () => {
        cart.addToCartFromPageAllProduct()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(2000)
        cart.element.cartIcon().click()
        cart.checkProductName('กล้องบันทึกติดรถยนต์ DECAR DVR-V8')
        cart.checkPricePerPiece('฿9,900.00')
        cart.checkAllPricePerProduct('฿9,900.00')
        cart.element.deleteAllIcon().click()
        cart.element.OkBtn().click()
        cart.shoulShowWhenNotHaveProductInCart()
    })

    it('ลบสินค้าแต่ไม่ทำการยืนยันการลบ', () => {
        cart.addToCartFromPageAllProduct()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.wait(2000)
        cart.element.cartIcon().click()
        cart.checkProductName('กล้องบันทึกติดรถยนต์ DECAR DVR-V8')
        cart.checkPricePerPiece('฿9,900.00')
        cart.checkAllPricePerProduct('฿9,900.00')
        cart.element.binIcon().click()
        cart.element.cancelBtn().click()
        cart.checkProductName('กล้องบันทึกติดรถยนต์ DECAR DVR-V8')
        cart.checkPricePerPiece('฿9,900.00')
        cart.checkAllPricePerProduct('฿9,900.00')
    })
})

describe('Check Your Cart', () => {

    beforeEach(() => {
        cy.visit('https://www.godtowathailand.com/alphardvellfireaudio')
    })

    it('ตรวจสอบหน้าตะกร้าเมื่อไม่มีสินค้า', () => {
        cart.element.cartIcon().click()
        cart.shoulShowWhenNotHaveProductInCart()
    })
})
