import CONSTANTES from '../../../support/locators';

describe('Ajuste de Quantidade', () =>
{
  beforeEach(() =>
  {
    cy.login('SOLUTION', '', 'NOME.SOBRENOME', '');
  })

  it('Sem Separação', () =>
  {
    cy.trocaEmpresaFilial(1, 2);

    cy.requisicaoSeparar('Aberto');

  })
})