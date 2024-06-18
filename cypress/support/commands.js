import produtosPage from "../support/page_objects/produtos.page";

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-button').click()
});

Cypress.Commands.add('adicionarProdutos', (usuario, senha) => {
    cy.fixture('produtos').then (dados =>{
    produtosPage.visitarUrl()
    produtosPage.buscarproduto("Apollo Running Short")
    produtosPage.addProdutoCarrinho (dados[0].tamanho,dados[0].cor, dados[0].quantidade)
    produtosPage.buscarproduto(dados[1].nomeproduto)
    produtosPage.addProdutoCarrinho (dados[1].tamanho,dados[1].cor, dados[1].quantidade)
    produtosPage.buscarproduto(dados[2].nomeproduto)
    produtosPage.addProdutoCarrinho (dados[2].tamanho,dados[2].cor, dados[2].quantidade)
    produtosPage.buscarproduto(dados[3].nomeproduto)
    produtosPage.addProdutoCarrinho (dados[3].tamanho,dados[3].cor, dados[3].quantidade)
    });
});
