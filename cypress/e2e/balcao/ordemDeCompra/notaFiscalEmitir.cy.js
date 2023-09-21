import CONSTANTES from '../../../support/locators';

describe('Balcão > Ordem de compra > Emitir NF', () => {

  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######

  it('Balcão > Ordem de compra > Emitir NF', () =>
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

    cy.log('Conferindo bloqueios...');
    cy.ordemCompraWizardBloqueiosSemBloqueios();
    cy.log('Sem bloqueios...');

    cy.log('Gerando fatura...');
    cy.ordemCompraFaturaGerar();
    cy.log('Fatura gerada...');

    cy.log('Emitindo Nota Fiscal...');
    cy.ordemCompraNotaEmitir('ordemCompraid');
    cy.log('Nota Fiscal Emitida');

    //cy.ordemDeCompraSituacaoStatusVerificar('Fechado', 'Faturado');

  })
})