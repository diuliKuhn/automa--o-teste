import CONSTANTES from '../../../support/locators';

describe('Balcão > Ordem de compra > Alocação de item', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Ordem de compra > Alocação de item', () =>
  {
    cy.valorVariavelArmazenar(804, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.ordemCompraAbrir('contaid', '', 'vendedorid','');
    cy.ordemDeCompraSituacaoStatusVerificar('Aberto', 'Aberto');

    cy.log('Alocando item...');
    cy.valorVariavelArmazenar('ITEM', 'produtoid');
    cy.ordemCompraItemAlocar('produtoid');
    cy.log('Item alocado...');
    cy.ordemDeCompraSituacaoStatusVerificar('Aberto', 'Aberto');

  })
})