import CONSTANTES from '../../../support/locators';

describe('Wizard Outros', () => {

    beforeEach(() =>
    {
      cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
    })

    it('Wizard Outros', () =>
  {
    cy.log('Alterando para Empresa 1, Filial 1, configurada para bloquear ao fechar o carrinho...');
    cy.trocaEmpresaFilial(1, 1);
    cy.log('Troca efetuada...');

    cy.log('Abrindo pedido...');
    cy.valorVariavelArmazenar(804, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', '');
    cy.log('Pedido aberto...');
    
    cy.log('Inserindo item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    cy.balcaoPedidoItemInserir('produtoid');
    cy.log('Item inserido...');
    
    cy.log('Fechando carrinho...');
    cy.balcaoPedidoCarrinhoFechar();
    cy.log('Carrinho fechado...');

    cy.log('Conferindo informações...');
    cy.balcaoWizardOutros();
    cy.log('Informações OK...');

    cy.log('Conferindo bloqueios...');
    cy.balcaoWizardBloqueios();
    cy.log('Sem bloqueios...');


  })
})
