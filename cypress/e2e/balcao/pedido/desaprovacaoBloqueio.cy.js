import CONSTANTES from '../../../support/locators';

describe
('Desaprovação Bloqueio Limite de Crédito', () =>
{
  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })
{
  it('Desaprovação Bloqueio Limite de Crédito', function ()
{
  cy.visit(CONSTANTES.SISTEMA.URL.COMPRAS.PAINEL_LIBERACOES_APROVACOES);

  cy.intercept('GET', '**erppainelliberacoesaprovacoesconsultar**').as('atualizabloqueios');
  cy.intercept('GET', '**erpsolution.vendas.erppainelliberacoesaprovacoesconsultar**').as('atualizabloqueios2');
  cy.intercept('POST', '**erpsolution.vendas.erppainelbloqueiosliberacoes**').as('atualizabloqueios3');
  cy.intercept('GET', '**erpsolution.vendas.erppainelbloqueiosliberacoes**').as('atualizabloqueios4');

  cy.get('#TABLEPRIORIDADES_0001').click();
  cy.aguardarExistir('#TABLEDADOS_0005 > :nth-child(1)', 10000);
  cy.get('#TABLEDADOS_0005').click();
  cy.wait('@atualizabloqueios3');

  cy.get('.pagination > .last > a').click();
  cy.wait('@atualizabloqueios3');
  cy.get('#GridbloqueiosContainerRow_0009 > [data-colindex="2"]').click();
  cy.valorArmazenar('#span_W0091ERPBLOQUEIOLIMITECREDITOOBJ_S01CODINT_VINCULADO', 'nomeCampo'); //// codint pedido na popup da desaprovação
  cy.get('#W0091IMGCHECKVAZIORED').click();
  cy.get('#W0091ERPBLOQUEIOLIMITECREDITOOBJ_S01LIBERADO_MOTIVO').click();
  cy.get('#W0091BTNENTER').click();

  cy.visit(CONSTANTES.SISTEMA.URL.BALCAO.CONSULTA_PEDIDO);

  cy.get('#vVAR20FILIALID').select('1');
  cy.aguardarExistir('#vVAR20PEDIDOID').click();
  cy.valorArmazenadoAtribuir('#vVAR20PEDIDOID', 'nomeCampo'); //atribuir valor do codint pedido  
  cy.get('#IMGPESQUISA').click();
  cy.get('#GridContainerRow_0001').click();
  cy.get('#span_VAR20STATUS_0001').should('have.text', 'Desaprovado');
}
)
}})