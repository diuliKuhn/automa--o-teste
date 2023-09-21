import CONSTANTES from '../../../support/locators'

describe('Oficina > Ordem de serviço > Abertura OS com bloqueio', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Oficina > Ordem de serviço > Abertura com bloqueio de conta', () =>
  {
    // cy.valorVariavelArmazenar(19, 'tipoOS');
    //cy.valorVariavelArmazenar(1, 'classificacaoid');
    cy.valorVariavelArmazenar(402, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.valorVariavelArmazenar(1, 'veiculoid');
    cy.valorVariavelArmazenar(18, 'mecanicoid');
    cy.ordemServicoAbrirComBloqueio('contaid', 'vendedorid','veiculoid', 'mecanicoid');
    
    //cy.ordemDeServicoSituacaoStatusVerificar('Aberto', 'Bloqueado');
  })
})