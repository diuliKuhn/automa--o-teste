import CONSTANTES from '../../../support/locators';

describe('Balcão > Ordem de compra > Abertura sem bloqueio', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Ordem de compra > Abertura sem bloqueio', () =>
  {
    cy.valorVariavelArmazenar(804, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.ordemCompraAbrir('contaid', '', 'vendedorid','');
    cy.ordemDeCompraSituacaoStatusVerificar('Aberto', 'Aberto');
  })
})