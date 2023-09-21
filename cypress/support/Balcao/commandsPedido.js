import CONSTANTES from '../locators'

import CAMPOS from './locatorsPedido'

//#region Balcão

Cypress.Commands.add('balcaoPedidoAbrir', (contaid, enderecoid, vendedorid, politicaprazoid) =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.intercept('POST', '**erpsolution.balcao.varpedidowizard**').as('chamadapedidoPost');

    cy.intercept('GET', '**erpsolution.balcao.varpedidowizard**').as('chamadapedidoGet');

    cy.intercept('POST', '**erpsolution.balcao.varpedidoconsultar**').as('consultapedidoPost');

    cy.intercept('GET', '**erpsolution.balcao.varpedidowizard**').as('consultapedidoGet');

    cy.wait(1000);

    cy.get(CAMPOS.CONSULTA.BOTAO_INSERIR).click();

    cy.wait('@consultapedidoPost');

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

    //cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.TABDESC_ID).click();

    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.BOTAO_SEGUINTE).should('be.visible').click();

    cy.valorArmazenar(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PEDIDO_ID, 'pedidoid');

})

Cypress.Commands.add('balcaoPedidoAbrirComBloqConta', (contaid, enderecoid, vendedorid, politicaprazoid) =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    //cy.intercept('POST', '**erpsolution.balcao.varpedidowizard**').as('chamadapedidoPost');

    //cy.intercept('GET', '**erpsolution.balcao.varpedidowizard**').as('chamadapedidoGet');

    cy.intercept('POST', '**erpsolution.balcao.varpedidoconsultar**').as('consultapedidoPost');

    cy.intercept('GET', '**erpsolution.balcao.varpedidowizard**').as('consultapedidoGet');

    cy.wait(1000);

    cy.get('#BTNBTNINSERT').click();

    cy.wait('@consultapedidoPost');

    cy.aguardarExistir('#Title_W0021DVPANEL_UNNAMEDTABLE1Container');

    cy.aguardarExistir('#W0021W0020VAR20CLIENTEID', 10000);

    cy.get('#W0021W0020VAR20CLIENTEID').click();

    cy.valorArmazenadoAtribuir('#W0021W0020VAR20CLIENTEID', contaid);

    cy.get('#W0021W0020VAR20CLIENTEENDERECOID').click();

    aguardarPopUpConta(0);

    if(enderecoid != '')

    {

        cy.get('#W0021W0020VAR20CLIENTEENDERECOID').click();

        cy.valorArmazenadoAtribuir('#W0021W0020VAR20CLIENTEENDERECOID', enderecoid);

    }

   

    cy.get('#W0021W0020VAR20VENDEDORID').click();

    cy.valorArmazenadoAtribuir('#W0021W0020VAR20VENDEDORID', vendedorid);

    if(politicaprazoid != '')

    {

        cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.POLITICAPRAZO_ID).click();

        cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.POLITICAPRAZO_ID, politicaprazoid);

    }

    cy.wait(2000);

    cy.get('#W0021W0020BTNTRN_ENTER').click();

    cy.wait(2000);

    cy.get('#W0021W0020W0341BTNENTER').click(); //OK popup do bloqueio

    cy.wait(2000);      

    cy.valorArmazenar('#VARPEDIDOOBJ_VAR20PEDIDOID', 'pedidoid');

    cy.get('#BTNFECHAR').click();

})

//Função recursiva para aguardar a PopUp de contas.

//Caso encontre, fecha e cai fora, caso não encontre repete a chamada por no máximo 1000 ms.

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

Cypress.Commands.add('balcaoPedidoItemInserir', (produtoid) =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PEDIDO_ID, 'pedidoid');

    cy.wait(1000);

    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PESQUISAR_PEDIDO).click();

    cy.wait(1000);

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO, produtoid);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_PRODUTO).click();

    cy.get('#W0021W0012GridContainerRow_0001 > [data-colindex="0"]').click(); // Salvar inserção de item

    cy.wait('@chamadapedidoPost');

    //cy.wait(5000);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR, 10000);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).rightclick();

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).click();

    //cy.aguardarInvisivel(CAMPOS.GERACAO.WIZARD_2_ITENS.TABLE_PRINCIPAL, 10000);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.wait(2000);

})

Cypress.Commands.add('balcaoPedidoItemInserirBloqueioEstoqueNegativo', (produtoid) =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PEDIDO_ID, 'pedidoid');
    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PESQUISAR_PEDIDO).click();

    cy.wait(1000);

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO, produtoid);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_PRODUTO).click();

    cy.wait(1000);
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.ADICIONAR_PROD);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.ADICIONAR_PROD).click();

    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.MOTIVO_ALOCACAO).click();
    cy.valorAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.MOTIVO_ALOCACAO, 'OK');
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.LIBERAR_ALOCACAO);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.LIBERAR_ALOCACAO).select('Sim').should('have.value', 'Sim');
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_CONFIRMAR).click();
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.PRECO_UNITARIO);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).click();
    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.POPUP_BLOQUEIO);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_OK).click();

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO); 
    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);
    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PEDIDO_ID, 'pedidoid');   
    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PESQUISAR_PEDIDO).click();
    cy.wait(1000);
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.LUPA_PEDIDO).click();
    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.ABA_TOTAIS).click();

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.STATUS_BLOQUEIO).should('have.text','Bloqueado');

})

Cypress.Commands.add('balcaoPedidoItemInserirBloqueioMargem', (produtoid,desconto) =>

{
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PEDIDO_ID, 'pedidoid');

    cy.wait(1000);

    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PESQUISAR_PEDIDO).click();

    cy.wait(1000);

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO, produtoid);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_PRODUTO).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.ADICIONAR_PROD);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.ADICIONAR_PROD);

    cy.wait(2000);

    cy.get('#W0021W0012GridContainerRow_0001 > [data-colindex="0"]').click(); // Salvar inserção de item

    cy.wait('@chamadapedidoPost');
 
    cy.get('#W0021W0012W0453VAR21DESCONTOPERC').click();
    cy.get('#W0021W0012W0453TABLETOTALIZACAO > :nth-child(1)').click();
    cy.get('#W0021W0012W0453VAR21DESCONTOPERC').clear();
    //cy.get('#W0021W0012W0453VAR21DESCONTOPERC').type(30.0000);
    cy.valorAtribuir('#W0021W0012W0453VAR21DESCONTOPERC', '30,0000');
    //cy.get('#W0021W0012W0453VAR21DESCONTOPERC').select(desconto).should('have.value', 30);
    cy.get('#W0021W0012W0453BTNTRN_ENTER').click();
    cy.get('#W0021W0012BTNWIZARDSEGUINTE').click();
    cy.get('#W0021W0012W0453BTNENTER').click();
  
})

Cypress.Commands.add('balcaoPedidoItemInserirVendaPerdida', (produtoid) =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PEDIDO_ID, 'pedidoid');

    cy.wait(1000);

    cy.get(CAMPOS.GERACAO.WIZARD_1_ABERTURA.PESQUISAR_PEDIDO).click();

    cy.wait(1000);

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO, produtoid);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_PRODUTO).click();

    cy.get('#W0021W0012GridContainerRow_0001 > [data-colindex="0"]').click(); // Salvar inserção de item

    cy.wait('@chamadapedidoPost');

    //cy.wait(5000);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR, 10000);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).rightclick();

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_SALVAR).click();

    //cy.aguardarInvisivel(CAMPOS.GERACAO.WIZARD_2_ITENS.TABLE_PRINCIPAL, 10000);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.wait(2000);

    //cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.VENDA_PERDIDA).click();

    cy.get('#W0021W0012BTNPERDER').click();
    cy.get('#W0021W0012W0453vSELECTED_0001').check();
    cy.valorAtribuir('#W0021W0012W0453vFVE07CANCELAMENTOCODIGOID', '8');
    cy.get('#W0021W0012W0453vOBSERVACAO').click();
    cy.get('#W0021W0012W0453BTNENTER').click();

})


Cypress.Commands.add('balcaoPedidoCarrinhoFechar', () =>

{

    cy.interceptar('GET', '/TestesFuncionais/static/fmxMenu/js/script.js**', 'aguardarJSGET');

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    //cy.get('#vVAR20PEDIDOID')

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_2_ITENS.PEDIDO_ID, 'pedidoid');

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.PESQUISAR_PEDIDO).click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.COD_PRODUTO);

    cy.wait('@chamadapedidoGet');

    cy.wait('@aguardarJSGET');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_FECHAR_CARRINHO, 10000);

    cy.wait(1000);

    //cy.get('#W0021W0012BTNWIZARDSEGUINTE').rightclick();

    //cy.get('#W0021W0012BTNWIZARDSEGUINTE').click();

    cy.get(CAMPOS.GERACAO.WIZARD_2_ITENS.BOTAO_FECHAR_CARRINHO).click();

    //cy.wait('@chamadapedidoPost');

    cy.wait(1000);

})

Cypress.Commands.add('balcaoWizardOutros', () =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_3_OUTROS.PEDIDO_ID, 'pedidoid');

    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.PESQUISAR).click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR_TOTAIS); // aguarda ícone editar na aba Totais

    cy.wait(1000);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.BOTAO_SEGUINTE, 1000); //aguarda botão Seguinte

    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.BOTAO_SEGUINTE).click();

})

Cypress.Commands.add('balcaoWizardOutrosAlteraPoliticaPrazo', () =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_3_OUTROS.PEDIDO_ID, 'pedidoid');

    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.PESQUISAR).click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_3_OUTROS.EDITAR_TOTAIS); // aguarda ícone editar na aba Totais

    cy.wait(1000);

    cy.get('#Tab_W0021GXUITABSPANEL_TABSPEDIDOContainerpanel3').click();
    cy.get('#W0021EDITARPAGAMENTO').click();

    cy.valorAtribuir('#W0021W0061vVAR20POLPRAZOID', '2');

    cy.get('#W0021W0061BTNENTER').click();

    cy.wait(1000);

    cy.get('#W0021BTNWIZARDNEXT').click();
    //cy.get('#W0021BTNGERARREQUISICAO').click();
    //cy.get('#W0021W0015BTNEMITIRNF').click();


})


Cypress.Commands.add('balcaoWizardBloqueios', () =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]'); // aguardar grid

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.PEDIDO_ID, 'pedidoid');

    cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.EDITAR).click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    //cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.EDITAR_TOTAIS);

    //cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.EDITAR_TOTAIS).click();

    //cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.EDITAR_TOTAIS); // aguarda ícone editar na aba Totais

    //cy.wait(1000);

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_SEGUINTE, 1000); //aguarda botão Seguinte

    cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_SEGUINTE).click();

    //cy.get('W0021BTNWIZARDNEXT').click();
    //cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTÃO_ANTERIOR); //aguarda botão anterior

    //cy.wait(1000);

    //cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_SEGUINTE);

    //cy.wait(1000);

    //cy.get(CAMPOS.GERACAO.WIZARD_4_BLOQUEIOS.BOTAO_SEGUINTE).click();

})

Cypress.Commands.add('balcaoWizardRequisicao', () =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]');

    cy.valorArmazenadoAtribuir(CAMPOS.GERACAO.WIZARD_5_REQUISICAO.PEDIDO_ID, 'pedidoid');

    cy.get(CAMPOS.GERACAO.WIZARD_5_REQUISICAO.PESQUISAR).click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_5_REQUISICAO.EDITAR);

    cy.get(CAMPOS.GERACAO.WIZARD_5_REQUISICAO.EDITAR).click();

    cy.aguardarExistir(CAMPOS.GERACAO.WIZARD_5_REQUISICAO.GERAR_REQUISICAO);

    cy.wait(2000);

    cy.get(CAMPOS.GERACAO.WIZARD_5_REQUISICAO.GERAR_REQUISICAO).click();

})

Cypress.Commands.add('balcaoPedidoSituacaoStatusVerificar', (situacao, status) =>

{

    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

    cy.aguardarExistir('thead > tr > [data-colindex="0"]', 10000);

    cy.get(CAMPOS.CONSULTA.LIMPAR_FILTRO).click();

    //cy.get('#vVAR20PEDIDOID')

    cy.valorArmazenadoAtribuir('#vVAR20PEDIDOID', 'pedidoid');

    cy.get('#IMGPESQUISA').click();

    cy.aguardarExistir('#GridContainerRow_0001 > [data-colindex="0"]');

    cy.aguardarExistir('#vEDITAR_0001');

    cy.get('#span_VAR20SITUACAO_0001').should('have.text', situacao);

    cy.get('#span_VAR20STATUS_0001').should('have.text', status);

})

//#enimport CONSTANTES from '../locators'

