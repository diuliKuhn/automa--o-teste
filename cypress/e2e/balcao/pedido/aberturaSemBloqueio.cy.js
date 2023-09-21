import CONSTANTES from '../../../support/locators';

describe('Balcão > Pedido > Abertura com sucesso', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Pedido > Abertura sem bloqueio', () =>
  {
    cy.valorVariavelArmazenar(805, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.balcaoPedidoAbrir('contaid', '', 'vendedorid', '');
    cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Aberto');
  })

  //###### Final do bloco de testes - alterar aqui ######

})