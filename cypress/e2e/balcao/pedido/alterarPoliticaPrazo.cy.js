import CONSTANTES from '../../../support/locators';

describe('Balcão > Pedido > Alteração Política de Prazo', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Pedido > Abertura com alteração de Política de prazo', () =>
  {
    cy.valorVariavelArmazenar(404, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', '');
    cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Aberto');

    cy.log('Inserindo item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    cy.balcaoPedidoItemInserir('produtoid');
    cy.log('Item inserido...');

    cy.log('Fechando carrinho...');
    cy.balcaoPedidoCarrinhoFechar();
    cy.log('Carrinho fechado...');

    cy.log('Conferindo informações...');
    cy.balcaoWizardOutrosAlteraPoliticaPrazo();
    cy.log('Informações OK...');

  })


})