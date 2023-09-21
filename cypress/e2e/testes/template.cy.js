import CONSTANTES from '../../support/locators';

describe('Template de testes', () =>
{
  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  //###### Início do bloco de testes - alterar aqui ######
  it('Teste 1 (consulta de orçamentos do balcão)', () =>
  {
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_ORCAMENTO);
  })

  it('Teste 2 (consulta de pedidos do balcão)', () =>
  {
    cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);
    cy.trocaEmpresaFilial(1, 1);
  })
  //###### Final do bloco de testes - alterar aqui ######
})