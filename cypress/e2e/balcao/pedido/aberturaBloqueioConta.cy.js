import CAMPOS from '../../../support/Balcao/locatorsPedido';
import CONSTANTES from '../../../support/locators';

describe('Balcão > Pedido > Abertura com Bloqueio de Conta', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Pedido > Abertura com Bloqueio de Conta', () =>
  {
    cy.trocaEmpresaFilial(1, 1);
    cy.valorVariavelArmazenar(807, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.valorVariavelArmazenar(1, 'politicaprazoid');
    cy.balcaoPedidoAbrirComBloqConta('contaid', '', 'vendedorid', 'politicaprazoid');
    //cy.trocaFilial(1, 'filial');
    cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');
  })

  it('Balcao > Pedido > Abertura com Bloqueio de Limite Individual > Sempre Bloquear',() =>
  {
    cy.trocaEmpresaFilial(1, 2);
    cy.valorVariavelArmazenar(405, 'contaid');  
    cy.valorVariavelArmazenar(33,'vendedorid');
    cy.valorVariavelArmazenar(2, 'politicaprazoid');
    cy.balcaoPedidoAbrirComBloqConta('contaid', '', 'vendedorid', 'politicaprazoid');
    //cy.trocaFilial(2, 'filial');
    cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');

  })

  it('Balcao > Pedido > Abertura com Bloqueio de Limite Individual > Saldo Devedor', () =>
  {
  cy.trocaEmpresaFilial(1, 3);
  cy.valorVariavelArmazenar(678, 'contaid');  
  cy.valorVariavelArmazenar(23,'vendedorid');
  cy.valorVariavelArmazenar(2, 'politicaprazoid');
  cy.balcaoPedidoAbrirComBloqConta('contaid', '', 'vendedorid', 'politicaprazoid');
  //cy.trocaFilial(3, 'filial');
  cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');
})

it('Balcao > Pedido > Abertura com Bloqueio de Conta sem Movimento', () =>
{
  cy.trocaEmpresaFilial(1, 1);
  cy.valorVariavelArmazenar(727, 'contaid');  
  cy.valorVariavelArmazenar(23,'vendedorid');
  cy.balcaoPedidoAbrirComBloqConta('contaid', '', 'vendedorid', '');
  cy.balcaoPedidoSituacaoStatusVerificar('Aberto', 'Bloqueado');
})

})
