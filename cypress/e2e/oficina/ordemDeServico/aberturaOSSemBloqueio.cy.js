import CONSTANTES from '../../../support/locators'

describe('Oficina > Ordem de serviço > Abertura OS sem bloqueio', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Oficina > Ordem de serviço > Abertura sem bloqueio', () =>
  {
    // cy.valorVariavelArmazenar(19, 'tipoOS');
    //cy.valorVariavelArmazenar(1, 'classificacaoid');
    cy.valorVariavelArmazenar(804, 'contaid');
    //cy.valorVariavelArmazenar(0, 'enderecoid');
    cy.valorVariavelArmazenar(5, 'vendedorid');
    cy.valorVariavelArmazenar(1, 'veiculoid');
    cy.valorVariavelArmazenar(18, 'mecanicoid');
    cy.ordemServicoAbrir('contaid', 'vendedorid','veiculoid', 'mecanicoid');
    
  })
})