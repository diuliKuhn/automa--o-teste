import CONSTANTES from '../../../support/locators';

describe('Balcão > Ordem de compra > Wizard Outros Sem Alteração', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Ordem de compra > Wizard Outros Sem Alteração', () =>
  {
    cy.valorVariavelArmazenar(804, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.ordemCompraAbrir('contaid', '', 'vendedorid','');
    //cy.ordemDeCompraSituacaoStatusVerificar('Aberto', 'Aberto');

    cy.log('Alocando item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    cy.ordemCompraItemAlocar('produtoid');
    cy.log('Item alocado...');
    //cy.ordemDeCompraSituacaoStatusVerificar('Aberto', 'Aberto');

    cy.log('Fechando carrinho...');
    cy.ordemCompraCarrinhoFechar();
    cy.log('Carrinho fechado...');

    cy.log('Conferindo informações...');
    cy.ordemCompraWizardOutros();
    cy.log('Informações OK...');

  })
})