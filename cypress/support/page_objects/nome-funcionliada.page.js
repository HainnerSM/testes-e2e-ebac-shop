class faturamento {

    editarFaturamento(nome, sobrenome,nomeEmpresa, pais, endereco, numero, cidade, estado, CEP, telefone, email){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(nomeEmpresa)
        cy.get('#select2-billing_country-container').click().type(pais + '{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(CEP)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)






    }

}

export default new faturamento()