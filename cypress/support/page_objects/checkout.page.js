class checkoutPage {

    checkoutEntrarNaConta (usuario, senha){
        cy.get('#place_order').click()
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-button').click()
    }

}

export default new checkoutPage ()