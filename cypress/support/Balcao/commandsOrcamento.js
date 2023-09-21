import CONSTANTES from '../locators'


Cypress.Commands.add('balcaoOrcamentoAbrir', (contaid, enderecoid, vendedorid) =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORCAMENTO);
    
    cy.intercept('POST', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoPost');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoGet');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoGet');
    cy.intercept('POST', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoPost');
    
    cy.wait(1000);
    cy.get('#BTNBTNINSERT').click();

    cy.wait(1000);
    cy.aguardarExistir('#W0024W0012vVAR10CLISPECTID', 5000);
    cy.valorAtribuir('#W0024W0012vVAR10CLISPECTID', contaid);

    cy.get('#W0024W0012vVAR10CLIENTEENDERECOID').click();
    
    //aguardarPopUpConta(5000);

    if(enderecoid != '') //verificar cod
    {
        cy.wait(1000);
        cy.get('#W0024W0012vVAR10CLIENTEENDERECOID').click();
        cy.valorAtribuir('#W0024W0012vVAR10CLIENTEENDERECOID', enderecoid);
    }
    cy.wait(1000);
    cy.get('#gxp0_cls').click();

    cy.valorAtribuir('#W0024W0012vVAR10VENDEDORID', vendedorid);
//  cy.get('#W0024W0012BTNBTNINSERT').click();
//  cy.get('#W0024W0012W0483BTNCANCELAR').click();

})

Cypress.Commands.add('balcaoOrcamentoInserirPoliticaPrazoEPreco', (pprazo, ppreco) =>
{
    cy.intercept('POST', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoPost');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoGet');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoGet');
    cy.intercept('POST', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoPost');
    
    cy.aguardarExistir('#W0024W0012vVAR10POLPRAZOID', 1000);
    cy.valorAtribuir('#W0024W0012vVAR10POLPRAZOID', pprazo);
    cy.valorAtribuir('#W0024W0012vVAR10POLPRECOID', ppreco);

})

Cypress.Commands.add('balcaoOrcamentoInserirItem', (coditem, valoritem, bloqueio) =>
{
    cy.intercept('POST', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoPost');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoGet');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoGet');
    cy.intercept('POST', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoPost');
    
    cy.aguardarVisivel('#W0024W0012vE18CODPRO', 2000);
    cy.valorAtribuir('#W0024W0012vE18CODPRO', coditem);
    cy.get('#W0024W0012ENTER').click();
    cy.get('#W0024W0012vADICIONAR_0001').click();

    if (valoritem != '') {
        cy.aguardarVisivel('#W0024W0012W0483VAR11PRECOUNITARIO', 1000);
        cy.valorAtribuir('#W0024W0012W0483VAR11PRECOUNITARIO', valoritem);
    }

    if (bloqueio == '') {
        cy.get('#W0024W0012W0483BTNTRN_ENTER').click();
    }

})

Cypress.Commands.add('balcaoOrcamentoInserirItemReferencia', (codref, valoritem) =>
{
    cy.intercept('POST', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoPost');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentoconsultar**').as('chamaOrcamentoGet');
    cy.intercept('GET', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoGet');
    cy.intercept('POST', '**erpsolution.balcao.varorcamentowizard**').as('consultaOrcamentoPost');
    
    cy.aguardarVisivel('#W0024W0012vE18REFERENCIA', 2000);
    cy.valorAtribuir('#W0024W0012vE18REFERENCIA', codref);
    cy.get('#W0024W0012ENTER').click();
    cy.get('#W0024W0012vADICIONAR_0001').click();

    if (valoritem != '') {
        cy.aguardarVisivel('#W0024W0012W0483VAR11PRECOUNITARIO', 1000);
        cy.valorAtribuir('#W0024W0012W0483VAR11PRECOUNITARIO', valoritem);
    }

    cy.get('#W0024W0012W0483BTNTRN_ENTER').click();

})

Cypress.Commands.add('balcaoOrcamentoFinalizar', () =>
{
    cy.wait(1500);
    cy.get('#W0024W0012BTNWIZARDFINALIZAR').click();
    cy.wait(1500);
    cy.valorArmazenar('#W0024W0015VAR10ORCAMENTOID', 'orcamentoid');
})

Cypress.Commands.add('balcaoOrcamentoSituacaoStatusVerificar', (situacao, status) =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORCAMENTO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);
    cy.get('#CLEANFILTERS').click();

    cy.valorArmazenadoAtribuir('#vVAR10ORCAMENTOID', 'orcamentoid');
    cy.get('#IMGPESQUISA').click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="3"]');
    cy.get('#span_VAR10SITUACAO_0001').should('have.text', situacao);
    cy.get('#span_VAR10STATUS_0001').should('have.text', status);

})

function aguardarPopUpConta(contador)
{
    if (contador <= 500)
    {
        cy.wait(contador);
        cy.get('body').then(($body) =>
        {
            if ($body.find('#gxp0_cls').length)
            {
                cy.wait(1000);
                cy.get('#gxp0_cls').click();
                return;
            }
            else
            {
                contador += 100;
                aguardarPopUpConta(contador);
            }
            
        });
    }
    return;
}