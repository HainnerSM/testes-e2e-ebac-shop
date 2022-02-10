/// <reference types="cypress" />

import faturamento from '../support/page_objects/nome-funcionliada.page'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.viewport(1280, 1024)
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })

      
    });



    afterEach(() => {
        cy.screenshot()

    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        cy.get('#primary-menu > .menu-item-629 > a').click()
        //funcao para escolha do produto pelo nome,tamanho e cor
        cy.addProduto('Aero Daily Fitness Tee', 'S', 'Brown', 1)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProduto('Ajax Full-Zip Sweatshirt', 'S', 'Blue', 2)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProduto('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 1)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.addProduto('Atlas Fitness Tank', 'M', 'Blue', 2)
        cy.get('.checkout-button').click()

        //funcao para preenchimento do checkout
        faturamento.editarFaturamento('Hainner', 'Molmelstet', 'lightaction', 'Brasil', 'Rua de la', 655,
            'Votorantim', 'São Paulo', 18116050, 32222228, 'hainner@email.com')

        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()
        //validando a compra
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

     });


})