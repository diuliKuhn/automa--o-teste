import CONSTANTES from '../../../support/locators';

describe('Abertura de Orçamentos sem bloqueio', () => {

  beforeEach(() => {

    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');

  })

  //#Alocação de cliente
  it('Teste 1 (Abertura de orçamento com cliente ativo)', () => {

    cy.trocaEmpresaFilial(1, 3);
    cy.balcaoOrcamentoAbrir(403, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 2 (Abertura de orçamento cliente Consumidor)', () => {

    cy.trocaEmpresaFilial(1, 3);
    cy.balcaoOrcamentoAbrir(0, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 3 (Abertura de orçamento cliente somente á vista)', () => {

    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(584, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 4 (Abertura de orçamento cliente somente CC, política de prazo CC)', () => {

    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(808, '', 5);
    cy.balcaoOrcamentoInserirPoliticaPrazoEPreco(3, 'G');
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 5 (Abertura de orçamento com cliente liberado de bloqueios)', () => {

    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(404, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 6 (Abertura de orçamento cliente somente cheque)', () => {

    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(586, '', 5);
    cy.balcaoOrcamentoInserirPoliticaPrazoEPreco(9, 'G');
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 7 (Abertura de orçamento com prospect ativo)', () => {
    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(8, '', 5);
    cy.balcaoOrcamentoInserirPoliticaPrazoEPreco(1, 'G');
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 8 (Abertura de orçamento cliente endereço complementar ativo)', () => {

    cy.trocaEmpresaFilial(1, 3);
    cy.balcaoOrcamentoAbrir(583, 4, 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  //#Alocação de item
  it('Teste 9 (Abertura de orçamento item com margem)', () => {
    cy.trocaEmpresaFilial(1, 1);
    cy.balcaoOrcamentoAbrir(404, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 10 (Abertura de orçamento com item ativo)', () => {
    cy.trocaEmpresaFilial(1, 3);
    cy.balcaoOrcamentoAbrir(404, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })

  it('Teste 11 (Abertura de orçamento item com estoque)', () => {
    cy.trocaEmpresaFilial(1, 1);
    cy.balcaoOrcamentoAbrir(404, '', 5);
    cy.balcaoOrcamentoInserirItem('ITEM', '', '');
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })
  
  it('Teste 12 (Abertura de orçamento com produto pelo cód. referência)', () => {
    cy.trocaEmpresaFilial(1, 3);
    cy.balcaoOrcamentoAbrir(403, '', 5);
    cy.balcaoOrcamentoInserirItemReferencia('56TEST', 50);
    cy.balcaoOrcamentoFinalizar();
    cy.balcaoOrcamentoSituacaoStatusVerificar('Aberto', 'Pronto');
  })


})


