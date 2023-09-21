import CONSTANTES from '../locators'
import CAMPOS from './locatorsOrdemdeCompra'

Cypress.Commands.add('ordemCompraAbrir', (contaid, enderecoid, vendedorid, politicaprazoid) =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);
    
    cy.intercept('POST', '**erpsolution.balcao.varordemcomprawizard**').as('chamadaordemcompraPost');
    cy.intercept('GET', '**erpsolution.balcao.varordemcomprawizard**').as('chamadaordemcompraGet');
    cy.intercept('POST', '**erpsolution.balcao.varordemcompraconsultar**').as('consultaordemcompraPost');
    cy.intercept('GET', '**erpsolution.balcao.varordemcomprawizard**').as('consultaordemcompraGet');
    
    cy.wait(1000);
    cy.get(CAMPOS.CONSULTA.BOTAO_INSERIR).click();
    
    cy.wait('@consultaordemcompraPost');
    
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PAINEL_GERAL);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.CLIENTE_ID, 10000);
    
    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.CLIENTE_ID).click();
    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.CLIENTE_ID, contaid);
    

    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.ENDERECO_ID).click();
    aguardarPopUpConta(0);
    
    if(enderecoid != '')
    {
        cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.ENDERECO_ID).click();
        cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.ENDERECO_ID, enderecoid);
    }

    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.VENDEDOR_ID).click();
    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.VENDEDOR_ID, vendedorid);

    if(politicaprazoid != '')
    {
        cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.POLITICAPRAZO_ID).click();
        cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.POLITICAPRAZO_ID, politicaprazoid);

    }
    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.BOTAO_SEGUINTE).should('be.visible').click();

    cy.valorArmazenar(CAMPOS.GERACAO.WIZARD_1_ABERTURA.ORDEM_COMPRA_ID, 'ordemCompraid');
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

Cypress.Commands.add('ordemCompraItemAlocar', (produtoid) =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.ORDEM_COMPRA_ID, 'ordemCompraid');
    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_ORDEM_COMPRA).click();

    cy.wait(2000);

    //cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO, produtoid);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_PRODUTO).click();

    //cy.get('#W0021W0012GridContainerRow_0001 > [data-colindex="0"]').click(); // Salvar inserção de item
        
    //cy.wait('@chamadapedidoPost');

    cy.wait(1000);
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.ADICIONAR_PROD);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.ADICIONAR_PROD).click();

    //cy.wait(5000);
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR, 10000);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).rightclick();
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).click();
    cy.wait(1000);
    //cy.aguardarInvisivel(CAMPOS.GERACAO.WIZARD_2_ITENS.TABLE_PRINCIPAL, 10000);
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO, 1000);
    cy.wait(2000);

})

Cypress.Commands.add('ordemCompraCarrinhoFechar', () =>
{
    cy.interceptar('GET', '/TestesFuncionais/static/fmxMenu/js/script.js**', 'aguardarJSGET');

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.ORDEM_COMPRA_ID, 'ordemCompraid');

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_ORDEM_COMPRA).click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.wait('@chamadaordemcompraGet');
    cy.wait('@aguardarJSGET');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_FECHAR_CARRINHO, 10000);
    cy.wait(1000);
    //cy.get('#W0021W0012BTNWIZARDSEGUINTE').rightclick();
    //cy.get('#W0021W0012BTNWIZARDSEGUINTE').click();
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_FECHAR_CARRINHO).click();
    //cy.wait('@chamadapedidoPost');
    cy.wait(2000);
})

Cypress.Commands.add('ordemCompraWizardOutros', () =>
{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_3_OUTROS.ORDEM_COMPRA_ID, 'ordemCompraid');
    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.PESQUISAR_ORDEM_COMPRA).click();
    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR);
    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR_TOTAIS); // aguarda ícone editar na aba Totais
    cy.wait(1000);
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.BOTAO_SEGUINTE, 1000); //aguarda botão Seguinte
    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.BOTAO_SEGUINTE).click();

})
Cypress.Commands.add('ordemCompraWizardBloqueiosSemBloqueios', () =>
{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]'); // aguardar grid

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.ORDEM_COMPRA_ID, 'ordemCompraid');
    cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.PESQUISAR_ORDEM_COMPRA).click();
    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.EDITAR);
    cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_ANTERIOR); //aguarda botão anterior
    cy.wait(1000);
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_SEGUINTE);
    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_SEGUINTE).click();

    //na OC, passa direto do wizard de bloqueios para a confirmação, quando não tem controle de requisição
})

Cypress.Commands.add('ordemCompraFaturaGerar', () =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]');

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_6_CONFIRMACAO.ORDEM_COMPRA_ID, 'ordemCompraid');
    cy.get(CAMPOS.GERACAO.WIZARD_6_CONFIRMACAO.PESQUISAR_ORDEM_COMPRA).click();
    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_6_CONFIRMACAO.EDITAR);
    cy.get(CAMPOS.GERACAO.WIZARD_6_CONFIRMACAO.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_6_CONFIRMACAO.GERAR_FATURA);
    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_6_CONFIRMACAO.GERAR_FATURA).click();
})

Cypress.Commands.add('ordemCompraNotaEmitir', () =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_FATURA);
    cy.aguardarExistir(CAMPOS.GERACAO.FATURA.FATURA_ID);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.FATURA.PEDIDO_ID, 'ordemCompraid');
    cy.get(CAMPOS.GERACAO.FATURA.PESQUISAR_FATURA).click();
    cy.wait(2000);
    cy.aguardarExistir(CAMPOS.GERACAO.FATURA.EDITAR_FATURA);
    cy.get(CAMPOS.GERACAO.FATURA.EDITAR_FATURA).click();

    cy.wait(1000);
    cy.aguardarExistir(CAMPOS.GERACAO.FATURA.DATA_HORA);
    cy.wait(1000);
    
    cy.aguardarExistir(CAMPOS.GERACAO.FATURA.BOTAO_EMITIR_NF, 1500);
    cy.get(CAMPOS.GERACAO.FATURA.BOTAO_EMITIR_NF).click();
    //cy.get(CAMPOS.GERACAO.FATURA.BOTAO_EMITIR_NF).click('have.value', 'Emitir NF');
    //cy.get(CAMPOS.GERACAO.FATURA.BOTAO_EMITIR_NF).click();
    
    cy.wait(2000);
    //aguardarPopUpNotaFiscal(0);
    // cy.aguardarExistir(CAMPOS.GERACAO.FATURA.POPUP_NOTAFISCAL);
    // cy.wait(1500);
    // cy.get(CAMPOS.GERACAO.FATURA.BOTAO_OK_POPUP).click();

})

Cypress.Commands.add('ordemDeCompraSituacaoStatusVerificar', (situacao, status) =>
{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORDEM_DE_COMPRA);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.get(CAMPOS.CONSULTA.LIMPAR_FILTRO).click();

    //cy.get('#vVAR20PEDIDOID')
    cy.valorArmazenadoAtribuir(CAMPOS.CONSULTA.CODINT_ORDEM_COMPRA, 'ordemCompraid');

    cy.get('#IMGPESQUISA').click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir('#vEDITAR_0001');

    cy.get('#span_VAR20SITUACAO_0001').should('have.text', situacao);
    cy.get('#span_VAR20STATUS_0001').should('have.text', status);

})