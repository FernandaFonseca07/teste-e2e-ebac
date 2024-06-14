class produtosPage {

    visitarUrl (){
        cy.visit('/produtos')
    }

    buscarproduto(nomeProduto){
        cy.get('[placeholder="Enter your search ..."]').eq(1).type(nomeProduto)
        cy.get('[class="button-search btn btn-sm"]').eq(1).click()      
    }


    addProdutoCarrinho(tamanho, cor, quantidade){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('[data-value="' + cor + '"]').click()
        cy.get('.input-text').click().clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    irParaCheckout(){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('.buttons > .checkout').eq(1).click() 
    }

}

export default new produtosPage()