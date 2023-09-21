import CONSTANTES from '../locators'

import CAMPOS from './locatorsOrdemDeServico';

Cypress.Commands.add('ordemServicoAbrir', () =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.OFICINA.CONSULTA_OS);
    
    // // cy.intercept('POST', '**erpsolution.balcao.varordemcomprawizard**').as('chamadaordemcompraPost');
    // // cy.intercept('GET', '**erpsolution.balcao.varordemcomprawizard**').as('chamadaordemcompraGet');
    // cy.intercept('POST', '**erpsolution.oficina.ofipedidoconsultar**').as('consultaOSPost');
    // //cy.intercept('GET', '**erpsolution.balcao.varordemcomprawizard**').as('consultaordemcompraGet');
    
    cy.wait(1000);
    cy.get(CAMPOS.CONSULTA.INSERIR_OS).click();
    
    //cy.wait('consultaOSPost');
    cy.wait(2000);
    cy.get(CAMPOS.ABERTURA.TIPO_OS).select('19 - ATENDIMENTO TOP').should('have.value', '19');
    cy.wait(1500);

    //TRECHO DE CO GRAVADO
    cy.get(CAMPOS.ABERTURA.CLASSIFICACAO).clear(1); //não reconhece o [id$...], precisa do #
    cy.get(CAMPOS.ABERTURA.CLASSIFICACAO).type('1');
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.CLIENTE_ID).clear(); //não reconhece o [id$...]
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.CLIENTE_ID).type('804');
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.ENDERECO_ID).click(); //não reconhece o [id$...]
    //cy.aguardarExistir('#gxp0_gxtitle', 1000);
    aguardarPopUpConta(0);
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.VEICULO).clear(); //não reconhece o [id$...]
    cy.get(CAMPOS.ABERTURA.VEICULO).type('1');
    cy.wait(1000);

    cy.get(CAMPOS.ABERTURA.DATA_PREVISAO).click();
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.DATA_PREVISAO).clear();
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.DATA_PREVISAO).type('31/12/2023');

    cy.get(CAMPOS.ABERTURA.VENDEDOR_ID).clear();
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.VENDEDOR_ID).type('5');
    cy.wait(1000);

   cy.get(CAMPOS.ABERTURA.MECANICO_ID).clear();
   cy.wait(1000);
   cy.get(CAMPOS.ABERTURA.MECANICO_ID).type('18');
   cy.wait(1000);

   cy.get(CAMPOS.ABERTURA.FONE_CONTATO).click();
   cy.wait(1000);

   cy.get(CAMPOS.ABERTURA.BOTAO_SALVAR).click();

   cy.wait(2000);

   //cy.aguardarExistir(CAMPOS.EDICAO_OS.EDITAR_GERAL, 1000);

   cy.valorArmazenar('#W0044vOFI21PEDIDOID', 'ordemServicoid');

   cy.wait(1000);
})

function aguardarPopUpConta(contador)
{
    if (contador <= 500)
    {
        cy.wait(contador);
        cy.get('body').then(($body) =>
        {
            
            if ($body.find('#gxp0_gxtitle').length)
            {
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
    
Cypress.Commands.add('ordemServicoAbrirComBloqueio', () =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.OFICINA.CONSULTA_OS);
    
    // // cy.intercept('POST', '**erpsolution.balcao.varordemcomprawizard**').as('chamadaordemcompraPost');
    // // cy.intercept('GET', '**erpsolution.balcao.varordemcomprawizard**').as('chamadaordemcompraGet');
    // cy.intercept('POST', '**erpsolution.oficina.ofipedidoconsultar**').as('consultaOSPost');
    // //cy.intercept('GET', '**erpsolution.balcao.varordemcomprawizard**').as('consultaordemcompraGet');
    
    cy.wait(1000);
    cy.get(CAMPOS.CONSULTA.INSERIR_OS).click();
    
    //cy.wait('consultaOSPost');
    cy.wait(2000);
    cy.get(CAMPOS.ABERTURA.TIPO_OS).select('19 - ATENDIMENTO TOP').should('have.value', '19');
    cy.wait(1500);

    //TRECHO DE CO GRAVADO
    cy.get(CAMPOS.ABERTURA.CLASSIFICACAO).clear(1); //não reconhece o [id$...], precisa do #
    cy.get(CAMPOS.ABERTURA.CLASSIFICACAO).type('1');
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.CLIENTE_ID).clear(); //não reconhece o [id$...]
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.CLIENTE_ID).type('402');
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.ENDERECO_ID).click(); //não reconhece o [id$...]
    //cy.aguardarExistir('#gxp0_gxtitle', 1000);
    aguardarPopUpConta(0);
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.VEICULO).clear(); //não reconhece o [id$...]
    cy.get(CAMPOS.ABERTURA.VEICULO).type('1');
    cy.wait(1000);

    cy.get(CAMPOS.ABERTURA.DATA_PREVISAO).click();
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.DATA_PREVISAO).clear();
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.DATA_PREVISAO).type('31/12/2023');

    cy.get(CAMPOS.ABERTURA.VENDEDOR_ID).clear();
    cy.wait(1000);
    cy.get(CAMPOS.ABERTURA.VENDEDOR_ID).type('5');
    cy.wait(1000);

   cy.get(CAMPOS.ABERTURA.MECANICO_ID).clear();
   cy.wait(1000);
   cy.get(CAMPOS.ABERTURA.MECANICO_ID).type('18');
   cy.wait(1000);

   cy.get(CAMPOS.ABERTURA.FONE_CONTATO).click();
   cy.wait(1000);

   cy.get(CAMPOS.ABERTURA.BOTAO_SALVAR).click();
   cy.wait(2000);

   cy.aguardarExistir('W0044vOFI21PEDIDOID', 2000) ;
   cy.valorArmazenar('W0044vOFI21PEDIDOID', 'ordemServicoid');

   cy.get(CAMPOS.ABERTURA.BOTÃO_FECHAR).click();

    function aguardarPopUpConta(contador)
{
    if (contador <= 500)
    {
        cy.wait(contador);
        cy.get('body').then(($body) =>
        {
            
            if ($body.find('#gxp0_gxtitle').length)
            {
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

})

Cypress.Commands.add('informacoesVeiculoInserir', () =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.OFICINA.CONSULTA_OS);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);
    
    // cy.valorArmazenadoAtribuir(CAMPOS.CONSULTA.CODINT_OS, ordemServicoid);
    // cy.wait(2000);
    cy.get(CAMPOS.CONSULTA.PESQUISAR_OS).click();
    cy.get(CAMPOS.CONSULTA.PESQUISAR_OS).click();
    cy.wait(2000);

    //cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.CONSULTA.EDITAR_OS);

    cy.get(CAMPOS.CONSULTA.EDITAR_OS).click();

   cy.get(CAMPOS.ABA_VEICULO.ABA_VEICULO).click();
   cy.get(CAMPOS.ABA_VEICULO.EDITAR_VEICULO).click();

   cy.wait(1000);
   cy.get(CAMPOS.ABA_VEICULO.DESCRICAO_PROBLEMA).type('Teste');
   cy.wait(1000);
   cy.get(CAMPOS.ABA_VEICULO.OPINIAO_PROBLEMA).type('Teste');
   cy.wait(1000);
   cy.get(CAMPOS.ABA_VEICULO.SOLUCAO_PROBLEMA).type('Teste');
   cy.wait(1000);
   cy.get(CAMPOS.ABA_VEICULO.SALVAR_VEICULO).click();



    function aguardarPopUpConta(contador)
{
    if (contador <= 500)
    {
        cy.wait(contador);
        cy.get('body').then(($body) =>
        {
            
            if ($body.find('#gxp0_gxtitle').length)
            {
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






}})

Cypress.Commands.add('servicoInserir', () => 
{
    cy.wait(2000);
    cy.get(CAMPOS.ABA_SERVIÇOS.ABA_SERVIÇOS).click();


})

Cypress.Commands.add('ordemDeServicoSituacaoStatusVerificar', (situacao, status) =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.OFICINA.CONSULTA_OS);

    cy.aguardarExistir(CAMPOS.CONSULTA.INSERIR_OS, 1000);
    
    cy.get(CAMPOS.CONSULTA.LIMPAR_FILTROS).click();

    cy.wait(2000);

    cy.get(CAMPOS.CONSULTA.CODINT_OS).click();
    cy.wait(1000);
    cy.valorArmazenadoAtribuir(CAMPOS.CONSULTA.CODINT_OS, 'ordemServicoid');
    cy.wait(1000);

    cy.get(CAMPOS.CONSULTA.PESQUISAR_OS).click();

    //cy.aguardarExistir(CAMPOS.CONSULTA.EDITAR_OS, 1000);
    cy.wait(2000);

    //cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    //cy.aguardarExistir(CAMPOS.CONSULTA.CONSULTAR_OS);

    cy.get('#span_OFI21STATUS_0001').should('have.text', status);
    cy.get('#span_OFI21SITUACAO_0001').should('have.text', situacao);
    

})