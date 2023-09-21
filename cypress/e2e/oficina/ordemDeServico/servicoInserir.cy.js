import CONSTANTES from '../../../support/locators'

describe('Oficina > Ordem de serviço > Inserir serviço', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Oficina > Ordem de serviço > Inserir serviço', () =>
  {
    // // cy.valorVariavelArmazenar(19, 'tipoOS');
    // //cy.valorVariavelArmazenar(1, 'classificacaoid');
    // cy.valorVariavelArmazenar(804, 'contaid');
    // //cy.valorVariavelArmazenar(0, 'enderecoid');
    // cy.valorVariavelArmazenar(5, 'vendedorid');
    // cy.valorVariavelArmazenar(1, 'veiculoid');
    // cy.valorVariavelArmazenar(18, 'mecanicoid');
    cy.log('Abrindo OS...');
    cy.ordemServicoAbrir();
    cy.log('OS aberta...');
    cy.ordemDeServicoSituacaoStatusVerificar('Aberto', 'Aberto') 

    cy.log('Inserindo informações...');
    cy.informacoesVeiculoInserir();
    cy.log('Informações inseridas...');

    cy.log('Inserindo serviço..');
    cy.servicoInserir();
    cy.log('Serviço inserido..');
    
  })

  
})