/// <reference types="cypress" />
import checkoutPage from '../support/page_objects/checkout.page';
import produtosPage from "../support/page_objects/produtos.page";



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    //buscar produto e adicionar no carrinho, repetir 4x
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
    })
    produtosPage.irParaCheckout()
    cy.get('.showlogin').click()
    cy.fixture('perfil').then (perfil => {
        checkoutPage.checkoutEntrarNaConta(perfil.usuario, perfil.senha)
    })

  });


})