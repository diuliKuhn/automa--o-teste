import CONSTANTES from '../../../support/locators';

describe('Abertura de Orçamentos', () => {

  beforeEach(() => {

    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
    cy.trocaEmpresaFilial(1, 1);
  })


  //#Inserção de cliente
  it('Teste 1 (Orçamento > Bloqueio na abertura de orçamento com cliente inativo)', () => { //não apresentou erro
    cy.trocaEmpresaFilial(1, 1);
    cy.balcaoOrcamentoAbrir(689, '', 5);
    cy.balcaoOrcamentoInserirItem('item', '', 1);
    cy.get('.ErrorViewer > :nth-child(2)').should('have.text', '×Bloqueio de conta');
  })

  it('Teste 2 (Orçamento > Bloqueio na abertura de orçamento cliente somente CC e política de prazo Boleto)', () => { //não está gerando o erro
    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(808, '', 5);
    cy.balcaoOrcamentoInserirPoliticaPrazoEPreco(2, 'G');
    cy.get('.ErrorViewer > :nth-child(2)').should('have.text', '×Bloqueio de Conta');
  })

  it('Teste 3 (Orçamento > Bloqueio abertura de orçamento cliente somente AV e política de prazo á prazo)', () => { //não está gerando o erro
    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(584, '', 5);
    cy.balcaoOrcamentoInserirPoliticaPrazoEPreco(1, 'G');
    cy.balcaoOrcamentoInserirItem('item', '', 1);
    cy.get('.ErrorViewer > :nth-child(2)').should('have.text', '×Bloqueio de conta');
  })

  it('Teste 4 (Orçamento > Bloqueio abertura de orçamento prospect inativo)', () => { //não está gerando o erro
    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(1, '', 5);
    cy.balcaoOrcamentoInserirPoliticaPrazoEPreco(1, 'G');
    cy.balcaoOrcamentoInserirItem('item', '', 1);
    cy.get('.ErrorViewer > :nth-child(2)').should('have.text', '×Bloqueio de conta');
  })

  it('Teste 5 (Orçamento > Bloqueio abertura de orçamento cliente/prospect não cadastrado)', () => {
    cy.trocaEmpresaFilial(1, 1);
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORCAMENTO);
    cy.wait(1000);
    cy.get('#BTNBTNINSERT').click();
    cy.wait(1000);
    cy.valorAtribuir('#W0024W0012vVAR10CLISPECTID', '5');
    cy.get('#W0024W0012vVAR10CLIENTEENDERECOID').click();
    cy.get('.gx-warning-message').should('have.text', '×Registro de Prospect/Cliente não encontrado.');
  })

  it('Teste 6 (Orçamento > Bloqueio abertura de orçamento endereço comp inativo)', () => {
    cy.trocaEmpresaFilial(1, 1);
    cy.balcaoOrcamentoAbrir(681, 119, 5);
    cy.get('.alterado').should('have.text', '×Endereço informado não pertence a conta.');
  }) 

  it('Teste 7 (Orçamento > Bloqueio abertura de orçamento endereço comp outro cliente)', () => {
    cy.trocaEmpresaFilial(1, 2);
    cy.balcaoOrcamentoAbrir(681, 1, 5);
    cy.get('.alterado').should('have.text', '×Endereço informado não pertence a conta.');
  })


  //#Alocação de item
  it('Teste 8 (Orçamento > Bloqueio por margem)', () => {
    cy.trocaEmpresaFilial(1, 1);
    cy.balcaoOrcamentoAbrir(690, '', 5);
    cy.balcaoOrcamentoInserirItem('item', 5, '');
    cy.get('#W0024W0012BTNWIZARDFINALIZAR').click();
    cy.get('.CellMarginLeft > [style="font-size: 0px; height: auto;"] > .ErrorViewer > :nth-child(1)').should('have.text', '×Orçamento bloqueado pelo(s) motivo(s):');
    cy.get('.ErrorViewer > :nth-child(2)').should('have.text', '×Margem');
  })

  it('Teste 9 (Orçamento > Bloqueio por item inativo)', () => {
    cy.trocaEmpresaFilial(1, 1);
    cy.balcaoOrcamentoAbrir(690, '', 5);
    cy.balcaoOrcamentoInserirItem('item', 5, '');
    cy.get('#W0024W0012BTNWIZARDFINALIZAR').click();
    cy.get('.CellMarginLeft > [style="font-size: 0px; height: auto;"] > .ErrorViewer > :nth-child(1)').should('have.text', '×Orçamento bloqueado pelo(s) motivo(s):');
    cy.get('.ErrorViewer > :nth-child(2)').should('have.text', '×Margem');
  })

})
