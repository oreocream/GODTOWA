class cart {
    element = {
        cartIcon : () => cy.get('.col-auto > .cart-nav'),
        addAmount : () => cy.get('.boxQty > .input-group > .input-group-append > .btn'),
        minusAmount : () => cy.get('.input-group-prepend > .btn'),
        binIcon : () => cy.get('.col-md-3 > .text-right'),
        deleteAllIcon : () => cy.get('#aRemoveCartAll'),
        OkBtn : () => cy.xpath('//*[@class="modal-footer"]//*[@data-bb-handler="confirm"]'),
        cancelBtn : () => cy.xpath('//*[@class="modal-footer"]//*[@data-bb-handler="cancel"]'),
    }

    addToCartFromPageAllProduct() {
        cy.get(':nth-child(2) > .thumbnail > .row > .colContent > .divContent > .productCaption > .productAction > .productAddToCart > .btnProductCart').click()
    }

    addToCartFromPageProduct() {
        cy.get(':nth-child(2) > .thumbnail > .row > .colContent > .divContent > .productCaption > .productName > a > .h3-hover').click()
        cy.get('#increaseProduct').click()
        cy.get('.my-col-12 > .btn').click()
    }

    checkProductName(name) {
        cy.get('.product-name > a').should('contain', name)
    }

    checkPricePerPiece(Price) {
        cy.get('.offset-4 > .divShowItemPrice > .txtItemPrice').should('contain', Price)
    }

    checkAllPricePerProduct(Price) {
        cy.get('.col-offset-4 > .divShowCartPrice > .txtCartPrice').should('contain', Price)
    }

    shoulShowWhenNotHaveProductInCart() {
        cy.contains('ไม่มีสินค้าในตะกร้าของคุณ')
        cy.get('#buttonReturnShopping').should('exist')
    }
}

module.exports = new cart();